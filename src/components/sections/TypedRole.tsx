"use client";

import { useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { profile } from "@/content";

const START_DELAY_MS = 500;
const KEYSTROKE_DELAY_MS = 55;

// Types the role out one character at a time, like a command being entered.
export function TypedRole() {
  const prefersReducedMotion = useReducedMotion();
  const text = `> ${profile.role.toLowerCase()}`;
  const [typedLength, setTypedLength] = useState(0);

  const isFinished = typedLength >= text.length;
  const visibleLength = prefersReducedMotion ? text.length : typedLength;

  useEffect(() => {
    if (prefersReducedMotion || isFinished) return;

    const delay = typedLength === 0 ? START_DELAY_MS : KEYSTROKE_DELAY_MS;
    const timer = setTimeout(() => setTypedLength(typedLength + 1), delay);
    return () => clearTimeout(timer);
  }, [typedLength, isFinished, prefersReducedMotion]);

  return (
    <span className="role" aria-label={profile.role}>
      {text.slice(0, visibleLength)}
      <span className="caret" aria-hidden />
    </span>
  );
}
