"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";
import { forcePush } from "@/content";

// Long enough for the page shake (3 × 0.45s in globals.css) plus time to read the punchline.
const DISPLAY_DURATION_MS = 3200;

// A fake, alarming force push to main, triggered by the Konami code or `git push --force`.
export function ForcePush({ onDone }: { onDone: () => void }) {
  useEffect(() => {
    document.body.classList.add("shake");
    const timer = setTimeout(onDone, DISPLAY_DURATION_MS);

    return () => {
      clearTimeout(timer);
      document.body.classList.remove("shake");
    };
  }, [onDone]);

  return (
    <motion.div
      className="forcepush"
      onClick={onDone}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div>
        <pre>{forcePush.output.join("\n")}</pre>
        <p>{forcePush.punchline}</p>
      </div>
    </motion.div>
  );
}
