import type { IconName } from "@/components/Icon";

export type WhyUsCard = {
  number: string;
  title: string;
  description: string;
  icon: IconName;
  image: string;
  alt: string;
};

export const whyUsCards: WhyUsCard[] = [
  {
    number: "01",
    title: "Senior team, every project",
    description:
      "No account-manager layer. You work directly with the people designing and shipping your product.",
    icon: "team",
    image: "/why/01-senior-team.jpg",
    alt: "Two developers reviewing code together at a shared desk",
  },
  {
    number: "02",
    title: "Built to be maintained",
    description:
      "Clean architecture and documentation from day one, so your team — or ours — can extend it later.",
    icon: "code",
    image: "/why/02-maintainable-code.jpg",
    alt: "Close-up of readable source code in a dark editor",
  },
  {
    number: "03",
    title: "Design that performs",
    description:
      "Interfaces are judged on load time and conversion as much as on how they look.",
    icon: "design",
    image: "/why/03-design-performs.jpg",
    alt: "Designer sketching interface layouts beside a laptop",
  },
  {
    number: "04",
    title: "Fixed or flexible scope",
    description:
      "Fixed-price for defined projects, time-and-materials for products that evolve as you learn.",
    icon: "handshake",
    image: "/why/04-scope-agreement.jpg",
    alt: "Two people shaking hands across a desk",
  },
  {
    number: "05",
    title: "Weekly visibility",
    description:
      "Short sprints, working demos and a shared board — never a surprise at delivery.",
    icon: "gear",
    image: "/why/05-weekly-visibility.jpg",
    alt: "Wireframe sketches and feedback notes pinned to a glass wall",
  },
  {
    number: "06",
    title: "Support after launch",
    description:
      "Monitoring, fixes and iteration once your product is live, not just a handover email.",
    icon: "support",
    image: "/why/06-support-after-launch.jpg",
    alt: "Performance analytics dashboard on a laptop screen",
  },
];
