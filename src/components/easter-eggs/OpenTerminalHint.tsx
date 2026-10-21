"use client";

import { terminal } from "@/content";
import { requestOpenTerminal } from "./events";

export function OpenTerminalHint() {
  return (
    <button className="hint" onClick={requestOpenTerminal}>
      press <kbd>`</kbd> {terminal.hint}
    </button>
  );
}
