"use client";

import { useEffect, useRef } from "react";

// A faint, endless commit graph behind the page:
// a few weaving lanes with commits drifting down them.
// Kept deliberately quiet: low alpha, slow speed, ~30fps, paused when the tab is hidden,
// and a single static frame for people who prefer reduced motion.

/** A vertical branch line that sways gently from side to side. */
type Lane = {
  centerX: number;
  /** How far the lane swings left and right, in pixels. */
  amplitude: number;
  /** Larger values give taller, gentler curves. */
  wavelength: number;
  phase: number;
  color: string;
};

/** A commit dot travelling down a lane. */
type Commit = {
  laneIndex: number;
  y: number;
  /** Pixels per second. */
  speed: number;
  radius: number;
};

// RGB triplets, so the alpha can vary per draw call: main blue, purple, green, yellow.
const COLORS = ["124,156,255", "167,139,250", "74,222,128", "245,197,66"];

const LANE_SPACING_PX = 140;
const MIN_LANES = 3;
const MAX_PIXEL_RATIO = 2;

const LANE_ALPHA = 0.045;
const COMMIT_BASE_ALPHA = 0.14;
const COMMIT_HOVER_ALPHA = 0.35;
const HOVER_RADIUS_PX = 220;
const GLOW_SCALE = 6;

/** How often a commit hops to a neighbouring lane when it wraps around, like a merge. */
const LANE_HOP_CHANCE = 0.35;
const FRAME_INTERVAL_MS = 33; // ~30fps is plenty for something this slow
const MAX_FRAME_GAP_MS = 100;
const SWAY_SPEED = 0.00004;
const OFFSCREEN = -9999;

const random = (min: number, max: number) => min + Math.random() * (max - min);
const randomInt = (min: number, max: number) => Math.floor(random(min, max + 1));
const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));
const rgba = (color: string, alpha: number) => `rgba(${color},${alpha})`;

function createLanes(viewportWidth: number): Lane[] {
  const count = Math.max(MIN_LANES, Math.round(viewportWidth / LANE_SPACING_PX));
  const spacing = viewportWidth / count;

  return Array.from({ length: count }, (_, index) => ({
    centerX: (index + 0.5) * spacing + random(-20, 20),
    amplitude: random(20, 70),
    wavelength: random(180, 400),
    phase: random(0, Math.PI * 2),
    // Every fourth lane uses the main colour so the palette stays anchored to the site theme.
    color: index % 4 === 0 ? COLORS[0] : COLORS[randomInt(0, COLORS.length - 1)],
  }));
}

function createCommits(lanes: Lane[], viewportHeight: number): Commit[] {
  return lanes.flatMap((_, laneIndex) =>
    Array.from({ length: randomInt(2, 4) }, () => ({
      laneIndex,
      y: random(0, viewportHeight),
      speed: random(6, 16),
      radius: random(1.6, 3.2),
    })),
  );
}

/** Horizontal position of a lane at a given height and time. */
function laneXAt(lane: Lane, y: number, time: number) {
  const angle = y / lane.wavelength + lane.phase + time * SWAY_SPEED;
  return lane.centerX + Math.sin(angle) * lane.amplitude;
}

function fillCircle(context: CanvasRenderingContext2D, x: number, y: number, radius: number) {
  context.beginPath();
  context.arc(x, y, radius, 0, Math.PI * 2);
  context.fill();
}

export function Backdrop() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const pointer = { x: OFFSCREEN, y: OFFSCREEN };
    let width = 0;
    let height = 0;
    let lanes: Lane[] = [];
    let commits: Commit[] = [];

    const setup = () => {
      // Render at device resolution (capped) so lines stay crisp on high-DPI screens.
      const pixelRatio = Math.min(window.devicePixelRatio || 1, MAX_PIXEL_RATIO);
      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = width * pixelRatio;
      canvas.height = height * pixelRatio;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

      lanes = createLanes(width);
      commits = createCommits(lanes, height);
    };

    const drawLanes = (time: number) => {
      context.lineWidth = 1;

      for (const lane of lanes) {
        context.strokeStyle = rgba(lane.color, LANE_ALPHA);
        context.beginPath();
        context.moveTo(laneXAt(lane, -10, time), -10);

        for (let y = 2; y <= height + 10; y += 12) {
          context.lineTo(laneXAt(lane, y, time), y);
        }
        context.stroke();
      }
    };

    const moveCommit = (commit: Commit, elapsedMs: number) => {
      commit.y += (commit.speed * elapsedMs) / 1000;
      if (commit.y <= height + 20) return;

      // Wrap back to the top, sometimes on a neighbouring lane.
      commit.y = -20;
      if (Math.random() < LANE_HOP_CHANCE) {
        const direction = Math.random() < 0.5 ? -1 : 1;
        commit.laneIndex = clamp(commit.laneIndex + direction, 0, lanes.length - 1);
      }
    };

    const drawCommit = (commit: Commit, time: number) => {
      const lane = lanes[commit.laneIndex];
      const x = laneXAt(lane, commit.y, time);

      // Commits brighten as the pointer gets closer.
      const pointerDistance = Math.hypot(x - pointer.x, commit.y - pointer.y);
      const closeness = Math.max(0, 1 - pointerDistance / HOVER_RADIUS_PX);
      const alpha = COMMIT_BASE_ALPHA + closeness * COMMIT_HOVER_ALPHA;

      const glowRadius = commit.radius * GLOW_SCALE;
      const glow = context.createRadialGradient(x, commit.y, 0, x, commit.y, glowRadius);
      glow.addColorStop(0, rgba(lane.color, alpha * 0.5));
      glow.addColorStop(1, rgba(lane.color, 0));
      context.fillStyle = glow;
      fillCircle(context, x, commit.y, glowRadius);

      context.fillStyle = rgba(lane.color, alpha);
      fillCircle(context, x, commit.y, commit.radius);
    };

    const draw = (time: number, elapsedMs: number) => {
      context.clearRect(0, 0, width, height);
      drawLanes(time);

      for (const commit of commits) {
        moveCommit(commit, elapsedMs);
        drawCommit(commit, time);
      }
    };

    let animationFrame = 0;
    let lastFrameTime = performance.now();
    let pendingMs = 0;

    const loop = (now: number) => {
      animationFrame = requestAnimationFrame(loop);

      pendingMs += Math.min(now - lastFrameTime, MAX_FRAME_GAP_MS);
      lastFrameTime = now;
      if (pendingMs < FRAME_INTERVAL_MS) return;

      draw(now, pendingMs);
      pendingMs = 0;
    };

    const startLoop = () => {
      lastFrameTime = performance.now();
      animationFrame = requestAnimationFrame(loop);
    };

    const handleResize = () => {
      setup();
      if (prefersReducedMotion) draw(0, 0);
    };

    const handlePointerMove = (event: PointerEvent) => {
      pointer.x = event.clientX;
      pointer.y = event.clientY;
    };

    const handlePointerLeave = () => {
      pointer.x = OFFSCREEN;
      pointer.y = OFFSCREEN;
    };

    const handleVisibilityChange = () => {
      cancelAnimationFrame(animationFrame);
      if (!document.hidden) startLoop();
    };

    setup();
    window.addEventListener("resize", handleResize);

    if (prefersReducedMotion) {
      draw(0, 0);
    } else {
      window.addEventListener("pointermove", handlePointerMove, { passive: true });
      document.addEventListener("pointerleave", handlePointerLeave);
      document.addEventListener("visibilitychange", handleVisibilityChange);
      startLoop();
    }

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("pointerleave", handlePointerLeave);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return <canvas ref={canvasRef} className="backdrop" aria-hidden />;
}
