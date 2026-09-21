"use client";

import { useEffect, useRef, useState } from "react";

type Ripple = {
  id: number;
  x: number;
  y: number;
};

export default function TouchRipple() {
  const [enabled, setEnabled] = useState(false);
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const idRef = useRef(0);

  useEffect(() => {
    const isCoarse = window.matchMedia("(pointer: coarse)").matches;
    setEnabled(isCoarse);
    if (!isCoarse) return;

    const onTouchStart = (e: TouchEvent) => {
      const next: Ripple[] = [];
      for (let i = 0; i < e.changedTouches.length; i++) {
        const touch = e.changedTouches[i];
        const id = idRef.current++;
        next.push({ id, x: touch.clientX, y: touch.clientY });
      }
      setRipples((prev) => [...prev, ...next]);
      next.forEach((r) => {
        window.setTimeout(() => {
          setRipples((prev) => prev.filter((p) => p.id !== r.id));
        }, 800);
      });
    };

    window.addEventListener("touchstart", onTouchStart, { passive: true });
    return () => window.removeEventListener("touchstart", onTouchStart);
  }, []);

  if (!enabled) return null;

  return (
    <>
      {ripples.map((r) => (
        <span
          key={r.id}
          className="touch-ripple pointer-events-none fixed z-[9998] rounded-full border-2 border-accent"
          style={{ left: r.x, top: r.y }}
        />
      ))}
    </>
  );
}
