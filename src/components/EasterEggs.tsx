"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { profile, projects } from "@/content/site";

const KONAMI = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];

type Line = { kind: "in" | "out" | "err"; text: string };

function run(cmd: string, ctx: { close: () => void; forcePush: () => void }): Line[] | "clear" {
  const [name, ...args] = cmd.trim().split(/\s+/);
  const out = (text: string): Line[] => [{ kind: "out", text }];
  switch (name) {
    case "":
      return [];
    case "help":
      return out(
        [
          "available commands:",
          "  whoami            who wrote all this",
          "  ls                list side projects",
          "  cat <project>     read about a project",
          "  git log           recent history",
          "  contact           how to reach me",
          "  sudo hire-me      ¯\\_(ツ)_/¯",
          "  clear | exit",
        ].join("\n"),
      );
    case "whoami":
      return out(`${profile.handle}: ${profile.role.toLowerCase()} based in ${profile.location}. ${profile.tagline}`);
    case "ls":
      return out(projects.map((p) => `${p.slug}/`).join("  "));
    case "cat": {
      const p = projects.find((x) => x.slug === args[0]?.replace(/\/$/, "").toLowerCase());
      if (!p) return [{ kind: "err", text: `cat: ${args[0] ?? ""}: No such file or directory` }];
      return out(`${p.name}\n${p.summary}\n\nstack: ${p.stack.join(", ")}`);
    }
    case "git":
      if (args[0] === "log") return out(projects.map((p) => `* Merge branch '${p.branch}'`).concat("* init: hello world").join("\n"));
      if (args[0] === "push" && args.includes("--force")) {
        ctx.forcePush();
        return out("pushing...");
      }
      if (args[0] === "blame") return out("it was me. it is always me.");
      return [{ kind: "err", text: `git: '${args[0] ?? ""}' is not a git command here. try 'git log'.` }];
    case "contact":
      return out([profile.email && `email    ${profile.email}`, `github   ${profile.github}`, profile.linkedin && `linkedin ${profile.linkedin}`].filter(Boolean).join("\n"));
    case "sudo":
      if (args.join(" ") === "hire-me") {
        return out(`[sudo] password for recruiter: ********\nAccess granted. Opening a conversation is the next step: ${profile.email || profile.github}`);
      }
      return [{ kind: "err", text: `${profile.handle} is not in the sudoers file. This incident will be reported.` }];
    case "rm":
      return [{ kind: "err", text: "rm: nice try. this site has backups." }];
    case "vim":
      return out("you are now trapped in vim. type 'exit' (we're kind here).");
    case "clear":
      return "clear";
    case "exit":
      ctx.close();
      return [];
    default:
      return [{ kind: "err", text: `command not found: ${name}. type 'help'.` }];
  }
}

function Terminal({ onClose, forcePush }: { onClose: () => void; forcePush: () => void }) {
  const [lines, setLines] = useState<Line[]>([{ kind: "out", text: "evansem shell v1.0. type 'help' to look around." }]);
  const [value, setValue] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [cursor, setCursor] = useState(-1);
  const body = useRef<HTMLDivElement>(null);
  const input = useRef<HTMLInputElement>(null);

  useEffect(() => input.current?.focus(), []);
  useEffect(() => { body.current?.scrollTo({ top: body.current.scrollHeight }); }, [lines]);

  const submit = () => {
    const result = run(value, { close: onClose, forcePush });
    if (value.trim()) setHistory((h) => [value, ...h]);
    setCursor(-1);
    setLines((l) => (result === "clear" ? [] : [...l, { kind: "in", text: `$ ${value}` }, ...result]));
    setValue("");
  };

  return (
    <motion.div className="term-backdrop" onClick={onClose} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <motion.div
        className="term"
        role="dialog"
        aria-label="terminal"
        onClick={(e) => { e.stopPropagation(); input.current?.focus(); }}
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 40, opacity: 0 }}
      >
        <div className="term-bar"><i /><i /><i /><span>~/{profile.handle} — zsh</span></div>
        <div className="term-body" ref={body}>
          {lines.map((l, i) => <div key={i} className={l.kind}>{l.text}</div>)}
        </div>
        <div className="term-line">
          <span>$</span>
          <input
            ref={input}
            value={value}
            aria-label="command"
            autoComplete="off"
            spellCheck={false}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") submit();
              else if (e.key === "Escape") onClose();
              else if (e.key === "ArrowUp" && history.length) {
                e.preventDefault();
                const c = Math.min(cursor + 1, history.length - 1);
                setCursor(c); setValue(history[c]);
              } else if (e.key === "ArrowDown") {
                e.preventDefault();
                const c = Math.max(cursor - 1, -1);
                setCursor(c); setValue(c === -1 ? "" : history[c]);
              }
            }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

function ForcePush({ onDone }: { onDone: () => void }) {
  useEffect(() => {
    document.body.classList.add("shake");
    const t = setTimeout(onDone, 3200);
    return () => { clearTimeout(t); document.body.classList.remove("shake"); };
  }, [onDone]);
  return (
    <motion.div className="forcepush" onClick={onDone} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <div>
        <pre>{`$ git push --force origin main
+ 3f2a1c9...0000000 main -> main (forced update)
remote: Rewriting history...
remote: Deleting 1,337 commits...`}</pre>
        <p>Just kidding. Protected branches exist for a reason.</p>
      </div>
    </motion.div>
  );
}

export function EasterEggs() {
  const [term, setTerm] = useState(false);
  const [push, setPush] = useState(false);

  useEffect(() => {
    console.log(
      "%c  git log --author=" + profile.handle + "  ",
      "background:#7c9cff;color:#0a0d12;font:600 14px monospace;padding:4px 0;border-radius:4px",
    );
    console.log(
      "%cHello, fellow dev-tools opener. 👋\nYou clearly read source for fun, so we'd probably get along.\nPress ` anywhere on the page for a shell, or try the Konami code.",
      "color:#8b98a9;font:13px monospace",
    );
  }, []);

  useEffect(() => {
    let seq: string[] = [];
    const onKey = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      const typing = target.tagName === "INPUT" || target.tagName === "TEXTAREA";
      if (!typing && (e.key === "`" || e.key === "~")) { e.preventDefault(); setTerm((t) => !t); return; }
      if (typing) return;
      seq = [...seq, e.key.length === 1 ? e.key.toLowerCase() : e.key].slice(-KONAMI.length);
      if (seq.join() === KONAMI.join()) { seq = []; setPush(true); }
    };
    window.addEventListener("keydown", onKey);
    const open = () => setTerm(true);
    window.addEventListener("open-terminal", open);
    return () => { window.removeEventListener("keydown", onKey); window.removeEventListener("open-terminal", open); };
  }, []);

  return (
    <AnimatePresence>
      {term && <Terminal key="term" onClose={() => setTerm(false)} forcePush={() => { setTerm(false); setPush(true); }} />}
      {push && <ForcePush key="push" onDone={() => setPush(false)} />}
    </AnimatePresence>
  );
}

export function OpenTerminalHint() {
  return (
    <button
      className="hint"
      style={{ background: "none", border: 0, cursor: "pointer", padding: 0 }}
      onClick={() => window.dispatchEvent(new Event("open-terminal"))}
    >
      press <kbd>`</kbd> to open a shell
    </button>
  );
}

export function Uptime() {
  const [now, setNow] = useState<number | null>(null);
  useEffect(() => {
    setNow(Date.now());
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, []);
  if (now === null) return <span>uptime: calculating…</span>;
  const s = Math.floor((now - new Date(profile.firstCommit).getTime()) / 1000);
  const d = Math.floor(s / 86400);
  const hh = String(Math.floor((s % 86400) / 3600)).padStart(2, "0");
  const mm = String(Math.floor((s % 3600) / 60)).padStart(2, "0");
  const ss = String(s % 60).padStart(2, "0");
  return <span title="since my first commit">uptime: {d}d {hh}:{mm}:{ss}</span>;
}
