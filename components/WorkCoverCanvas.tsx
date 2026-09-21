"use client";

import { useEffect, useRef } from "react";

type Blob = {
  baseX: number;
  baseY: number;
  radius: number;
  color: string;
  speed: number;
  phase: number;
  orbit: number;
};

const BLOBS: Blob[] = [
  { baseX: 0.28, baseY: 0.4, radius: 0.55, color: "245,146,30", speed: 0.15, phase: 0, orbit: 0.14 },
  { baseX: 0.72, baseY: 0.35, radius: 0.5, color: "28,111,216", speed: 0.11, phase: 2.1, orbit: 0.16 },
  { baseX: 0.5, baseY: 0.7, radius: 0.6, color: "14,42,92", speed: 0.09, phase: 4.2, orbit: 0.12 },
];

type WorkCoverCanvasProps = {
  playing: boolean;
};

export default function WorkCoverCanvas({ playing }: WorkCoverCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const startTimeRef = useRef(performance.now());

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let rafId = 0;

    const resize = () => {
      const parent = canvas.parentElement;
      width = parent ? parent.clientWidth : window.innerWidth;
      height = parent ? parent.clientHeight : window.innerHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const drawFrame = (time: number) => {
      const elapsed = (time - startTimeRef.current) / 1000;

      ctx.fillStyle = "#0B2347";
      ctx.fillRect(0, 0, width, height);

      for (const blob of BLOBS) {
        const t = elapsed * blob.speed + blob.phase;
        const cx = (blob.baseX + Math.cos(t) * blob.orbit) * width;
        const cy = (blob.baseY + Math.sin(t * 0.8) * blob.orbit) * height;
        const r = blob.radius * Math.max(width, height);

        const gradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
        gradient.addColorStop(0, `rgba(${blob.color}, 0.55)`);
        gradient.addColorStop(1, `rgba(${blob.color}, 0)`);
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);
      }
    };

    const tick = (time: number) => {
      drawFrame(time);
      rafId = requestAnimationFrame(tick);
    };

    resize();
    drawFrame(performance.now());
    window.addEventListener("resize", resize);

    if (playing) {
      rafId = requestAnimationFrame(tick);
    }

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(rafId);
    };
  }, [playing]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 h-full w-full"
      aria-hidden="true"
    />
  );
}
