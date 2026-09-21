"use client";

import { useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";
import { heroGalleryItems } from "@/data/heroGallery";
import GalleryItem from "./hero/GalleryItem";

type SceneProps = {
  reducedMotion: boolean;
  coarsePointer: boolean;
  playing: boolean;
};

const COL_W = 3.15;
const ROW_H = 2.55;
const INK = "#0E2A5C";

/**
 * Generates a studio IBL in-process via PMREM. This is what gives surfaces real
 * specular response/reflections instead of the flat matte "clay" look. Uses
 * three's built-in RoomEnvironment so there is no external HDR fetch.
 */
function StudioEnvironment() {
  const { gl, scene } = useThree();

  useEffect(() => {
    const pmrem = new THREE.PMREMGenerator(gl);
    const envRT = pmrem.fromScene(new RoomEnvironment(), 0.04);
    scene.environment = envRT.texture;
    return () => {
      scene.environment = null;
      envRT.texture.dispose();
      pmrem.dispose();
    };
  }, [gl, scene]);

  return null;
}

function GalleryRig({ reducedMotion, coarsePointer, playing }: SceneProps) {
  const { size, camera } = useThree();
  const root = useRef<THREE.Group>(null);
  const colsGroup = useRef<THREE.Group[]>([]);
  const offsets = useRef<number[]>([]);
  const mouse = useRef({ x: 0, y: 0 });
  const cam = useRef({ x: 0, y: 0 });

  // The hero visual now lives in a narrow right-hand column, so column count
  // keys off the canvas width rather than assuming a full-bleed band.
  const narrow = size.width < 900;
  const tiny = size.width < 520;
  const cols = narrow ? 2 : 3;
  const rows = tiny ? 3 : 4;
  const speeds = useMemo(() => {
    const base = [0.14, 0.09, 0.18];
    return base.slice(0, cols);
  }, [cols]);

  const grid = useMemo(() => {
    const copies = [-1, 0, 1];
    const cells: { col: number; row: number; copy: number; itemIndex: number; seed: number }[] = [];
    for (let col = 0; col < cols; col++) {
      for (let row = 0; row < rows; row++) {
        const itemIndex = (col * 2 + row * 3) % heroGalleryItems.length;
        for (const copy of copies) {
          cells.push({
            col,
            row,
            copy,
            itemIndex,
            seed: col * 1.7 + row * 0.37,
          });
        }
      }
    }
    return cells;
  }, [cols, rows]);

  if (offsets.current.length !== cols) {
    offsets.current = Array.from({ length: cols }, () => 0);
  }

  useFrame((state, delta) => {
    const dt = Math.min(delta, 0.05);
    const allowMouse = !coarsePointer && !reducedMotion;

    if (allowMouse) {
      mouse.current.x += (state.pointer.x - mouse.current.x) * (1 - Math.exp(-dt / 0.7));
      mouse.current.y += (state.pointer.y - mouse.current.y) * (1 - Math.exp(-dt / 0.7));
    } else {
      mouse.current.x += (0 - mouse.current.x) * 0.04;
      mouse.current.y += (0 - mouse.current.y) * 0.04;
    }

    const driftX = playing && !reducedMotion ? Math.sin(state.clock.elapsedTime * 0.08) * 0.12 : 0;
    const driftY = playing && !reducedMotion ? Math.cos(state.clock.elapsedTime * 0.06) * 0.06 : 0;
    cam.current.x += (mouse.current.x * 0.45 + driftX - cam.current.x) * (1 - Math.exp(-dt / 0.8));
    cam.current.y += (mouse.current.y * 0.22 + driftY - cam.current.y) * (1 - Math.exp(-dt / 0.8));

    camera.position.x = cam.current.x;
    camera.position.y = (narrow ? 0.1 : 0.02) + cam.current.y;
    camera.position.z = narrow ? 9.2 : 8.6;
    camera.lookAt(mouse.current.x * 0.35, -0.1 + mouse.current.y * 0.18, 0);

    if (root.current) {
      root.current.rotation.y = -0.12 + mouse.current.x * 0.08;
      root.current.rotation.x = -0.1 + mouse.current.y * -0.04;
      root.current.position.y = 0.35;
    }

    if (playing && !reducedMotion) {
      const loop = rows * ROW_H;
      for (let c = 0; c < cols; c++) {
        const dir = c % 2 === 0 ? 1 : -1;
        offsets.current[c] += dir * speeds[c] * dt;
        offsets.current[c] = ((offsets.current[c] % loop) + loop) % loop;
        const group = colsGroup.current[c];
        if (group) group.position.y = offsets.current[c];
      }
    }
  });

  const originX = -((cols - 1) * COL_W) / 2;
  const originY = -((rows - 1) * ROW_H) / 2;

  return (
    <group ref={root}>
      {Array.from({ length: cols }).map((_, col) => (
        <group
          key={`col-${col}-${cols}`}
          ref={(el) => {
            if (el) colsGroup.current[col] = el;
          }}
          position={[originX + col * COL_W, 0, (col % 2) * 0.22]}
        >
          {grid
            .filter((cell) => cell.col === col)
            .map((cell) => {
              const item = heroGalleryItems[cell.itemIndex];
              const loop = rows * ROW_H;
              const y = originY + cell.row * ROW_H + cell.copy * loop;
              return (
                <group key={`${item.id}-${cell.row}-${cell.copy}`} position={[0, y, 0]}>
                  <GalleryItem item={item} playing={playing && !reducedMotion} seed={cell.seed} />
                </group>
              );
            })}
        </group>
      ))}
    </group>
  );
}

export default function DigitalVisualScene({
  reducedMotion,
  coarsePointer,
  playing,
}: SceneProps) {
  return (
    <Canvas
      dpr={coarsePointer ? [1, 1.15] : [1, 1.5]}
      camera={{ position: [0, 0.02, 8.6], fov: 38, near: 0.1, far: 40 }}
      shadows={!coarsePointer}
      gl={{
        alpha: false,
        antialias: !coarsePointer,
        powerPreference: "high-performance",
      }}
      onCreated={({ gl }) => {
        gl.setClearColor(INK, 1);
        gl.toneMapping = THREE.ACESFilmicToneMapping;
        gl.toneMappingExposure = 1.2;
      }}
      style={{
        width: "100%",
        height: "100%",
        pointerEvents: coarsePointer || reducedMotion ? "none" : "auto",
      }}
    >
      <StudioEnvironment />
      <ambientLight intensity={0.1} />
      <hemisphereLight args={["#F4F8FF", "#0B2347", 0.22]} />
      <directionalLight
        position={[5, 7, 9]}
        intensity={2.1}
        color="#FFF7EE"
        castShadow={!coarsePointer}
        shadow-mapSize={[1024, 1024]}
      />
      <directionalLight position={[-6, 3, 4]} intensity={0.7} color="#7EB6F0" />
      <directionalLight position={[0, -3, 6]} intensity={0.25} color="#FFFFFF" />
      <GalleryRig
        reducedMotion={reducedMotion}
        coarsePointer={coarsePointer}
        playing={playing}
      />
    </Canvas>
  );
}
