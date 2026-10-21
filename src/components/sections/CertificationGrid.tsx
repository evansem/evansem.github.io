"use client";

import { motion } from "framer-motion";
import { certifications, sections } from "@/content";
import { accentStyle } from "@/lib/accentStyle";
import { EASE_OUT_SOFT } from "@/lib/motion";

const BADGE_SIZE_PX = 150;
const STAGGER_DELAY_S = 0.1;

export function CertificationGrid() {
  return (
    <div className="certs">
      {certifications.map((certification, index) => (
        <motion.div
          key={certification.tag}
          className="cert"
          style={accentStyle(certification.accent)}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: index * STAGGER_DELAY_S, ease: EASE_OUT_SOFT }}
        >
          <div className="badge-slot">
            {/* Remote badges are served as-is: the static export has no image optimiser. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="badge-img"
              src={certification.badge}
              alt={`${certification.name} badge`}
              width={BADGE_SIZE_PX}
              height={BADGE_SIZE_PX}
              loading="lazy"
            />
          </div>
          <span className="cert-tag">$ git tag -v {certification.tag}</span>
          <span className="cert-name">{certification.name}</span>
          <span className="cert-issuer">{certification.issuer}</span>
          <a className="cert-verify" href={certification.href} target="_blank" rel="noreferrer">
            <span className="ok">✓</span> {sections.certifications.verifyLabel} ↗
          </a>
        </motion.div>
      ))}
    </div>
  );
}
