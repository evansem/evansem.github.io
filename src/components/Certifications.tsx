"use client";

import { motion } from "framer-motion";
import { certifications } from "@/content/site";

export function Certifications() {
  return (
    <div className="certs">
      {certifications.map((c, i) => (
        <motion.div
          key={c.tag}
          className="cert"
          style={{ ["--accent" as string]: c.accent }}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: i * 0.1, ease: [0.2, 0.7, 0.2, 1] }}
        >
          <div className="badge-slot">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="badge-img" src={c.badge} alt={`${c.name} badge`} width={150} height={150} loading="lazy" />
          </div>
          <span className="cert-tag">$ git tag -v {c.tag}</span>
          <span className="cert-name">{c.name}</span>
          <span className="cert-issuer">{c.issuer}</span>
          <a className="cert-verify" href={c.href} target="_blank" rel="noreferrer">
            <span className="ok">✓</span> Verify certification ↗
          </a>
        </motion.div>
      ))}
    </div>
  );
}
