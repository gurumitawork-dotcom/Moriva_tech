export type Shot = {
  src: string;
  alt: string;
  /** Shown in the browser chrome's address pill for this screenshot. */
  label: string;
  /** The live URL this screenshot came from — the card's link follows it. */
  href: string;
  /** Overrides the link text when the host name should not be shown. */
  linkLabel?: string;
};

export type PortfolioProject = {
  id: string;
  category: string;
  title: string;
  client: string;
  description: string;
  tags: string[];
  outcome: string;
  liveHref?: string;
  liveLabel?: string;
  shots: Shot[];
  /** Roles panel used when a project cannot be shown publicly. */
  privatePanel?: { note: string; roles: string[] };
};

export const portfolio: PortfolioProject[] = [
  {
    id: "nurseries",
    category: "Websites / SEO",
    title: "Kadiyam Nursery Websites",
    client: "NVK Nursery & Rohini Nursery",
    description:
      "Two live nursery businesses in Kadiyam — plant discovery by category, service pages, authentic galleries and WhatsApp enquiries, with SEO and Search Console sitemap management.",
    tags: ["React", "Vite", "SEO", "Search Console", "Firebase Hosting"],
    outcome: "Two nurseries selling through search, not just word of mouth",
    liveHref: "https://nvknursery.in/",
    liveLabel: "Live site",
    shots: [
      { src: "/work/nvk/01-home.jpg", alt: "NVK Nursery homepage with the nursery hero and enquiry actions", label: "nvknursery.in", href: "https://nvknursery.in/" },
      { src: "/work/nvk/02-collections.jpg", alt: "NVK Nursery collections page with plant search and family filters", label: "nvknursery.in/collections", href: "https://nvknursery.in/" },
      { src: "/work/nvk/03-services.jpg", alt: "NVK Nursery services page covering plant selection and landscaping", label: "nvknursery.in/services", href: "https://nvknursery.in/" },
      { src: "/work/nvk/04-gallery.jpg", alt: "NVK Nursery gallery of real nursery imagery", label: "nvknursery.in/gallery", href: "https://nvknursery.in/" },
      { src: "/work/nvk/05-about.jpg", alt: "NVK Nursery about page telling the family-run nursery story", label: "nvknursery.in/about", href: "https://nvknursery.in/" },
      { src: "/work/rohini/01-home.jpg", alt: "Rohini Nursery homepage with hero imagery and plant category stats", label: "rohininursery.in", href: "https://rohininursery.in/" },
      { src: "/work/rohini/02-plants.jpg", alt: "Rohini Nursery plants page with search and category filters", label: "rohininursery.in/plants", href: "https://rohininursery.in/" },
      { src: "/work/rohini/03-gallery.jpg", alt: "Rohini Nursery gallery showing the nursery and plant stock", label: "rohininursery.in/gallery", href: "https://rohininursery.in/" },
      { src: "/work/rohini/04-services.jpg", alt: "Rohini Nursery services page covering supply and maintenance", label: "rohininursery.in/services", href: "https://rohininursery.in/" },
    ],
  },
  {
    id: "eis",
    category: "Scientific Web App",
    title: "EIS Data Analyzer",
    client: "Electrochemical impedance labs",
    description:
      "A full-stack suite for Electrochemical Impedance Spectroscopy — configure a sweep or upload a file, process it through a Python backend, explore interactive Nyquist plots, then export the results.",
    tags: ["React", "TypeScript", "Plotly.js", "Python", "FastAPI"],
    outcome: "A lab workflow turned into one browser application",
    liveHref: "https://patrace.netlify.app/",
    liveLabel: "Live app",
    shots: [
      { src: "/work/eis/01-analyzer.jpg", alt: "EIS Analyzer interface with sweep parameters and a Nyquist plot", label: "EIS Analyzer — Lab Edition", href: "https://patrace.netlify.app/", linkLabel: "the live app" },
    ],
  },
  {
    id: "pharmacy",
    category: "Members' Portal / Mobile App",
    title: "Pharmacy Association Portal & PharmaConnect",
    client: "Pharmacy & druggists association",
    description:
      "A public association site plus role-based private portals for eight kinds of member across a local healthcare network, an admin console over all of them, and PharmaConnect — the companion mobile app.",
    tags: ["Role-based access", "Members' portal", "Admin console", "Directory", "Mobile app"],
    outcome: "One network, eight member types, a single directory",
    shots: [],
    privatePanel: {
      note: "Private member portals — screenshots on request",
      roles: [
        "Retailers (pharmacies)",
        "Wholesalers",
        "Pharmacists",
        "Hospitals",
        "Doctors",
        "Labs",
        "Blood banks",
        "Admin console",
      ],
    },
  },
];
