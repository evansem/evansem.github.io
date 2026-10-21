// Shapes of the editable content.
// Components rely on these, so keep fields in sync when adding new ones.

export type Profile = {
  /** Display name used in the hero, page title and footer. */
  name: string;
  /** Short username shown in the prompt, terminal and console greeting. */
  handle: string;
  role: string;
  tagline: string;
  location: string;
  /** Absolute URLs. Leave linkedin or email empty to hide them. */
  github: string;
  linkedin: string;
  email: string;
  /** ISO date (YYYY-MM-DD) that the footer "uptime" counter starts from. */
  firstCommit: string;
};

export type NavLink = {
  label: string;
  /** In-page anchor of the section, e.g. "#about". */
  href: string;
};

export type Link = {
  label: string;
  href: string;
};

export type Project = {
  /** Unique id: used as the section anchor and by `cat <slug>` in the terminal. */
  slug: string;
  /** Branch name shown on the card, e.g. "feature/justeg". */
  branch: string;
  name: string;
  summary: string;
  problem: string;
  highlights: string[];
  stack: string[];
  links: Link[];
  /** Any CSS colour; drives the branch line, card border and links. */
  accent: string;
};

export type Certification = {
  /** Unique id shown as a git tag, e.g. "csslp". */
  tag: string;
  name: string;
  issuer: string;
  /** URL of the issuer's official badge image. */
  badge: string;
  /** Public verification page for the credential. */
  href: string;
  /** Any CSS colour; used for the hover outline and verification link. */
  accent: string;
};
