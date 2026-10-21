"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useRef, type ReactNode } from "react";

// The main branch line, drawn in as the visitor scrolls through history.
export function Graph({ children }: { children: ReactNode }) {
  const container = useRef<HTMLDivElement>(null);

  // 0 when the top of the graph reaches 60% down the viewport, 1 when its end reaches 80%.
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 60%", "end 80%"],
  });
  const fillProgress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 });

  return (
    <div ref={container} className="graph">
      <div className="spine" aria-hidden>
        <motion.div className="spine-fill" style={{ scaleY: fillProgress }} />
      </div>
      {children}
    </div>
  );
}
