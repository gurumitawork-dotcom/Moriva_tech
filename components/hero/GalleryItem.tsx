"use client";

import { Suspense, useMemo } from "react";
import { useGLTF } from "@react-three/drei";
import type { GalleryItemConfig } from "@/data/heroGallery";
import { GalleryObject } from "./GalleryObjects";

function GltfModel({ url, scale = 1 }: { url: string; scale?: number }) {
  const { scene } = useGLTF(url);
  const clone = useMemo(() => scene.clone(true), [scene]);
  return <primitive object={clone} scale={scale} />;
}

export default function GalleryItem({
  item,
  playing,
  seed,
}: {
  item: GalleryItemConfig;
  playing: boolean;
  seed: number;
}) {
  const fallback = (
    <group scale={1.35}>
      <GalleryObject kind={item.kind} playing={playing} seed={seed} />
    </group>
  );

  if (!item.model) return fallback;

  return (
    <Suspense fallback={fallback}>
      <GltfModel url={item.model} scale={item.scale ?? 1} />
    </Suspense>
  );
}
