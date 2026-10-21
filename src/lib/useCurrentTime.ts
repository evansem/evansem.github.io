"use client";

import { useSyncExternalStore } from "react";

const TICK_INTERVAL_MS = 1000;

function subscribe(onTick: () => void) {
  const interval = setInterval(onTick, TICK_INTERVAL_MS);
  return () => clearInterval(interval);
}

// Rounded to the second so consecutive reads return the same value until the clock ticks.
function getCurrentSecond() {
  return Math.floor(Date.now() / TICK_INTERVAL_MS) * TICK_INTERVAL_MS;
}

// The static export has no meaningful "now", so the server renders a placeholder instead.
function getServerSnapshot() {
  return null;
}

/** The current time in milliseconds, updated every second; `null` during server rendering. */
export function useCurrentTime(): number | null {
  return useSyncExternalStore(subscribe, getCurrentSecond, getServerSnapshot);
}
