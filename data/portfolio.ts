export type Shot = {
  src: string;
  alt: string;
  /** Shown in the browser chrome's address pill for this screenshot. */
  label: string;
  /** The live URL this screenshot came from — the card's link follows it. Omit when there is no public link to show. */
  href?: string;
  /** Overrides the link text when the host name should not be shown. */
  linkLabel?: string;
};

export type ShowcaseSection = {
  id: string;
  /** Matches a filter on the full portfolio page. */
  category: string;
  title: string;
  description: string;
  tags: string[];
  outcome: string;
  /** Up to four representative screenshots — never a specific client's live link. */
  images: Shot[];
  /** Feature-chip panel shown instead of screenshots when a section has no public imagery. */
  privatePanel?: { note: string; roles: string[] };
};

export const portfolioShowcase: ShowcaseSection[] = [
  {
    id: "websites",
    category: "Websites",
    title: "Websites",
    description:
      "Marketing and catalogue sites built to turn search traffic into enquiries — structured content, real SEO work and WhatsApp-ready contact flows, not a theme with the colours swapped.",
    tags: ["React", "Vite", "SEO", "Firebase Hosting"],
    outcome: "Built to convert visitors into enquiries",
    images: [
      { src: "/work/nvk/01-home.jpg", alt: "Website homepage with a hero banner and clear enquiry actions", label: "Website — Home" },
      { src: "/work/nvk/02-collections.jpg", alt: "Website catalogue page with search and category filters", label: "Website — Catalogue" },
      { src: "/work/rohini/01-home.jpg", alt: "Website homepage with hero imagery and category stats", label: "Website — Home" },
      { src: "/work/rohini/02-plants.jpg", alt: "Website product page with search and category filters", label: "Website — Products" },
    ],
  },
  {
    id: "web-apps",
    category: "Web Apps",
    title: "Web Apps",
    description:
      "Browser-based tools and dashboards built as working software — configurable inputs, live data views and export, not a static page pretending to be an app.",
    tags: ["React", "Python", "Dashboards", "Data Visualization"],
    outcome: "Built as working software, not a brochure",
    images: [
      { src: "/work/eis/01-analyzer.jpg", alt: "Web app interface with configurable parameters and an interactive chart", label: "Web App — Analysis" },
      { src: "/work/mobile_erp/erp.jpeg", alt: "Web app dashboard showing sales, inventory and reporting panels", label: "Web App — Dashboard" },
    ],
  },
  {
    id: "mobile-apps",
    category: "Mobile Apps",
    title: "Mobile Apps",
    description:
      "Native mobile applications for people working away from a desk — role-based access and structured data, designed for a phone rather than a shrunken website.",
    tags: ["Mobile App", "Role-Based Access", "Document Storage"],
    outcome: "Designed for the phone, not a shrunken website",
    images: [],
    privatePanel: {
      note: "Private builds — walkthroughs on request",
      roles: ["Member Profiles", "Document Management", "Role-Based Access", "Admin Review"],
    },
  },
];
