import type { IconName } from "@/components/Icon";

export type BuildStep = {
  step: string;
  title: string;
  description: string;
  icon: IconName;
};

/** The delivery sequence shown on the portfolio page. */
export const buildProcess: BuildStep[] = [
  {
    step: "01",
    title: "Discovery & outcome mapping",
    description:
      "Clarify the business goal, the people who will use it and how success gets measured — before any interface or stack decisions.",
    icon: "bulb",
  },
  {
    step: "02",
    title: "Information architecture & UX",
    description:
      "Map the journeys, content structure and enquiry paths so the product is organised around how customers actually decide.",
    icon: "team",
  },
  {
    step: "03",
    title: "Technical architecture",
    description:
      "Settle data models, access rules, integrations and hosting, along with the non-functional requirements that shape them.",
    icon: "cloud",
  },
  {
    step: "04",
    title: "Design system & UI",
    description:
      "Build a coherent visual system and high-fidelity screens, reviewed with you before a line of production code is written.",
    icon: "design",
  },
  {
    step: "05",
    title: "Engineering sprints",
    description:
      "Ship working slices of the product with code review, a demo at the end of each sprint and continuous integration behind it.",
    icon: "code",
  },
  {
    step: "06",
    title: "Integrations & QA",
    description:
      "Wire up third-party systems, harden access and security, and test the critical flows against real data before launch.",
    icon: "shield",
  },
  {
    step: "07",
    title: "Launch & SEO hardening",
    description:
      "Deploy to production, watch load times, finalise metadata and sitemaps, submit through Search Console and train your operators.",
    icon: "gear",
  },
  {
    step: "08",
    title: "Support & iteration",
    description:
      "Monitor the live product, fix what surfaces in real use, and plan the next round of work against what the data shows.",
    icon: "support",
  },
];
