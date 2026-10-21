"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import type { Project } from "@/content";
import { accentStyle } from "@/lib/accentStyle";
import { EASE_OUT_SOFT } from "@/lib/motion";
import { CommitHash } from "./CommitHash";

// SVG paths for the curves joining the branch to main (left) and the branch lane (right).
const FORK_PATH = "M14 0 C 14 26, 42 22, 42 48";
const MERGE_PATH = "M42 0 C 42 26, 14 22, 14 48";

// Appended to a 6-digit hex colour: roughly 53% opacity, for the soft glow around the lines.
const GLOW_ALPHA = "88";

type ProjectBranchProps = {
  project: Project;
  /** Zero-based position, shown as "side project #n". */
  index: number;
};

// A feature branch: forks right off main, carries the project card, merges back.
export function ProjectBranch({ project, index }: ProjectBranchProps) {
  const prefersReducedMotion = useReducedMotion();

  // Every stroke is driven from the section's visibility,
  // because zero-height strokes never register as in view themselves.
  const section = useRef<HTMLElement>(null);
  const isInView = useInView(section, { once: true, amount: 0.15 });

  const glow = `${project.accent}${GLOW_ALPHA}`;
  const curveStyle = {
    fill: "none",
    stroke: project.accent,
    strokeWidth: 2,
    style: { filter: `drop-shadow(0 0 6px ${glow})` },
  };
  const drawCurve = prefersReducedMotion
    ? {}
    : { initial: { pathLength: 0 }, animate: { pathLength: isInView ? 1 : 0 } };
  const showLane = isInView || prefersReducedMotion;

  return (
    <section
      ref={section}
      id={project.slug}
      className="feature"
      style={accentStyle(project.accent)}
    >
      <svg className="fork" viewBox="0 0 72 48" aria-hidden>
        <motion.path
          d={FORK_PATH}
          {...curveStyle}
          {...drawCurve}
          transition={{ duration: 0.5, ease: "easeIn" }}
        />
      </svg>

      <motion.span
        className="lane"
        aria-hidden
        style={{ background: project.accent, boxShadow: `0 0 8px ${glow}` }}
        initial={prefersReducedMotion ? undefined : { scaleY: 0 }}
        animate={{ scaleY: showLane ? 1 : 0 }}
        transition={{ duration: 1.1, delay: 0.45, ease: "easeInOut" }}
      />

      <svg className="fork merge-curve" viewBox="0 0 72 48" aria-hidden>
        <motion.path
          d={MERGE_PATH}
          {...curveStyle}
          {...drawCurve}
          transition={{ duration: 0.5, delay: 1.4, ease: "easeOut" }}
        />
      </svg>

      <motion.article
        className="card"
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, delay: 0.25, ease: EASE_OUT_SOFT }}
        whileHover={prefersReducedMotion ? undefined : { borderColor: project.accent }}
      >
        <div className="meta">
          <CommitHash seed={project.slug} />
          <span className="ref branch" style={{ color: project.accent }}>
            {project.branch}
          </span>
          <span>side project #{index + 1}</span>
        </div>

        <h3>{project.name}</h3>
        <p className="summary">{project.summary}</p>
        <p className="problem">{project.problem}</p>

        <ul className="diff">
          {project.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>

        {project.stack.length > 0 && (
          <div className="stack">
            {project.stack.map((technology) => (
              <span key={technology} className="chip">
                {technology}
              </span>
            ))}
          </div>
        )}

        {project.links.length > 0 && (
          <div className="links">
            {project.links.map((link) => (
              <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                {link.label} ↗
              </a>
            ))}
          </div>
        )}
      </motion.article>

      <p className="merge">Merge branch &apos;{project.branch}&apos; into main</p>
    </section>
  );
}
