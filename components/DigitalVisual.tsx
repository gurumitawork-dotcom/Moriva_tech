"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const Scene = dynamic(() => import("./DigitalVisualScene"), { ssr: false });

type DigitalVisualProps = {
  playing: boolean;
};

export default function DigitalVisual({ playing }: DigitalVisualProps) {
  const [ready, setReady] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [coarsePointer, setCoarsePointer] = useState(false);

  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const pointer = window.matchMedia("(pointer: coarse)");

    const sync = () => {
      setReducedMotion(motion.matches);
      setCoarsePointer(pointer.matches);
    };

    sync();
    setReady(true);
    motion.addEventListener("change", sync);
    pointer.addEventListener("change", sync);
    return () => {
      motion.removeEventListener("change", sync);
      pointer.removeEventListener("change", sync);
    };
  }, []);

  if (!ready) {
    return <div className="absolute inset-0 bg-ink" />;
  }

  return (
    <div className="absolute inset-0">
      <Scene
        reducedMotion={reducedMotion}
        coarsePointer={coarsePointer}
        playing={playing && !reducedMotion}
      />
    </div>
  );
}
