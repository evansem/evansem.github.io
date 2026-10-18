"use client";

import { motion } from "framer-motion";
import { certifications } from "@/content/site";

// Each credential is shown as a signed tag that checks out against its issuer.
export function Certifications() {
  return (
    <div className="certs">
      {certifications.map((c, i) => (
        <motion.a
          key={c.tag}
          className="cert"
          href={c.href}
          target="_blank"
          rel="noreferrer"
          style={{ ["--accent" as string]: c.accent }}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: i * 0.1, ease: [0.2, 0.7, 0.2, 1] }}
        >
          <span className="seal" aria-hidden>{c.mark}</span>
          <span className="cert-body">
            <span className="cert-tag">$ git tag -v {c.tag}</span>
            <span className="cert-name">{c.name}</span>
            <span className="cert-sig"><span className="ok">✓</span> Good signature from {c.issuer} <span className="verify">verify ↗</span></span>
          </span>
        </motion.a>
      ))}
    </div>
  );
}
