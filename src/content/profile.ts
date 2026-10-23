// Who you are and how to reach you.
// Lines marked TODO hold neutral placeholder copy that reads fine live;
// swap in the real thing when ready.

import type { NavLink, Profile } from "./types";

export const siteUrl = "https://evansem.github.io";

export const profile: Profile = {
  name: "Emanuel",
  handle: "evansem",
  role: "Application Security Engineer",
  tagline: "I like solving software problems with a security perspective",
  location: "Australia",
  github: "https://github.com/evansem",
  linkedin: "https://www.linkedin.com/in/emanuel-evans/",
  email: "", // TODO: contact email shown on the site
  firstCommit: "2017-01-01", // Drives the "uptime" counter in the footer
};

export const about: string[] = [
  "I am interested in how software is built, how it can fail, and how to make it more secure.",
  "Outside of work, I explore new ideas through side projects, experimenting with software, automation, and security. A few of them are below:",
];

export const navigation: NavLink[] = [
  { label: "about", href: "#about" },
  { label: "projects", href: "#projects" },
  { label: "contact", href: "#contact" },
];
