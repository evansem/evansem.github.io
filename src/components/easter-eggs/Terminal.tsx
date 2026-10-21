"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState, type KeyboardEvent, type MouseEvent } from "react";
import { profile, terminal } from "@/content";
import { runCommand, type TerminalLine } from "./commands";
import { useCommandHistory } from "./useCommandHistory";

type TerminalProps = {
  onClose: () => void;
  onForcePush: () => void;
};

const welcomeLine: TerminalLine = {
  kind: "output",
  text: `${profile.handle} ${terminal.welcome}`,
};

export function Terminal({ onClose, onForcePush }: TerminalProps) {
  const [lines, setLines] = useState<TerminalLine[]>([welcomeLine]);
  const [command, setCommand] = useState("");
  const history = useCommandHistory();
  const scrollArea = useRef<HTMLDivElement>(null);
  const input = useRef<HTMLInputElement>(null);

  useEffect(() => {
    input.current?.focus();
  }, []);

  // Keep the newest output in view, like a real terminal.
  useEffect(() => {
    const element = scrollArea.current;
    element?.scrollTo({ top: element.scrollHeight });
  }, [lines]);

  const submit = () => {
    const result = runCommand(command, { close: onClose, forcePush: onForcePush });
    history.record(command);
    setCommand("");

    if (result === "clear") {
      setLines([]);
      return;
    }

    const echoedInput: TerminalLine = { kind: "input", text: `$ ${command}` };
    setLines((previous) => [...previous, echoedInput, ...result]);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    switch (event.key) {
      case "Enter":
        submit();
        break;

      case "Escape":
        onClose();
        break;

      case "ArrowUp": {
        const previousCommand = history.older();
        if (previousCommand === null) break;
        event.preventDefault();
        setCommand(previousCommand);
        break;
      }

      case "ArrowDown":
        event.preventDefault();
        setCommand(history.newer());
        break;
    }
  };

  // Clicks inside the window should not close it, only refocus the prompt.
  const handleWindowClick = (event: MouseEvent) => {
    event.stopPropagation();
    input.current?.focus();
  };

  return (
    <motion.div
      className="term-backdrop"
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="term"
        role="dialog"
        aria-label="terminal"
        onClick={handleWindowClick}
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 40, opacity: 0 }}
      >
        <div className="term-bar">
          <i />
          <i />
          <i />
          <span>~/{profile.handle} — zsh</span>
        </div>

        <div className="term-body" ref={scrollArea}>
          {lines.map((line, index) => (
            // Lines are append-only and never reordered, so the index is a stable key.
            <div key={index} className={line.kind}>
              {line.text}
            </div>
          ))}
        </div>

        <div className="term-line">
          <span>$</span>
          <input
            ref={input}
            value={command}
            aria-label="command"
            autoComplete="off"
            spellCheck={false}
            onChange={(event) => setCommand(event.target.value)}
            onKeyDown={handleKeyDown}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
