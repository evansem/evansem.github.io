// Who you are and how to reach you.
// Lines marked TODO hold neutral placeholder copy that reads fine live;
// swap in the real thing when ready.

import type { NavLink, Profile } from "./types";

export const siteUrl = "https://evansem.github.io";

export const profile: Profile = {
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

export const about: string[] = [
  // TODO: replace with your own words
  "I like turning fuzzy ideas into small, polished products, and I care about the details users never notice until they're missing.",
  "Outside of work I keep shipping side projects, a couple of which are just below.",
];

export const navigation: NavLink[] = [
  { label: "about", href: "#about" },
  { label: "projects", href: "#projects" },
  { label: "contact", href: "#contact" },
];
