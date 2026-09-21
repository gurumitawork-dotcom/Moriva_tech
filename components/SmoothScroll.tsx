"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SmoothScroll() {
  useEffect(() => {
    const isCoarse = window.matchMedia("(pointer: coarse)").matches;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (isCoarse || prefersReducedMotion) return;

    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    lenis.on("scroll", ScrollTrigger.update);

    /* Overlays (the proposal modal) ask Lenis to stand down while they are
       open — body overflow alone cannot stop smoothWheel. */
    const lock = () => lenis.stop();
    const unlock = () => lenis.start();
    window.addEventListener("moriva:scroll-lock", lock);
    window.addEventListener("moriva:scroll-unlock", unlock);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    return () => {
      window.removeEventListener("moriva:scroll-lock", lock);
      window.removeEventListener("moriva:scroll-unlock", unlock);
      lenis.destroy();
      gsap.ticker.remove((time) => {
        lenis.raf(time * 1000);
      });
    };
  }, []);

  return null;
}
