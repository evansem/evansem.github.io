"use client";

import { profile } from "@/content";
import { formatDuration } from "@/lib/formatDuration";
import { useCurrentTime } from "@/lib/useCurrentTime";

const firstCommitTime = new Date(profile.firstCommit).getTime();

// A live "uptime" counter since the first commit, ticking every second.
export function Uptime() {
  const now = useCurrentTime();

  if (now === null) {
    return <span>uptime: calculating…</span>;
  }

  return <span title="since my first commit">uptime: {formatDuration(now - firstCommitTime)}</span>;
}
