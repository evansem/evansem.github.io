// Side projects, rendered in order as feature branches that fork off main and merge back.
// Lines marked TODO hold neutral placeholder copy that reads fine live;
// swap in the real thing when ready.

import type { Project } from "./types";

const PLACEHOLDER_SUMMARY = "A side project I designed and built end to end.";
const PLACEHOLDER_PROBLEM =
  "A full write-up of the problem, the approach and what I learned is on its way.";

export const projects: Project[] = [
  {
    slug: "justeg",
    branch: "feature/justeg",
    name: "JustEg",
    summary: PLACEHOLDER_SUMMARY, // TODO: one-line pitch
    problem: PLACEHOLDER_PROBLEM, // TODO
    highlights: ["Case study coming soon"], // TODO: technical decisions, results, lessons
    stack: [], // TODO: e.g. ["TypeScript", "React"]
    links: [],
    accent: "#f5c542",
  },
  {
    slug: "whatcanieat",
    branch: "feature/whatcanieat",
    name: "WhatCanIEat",
    summary: PLACEHOLDER_SUMMARY, // TODO: one-line pitch
    problem: PLACEHOLDER_PROBLEM, // TODO
    highlights: ["Case study coming soon"], // TODO: technical decisions, results, lessons
    stack: [], // TODO: e.g. ["TypeScript", "React"]
    links: [],
    accent: "#4ade80",
  },
];
