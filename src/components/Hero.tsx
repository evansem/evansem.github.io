"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { profile } from "@/content/site";

export function TypedRole() {
  const reduce = useReducedMotion();
  const text = `> ${profile.role.toLowerCase()}`;
  const [n, setN] = useState(0);
  useEffect(() => {
    if (reduce) return setN(text.length);
    if (n >= text.length) return;
    const t = setTimeout(() => setN(n + 1), n === 0 ? 500 : 55);
    return () => clearTimeout(t);
  }, [n, reduce, text.length]);
  return (
    <span className="role" aria-label={profile.role}>
      {text.slice(0, n)}
      <span className="caret" aria-hidden />
    </span>
  );
}
