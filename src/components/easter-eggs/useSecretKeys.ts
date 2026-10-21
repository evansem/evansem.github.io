"use client";

import { useEffect } from "react";

const TERMINAL_KEYS = ["`", "~"];

const KONAMI_CODE = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

type SecretKeyHandlers = {
  onTerminalKey: () => void;
  onKonamiCode: () => void;
};

function isTypingInField(event: KeyboardEvent) {
  const target = event.target as HTMLElement;
  return target.tagName === "INPUT" || target.tagName === "TEXTAREA";
}

// Letters are compared case-insensitively; named keys such as "ArrowUp" are kept as they are.
function normaliseKey(key: string) {
  return key.length === 1 ? key.toLowerCase() : key;
}

function matchesKonamiCode(keys: string[]) {
  return keys.join() === KONAMI_CODE.join();
}

// Global shortcuts: ` or ~ toggles the shell, and the Konami code triggers the force push.
// Both are ignored while the visitor is typing in a form field.
export function useSecretKeys({ onTerminalKey, onKonamiCode }: SecretKeyHandlers) {
  useEffect(() => {
    let recentKeys: string[] = [];

    const handleKeyDown = (event: KeyboardEvent) => {
      if (isTypingInField(event)) return;

      if (TERMINAL_KEYS.includes(event.key)) {
        event.preventDefault();
        onTerminalKey();
        return;
      }

      recentKeys = [...recentKeys, normaliseKey(event.key)].slice(-KONAMI_CODE.length);

      if (matchesKonamiCode(recentKeys)) {
        recentKeys = [];
        onKonamiCode();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onTerminalKey, onKonamiCode]);
}
