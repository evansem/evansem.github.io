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
