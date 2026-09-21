import type { IconName } from "@/components/Icon";

export type Service = {
  number: string;
  /** URL segment for the service detail page. */
  slug: string;
  title: string;
  description: string;
  /** One-line version used on cards that only have room for a sentence. */
  short: string;
  icon: IconName;
  /** "flagship" services lead the homepage deck; the rest sit under "More capabilities". */
  tier: "flagship" | "more";
  image: string;
  alt: string;
};

export const services: Service[] = [
  {
    number: "01",
    title: "Website Development",
    slug: "website-development",
    short: "Responsive, SEO-ready marketing and product sites.",
    description:
      "Modern, responsive and scalable web applications tailored to your business needs.",
    icon: "code",
    tier: "flagship",
    image: "/services/website-development.jpg",
    alt: "Source code for a website open in an editor",
  },
  {
    number: "02",
    title: "Mobile App Development",
    slug: "mobile-app-development",
    short: "Android and iOS apps built for everyday use.",
    description:
      "User-friendly, high-performance mobile applications for Android and iOS platforms.",
    icon: "phone",
    tier: "flagship",
    image: "/services/mobile-app-development.jpg",
    alt: "A custom mobile app dashboard running on a phone",
  },
  {
    number: "03",
    title: "Cloud Solutions",
    slug: "cloud-solutions",
    short: "Hosting, deployment and infrastructure that scales.",
    description:
      "Secure, scalable and cost-effective cloud services to power your business growth.",
    icon: "cloud",
    tier: "flagship",
    image: "/services/cloud-solutions.jpg",
    alt: "Rows of server cabinets in a modern data centre",
  },
  {
    number: "04",
    title: "Cybersecurity Services",
    slug: "cybersecurity-services",
    short: "Access control, hardening and threat prevention.",
    description:
      "Protect your data and infrastructure with our expert security solutions and threat prevention strategies.",
    icon: "shield",
    tier: "more",
    image: "/services/cybersecurity.jpg",
    alt: "A security and privacy status dashboard",
  },
  {
    number: "05",
    title: "AI Chat Bots",
    slug: "ai-chat-bots",
    short: "Conversational assistants that handle routine support.",
    description:
      "Intelligent and conversational chatbots to automate support, engage users and boost your business.",
    icon: "bot",
    tier: "flagship",
    image: "/services/ai-chatbots.jpg",
    alt: "A conversational AI prompt box on screen",
  },
  {
    number: "06",
    title: "UI/UX Design",
    slug: "ui-ux-design",
    short: "Interfaces designed around how people decide.",
    description:
      "Beautiful and intuitive designs that deliver exceptional user experiences.",
    icon: "design",
    tier: "more",
    image: "/services/ui-ux-design.jpg",
    alt: "A website wireframe sketched on a tablet",
  },
  {
    number: "07",
    title: "IT Consulting & Digital Transformation",
    slug: "it-consulting",
    short: "Strategy for modernising how you operate.",
    description:
      "Strategic guidance to modernize your processes and achieve long-term success.",
    icon: "gear",
    tier: "more",
    image: "/services/it-consulting.jpg",
    alt: "Strategy diagrams drawn on a glass whiteboard",
  },
  {
    number: "08",
    title: "Maintenance & Support",
    slug: "maintenance-support",
    short: "Monitoring, fixes and iteration after launch.",
    description:
      "Continuous support to keep your systems running smoothly and securely.",
    icon: "support",
    tier: "more",
    image: "/services/maintenance-support.jpg",
    alt: "An engineer monitoring systems across two screens",
  },
  {
    number: "09",
    title: "SEO Services",
    short: "Technical SEO, content structure and indexing that compounds.",
    slug: "seo-services",
    description:
      "Technical audits, on-page structure and indexing work that turn a site into a source of enquiries rather than a brochure nobody finds.",
    icon: "bulb",
    tier: "more",
    image: "/services/seo-services.jpg",
    alt: "Analytics charts tracking search performance over time",
  },
  {
    number: "10",
    title: "RAG Application Development",
    short: "AI assistants grounded in your own documents, with citations.",
    slug: "rag-application-development",
    description:
      "Retrieval-augmented applications that answer from your own documents and show their sources, built with the evaluation work that keeps them trustworthy.",
    icon: "bot",
    tier: "more",
    image: "/services/rag-application-development.jpg",
    alt: "Archive boxes lining the shelves of a records room",
  },
  {
    number: "11",
    title: "Landing Page Design",
    short: "Campaign pages that match the ad and convert the click.",
    slug: "landing-page-design",
    description:
      "Focused campaign pages built to match the promise in your ad, load fast and turn paid traffic into enquiries you can measure.",
    icon: "design",
    tier: "more",
    image: "/services/landing-page-design.jpg",
    alt: "Page layouts open across a wide design workspace",
  },
  {
    number: "12",
    title: "Performance Optimization",
    short: "Core Web Vitals work on sites that are already live.",
    slug: "performance-optimization",
    description:
      "Diagnosing and fixing slow pages — load time, interaction delay and layout shift — on sites that are already live and losing visitors to the wait.",
    icon: "gear",
    tier: "more",
    image: "/services/performance-optimization.jpg",
    alt: "A terminal and build output on a developer machine",
  },
];

export const flagshipServices = services.filter((s) => s.tier === "flagship");
export const moreServices = services.filter((s) => s.tier === "more");