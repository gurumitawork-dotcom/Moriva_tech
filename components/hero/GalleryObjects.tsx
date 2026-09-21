"use client";

import { useMemo, useRef, type ReactElement, type ReactNode } from "react";
import { useFrame } from "@react-three/fiber";
import { RoundedBox } from "@react-three/drei";
import * as THREE from "three";
import type { GalleryKind } from "@/data/heroGallery";
import { getScreenTexture } from "./screenTextures";

type ObjectProps = {
  playing: boolean;
  seed?: number;
};

// Physically-plausible presets: low roughness + clearcoat + env reflections
// are what separate a real product render from a matte "clay toy" look.
const shell = {
  color: "#E8EEF6",
  roughness: 0.22,
  metalness: 0.0,
  clearcoat: 1,
  clearcoatRoughness: 0.09,
  envMapIntensity: 1.35,
  reflectivity: 0.6,
} as const;

const navy = {
  color: "#16407C",
  roughness: 0.24,
  metalness: 0.15,
  clearcoat: 1,
  clearcoatRoughness: 0.14,
  envMapIntensity: 1.25,
} as const;

const gold = {
  color: "#F5921E",
  roughness: 0.2,
  metalness: 0.35,
  clearcoat: 1,
  clearcoatRoughness: 0.12,
  envMapIntensity: 1.4,
} as const;

const blue = {
  color: "#3E9AE8",
  roughness: 0.22,
  metalness: 0.3,
  clearcoat: 1,
  clearcoatRoughness: 0.14,
  envMapIntensity: 1.4,
} as const;

function Screen({
  map,
  args,
  position,
  rotation,
}: {
  map: THREE.Texture;
  args: [number, number];
  position: [number, number, number];
  rotation?: [number, number, number];
}) {
  return (
    <mesh position={position} rotation={rotation}>
      <planeGeometry args={args} />
      <meshBasicMaterial map={map} toneMapped={false} />
    </mesh>
  );
}

function ShadowDisc({ radius = 0.7, y = -0.95, opacity = 0.22 }) {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, y, 0.15]}>
      <circleGeometry args={[radius, 24]} />
      <meshBasicMaterial color="#030914" transparent opacity={opacity} depthWrite={false} />
    </mesh>
  );
}

function FloatGroup({
  playing,
  seed = 0,
  children,
}: ObjectProps & { children: ReactNode }) {
  const ref = useRef<THREE.Group>(null);
  const t = useRef(seed);

  useFrame((_, delta) => {
    if (!playing || !ref.current) return;
    t.current += delta;
    ref.current.rotation.y = Math.sin(t.current * 0.42 + seed) * 0.16;
    ref.current.position.y = Math.sin(t.current * 0.55 + seed) * 0.07;
  });

  return <group ref={ref}>{children}</group>;
}

export function LaptopScene({ playing, seed = 0 }: ObjectProps) {
  const map = useMemo(() => getScreenTexture("website"), []);
  return (
    <FloatGroup playing={playing} seed={seed}>
      <group rotation={[-0.18, 0.48, 0]} position={[0, -0.05, 0.25]}>
        <RoundedBox args={[1.72, 0.06, 1.12]} radius={0.03} smoothness={3} castShadow>
          <meshPhysicalMaterial {...shell} />
        </RoundedBox>
        <RoundedBox args={[0.52, 0.01, 0.32]} radius={0.01} position={[0, 0.04, 0.12]}>
          <meshPhysicalMaterial color="#C8D2E0" roughness={0.28} metalness={0.9} envMapIntensity={1.4} />
        </RoundedBox>
        <group position={[0, 0.58, -0.42]} rotation={[0.92, 0, 0]}>
          <RoundedBox args={[1.72, 1.08, 0.05]} radius={0.03} smoothness={3} castShadow>
            <meshPhysicalMaterial {...navy} />
          </RoundedBox>
          <Screen map={map} args={[1.52, 0.9]} position={[0, 0, 0.028]} />
        </group>
      </group>
      <ShadowDisc radius={0.85} y={-0.78} />
    </FloatGroup>
  );
}

export function PhoneScene({ playing, seed = 1 }: ObjectProps) {
  const map = useMemo(() => getScreenTexture("app"), []);
  return (
    <FloatGroup playing={playing} seed={seed}>
      <group rotation={[-0.08, -0.22, 0.04]} position={[0, 0.08, 0.3]}>
        <RoundedBox args={[0.72, 1.48, 0.08]} radius={0.08} smoothness={4} castShadow>
          <meshPhysicalMaterial {...navy} />
        </RoundedBox>
        <Screen map={map} args={[0.62, 1.32]} position={[0, 0, 0.044]} />
        <mesh position={[0.39, 0.2, 0]}>
          <boxGeometry args={[0.02, 0.18, 0.04]} />
          <meshPhysicalMaterial {...shell} />
        </mesh>
      </group>
      <ShadowDisc radius={0.55} y={-0.82} />
    </FloatGroup>
  );
}

export function BrowserScene({ playing, seed = 2 }: ObjectProps) {
  const map = useMemo(() => getScreenTexture("website"), []);
  return (
    <FloatGroup playing={playing} seed={seed}>
      <group rotation={[0.04, -0.18, 0]} position={[0, 0.08, 0.28]}>
        <RoundedBox args={[2.05, 1.38, 0.06]} radius={0.06} smoothness={3} castShadow>
          <meshPhysicalMaterial {...shell} />
        </RoundedBox>
        <mesh position={[0, 0.58, 0.034]}>
          <planeGeometry args={[2.05, 0.22]} />
          <meshPhysicalMaterial {...navy} />
        </mesh>
        <mesh position={[-0.82, 0.58, 0.04]}>
          <sphereGeometry args={[0.035, 12, 12]} />
          <meshPhysicalMaterial {...gold} />
        </mesh>
        <mesh position={[-0.68, 0.58, 0.04]}>
          <sphereGeometry args={[0.035, 12, 12]} />
          <meshPhysicalMaterial {...blue} />
        </mesh>
        <mesh position={[-0.54, 0.58, 0.04]}>
          <sphereGeometry args={[0.035, 12, 12]} />
          <meshPhysicalMaterial {...shell} />
        </mesh>
        <Screen map={map} args={[1.88, 1.02]} position={[0, -0.08, 0.034]} />
      </group>
      <ShadowDisc radius={0.9} y={-0.82} />
    </FloatGroup>
  );
}

export function DashboardScene({ playing, seed = 3 }: ObjectProps) {
  const map = useMemo(() => getScreenTexture("dashboard"), []);
  const bars = [0.28, 0.46, 0.34, 0.58, 0.4];
  return (
    <FloatGroup playing={playing} seed={seed}>
      <group rotation={[0.12, 0.3, 0]} position={[0, 0.05, 0.15]}>
        <RoundedBox args={[1.85, 1.15, 0.05]} radius={0.05} smoothness={3} castShadow>
          <meshPhysicalMaterial {...navy} />
        </RoundedBox>
        <Screen map={map} args={[1.68, 0.98]} position={[0, 0, 0.03]} />
        {bars.map((h, i) => (
          <RoundedBox
            key={i}
            args={[0.14, h, 0.14]}
            radius={0.03}
            position={[-0.42 + i * 0.22, -0.95 + h / 2, 0.42]}
            castShadow
          >
            <meshPhysicalMaterial {...(i % 2 ? gold : blue)} />
          </RoundedBox>
        ))}
      </group>
      <ShadowDisc radius={0.88} y={-0.92} />
    </FloatGroup>
  );
}

export function CloudScene({ playing, seed = 4 }: ObjectProps) {
  return (
    <FloatGroup playing={playing} seed={seed}>
      <group position={[0, 0.05, 0.2]}>
        <mesh position={[0, 0.05, 0]} castShadow>
          <sphereGeometry args={[0.42, 24, 24]} />
          <meshPhysicalMaterial {...shell} />
        </mesh>
        <mesh position={[-0.38, -0.04, 0.05]} castShadow>
          <sphereGeometry args={[0.3, 24, 24]} />
          <meshPhysicalMaterial {...shell} />
        </mesh>
        <mesh position={[0.4, -0.02, 0.02]} castShadow>
          <sphereGeometry args={[0.32, 24, 24]} />
          <meshPhysicalMaterial {...shell} />
        </mesh>
        <mesh position={[0.08, -0.18, 0.16]} castShadow>
          <sphereGeometry args={[0.24, 24, 24]} />
          <meshPhysicalMaterial {...shell} />
        </mesh>
        <mesh position={[0.22, 0.28, 0.18]}>
          <sphereGeometry args={[0.09, 16, 16]} />
          <meshPhysicalMaterial {...gold} />
        </mesh>
      </group>
      <ShadowDisc radius={0.75} y={-0.72} />
    </FloatGroup>
  );
}

export function ServersScene({ playing, seed = 5 }: ObjectProps) {
  return (
    <FloatGroup playing={playing} seed={seed}>
      <group rotation={[0.1, 0.45, 0]} position={[0, -0.05, 0.2]}>
        {[0, 1, 2].map((i) => (
          <group key={i} position={[0, -0.42 + i * 0.38, 0]}>
            <RoundedBox args={[1.35, 0.32, 0.7]} radius={0.04} smoothness={3} castShadow>
              <meshPhysicalMaterial {...navy} />
            </RoundedBox>
            {[0, 1, 2, 3, 4].map((d) => (
              <mesh key={d} position={[-0.48 + d * 0.18, 0, 0.37]}>
                <sphereGeometry args={[0.03, 10, 10]} />
                <meshBasicMaterial color={d === i ? "#F5921E" : "#1C6FD8"} toneMapped={false} />
              </mesh>
            ))}
          </group>
        ))}
      </group>
      <ShadowDisc radius={0.8} y={-0.88} />
    </FloatGroup>
  );
}

export function CodeScene({ playing, seed = 6 }: ObjectProps) {
  const map = useMemo(() => getScreenTexture("code"), []);
  return (
    <FloatGroup playing={playing} seed={seed}>
      <group rotation={[0.16, -0.4, 0.04]} position={[0, 0.08, 0.22]}>
        <RoundedBox args={[1.9, 1.22, 0.06]} radius={0.05} smoothness={3} castShadow>
          <meshPhysicalMaterial {...navy} />
        </RoundedBox>
        <Screen map={map} args={[1.72, 1.04]} position={[0, 0, 0.034]} />
        <RoundedBox args={[0.18, 0.18, 0.18]} radius={0.04} position={[0.95, -0.7, 0.35]}>
          <meshPhysicalMaterial {...gold} />
        </RoundedBox>
      </group>
      <ShadowDisc radius={0.82} y={-0.78} />
    </FloatGroup>
  );
}

export function ShieldScene({ playing, seed = 7 }: ObjectProps) {
  const geometry = useMemo(() => {
    const shape = new THREE.Shape();
    shape.moveTo(0, 0.85);
    shape.bezierCurveTo(0.55, 0.7, 0.7, 0.25, 0.62, -0.15);
    shape.bezierCurveTo(0.5, -0.55, 0.18, -0.8, 0, -0.95);
    shape.bezierCurveTo(-0.18, -0.8, -0.5, -0.55, -0.62, -0.15);
    shape.bezierCurveTo(-0.7, 0.25, -0.55, 0.7, 0, 0.85);
    const geo = new THREE.ExtrudeGeometry(shape, {
      depth: 0.14,
      bevelEnabled: true,
      bevelThickness: 0.04,
      bevelSize: 0.03,
      bevelSegments: 2,
    });
    geo.center();
    return geo;
  }, []);

  return (
    <FloatGroup playing={playing} seed={seed}>
      <group rotation={[0.1, 0.35, 0]} position={[0, 0.05, 0.2]}>
        <mesh geometry={geometry} castShadow>
          <meshPhysicalMaterial {...blue} />
        </mesh>
        <mesh position={[0, 0.06, 0.12]}>
          <circleGeometry args={[0.22, 24]} />
          <meshPhysicalMaterial {...gold} />
        </mesh>
      </group>
      <ShadowDisc radius={0.7} y={-0.82} />
    </FloatGroup>
  );
}

export function ChatScene({ playing, seed = 8 }: ObjectProps) {
  return (
    <FloatGroup playing={playing} seed={seed}>
      <group rotation={[0.12, -0.22, 0]} position={[0, 0.05, 0.2]}>
        <RoundedBox args={[1.15, 0.42, 0.12]} radius={0.1} position={[-0.18, 0.28, 0]} castShadow>
          <meshPhysicalMaterial {...shell} />
        </RoundedBox>
        <RoundedBox args={[0.95, 0.38, 0.12]} radius={0.1} position={[0.22, -0.22, 0.12]} castShadow>
          <meshPhysicalMaterial {...blue} />
        </RoundedBox>
        <mesh position={[0.72, 0.55, 0.18]}>
          <sphereGeometry args={[0.16, 20, 20]} />
          <meshPhysicalMaterial {...gold} />
        </mesh>
      </group>
      <ShadowDisc radius={0.72} y={-0.72} />
    </FloatGroup>
  );
}

export function TabletScene({ playing, seed = 9 }: ObjectProps) {
  const map = useMemo(() => getScreenTexture("tablet"), []);
  return (
    <FloatGroup playing={playing} seed={seed}>
      <group rotation={[-0.4, 0.5, 0.08]} position={[0, 0.05, 0.18]}>
        <RoundedBox args={[1.55, 0.07, 1.1]} radius={0.05} smoothness={3} castShadow>
          <meshPhysicalMaterial {...navy} />
        </RoundedBox>
        <Screen map={map} args={[1.38, 0.94]} position={[0, 0.04, 0]} rotation={[-Math.PI / 2, 0, 0]} />
      </group>
      <ShadowDisc radius={0.8} y={-0.7} />
    </FloatGroup>
  );
}

export function LayersScene({ playing, seed = 10 }: ObjectProps) {
  return (
    <FloatGroup playing={playing} seed={seed}>
      <group rotation={[0.55, 0.4, 0]} position={[0, 0, 0.15]}>
        {[0, 1, 2].map((i) => (
          <RoundedBox
            key={i}
            args={[1.45 - i * 0.12, 0.08, 1.05 - i * 0.08]}
            radius={0.04}
            position={[i * 0.08, i * 0.28, -i * 0.06]}
            castShadow
          >
            <meshPhysicalMaterial {...(i === 1 ? gold : i === 2 ? blue : navy)} />
          </RoundedBox>
        ))}
      </group>
      <ShadowDisc radius={0.78} y={-0.7} />
    </FloatGroup>
  );
}

export function ChipScene({ playing, seed = 11 }: ObjectProps) {
  return (
    <FloatGroup playing={playing} seed={seed}>
      <group rotation={[0.4, 0.55, 0]} position={[0, 0.08, 0.2]}>
        <RoundedBox args={[1.05, 0.14, 1.05]} radius={0.06} smoothness={3} castShadow>
          <meshPhysicalMaterial {...navy} />
        </RoundedBox>
        <RoundedBox args={[0.55, 0.1, 0.55]} radius={0.03} position={[0, 0.12, 0]}>
          <meshPhysicalMaterial {...gold} />
        </RoundedBox>
        {[-0.38, 0, 0.38].map((x) =>
          [-0.38, 0.38].map((z) => (
            <mesh key={`${x}-${z}`} position={[x, 0.02, z]}>
              <boxGeometry args={[0.06, 0.08, 0.16]} />
              <meshPhysicalMaterial {...shell} />
            </mesh>
          ))
        )}
      </group>
      <ShadowDisc radius={0.7} y={-0.68} />
    </FloatGroup>
  );
}

const scenes: Record<GalleryKind, (props: ObjectProps) => ReactElement> = {
  laptop: LaptopScene,
  phone: PhoneScene,
  browser: BrowserScene,
  dashboard: DashboardScene,
  cloud: CloudScene,
  servers: ServersScene,
  code: CodeScene,
  shield: ShieldScene,
  chat: ChatScene,
  tablet: TabletScene,
  layers: LayersScene,
  chip: ChipScene,
};

export function GalleryObject({
  kind,
  playing,
  seed,
}: {
  kind: GalleryKind;
  playing: boolean;
  seed: number;
}) {
  const Scene = scenes[kind];
  return <Scene playing={playing} seed={seed} />;
}
