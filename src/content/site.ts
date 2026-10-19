// Everything a visitor reads lives here, so updating the site never means touching components.
// Lines marked TODO hold neutral placeholder copy that reads fine live; swap in the real thing when ready.

export const profile = {
  name: "Evans", // TODO: full display name
  handle: "evansem",
  role: "Software Engineer",
  tagline: "I build small, useful products and ship them end to end.", // TODO
  location: "New Zealand", // TODO: confirm
  github: "https://github.com/evansem",
  linkedin: "", // TODO: optional
  email: "", // TODO: contact email shown on the site
  firstCommit: "2016-01-01", // TODO: drives the "uptime" counter in the footer
};

export type Project = {
  slug: string;
  branch: string;
  name: string;
  summary: string;
  problem: string;
  highlights: string[];
  stack: string[];
  links: { label: string; href: string }[];
  accent: string;
};

export const projects: Project[] = [
  {
    slug: "justeg",
    branch: "feature/justeg",
    name: "JustEg",
    summary: "A side project I designed and built end to end.", // TODO: one-line pitch
    problem: "A full write-up of the problem, the approach and what I learned is on its way.", // TODO
    highlights: ["Case study coming soon"], // TODO: technical decisions, results, lessons
    stack: [], // TODO: e.g. ["TypeScript", "React"]
    links: [],
    accent: "#f5c542",
  },
  {
    slug: "whatcanieat",
    branch: "feature/whatcanieat",
    name: "WhatCanIEat",
    summary: "A side project I designed and built end to end.", // TODO: one-line pitch
    problem: "A full write-up of the problem, the approach and what I learned is on its way.", // TODO
    highlights: ["Case study coming soon"], // TODO: technical decisions, results, lessons
    stack: [], // TODO: e.g. ["TypeScript", "React"]
    links: [],
    accent: "#4ade80",
  },
];

export const about = [
  // TODO: replace with your own words
  "I like turning fuzzy ideas into small, polished products, and I care about the details users never notice until they're missing.",
  "Outside of work I keep shipping side projects, a couple of which are just below.",
];

export type CertBadge = { kind: "image"; src: string } | { kind: "credly"; id: string };
export type Certification = { tag: string; name: string; issuer: string; badge: CertBadge; href: string; accent: string };

// Shown with the issuer's official badge; each links to the issuer's public verification page.
export const certifications: Certification[] = [
  {
    tag: "az-ai-engineer",
    name: "Azure AI Engineer Associate",
    issuer: "Microsoft",
    badge: { kind: "image", src: "https://learn.microsoft.com/en-us/media/learn/certification/badges/microsoft-certified-associate-badge.svg?branch=main" },
    href: "https://learn.microsoft.com/api/credentials/share/en-us/emanuel-evans/8D83632555218E6A?sharingId=42045F4A976B2289",
    accent: "#4cc2ff",
  },
  {
    tag: "az-security-engineer",
    name: "Azure Security Engineer Associate",
    issuer: "Microsoft",
    badge: { kind: "image", src: "https://learn.microsoft.com/en-us/media/learn/certification/badges/microsoft-certified-associate-badge.svg?branch=main" },
    href: "https://learn.microsoft.com/api/credentials/share/en-us/emanuel-evans/46DD67DDAF309515?sharingId=42045F4A976B2289",
    accent: "#7c9cff",
  },
  {
    tag: "csslp",
    name: "Certified Secure Software Lifecycle Professional (CSSLP)",
    issuer: "ISC2",
    badge: { kind: "credly", id: "0a5d2907-0a3f-4af0-a7ef-b93f5cf4c8cd" },
    href: "https://www.credly.com/badges/0a5d2907-0a3f-4af0-a7ef-b93f5cf4c8cd",
    accent: "#4ade80",
  },
];
