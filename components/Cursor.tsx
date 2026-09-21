"use client";

import { useEffect, useRef, useState } from "react";

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const playIconRef = useRef<SVGSVGElement>(null);
  const pauseIconRef = useRef<SVGSVGElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const isFine = window.matchMedia("(pointer: fine)").matches;
    setEnabled(isFine);
    if (!isFine) return;

    document.body.classList.add("has-cursor");

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let dotX = mouseX;
    let dotY = mouseY;
    let ringX = mouseX;
    let ringY = mouseY;
    let rafId = 0;
    let last = performance.now();
    let seen = false;
    let isVideoPlaying = true;

    // Inline transforms replace the Tailwind translate classes, so centring
    // on the pointer has to be part of the same transform string.
    const place = (el: HTMLElement | null, x: number, y: number) => {
      if (el) el.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
    };
    const setVisible = (v: boolean) => {
      if (dotRef.current) dotRef.current.style.opacity = v ? "1" : "0";
      if (ringRef.current) ringRef.current.style.opacity = v ? "1" : "0";
    };

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!seen) {
        // Start where the pointer is rather than gliding in from the centre.
        seen = true;
        dotX = ringX = mouseX;
        dotY = ringY = mouseY;
        setVisible(true);
      }
    };
    const onLeave = () => setVisible(false);
    const onEnter = () => {
      if (seen) setVisible(true);
    };

    /*
      Exponential smoothing scaled by elapsed time, so the follow feels the
      same on 60Hz and 144Hz screens instead of speeding up with the refresh
      rate. The dot stays nearly glued to the pointer; the ring trails it.
    */
    const tick = (now: number) => {
      const dt = Math.min(now - last, 64);
      last = now;
      const dotK = 1 - Math.exp(-dt / 22);
      const ringK = 1 - Math.exp(-dt / 90);
      dotX += (mouseX - dotX) * dotK;
      dotY += (mouseY - dotY) * dotK;
      ringX += (mouseX - ringX) * ringK;
      ringY += (mouseY - ringY) * ringK;
      place(dotRef.current, dotX, dotY);
      place(ringRef.current, ringX, ringY);
      rafId = requestAnimationFrame(tick);
    };

    const syncPlayIcon = () => {
      if (playIconRef.current) {
        playIconRef.current.style.display = isVideoPlaying ? "none" : "block";
      }
      if (pauseIconRef.current) {
        pauseIconRef.current.style.display = isVideoPlaying ? "block" : "none";
      }
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const playTarget = target.closest("[data-cursor-play]");
      const interactive = playTarget
        ? null
        : target.closest("a, button, [data-cursor-hover]");
      const dragTarget = playTarget ? null : target.closest("[data-cursor-drag]");

      if (ringRef.current) {
        ringRef.current.classList.toggle("cursor-hover", !!interactive);
        ringRef.current.classList.toggle("cursor-play", !!playTarget);
      }
      if (labelRef.current) {
        labelRef.current.style.opacity = dragTarget ? "1" : "0";
      }
      if (playTarget) {
        syncPlayIcon();
      } else {
        if (playIconRef.current) playIconRef.current.style.display = "none";
        if (pauseIconRef.current) pauseIconRef.current.style.display = "none";
      }
    };

    const onVideoState = (e: Event) => {
      const detail = (e as CustomEvent<{ playing: boolean }>).detail;
      isVideoPlaying = detail.playing;
      if (ringRef.current?.classList.contains("cursor-play")) {
        syncPlayIcon();
      }
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mouseover", onOver);
    document.documentElement.addEventListener("mouseleave", onLeave);
    document.documentElement.addEventListener("mouseenter", onEnter);
    window.addEventListener("moriva:videostate", onVideoState);
    rafId = requestAnimationFrame(tick);

    return () => {
      document.body.classList.remove("has-cursor");
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", onOver);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.documentElement.removeEventListener("mouseenter", onEnter);
      window.removeEventListener("moriva:videostate", onVideoState);
      cancelAnimationFrame(rafId);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-1.5 w-1.5 rounded-full bg-accent opacity-0 transition-opacity duration-300 will-change-transform"
      />
      <div
        ref={ringRef}
        className="cursor-ring pointer-events-none fixed left-0 top-0 z-[9998] flex h-9 w-9 items-center justify-center rounded-full border border-accent/70 opacity-0 transition-[width,height,background-color,border-color,opacity] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform"
      >
        <div
          ref={labelRef}
          className="pointer-events-none absolute inset-0 flex select-none items-center justify-center whitespace-nowrap text-[10px] font-semibold uppercase tracking-wider text-white opacity-0 transition-opacity duration-200"
        >
          Drag
        </div>
        <svg
          ref={playIconRef}
          width="16"
          height="16"
          viewBox="0 0 16 16"
          className="pointer-events-none absolute inset-0 m-auto"
          style={{ display: "none" }}
        >
          <path d="M3 1.5L14 8L3 14.5V1.5Z" fill="#FFFFFF" />
        </svg>
        <svg
          ref={pauseIconRef}
          width="16"
          height="16"
          viewBox="0 0 16 16"
          className="pointer-events-none absolute inset-0 m-auto"
          style={{ display: "none" }}
        >
          <rect x="2.5" y="1.5" width="4" height="13" fill="#FFFFFF" />
          <rect x="9.5" y="1.5" width="4" height="13" fill="#FFFFFF" />
        </svg>
      </div>
      <style jsx global>{`
        /* Hover grows the ring and tints it, but never fills it solid, so
           the text or card underneath stays readable through it. */
        .cursor-ring.cursor-hover {
          width: 48px;
          height: 48px;
          background-color: rgba(245, 146, 30, 0.12);
          border-color: rgba(245, 146, 30, 0.9);
          border-width: 1.5px;
          backdrop-filter: none;
        }
        .cursor-ring.cursor-play {
          width: 56px;
          height: 56px;
          background-color: #1c6fd8;
          border-color: transparent;
        }
      `}</style>
    </>
  );
}
