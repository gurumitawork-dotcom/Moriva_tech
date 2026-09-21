export type WhyChooseItem = {
  label: string;
  description: string;
  icon: "bulb" | "shield" | "team" | "handshake" | "headset";
};

export const whyChoose: WhyChooseItem[] = [
  {
    label: "Innovative Approach",
    description: "We start from your problem, not from a template we already own.",
    icon: "bulb",
  },
  {
    label: "Quality Assurance",
    description: "Reviewed, tested and measured before anything reaches production.",
    icon: "shield",
  },
  {
    label: "Expert Team",
    description: "Senior designers and engineers only — no handover to juniors.",
    icon: "team",
  },
  {
    label: "On-Time Delivery",
    description: "Short sprints and working demos keep the date honest.",
    icon: "handshake",
  },
  {
    label: "Dedicated Support",
    description: "Monitoring, fixes and iteration long after launch day.",
    icon: "headset",
  },
];
