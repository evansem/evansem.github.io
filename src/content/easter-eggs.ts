// Copy for the hidden extras: the shell, the Konami force push, the console note
// and the 404 page. Replies built from profile or project data are assembled in
// src/components/easter-eggs/commands.ts.

export const terminal = {
  /** Printed after the handle when the shell opens, e.g. "evansem shell v1.0. ..." */
  welcome: "shell v1.0. type 'help' to look around.",
  hint: "to open a shell",
  help: [
    { usage: "whoami", description: "who wrote all this" },
    { usage: "ls", description: "list side projects" },
    { usage: "cat <project>", description: "read about a project" },
    { usage: "git log", description: "recent history" },
    { usage: "git tag", description: "certifications" },
    { usage: "contact", description: "how to reach me" },
    { usage: "sudo hire-me", description: "¯\\_(ツ)_/¯" },
    { usage: "clear | exit", description: "" },
  ],
  replies: {
    gitBlame: "it was me. it is always me.",
    gitPush: "pushing...",
    rm: "rm: nice try. this site has backups.",
    vim: "you are now trapped in vim. type 'exit' (we're kind here).",
    hireMe: (contact: string) =>
      [
        "[sudo] password for recruiter: ********",
        `Access granted. Opening a conversation is the next step: ${contact}`,
      ].join("\n"),
    notSudoer: (handle: string) =>
      `${handle} is not in the sudoers file. This incident will be reported.`,
  },
};

export const forcePush = {
  output: [
    "$ git push --force origin main",
    "+ 3f2a1c9...0000000 main -> main (forced update)",
    "remote: Rewriting history...",
    "remote: Deleting 1,337 commits...",
  ],
  punchline: "Just kidding. Protected branches exist for a reason.",
};

export const consoleGreeting = [
  "Hello, fellow dev-tools opener. 👋",
  "You clearly read source for fun, so we'd probably get along.",
  "Press ` anywhere on the page for a shell, or try the Konami code.",
];

export const commitHashToast = (sha: string) =>
  `Copied ${sha}. It doesn't check out to anything, but nice instinct.`;

export const notFound = {
  error: "Uncaught RouteNotFoundError: this page was never committed",
  stackTrace: [
    "    at Router.resolve (router.ts:404:1)",
    "    at Visitor.navigate (curiosity.ts:42:7)",
    "    at <anonymous>",
    "",
    "fatal: pathspec did not match any files known to git.",
    "hint: maybe it lives on a branch that was never merged.",
  ],
  homeLink: "$ git checkout main",
};
