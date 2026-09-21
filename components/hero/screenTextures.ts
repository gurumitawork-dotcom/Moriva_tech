import * as THREE from "three";

export type ScreenKind = "website" | "app" | "dashboard" | "code" | "tablet";

const cache: Partial<Record<ScreenKind, THREE.CanvasTexture>> = {};

function roundRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  r: number
) {
  const radius = Math.min(r, w / 2, h / 2);
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.arcTo(x + w, y, x + w, y + h, radius);
  ctx.arcTo(x + w, y + h, x, y + h, radius);
  ctx.arcTo(x, y + h, x, y, radius);
  ctx.arcTo(x, y, x + w, y, radius);
  ctx.closePath();
}

function drawWebsite(ctx: CanvasRenderingContext2D, w: number, h: number) {
  ctx.fillStyle = "#F4F7FC";
  ctx.fillRect(0, 0, w, h);
  ctx.fillStyle = "#0E2A5C";
  ctx.fillRect(0, 0, w, 54);
  ctx.fillStyle = "#F5921E";
  ctx.fillRect(36, 22, 72, 8);
  ctx.fillStyle = "rgba(255,255,255,0.35)";
  ctx.fillRect(130, 22, 40, 8);
  ctx.fillRect(182, 22, 40, 8);
  ctx.fillRect(234, 22, 40, 8);

  ctx.fillStyle = "#0E2A5C";
  ctx.font = "700 36px Sora, Inter, sans-serif";
  ctx.fillText("Build products", 48, 130);
  ctx.fillStyle = "#5B6472";
  ctx.font = "500 18px Inter, sans-serif";
  ctx.fillText("Engineered to last.", 48, 162);

  ctx.fillStyle = "#F5921E";
  roundRect(ctx, 48, 182, 110, 28, 14);
  ctx.fill();

  ctx.fillStyle = "#FFFFFF";
  roundRect(ctx, 48, 240, 200, 120, 16);
  ctx.fill();
  ctx.fillStyle = "#E8EFFA";
  roundRect(ctx, 268, 240, 200, 120, 16);
  ctx.fill();
  ctx.fillStyle = "#1C6FD8";
  roundRect(ctx, 64, 258, 80, 10, 4);
  ctx.fill();
  ctx.fillStyle = "#D9E4F5";
  roundRect(ctx, 64, 280, 168, 8, 4);
  ctx.fill();
  roundRect(ctx, 64, 296, 140, 8, 4);
  ctx.fill();
}

function drawApp(ctx: CanvasRenderingContext2D, w: number, h: number) {
  ctx.fillStyle = "#0B2347";
  ctx.fillRect(0, 0, w, h);
  ctx.fillStyle = "#0E2A5C";
  ctx.fillRect(0, 0, w, 92);
  ctx.fillStyle = "#F5921E";
  roundRect(ctx, 28, 36, 86, 10, 5);
  ctx.fill();
  ctx.fillStyle = "rgba(255,255,255,0.35)";
  ctx.fillRect(w - 72, 36, 44, 10);

  const cards = [120, 230, 340, 450];
  cards.forEach((y, i) => {
    ctx.fillStyle = i === 0 ? "#123566" : "rgba(18,53,102,0.85)";
    roundRect(ctx, 24, y, w - 48, 92, 18);
    ctx.fill();
    ctx.fillStyle = i === 0 ? "#F5921E" : "#1C6FD8";
    roundRect(ctx, 44, y + 28, 44, 44, 10);
    ctx.fill();
    ctx.fillStyle = "rgba(255,255,255,0.7)";
    roundRect(ctx, 104, y + 32, 140, 10, 5);
    ctx.fill();
    ctx.fillStyle = "rgba(255,255,255,0.28)";
    roundRect(ctx, 104, y + 52, 100, 8, 4);
    ctx.fill();
  });
}

function drawDashboard(ctx: CanvasRenderingContext2D, w: number, h: number) {
  ctx.fillStyle = "#0B2347";
  ctx.fillRect(0, 0, w, h);
  ctx.fillStyle = "#0E2A5C";
  ctx.fillRect(0, 0, 72, h);

  const metrics = [
    { x: 96, y: 28, c: "#1C6FD8" },
    { x: 250, y: 28, c: "#F5921E" },
    { x: 404, y: 28, c: "#3E9AE8" },
  ];
  metrics.forEach((m) => {
    ctx.fillStyle = "#123566";
    roundRect(ctx, m.x, m.y, 140, 72, 12);
    ctx.fill();
    ctx.fillStyle = m.c;
    roundRect(ctx, m.x + 16, m.y + 18, 48, 8, 4);
    ctx.fill();
    ctx.fillStyle = "rgba(255,255,255,0.25)";
    roundRect(ctx, m.x + 16, m.y + 38, 96, 16, 6);
    ctx.fill();
  });

  ctx.fillStyle = "#123566";
  roundRect(ctx, 96, 120, 448, 180, 16);
  ctx.fill();
  const bars = [40, 70, 55, 88, 62, 76, 48, 90];
  bars.forEach((bh, i) => {
    const x = 124 + i * 50;
    const height = bh * 1.4;
    ctx.fillStyle = i % 2 === 0 ? "#1C6FD8" : "#F5921E";
    roundRect(ctx, x, 280 - height, 28, height, 6);
    ctx.fill();
  });
}

function drawCode(ctx: CanvasRenderingContext2D, w: number, h: number) {
  ctx.fillStyle = "#07182F";
  ctx.fillRect(0, 0, w, h);
  ctx.fillStyle = "#0E2A5C";
  ctx.fillRect(0, 0, w, 36);
  ctx.fillStyle = "#F5921E";
  ctx.beginPath();
  ctx.arc(22, 18, 5, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = "#1C6FD8";
  ctx.beginPath();
  ctx.arc(40, 18, 5, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = "#E8EFFA";
  ctx.beginPath();
  ctx.arc(58, 18, 5, 0, Math.PI * 2);
  ctx.fill();

  const lines = [
    { c: "#1C6FD8", w: 0.72 },
    { c: "#AEC0E0", w: 0.5 },
    { c: "#F5921E", w: 0.38 },
    { c: "#AEC0E0", w: 0.64 },
    { c: "#1C6FD8", w: 0.44 },
    { c: "#AEC0E0", w: 0.7 },
    { c: "#F5921E", w: 0.28 },
    { c: "#AEC0E0", w: 0.52 },
  ];
  lines.forEach((line, i) => {
    ctx.fillStyle = line.c;
    roundRect(ctx, 28, 58 + i * 28, (w - 56) * line.w, 10, 5);
    ctx.fill();
  });
}

function drawTablet(ctx: CanvasRenderingContext2D, w: number, h: number) {
  ctx.fillStyle = "#F4F7FC";
  ctx.fillRect(0, 0, w, h);
  ctx.fillStyle = "#0E2A5C";
  roundRect(ctx, 32, 36, 220, 28, 8);
  ctx.fill();
  ctx.fillStyle = "#1C6FD8";
  roundRect(ctx, 32, 88, 140, 90, 14);
  ctx.fill();
  ctx.fillStyle = "#F5921E";
  roundRect(ctx, 188, 88, 140, 90, 14);
  ctx.fill();
  ctx.fillStyle = "#E8EFFA";
  roundRect(ctx, 32, 198, 296, 120, 14);
  ctx.fill();
  ctx.fillStyle = "#0E2A5C";
  roundRect(ctx, 52, 220, 120, 10, 5);
  ctx.fill();
  ctx.fillStyle = "#C5D4EA";
  roundRect(ctx, 52, 244, 240, 8, 4);
  ctx.fill();
  roundRect(ctx, 52, 264, 200, 8, 4);
  ctx.fill();
}

const drawers: Record<ScreenKind, (ctx: CanvasRenderingContext2D, w: number, h: number) => void> = {
  website: drawWebsite,
  app: drawApp,
  dashboard: drawDashboard,
  code: drawCode,
  tablet: drawTablet,
};

const sizes: Record<ScreenKind, [number, number]> = {
  website: [512, 320],
  app: [320, 640],
  dashboard: [640, 360],
  code: [512, 320],
  tablet: [512, 360],
};

export function getScreenTexture(kind: ScreenKind) {
  if (cache[kind]) return cache[kind]!;
  const canvas = document.createElement("canvas");
  const [w, h] = sizes[kind];
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext("2d");
  if (ctx) drawers[kind](ctx, w, h);
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 4;
  texture.needsUpdate = true;
  cache[kind] = texture;
  return texture;
}
