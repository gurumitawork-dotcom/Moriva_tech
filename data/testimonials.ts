export type Testimonial = {
  id: string;
  quote: string;
  company: string;
  role: string;
  bg: string;
  rotate: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "odyssey-labs",
    quote:
      "Moriva took a vague brief and turned it into a working product in under three months. The team never needed hand-holding.",
    company: "Odyssey Labs",
    role: "Founder & CEO",
    bg: "rgba(231,240,252,0.65)",
    rotate: "-8deg",
  },
  {
    id: "northbridge-freight",
    quote:
      "They rebuilt our site from scratch and it finally loads fast and ranks. Our sales team actually shares it now.",
    company: "Northbridge Freight",
    role: "Head of Marketing",
    bg: "rgba(253,240,224,0.65)",
    rotate: "4deg",
  },
  {
    id: "vellum-health",
    quote:
      "Clear timelines, weekly demos, no surprises at delivery. That predictability is rare with dev shops.",
    company: "Vellum Health",
    role: "Operations Director",
    bg: "rgba(228,236,250,0.65)",
    rotate: "-3deg",
  },
];
