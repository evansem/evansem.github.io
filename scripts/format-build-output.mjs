// Formats the static export so the published HTML, CSS and JavaScript are human-readable.
// Runs automatically after `npm run build` via the `postbuild` script.

import { readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import prettier from "prettier";
import { formatHtml } from "./format-html.mjs";

const OUTPUT_DIR = "out";
const FORMATTED_EXTENSIONS = new Set([".html", ".css", ".js"]);
const PRINT_WIDTH = 120;

// Longest string literal emitted when splitting inline data, leaving room for indentation.
const MAX_LITERAL_LENGTH = 96;

// Next.js inlines the page data as one long string per <script>self.__next_f.push([...])</script>.
const INLINE_DATA_SCRIPT = /<script>self\.__next_f\.push\(([\s\S]*?)\)<\/script>/g;

// The same escapes Next.js applies, so the data can never close the <script> tag early.
const HTML_UNSAFE_CHARACTERS = {
  "<": "\\u003c",
  ">": "\\u003e",
  "&": "\\u0026",
  "\u2028": "\\u2028",
  "\u2029": "\\u2029",
};

function toScriptLiteral(value) {
  return JSON.stringify(value).replace(/[<>&\u2028\u2029]/g, (character) => {
    return HTML_UNSAFE_CHARACTERS[character];
  });
}

/** Splits a string into consecutive pieces whose literals each fit within the length limit. */
function splitIntoLiterals(text) {
  const literals = [];
  let current = "";

  // Array.from iterates by code point, so surrogate pairs are never split apart.
  for (const character of Array.from(text)) {
    const candidate = current + character;
    if (current && toScriptLiteral(candidate).length > MAX_LITERAL_LENGTH) {
      literals.push(toScriptLiteral(current));
      current = character;
    } else {
      current = candidate;
    }
  }
  literals.push(toScriptLiteral(current));

  return literals;
}

function toReadableValue(value) {
  if (typeof value !== "string") return JSON.stringify(value);
  return splitIntoLiterals(value).join(" + ");
}

/** Rewrites each inline data string as a concatenation of short literals; the value is unchanged. */
function splitInlineData(html) {
  return html.replace(INLINE_DATA_SCRIPT, (_, argumentsJson) => {
    const values = JSON.parse(argumentsJson).map(toReadableValue);
    return `<script>self.__next_f.push([${values.join(", ")}])</script>`;
  });
}

async function listFiles(directory) {
  const entries = await readdir(directory, { recursive: true, withFileTypes: true });

  return entries
    .filter((entry) => entry.isFile())
    .map((entry) => path.join(entry.parentPath, entry.name))
    .filter((file) => FORMATTED_EXTENSIONS.has(path.extname(file)));
}

async function formatFile(file) {
  const source = await readFile(file, "utf8");

  const formatted =
    path.extname(file) === ".html"
      ? await formatHtml(splitInlineData(source), { printWidth: PRINT_WIDTH })
      : await prettier.format(source, { filepath: file, printWidth: PRINT_WIDTH });

  await writeFile(file, formatted);
}

const files = await listFiles(OUTPUT_DIR);
await Promise.all(files.map(formatFile));

console.log(`Formatted ${files.length} files in ${OUTPUT_DIR}/`);
