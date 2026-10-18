"use client";

import { useEffect, useRef } from "react";

// A faint, endless commit graph behind the page: a few weaving lanes with commits drifting down them.
// Kept deliberately quiet: low alpha, slow speed, ~30fps, paused when the tab is hidden,
// and a single static frame for people who prefer reduced motion.

type Lane = { x: number; amp: number; wave: number; phase: number; hue: string };
type Dot = { lane: number; y: number; speed: number; r: number };

const HUES = ["124,156,255", "167,139,250", "74,222,128", "245,197,66"];
const LANE_GAP = 140;

export function Backdrop() {
  const canvas = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const el = canvas.current;
    const ctx = el?.getContext("2d");
    if (!el || !ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let w = 0, h = 0, lanes: Lane[] = [], dots: Dot[] = [];
    const mouse = { x: -9999, y: -9999 };

    const laneX = (l: Lane, y: number, t: number) => l.x + Math.sin(y / l.wave + l.phase + t * 0.00004) * l.amp;

    const setup = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth; h = window.innerHeight;
      el.width = w * dpr; el.height = h * dpr;
      el.style.width = `${w}px`; el.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.max(3, Math.round(w / LANE_GAP));
      lanes = Array.from({ length: count }, (_, i) => ({
        x: (i + 0.5) * (w / count) + (Math.random() - 0.5) * 40,
        amp: 20 + Math.random() * 50,
        wave: 180 + Math.random() * 220,
        phase: Math.random() * Math.PI * 2,
        hue: HUES[i % 4 === 0 ? 0 : Math.floor(Math.random() * HUES.length)],
      }));
      dots = lanes.flatMap((_, lane) =>
        Array.from({ length: 2 + Math.floor(Math.random() * 3) }, () => ({
          lane,
          y: Math.random() * h,
          speed: 6 + Math.random() * 10,
          r: 1.6 + Math.random() * 1.6,
        })),
      );
    };

    const draw = (t: number, dt: number) => {
      ctx.clearRect(0, 0, w, h);

      // lanes
      ctx.lineWidth = 1;
      for (const l of lanes) {
        ctx.strokeStyle = `rgba(${l.hue},0.045)`;
        ctx.beginPath();
        for (let y = -10; y <= h + 10; y += 12) {
          const x = laneX(l, y, t);
          y < 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      // commits drifting down; occasionally hop to a neighbouring lane like a merge
      for (const d of dots) {
        d.y += (d.speed * dt) / 1000;
        if (d.y > h + 20) {
          d.y = -20;
          if (Math.random() < 0.35) d.lane = Math.max(0, Math.min(lanes.length - 1, d.lane + (Math.random() < 0.5 ? -1 : 1)));
        }
        const l = lanes[d.lane];
        const x = laneX(l, d.y, t);
        const near = Math.max(0, 1 - Math.hypot(x - mouse.x, d.y - mouse.y) / 220);
        const a = 0.14 + near * 0.35;

        const g = ctx.createRadialGradient(x, d.y, 0, x, d.y, d.r * 6);
        g.addColorStop(0, `rgba(${l.hue},${a * 0.5})`);
        g.addColorStop(1, `rgba(${l.hue},0)`);
        ctx.fillStyle = g;
        ctx.beginPath(); ctx.arc(x, d.y, d.r * 6, 0, Math.PI * 2); ctx.fill();

        ctx.fillStyle = `rgba(${l.hue},${a})`;
        ctx.beginPath(); ctx.arc(x, d.y, d.r, 0, Math.PI * 2); ctx.fill();
      }
    };

    setup();
    let raf = 0, last = performance.now(), acc = 0;
    const loop = (now: number) => {
      raf = requestAnimationFrame(loop);
      const dt = Math.min(now - last, 100);
      last = now; acc += dt;
      if (acc < 33) return; // ~30fps is plenty for something this slow
      draw(now, acc);
      acc = 0;
    };

    const onResize = () => { setup(); if (reduce) draw(0, 0); };
    const onMove = (e: PointerEvent) => { mouse.x = e.clientX; mouse.y = e.clientY; };
    const onLeave = () => { mouse.x = mouse.y = -9999; };
    const onVisibility = () => {
      cancelAnimationFrame(raf);
      if (!document.hidden && !reduce) { last = performance.now(); raf = requestAnimationFrame(loop); }
    };

    window.addEventListener("resize", onResize);
    if (reduce) draw(0, 0);
    else {
      window.addEventListener("pointermove", onMove, { passive: true });
      document.addEventListener("pointerleave", onLeave);
      document.addEventListener("visibilitychange", onVisibility);
      raf = requestAnimationFrame(loop);
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return <canvas ref={canvas} className="backdrop" aria-hidden />;
}
