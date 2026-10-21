// Shown with the issuer's official badge; each links to the issuer's public verification page.
// URLs are kept whole on purpose so they can be pasted in and out without editing.

import type { Certification } from "./types";

const MICROSOFT_ASSOCIATE_BADGE =
  "https://learn.microsoft.com/en-us/media/learn/certification/badges/microsoft-certified-associate-badge.svg?branch=main";

export const certifications: Certification[] = [
  {
    tag: "az-ai-engineer",
    name: "Azure AI Engineer Associate",
    issuer: "Microsoft",
    badge: MICROSOFT_ASSOCIATE_BADGE,
    href: "https://learn.microsoft.com/api/credentials/share/en-us/emanuel-evans/8D83632555218E6A?sharingId=42045F4A976B2289",
    accent: "#4cc2ff",
  },
  {
    tag: "az-security-engineer",
    name: "Azure Security Engineer Associate",
    issuer: "Microsoft",
    badge: MICROSOFT_ASSOCIATE_BADGE,
    href: "https://learn.microsoft.com/api/credentials/share/en-us/emanuel-evans/46DD67DDAF309515?sharingId=42045F4A976B2289",
    accent: "#7c9cff",
  },
  {
    tag: "csslp",
    name: "Certified Secure Software Lifecycle Professional (CSSLP)",
    issuer: "ISC2",
    badge:
      "https://images.credly.com/size/340x340/images/2ca15936-bd13-4db9-86cb-8da72a71d701/image.png",
    href: "https://www.credly.com/badges/0a5d2907-0a3f-4af0-a7ef-b93f5cf4c8cd",
    accent: "#4ade80",
  },
];
