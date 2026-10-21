"use client";

import { AnimatePresence } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { logConsoleGreeting } from "./consoleGreeting";
import { onOpenTerminalRequest } from "./events";
import { ForcePush } from "./ForcePush";
import { Terminal } from "./Terminal";
import { useSecretKeys } from "./useSecretKeys";

// Hidden extras for curious visitors: a shell, a fake force push and a note in the console.
export function EasterEggs() {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [isForcePushing, setIsForcePushing] = useState(false);

  const openTerminal = useCallback(() => setIsTerminalOpen(true), []);
  const closeTerminal = useCallback(() => setIsTerminalOpen(false), []);
  const toggleTerminal = useCallback(() => setIsTerminalOpen((isOpen) => !isOpen), []);

  const startForcePush = useCallback(() => setIsForcePushing(true), []);
  const endForcePush = useCallback(() => setIsForcePushing(false), []);

  const forcePushFromTerminal = useCallback(() => {
    setIsTerminalOpen(false);
    setIsForcePushing(true);
  }, []);

  useEffect(logConsoleGreeting, []);
  useEffect(() => onOpenTerminalRequest(openTerminal), [openTerminal]);
  useSecretKeys({ onTerminalKey: toggleTerminal, onKonamiCode: startForcePush });

  return (
    <AnimatePresence>
      {isTerminalOpen && (
        <Terminal key="terminal" onClose={closeTerminal} onForcePush={forcePushFromTerminal} />
      )}
      {isForcePushing && <ForcePush key="force-push" onDone={endForcePush} />}
    </AnimatePresence>
  );
}
