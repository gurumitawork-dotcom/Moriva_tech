export type GalleryKind =
  | "laptop"
  | "phone"
  | "browser"
  | "dashboard"
  | "cloud"
  | "servers"
  | "code"
  | "shield"
  | "chat"
  | "tablet"
  | "layers"
  | "chip";

export type GalleryItemConfig = {
  id: string;
  kind: GalleryKind;
  /**
   * Drop a matching GLB in /public/models and set this path to swap the
   * procedural scene without changing the Hero layout.
   * Example: "/models/laptop.glb"
   */
  model?: string;
  scale?: number;
};

export const heroGalleryItems: GalleryItemConfig[] = [
  { id: "workspace", kind: "laptop" },
  { id: "mobile", kind: "phone" },
  { id: "web", kind: "browser" },
  { id: "analytics", kind: "dashboard" },
  { id: "infra", kind: "cloud" },
  { id: "backend", kind: "servers" },
  { id: "engineering", kind: "code" },
  { id: "security", kind: "shield" },
  { id: "support", kind: "chat" },
  { id: "product", kind: "tablet" },
  { id: "systems", kind: "layers" },
  { id: "platform", kind: "chip" },
];
