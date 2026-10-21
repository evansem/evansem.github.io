// Indents the HTML that Next.js generates without changing a single text node.
//
// General-purpose formatters (Prettier included) reflow text and collapse or add whitespace between
// tags. Browsers render that the same, but React compares the server HTML with what it would render
// and treats any text difference as a hydration error. So this formatter only ever adds whitespace
// *inside* tags (between attributes, or before a tag's closing ">"), which never creates text.
// Text, comments and inline script data are copied through untouched.

import prettier from "prettier";

const INDENT = "  ";

// Elements that never have a closing tag, so they do not increase the nesting depth.
const VOID_ELEMENTS = new Set([
  "area",
  "base",
  "br",
  "col",
  "embed",
  "hr",
  "img",
  "input",
  "link",
  "meta",
  "source",
  "track",
  "wbr",
]);

// Splits the document into comments, whole <script> blocks, tags and text, in that priority.
// React escapes ">" in attribute values, so a tag always ends at the first ">".
const TOKEN = /<!--[\s\S]*?-->|<script\b[^>]*>[\s\S]*?<\/script>|<!?\/?[a-zA-Z][^>]*>|[^<]+/g;

const TAG = /^<(\/?)([a-zA-Z][\w-]*|!doctype)([^>]*?)(\/?)>$/i;
const ATTRIBUTE = /[^\s=]+(?:="[^"]*")?/g;
const INLINE_SCRIPT = /^(<script\b[^>]*>)([\s\S]*?)(<\/script>)$/;

function classify(token) {
  if (token.startsWith("<!--")) return { type: "comment" };
  if (token.startsWith("<script")) return { type: "script" };

  const tag = token.match(TAG);
  if (!tag) return { type: "text" };

  const [, slash, name, attributes, selfClosing] = tag;
  const lowerName = name.toLowerCase();
  const isOpening = !slash && !selfClosing && lowerName !== "!doctype";

  return {
    type: "tag",
    name,
    attributes: attributes.match(ATTRIBUTE) ?? [],
    closes: Boolean(slash),
    opens: isOpening && !VOID_ELEMENTS.has(lowerName),
    selfClosing: Boolean(selfClosing),
    slash,
  };
}

/** Writes a tag on one line when it fits, otherwise one attribute per line. */
function renderTag(token, info, indent, printWidth) {
  if (indent.length + token.length <= printWidth || info.attributes.length === 0) {
    return token;
  }

  const attributeIndent = `\n${indent}${INDENT}`;
  const attributes = info.attributes.map((attribute) => attributeIndent + attribute).join("");
  const end = info.selfClosing ? "/>" : ">";

  return `<${info.slash}${info.name}${attributes}\n${indent}${end}`;
}

async function renderScript(token, indent, printWidth) {
  const [, openTag, code, closeTag] = token.match(INLINE_SCRIPT);
  if (!code.trim()) return token;

  const formatted = await prettier.format(code, {
    parser: "babel",
    printWidth: printWidth - indent.length - INDENT.length,
  });
  const indentedCode = formatted
    .trimEnd()
    .split("\n")
    .map((line) => (line ? `${indent}${INDENT}${line}` : line))
    .join("\n");

  // Whitespace inside an inline script is part of the code, not page text, so it is safe to add.
  return `${openTag}\n${indentedCode}\n${indent}${closeTag}`;
}

export async function formatHtml(html, { printWidth }) {
  let output = "";
  let depth = 0;
  let previousType = null;

  for (const [token] of html.matchAll(TOKEN)) {
    const info = classify(token);
    const isMarkup = info.type === "tag" || info.type === "script";

    if (info.type === "tag" && info.closes) depth = Math.max(0, depth - 1);
    const indent = INDENT.repeat(depth);

    // A line break may only go inside the previous tag, just before its closing ">" or "/>".
    const canBreak = isMarkup && (previousType === "tag" || previousType === "script");
    if (canBreak) {
      const tagEnd = output.endsWith("/>") ? "/>" : ">";
      const beforeTagEnd = output.slice(0, -tagEnd.length).trimEnd();
      output = `${beforeTagEnd}\n${indent}${tagEnd}`;
    }

    if (info.type === "tag") {
      output += renderTag(token, info, indent, printWidth);
      if (info.opens) depth += 1;
    } else if (info.type === "script") {
      output += await renderScript(token, indent, printWidth);
    } else {
      output += token;
    }

    previousType = info.type;
  }

  return `${output}\n`;
}
