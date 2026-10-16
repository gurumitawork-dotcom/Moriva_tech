export type Stat = {
  value: string;
  label: string;
};

export const heroStats: Stat[] = [
  { value: "Custom", label: "Solutions" },
  { value: "Modern", label: "Tech Stack" },
  { value: "Quality", label: "Engineering" },
];

export const bandStats: Stat[] = [
  { value: "40+", label: "Products & websites shipped" },
  { value: "6", label: "Industries served" },
  { value: "96%", label: "Client retention past year one" },
  { value: "<2s", label: "Typical load time target" },
];
