"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import type { Project } from "@/content/site";
import { Hash } from "./Commit";

// A feature branch: forks right off main, carries the project card, merges back.
export function ProjectBranch({ project, index }: { project: Project; index: number }) {
  const reduce = useReducedMotion();
  // Drive every stroke from the section's visibility; zero-height strokes never register as in view themselves.
  const ref = useRef<HTMLElement>(null);
  const seen = useInView(ref, { once: true, amount: 0.15 });
  const draw = reduce ? {} : { initial: { pathLength: 0 }, animate: { pathLength: seen ? 1 : 0 } };
  const stroke = {
    fill: "none",
    stroke: project.accent,
    strokeWidth: 2,
    style: { filter: `drop-shadow(0 0 6px ${project.accent}88)` },
  };

  return (
    <section
      ref={ref}
      id={project.slug}
      className="feature"
      style={{ ["--accent" as string]: project.accent }}
    >
      <svg className="fork" viewBox="0 0 72 48" aria-hidden>
        <motion.path d="M14 0 C 14 26, 42 22, 42 48" {...stroke} {...draw} transition={{ duration: 0.5, ease: "easeIn" }} />
      </svg>
      <motion.span
        className="lane"
        aria-hidden
        style={{ background: project.accent, boxShadow: `0 0 8px ${project.accent}88` }}
        initial={reduce ? undefined : { scaleY: 0 }}
        animate={{ scaleY: seen || reduce ? 1 : 0 }}
        transition={{ duration: 1.1, delay: 0.45, ease: "easeInOut" }}
      />
      <svg className="fork merge-curve" viewBox="0 0 72 48" aria-hidden>
        <motion.path d="M42 0 C 42 26, 14 22, 14 48" {...stroke} {...draw} transition={{ duration: 0.5, delay: 1.4, ease: "easeOut" }} />
      </svg>

      <motion.article
        className="card"
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, delay: 0.25, ease: [0.2, 0.7, 0.2, 1] }}
        whileHover={reduce ? undefined : { borderColor: project.accent }}
      >
        <div className="meta">
          <Hash seed={project.slug} />
          <span className="ref branch" style={{ color: project.accent }}>{project.branch}</span>
          <span>side project #{index + 1}</span>
        </div>
        <h3>{project.name}</h3>
        <p className="summary">{project.summary}</p>
        <p className="problem">{project.problem}</p>
        <ul className="diff">
          {project.highlights.map((h) => <li key={h}>{h}</li>)}
        </ul>
        {project.stack.length > 0 && (
          <div className="stack">
            {project.stack.map((s) => <span key={s} className="chip">{s}</span>)}
          </div>
        )}
        {project.links.length > 0 && (
          <div className="links">
            {project.links.map((l) => (
              <a key={l.href} href={l.href} target="_blank" rel="noreferrer">{l.label} ↗</a>
            ))}
          </div>
        )}
      </motion.article>
      <p className="merge">Merge branch &apos;{project.branch}&apos; into main</p>
    </section>
  );
}
