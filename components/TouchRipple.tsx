"use client";

import { useEffect, useRef, useState } from "react";

/** Final ripple diameter. It is drawn at this size and scaled *down* to start,
 *  so it stays crisp instead of being a tiny circle stretched up and blurred. */
const SIZE = 84;
/** A finger that travels this far is scrolling, not tapping. */
const MOVE_TOLERANCE = 10;

/**
 * Tap feedback for touch screens, the counterpart of the desktop cursor.
 *
 * Ripples are created and animated directly in the DOM with the Web
 * Animations API, so a tap never re-renders React and the animation runs on
 * the compositor. A ripple grows while the finger is down; if the finger
 * starts scrolling instead, it fades out at once rather than riding along.
 */
export default function TouchRipple() {
  const [enabled, setEnabled] = useState(false);
  const layerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const coarse = window.matchMedia("(pointer: coarse)");
    const sync = () => setEnabled(coarse.matches);
    sync();
    coarse.addEventListener("change", sync);
    return () => coarse.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    const layer = layerRef.current;
    if (!enabled || !layer) return;

    const calm = window.matchMedia("(prefers-reduced-motion: reduce)");
    const active = new Map<number, { el: HTMLSpanElement; x: number; y: number }>();

    const fadeOut = (el: HTMLSpanElement, ms: number) => {
      const a = el.animate([{ opacity: getComputedStyle(el).opacity }, { opacity: 0 }], {
        duration: ms,
        easing: "ease-out",
        fill: "forwards",
      });
      a.onfinish = () => el.remove();
    };

    const onDown = (e: PointerEvent) => {
      if (e.pointerType === "mouse") return;

      const el = document.createElement("span");
      el.className = "touch-ripple";
      el.style.left = `${e.clientX - SIZE / 2}px`;
      el.style.top = `${e.clientY - SIZE / 2}px`;
      layer.appendChild(el);

      if (calm.matches) {
        el.animate([{ opacity: 0.6 }, { opacity: 0 }], { duration: 250, fill: "forwards" }).onfinish = () =>
          el.remove();
        return;
      }

      const grow = el.animate(
        [
          // grow with a soft ease-out, then fade while drifting a touch wider
          { transform: "scale(0.18)", opacity: 0.95, easing: "cubic-bezier(0.25, 0.8, 0.35, 1)" },
          { transform: "scale(1)", opacity: 0.6, offset: 0.65, easing: "ease-out" },
          { transform: "scale(1.1)", opacity: 0 },
        ],
        { duration: 720, fill: "forwards" }
      );
      grow.onfinish = () => {
        el.remove();
        active.delete(e.pointerId);
      };
      active.set(e.pointerId, { el, x: e.clientX, y: e.clientY });
    };

    // The page started scrolling under the finger: drop the ripple quickly.
    const cancel = (id: number) => {
      const r = active.get(id);
      if (!r) return;
      active.delete(id);
      r.el.getAnimations().forEach((a) => a.pause());
      fadeOut(r.el, 140);
    };

    const onMove = (e: PointerEvent) => {
      const r = active.get(e.pointerId);
      if (r && Math.hypot(e.clientX - r.x, e.clientY - r.y) > MOVE_TOLERANCE) cancel(e.pointerId);
    };
    const onCancel = (e: PointerEvent) => cancel(e.pointerId);
    const onUp = (e: PointerEvent) => active.delete(e.pointerId);

    window.addEventListener("pointerdown", onDown, { passive: true });
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointercancel", onCancel, { passive: true });
    window.addEventListener("pointerup", onUp, { passive: true });
    return () => {
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointercancel", onCancel);
      window.removeEventListener("pointerup", onUp);
      layer.replaceChildren();
    };
  }, [enabled]);

  if (!enabled) return null;

  return <div ref={layerRef} aria-hidden="true" className="pointer-events-none fixed inset-0 z-[9998] overflow-hidden" />;
}
