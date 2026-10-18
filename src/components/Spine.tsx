"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

// The main branch line, drawn in as the visitor scrolls through history.
export function Graph({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 60%", "end 80%"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 });
  return (
    <div ref={ref} className="graph">
      <div className="spine" aria-hidden>
        <motion.div className="spine-fill" style={{ scaleY }} />
      </div>
      {children}
    </div>
  );
}
