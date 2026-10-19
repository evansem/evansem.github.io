"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";
import { certifications, type CertBadge } from "@/content/site";

const CREDLY_EMBED = "https://cdn.credly.com/assets/utilities/embed.js";

// Credly's script swaps each data-share-badge-id div for its official badge iframe once it loads.
function useCredlyEmbed() {
  useEffect(() => {
    if (!certifications.some((c) => c.badge.kind === "credly")) return;
    if (document.querySelector(`script[src="${CREDLY_EMBED}"]`)) return;
    const s = document.createElement("script");
    s.src = CREDLY_EMBED;
    s.async = true;
    document.body.appendChild(s);
  }, []);
}

function Badge({ badge, name }: { badge: CertBadge; name: string }) {
  if (badge.kind === "credly") {
    return (
      <div
        className="credly"
        data-iframe-width="150"
        data-iframe-height="270"
        data-share-badge-id={badge.id}
        data-share-badge-host="https://www.credly.com"
      />
    );
  }
  // eslint-disable-next-line @next/next/no-img-element
  return <img className="badge-img" src={badge.src} alt={`${name} badge`} width={150} height={150} loading="lazy" />;
}

export function Certifications() {
  useCredlyEmbed();
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
            <Badge badge={c.badge} name={c.name} />
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
