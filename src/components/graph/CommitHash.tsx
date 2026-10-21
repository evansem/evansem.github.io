"use client";

import { commitHashToast } from "@/content";
import { shortHash } from "@/lib/shortHash";
import { useToast } from "../Toast";

/** A clickable fake commit sha that copies itself to the clipboard. */
export function CommitHash({ seed }: { seed: string }) {
  const showToast = useToast();
  const sha = shortHash(seed);

  const copySha = () => {
    // Clipboard access can be unavailable or denied; the toast is the point, so ignore failures.
    navigator.clipboard?.writeText(sha).catch(() => {});
    showToast(commitHashToast(sha));
  };

  return (
    <button className="hash" title="copy sha" onClick={copySha}>
      {sha}
    </button>
  );
}
