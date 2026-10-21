"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { EASE_OUT_SOFT } from "@/lib/motion";
import { CommitHash } from "./CommitHash";

export type CommitRef = {
  kind: "head" | "branch" | "tag";
  label: string;
};

type CommitProps = {
  /** Optional anchor id, so the section can be linked from the navigation. */
  id?: string;
  /** Any stable string; it is hashed into the commit sha shown above the message. */
  seed: string;
  message: string;
  refs?: CommitRef[];
  /** Fills the node, marking the latest commit. */
  head?: boolean;
  children: ReactNode;
};

// One section of the page, styled as a commit on the main branch.
export function Commit({ id, seed, message, refs = [], head = false, children }: CommitProps) {
  const nodeClassName = head ? "node head" : "node";

  return (
    <motion.section
      id={id}
      className="commit"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: EASE_OUT_SOFT }}
    >
      <motion.span
        className={nodeClassName}
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 400, damping: 18, delay: 0.1 }}
      />
      <div className="meta">
        <CommitHash seed={seed} />
        {refs.map((ref) => (
          <span key={ref.label} className={`ref ${ref.kind}`}>
            {ref.label}
          </span>
        ))}
      </div>
      <p className="msg">{message}</p>
      {children}
    </motion.section>
  );
}
