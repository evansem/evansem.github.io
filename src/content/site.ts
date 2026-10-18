// Everything a visitor reads lives here, so updating the site never means touching components.
// Lines marked TODO are placeholders waiting for real copy.

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
    summary: "TODO: one-line pitch for JustEg.",
    problem: "TODO: what problem it solves and who it is for.",
    highlights: [
      "TODO: a technical decision you are proud of",
      "TODO: a measurable result or interesting constraint",
      "TODO: what you learned shipping it",
    ],
    stack: ["TODO"],
    links: [],
    accent: "#f5c542",
  },
  {
    slug: "whatcanieat",
    branch: "feature/whatcanieat",
    name: "WhatCanIEat",
    summary: "TODO: one-line pitch for WhatCanIEat.",
    problem: "TODO: what problem it solves and who it is for.",
    highlights: [
      "TODO: a technical decision you are proud of",
      "TODO: a measurable result or interesting constraint",
      "TODO: what you learned shipping it",
    ],
    stack: ["TODO"],
    links: [],
    accent: "#4ade80",
  },
];

export const about = [
  "TODO: two or three sentences about how you like to work.",
  "TODO: the kind of problems you enjoy.",
];
