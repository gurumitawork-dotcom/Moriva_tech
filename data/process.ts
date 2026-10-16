export type ProcessStep = {
  number: string;
  title: string;
  description: string;
  /** Optional trailing link to a relevant page, shown under the step description. */
  relatedLink?: { label: string; href: string };
};

export const process: ProcessStep[] = [
  {
    number: "01",
    title: "Discover",
    description:
      "We map your goals, users and constraints before anything gets designed.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "Wireframes, prototypes and interface design, reviewed with you at every stage.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Agile sprints with weekly demos, code review and continuous integration.",
  },
  {
    number: "04",
    title: "Launch",
    description:
      "QA, performance and security checks, then a zero-downtime release.",
  },
  {
    number: "05",
    title: "Grow",
    description:
      "Monitoring, iteration and support once real users are on the product.",
    relatedLink: { label: "Maintenance & Support", href: "/services/maintenance-support/" },
  },
];
