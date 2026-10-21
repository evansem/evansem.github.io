// The commands understood by the hidden shell. Each one returns the lines to print.

import { certifications, profile, projects, sections, terminal } from "@/content";

export type TerminalLine = {
  kind: "input" | "output" | "error";
  text: string;
};

/** Side effects a command may trigger outside the terminal itself. */
export type TerminalActions = {
  close: () => void;
  forcePush: () => void;
};

/** Either lines to append, or a request to wipe the screen. */
export type CommandResult = TerminalLine[] | "clear";

// Width of the first column in `help` and `git tag`, so the descriptions line up.
const HELP_COLUMN_WIDTH = 18;
const TAG_COLUMN_WIDTH = 22;

const output = (text: string): TerminalLine[] => [{ kind: "output", text }];
const error = (text: string): TerminalLine[] => [{ kind: "error", text }];

function help() {
  const rows = terminal.help.map(({ usage, description }) => {
    const row = `  ${usage.padEnd(HELP_COLUMN_WIDTH)}${description}`;
    return row.trimEnd();
  });

  return output(["available commands:", ...rows].join("\n"));
}

function whoami() {
  const role = profile.role.toLowerCase();
  return output(`${profile.handle}: ${role} based in ${profile.location}. ${profile.tagline}`);
}

function listProjects() {
  const folders = projects.map((project) => `${project.slug}/`);
  return output(folders.join("  "));
}

function readProject(name = "") {
  // Accept "cat justeg/" as well as "cat JustEg", the way a shell user would type it.
  const slug = name.replace(/\/$/, "").toLowerCase();
  const project = projects.find((candidate) => candidate.slug === slug);

  if (!project) {
    return error(`cat: ${name}: No such file or directory`);
  }

  const lines = [project.name, project.summary];
  if (project.stack.length > 0) {
    lines.push("", `stack: ${project.stack.join(", ")}`);
  }
  return output(lines.join("\n"));
}

function git(subcommand = "", args: string[], actions: TerminalActions) {
  switch (subcommand) {
    case "log": {
      const merges = projects.map((project) => `* Merge branch '${project.branch}'`);
      const initialCommit = `* ${sections.initialCommit.commitMessage}`;
      return output([...merges, initialCommit].join("\n"));
    }

    case "push":
      if (!args.includes("--force")) break;
      actions.forcePush();
      return output(terminal.replies.gitPush);

    case "tag": {
      const tags = certifications.map((certification) => {
        const tag = certification.tag.padEnd(TAG_COLUMN_WIDTH);
        return `${tag} ${certification.name} (${certification.issuer})`;
      });
      return output(tags.join("\n"));
    }

    case "blame":
      return output(terminal.replies.gitBlame);
  }

  return error(`git: '${subcommand}' is not a git command here. try 'git log'.`);
}

function contact() {
  const lines = [`github   ${profile.github}`];
  if (profile.email) lines.unshift(`email    ${profile.email}`);
  if (profile.linkedin) lines.push(`linkedin ${profile.linkedin}`);

  return output(lines.join("\n"));
}

function sudo(args: string[]) {
  if (args.join(" ") === "hire-me") {
    const preferredContact = profile.email || profile.github;
    return output(terminal.replies.hireMe(preferredContact));
  }

  return error(terminal.replies.notSudoer(profile.handle));
}

export function runCommand(input: string, actions: TerminalActions): CommandResult {
  const [command, ...args] = input.trim().split(/\s+/);

  switch (command) {
    case "":
      return [];
    case "help":
      return help();
    case "whoami":
      return whoami();
    case "ls":
      return listProjects();
    case "cat":
      return readProject(args[0]);
    case "git":
      return git(args[0], args.slice(1), actions);
    case "contact":
      return contact();
    case "sudo":
      return sudo(args);
    case "rm":
      return error(terminal.replies.rm);
    case "vim":
      return output(terminal.replies.vim);
    case "clear":
      return "clear";
    case "exit":
      actions.close();
      return [];
    default:
      return error(`command not found: ${command}. type 'help'.`);
  }
}
