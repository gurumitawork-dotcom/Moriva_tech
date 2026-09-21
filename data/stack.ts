import type { IconName } from "@/components/Icon";

export type StackItem = {
  name: string;
  role: string;
  icon: IconName;
};

/** Technologies actually used on the builds in the portfolio. */
export const stack: StackItem[] = [
  { name: "React", role: "Component UI systems", icon: "code" },
  { name: "Next.js", role: "App Router, SEO, performance", icon: "code" },
  { name: "TypeScript", role: "Type-safe engineering", icon: "shield" },
  { name: "Vite", role: "Fast builds and dev tooling", icon: "gear" },
  { name: "Tailwind CSS", role: "Design systems in markup", icon: "design" },
  { name: "Python", role: "Data, science and services", icon: "bot" },
  { name: "FastAPI", role: "REST APIs and processing", icon: "gear" },
  { name: "Plotly.js", role: "Interactive data visualisation", icon: "bulb" },
  { name: "Firebase", role: "Hosting and deployment", icon: "cloud" },
  { name: "Git & GitHub", role: "Version control and delivery", icon: "team" },
];

export type Outcome = {
  title: string;
  description: string;
  icon: IconName;
};

export const outcomes: Outcome[] = [
  {
    title: "Modern interfaces",
    description: "Products people use without being trained on them first.",
    icon: "design",
  },
  {
    title: "Search visibility",
    description:
      "Page-level SEO, XML sitemaps and Search Console submission as part of delivery.",
    icon: "bulb",
  },
  {
    title: "Performance",
    description:
      "Load time treated as a feature, with image and build strategy to match.",
    icon: "gear",
  },
  {
    title: "Enquiry paths",
    description:
      "WhatsApp, forms and contact flows designed in, not bolted on after launch.",
    icon: "handshake",
  },
  {
    title: "Architecture that lasts",
    description:
      "Clean structure and documentation, so the build survives past launch day.",
    icon: "code",
  },
  {
    title: "Support after launch",
    description:
      "Monitoring, fixes and iteration once the product is live and earning.",
    icon: "support",
  },
];

export type Approach = {
  title: string;
  description: string;
  icon: IconName;
};

/** Portfolio-specific reasons to hire us — distinct from the homepage "Why Moriva". */
export const approach: Approach[] = [
  {
    title: "Engineering over decoration",
    description:
      "Production systems that clients run their business on, not concept mockups presented as products.",
    icon: "code",
  },
  {
    title: "Search built into delivery",
    description:
      "Page-level SEO, XML sitemaps and Search Console submission ship with the site, not as a later add-on.",
    icon: "bulb",
  },
  {
    title: "Domain-aware delivery",
    description:
      "Nursery retail, electrochemistry labs and a pharmacy network — we learn the domain before designing for it.",
    icon: "team",
  },
  {
    title: "Full-stack ownership",
    description:
      "Interface, API, data and deployment handled by one accountable team, so nothing falls between vendors.",
    icon: "cloud",
  },
  {
    title: "Transparent process",
    description:
      "Discovery, design, build, launch, support — five stages with a working demo at the end of each sprint.",
    icon: "support",
  },
  {
    title: "Clear commercial path",
    description:
      "Portfolio to proposal to scoped delivery, with fixed-price or monthly terms agreed before work starts.",
    icon: "handshake",
  },
];
