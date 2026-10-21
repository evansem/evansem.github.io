"use client";

import { useState } from "react";

const NOT_BROWSING = -1;

// Shell-style history: ArrowUp walks back through earlier commands, ArrowDown walks forward.
export function useCommandHistory() {
  // Newest command first, so index 0 is the most recent one.
  const [entries, setEntries] = useState<string[]>([]);
  const [position, setPosition] = useState(NOT_BROWSING);

  const record = (command: string) => {
    if (command.trim()) {
      setEntries((previous) => [command, ...previous]);
    }
    setPosition(NOT_BROWSING);
  };

  /** Returns the previous command, or null when there is no history to show. */
  const older = (): string | null => {
    if (entries.length === 0) return null;

    const nextPosition = Math.min(position + 1, entries.length - 1);
    setPosition(nextPosition);
    return entries[nextPosition];
  };

  /** Returns the next command, or an empty line once past the newest entry. */
  const newer = (): string => {
    const nextPosition = Math.max(position - 1, NOT_BROWSING);
    setPosition(nextPosition);
    return nextPosition === NOT_BROWSING ? "" : entries[nextPosition];
  };

  return { record, older, newer };
}
