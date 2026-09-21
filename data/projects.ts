import type { Shot } from "./portfolio";

export type ProjectFilter =
  | "Websites"
  | "Web Apps"
  | "Portals"
  | "Mobile Apps";

export type Project = {
  id: string;
  name: string;
  client: string;
  /** Chip shown over the cover image. */
  category: string;
  /** Which filter pills this project answers to. */
  filters: ProjectFilter[];
  tech: string[];
  /** One-line goal, in accent colour above the description. */
  goal: string;
  description: string;
  /** Services this project drew on — links to the services page. */
  services: string[];
  liveHref?: string;
  liveLabel?: string;
  shots: Shot[];
  /** Cover treatment for work that cannot be shown publicly. */
  privateCover?: { label: string; points: string[] };
};

export const projectFilters: ProjectFilter[] = [
  "Websites",
  "Web Apps",
  "Portals",
  "Mobile Apps",
];

export const allProjects: Project[] = [
  {
    id: "nvk-nursery",
    name: "NVK Nursery",
    client: "Kadiyam, Andhra Pradesh",
    category: "Website · SEO",
    filters: ["Websites"],
    tech: ["React", "Vite", "Firebase Hosting", "Search Console"],
    goal: "Turn plant discovery into enquiries",
    description:
      "A digital presence for a family-run nursery: collections organised by plant family, service pages, an authentic gallery and WhatsApp enquiry flows — deployed on Firebase with an SEO and sitemap workflow behind it.",
    services: ["Website Development", "UI/UX Design", "SEO"],
    liveHref: "https://nvknursery.in/",
    liveLabel: "nvknursery.in",
    shots: [
      { src: "/work/nvk/01-home.jpg", alt: "NVK Nursery homepage with the nursery hero and enquiry actions", label: "nvknursery.in", href: "https://nvknursery.in/" },
      { src: "/work/nvk/02-collections.jpg", alt: "NVK Nursery collections page with plant search and family filters", label: "nvknursery.in/collections", href: "https://nvknursery.in/" },
      { src: "/work/nvk/03-services.jpg", alt: "NVK Nursery services page covering plant selection and landscaping", label: "nvknursery.in/services", href: "https://nvknursery.in/" },
      { src: "/work/nvk/04-gallery.jpg", alt: "NVK Nursery gallery of real nursery imagery", label: "nvknursery.in/gallery", href: "https://nvknursery.in/" },
      { src: "/work/nvk/05-about.jpg", alt: "NVK Nursery about page telling the family-run nursery story", label: "nvknursery.in/about", href: "https://nvknursery.in/" },
    ],
  },
  {
    id: "rohini-nursery",
    name: "Rohini Nursery",
    client: "Kadiyam, Andhra Pradesh",
    category: "Website · SEO",
    filters: ["Websites"],
    tech: ["React", "Vite", "SEO", "Search Console"],
    goal: "A nursery catalogue that works as a sales tool",
    description:
      "Plant discovery by category with search, service pages covering supply and maintenance, a gallery of the real nursery and direct WhatsApp enquiries — built as a business tool rather than a brochure.",
    services: ["Website Development", "UI/UX Design", "SEO"],
    liveHref: "https://rohininursery.in/",
    liveLabel: "rohininursery.in",
    shots: [
      { src: "/work/rohini/01-home.jpg", alt: "Rohini Nursery homepage with hero imagery and plant category stats", label: "rohininursery.in", href: "https://rohininursery.in/" },
      { src: "/work/rohini/02-plants.jpg", alt: "Rohini Nursery plants page with search and category filters", label: "rohininursery.in/plants", href: "https://rohininursery.in/" },
      { src: "/work/rohini/03-gallery.jpg", alt: "Rohini Nursery gallery showing the nursery and plant stock", label: "rohininursery.in/gallery", href: "https://rohininursery.in/" },
      { src: "/work/rohini/04-services.jpg", alt: "Rohini Nursery services page covering supply and maintenance", label: "rohininursery.in/services", href: "https://rohininursery.in/" },
    ],
  },
  {
    id: "eis-data-analyzer",
    name: "EIS Data Analyzer",
    client: "Electrochemical impedance labs",
    category: "Scientific Web App",
    filters: ["Web Apps"],
    tech: ["React", "TypeScript", "Plotly.js", "Python", "FastAPI"],
    goal: "Replace a fragmented lab workflow with one app",
    description:
      "Configure a frequency sweep or upload an existing measurement file, process it through a Python backend, explore the response in interactive Nyquist plots, review statistics and export the results.",
    services: ["Website Development", "UI/UX Design", "IT Consulting"],
    liveHref: "https://patrace.netlify.app/",
    liveLabel: "the live app",
    shots: [
      { src: "/work/eis/01-analyzer.jpg", alt: "EIS Analyzer interface with sweep parameters and a Nyquist plot", label: "EIS Analyzer — Lab Edition", href: "https://patrace.netlify.app/", linkLabel: "the live app" },
    ],
  },
  {
    id: "pharmacy-portal",
    name: "Pharmacy Association Portal",
    client: "Pharmacy & druggists association",
    category: "Members' Portal",
    filters: ["Portals", "Websites"],
    tech: ["Role-based access", "Admin console", "Member directory"],
    goal: "One directory for a whole healthcare network",
    description:
      "A public association website plus private, role-based portals for every kind of member — retailers, wholesalers, pharmacists, hospitals, doctors, labs and blood banks — with an admin console governing all of them.",
    services: ["Website Development", "UI/UX Design", "Cybersecurity Services"],
    shots: [],
    privateCover: {
      label: "Private member portals",
      points: ["Retailers", "Wholesalers", "Pharmacists", "Hospitals", "Doctors", "Labs", "Blood banks", "Admin"],
    },
  },
  {
    id: "pharmaconnect",
    name: "PharmaConnect",
    client: "Pharmacy & druggists association",
    category: "Mobile Application",
    filters: ["Mobile Apps"],
    tech: ["Mobile app", "Role-based access", "Directory"],
    goal: "The association in a member's pocket",
    description:
      "The companion mobile application for association members — the same role-aware directory and member services as the portal, built for the people who work the counter rather than a desk.",
    services: ["Mobile App Development", "UI/UX Design"],
    shots: [],
    privateCover: {
      label: "Member mobile app",
      points: ["Member directory", "Role-aware access", "Association updates", "Enquiries"],
    },
  },
];
