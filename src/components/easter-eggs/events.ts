// Lets any component open the shell without sharing state with <EasterEggs />.

const OPEN_TERMINAL_EVENT = "open-terminal";

export function requestOpenTerminal() {
  window.dispatchEvent(new Event(OPEN_TERMINAL_EVENT));
}

export function onOpenTerminalRequest(listener: () => void) {
  window.addEventListener(OPEN_TERMINAL_EVENT, listener);
  return () => window.removeEventListener(OPEN_TERMINAL_EVENT, listener);
}
