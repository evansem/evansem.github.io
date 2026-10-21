// Shared animation settings, so every reveal on the page moves with the same feel.

import type { Transition } from "framer-motion";

/** A soft ease-out curve: quick to start, gentle to settle. */
export const EASE_OUT_SOFT: Transition["ease"] = [0.2, 0.7, 0.2, 1];
