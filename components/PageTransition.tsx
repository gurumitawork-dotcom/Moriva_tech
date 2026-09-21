"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import gsap from "gsap";

export default function PageTransition() {
  const pathname = usePathname();
  const panelRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);
  const isFirstRender = useRef(true);
  const isCovered = useRef(false);

  useLayoutEffect(() => {
    if (panelRef.current) {
      gsap.set(panelRef.current, { yPercent: -100 });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const anchor = (e.target as HTMLElement).closest("a");
      if (!anchor) return;
      if (anchor.target === "_blank") return;

      const href = anchor.getAttribute("href");
      if (!href || !href.startsWith("/") || href.startsWith("//")) return;
      if (href === pathname) return;

      const panel = panelRef.current;
      const icon = iconRef.current;
      if (!panel || isCovered.current) return;

      isCovered.current = true;
      gsap.killTweensOf(panel);
      gsap.set(panel, { yPercent: -100 });
      gsap.to(panel, { yPercent: 0, duration: 0.5, ease: "power3.inOut" });
      if (icon) {
        gsap.fromTo(
          icon,
          { opacity: 0, scale: 0.7 },
          { opacity: 1, scale: 1, duration: 0.4, delay: 0.15, ease: "power2.out" }
        );
      }
    };

    window.addEventListener("click", onClick);
    return () => window.removeEventListener("click", onClick);
  }, [pathname]);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    const panel = panelRef.current;
    const icon = iconRef.current;
    if (!panel) return;

    const tl = gsap.timeline({
      delay: 0.15,
      onComplete: () => {
        gsap.set(panel, { yPercent: -100 });
        isCovered.current = false;
      },
    });

    if (icon) {
      tl.to(icon, { opacity: 0, scale: 0.7, duration: 0.25, ease: "power2.in" }, 0);
    }
    tl.to(panel, { yPercent: 100, duration: 0.55, ease: "power3.inOut" }, 0.05);
  }, [pathname]);

  return (
    <div
      ref={panelRef}
      className="pointer-events-none fixed inset-0 z-[200] flex -translate-y-full items-center justify-center bg-ink"
      aria-hidden="true"
    >
      <div ref={iconRef} className="opacity-0">
        <Image src="/moriva-icon.png" alt="" width={54} height={68} className="h-16 w-auto" />
      </div>
    </div>
  );
}
