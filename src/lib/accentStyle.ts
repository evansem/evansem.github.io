import type { CSSProperties } from "react";

/** Exposes a colour to the stylesheet as the `--accent` custom property. */
export function accentStyle(color: string): CSSProperties {
  return { "--accent": color } as CSSProperties;
}
