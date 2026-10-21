// A note for visitors who open the browser dev tools.

import { consoleGreeting, profile } from "@/content";

const BANNER_STYLE = [
  "background: #7c9cff",
  "color: #0a0d12",
  "font: 600 14px monospace",
  "padding: 4px 0",
  "border-radius: 4px",
].join(";");

const MESSAGE_STYLE = ["color: #8b98a9", "font: 13px monospace"].join(";");

export function logConsoleGreeting() {
  // `%c` applies the CSS passed as the next argument to the text that follows it.
  console.log(`%c  git log --author=${profile.handle}  `, BANNER_STYLE);
  console.log(`%c${consoleGreeting.join("\n")}`, MESSAGE_STYLE);
}
