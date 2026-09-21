export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export const faq: FaqItem[] = [
  {
    id: "timeline",
    question: "How long does a typical project take?",
    answer:
      "A focused marketing site takes 3–6 weeks. A full product or platform usually runs 8–20 weeks, scoped in short sprints so you see progress from week one.",
  },
  {
    id: "pricing-model",
    question: "Do you work fixed-price or time & materials?",
    answer:
      "Both. Fixed-price suits a clearly defined scope; time & materials suits products that evolve as you learn from users.",
  },
  {
    id: "tech-stack",
    question: "What technologies do you build with?",
    answer:
      "We choose the stack for the project rather than forcing one template — commonly React, Next.js, Node, Python and modern cloud infrastructure.",
  },
  {
    id: "existing-codebase",
    question: "Can you take over an existing codebase?",
    answer:
      "Yes. We start with a short technical audit so you know exactly what you're inheriting before we touch anything.",
  },
  {
    id: "post-launch",
    question: "Do you offer support after launch?",
    answer:
      "Every project includes launch support, and we offer ongoing maintenance and feature-iteration packages after that.",
  },
];
