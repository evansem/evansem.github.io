"use client";

import { motion } from "framer-motion";
import { shortHash } from "./hash";
import { useToast } from "./Toast";

type Ref = { kind: "head" | "branch" | "tag"; label: string };

export function Hash({ seed }: { seed: string }) {
  const toast = useToast();
  const sha = shortHash(seed);
  return (
    <button
      className="hash"
      title="copy sha"
      onClick={() => {
        navigator.clipboard?.writeText(sha).catch(() => {});
        toast(`Copied ${sha}. It doesn't check out to anything, but nice instinct.`);
      }}
    >
      {sha}
    </button>
  );
}

export function Commit({
  id, seed, message, refs = [], head, children,
}: { id?: string; seed: string; message: string; refs?: Ref[]; head?: boolean; children: React.ReactNode }) {
  return (
    <motion.section
      id={id}
      className="commit"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.2, 0.7, 0.2, 1] }}
    >
      <motion.span
        className={`node${head ? " head" : ""}`}
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 400, damping: 18, delay: 0.1 }}
      />
      <div className="meta">
        <Hash seed={seed} />
        {refs.map((r) => (
          <span key={r.label} className={`ref ${r.kind}`}>{r.label}</span>
        ))}
      </div>
      <p className="msg">{message}</p>
      {children}
    </motion.section>
  );
}
