// Headings and commit messages for each section of the home page, top to bottom.

export const sections = {
  hero: {
    commitMessage: "feat: say hello",
    headRef: "HEAD -> main",
    greeting: "Hey, my name is",
  },
  about: {
    commitMessage: "docs: add README.md",
    heading: "About",
  },
  certifications: {
    commitMessage: "ci: add verified credentials",
    tagRef: "signed",
    heading: "Certifications",
    verifyLabel: "Verify certification",
  },
  contact: {
    commitMessage: "chore: keen to make a difference",
    tagRef: "v1.0.0",
    heading: "Let's talk",
    command: "git checkout -b work-together",
    emailLabel: "Say hello",
  },
  initialCommit: {
    commitMessage: "init: hello world",
  },
  footer: {
    builtWith: "built with Next.js",
    status: "all checks passed",
  },
};
