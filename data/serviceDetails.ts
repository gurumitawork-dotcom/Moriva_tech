import type { IconName } from "@/components/Icon";

export type DetailItem = {
  title: string;
  description: string;
  icon?: IconName;
};

export type ServiceDetail = {
  /** Shown under the breadcrumb, above the h1. */
  tagline: string;
  /** Two-line hero heading; the second half takes the gradient. */
  headingLead: string;
  headingAccent: string;
  intro: string;
  /** Three short proof points under the hero. */
  stats: { value: string; label: string }[];
  /** "Not a template shop" style positioning block. */
  positioning: { heading: string; body: string[] };
  problems: DetailItem[];
  included: DetailItem[];
  stages: DetailItem[];
  features: DetailItem[];
  industries: string[];
  faq: { question: string; answer: string }[];
};

export const serviceDetails: Record<string, ServiceDetail> = {
  "website-development": {
    tagline: "Website development, engineered not templated",
    headingLead: "Built to perform.",
    headingAccent: "Designed to convert.",
    intro:
      "We design and build websites as products: structured around how your customers decide, measured on load time and enquiries, and handed over with the code and documentation to match.",
    stats: [
      { value: "3", label: "Live client sites" },
      { value: "<2s", label: "Load time target" },
      { value: "React", label: "Modern stack" },
    ],
    positioning: {
      heading: "An engineering-led studio, not a template shop",
      body: [
        "Most small business sites are a theme with the colours swapped. They look acceptable on day one and become a liability the moment you need a new section, a faster page or a change no plugin covers.",
        "We write the site. That means the structure matches your business rather than a demo, the pages carry only the code they need, and anything you want next is a change to your own codebase — not a fight with someone else's.",
      ],
    },
    problems: [
      {
        title: "Nobody finds the site",
        description:
          "No page-level SEO, no sitemap, never submitted to Search Console — so the pages are never indexed and the site earns nothing.",
        icon: "bulb",
      },
      {
        title: "Slow on a phone",
        description:
          "Unoptimised images and theme bloat push load times past the point where most visitors give up.",
        icon: "gear",
      },
      {
        title: "Visitors never enquire",
        description:
          "A brochure with a contact page buried at the end, instead of enquiry paths designed into the journey.",
        icon: "handshake",
      },
      {
        title: "Every change needs the agency",
        description:
          "No documentation, no handover, no access — so even small edits come back as an invoice.",
        icon: "code",
      },
    ],
    included: [
      {
        title: "Information architecture",
        description:
          "We map the pages and journeys around how your customers actually decide, before any visual design.",
        icon: "team",
      },
      {
        title: "Interface design",
        description:
          "A coherent visual system and high-fidelity screens, reviewed with you before code starts.",
        icon: "design",
      },
      {
        title: "Frontend build",
        description:
          "React and modern tooling, responsive from phone to desktop, with real content rather than lorem ipsum.",
        icon: "code",
      },
      {
        title: "SEO and sitemaps",
        description:
          "Page-level metadata, semantic structure, an XML sitemap and Search Console submission as part of delivery.",
        icon: "bulb",
      },
      {
        title: "Enquiry flows",
        description:
          "WhatsApp, forms, click-to-call and maps wired into the journey where they make sense.",
        icon: "handshake",
      },
      {
        title: "Deployment and handover",
        description:
          "Hosting configured, domain live, source in your repository and a deployment workflow you can run.",
        icon: "cloud",
      },
    ],
    stages: [
      {
        title: "Marketing site",
        description:
          "A focused site that explains the business and turns search traffic into enquiries. Usually 3–6 weeks.",
        icon: "bulb",
      },
      {
        title: "Catalogue site",
        description:
          "Products or collections with search, filters and per-item enquiry — like the nursery sites in our portfolio.",
        icon: "design",
      },
      {
        title: "Web application",
        description:
          "Accounts, dashboards, data and role-based access when the site needs to do work rather than describe it.",
        icon: "gear",
      },
    ],
    features: [
      {
        title: "Responsive by default",
        description: "Designed for the phone first, because that is where most of your traffic is.",
        icon: "phone",
      },
      {
        title: "Core Web Vitals",
        description: "Image strategy, font loading and build output tuned against real measurements.",
        icon: "gear",
      },
      {
        title: "Semantic markup",
        description: "Proper headings, landmarks and alt text — better for search engines and screen readers alike.",
        icon: "code",
      },
      {
        title: "Analytics ready",
        description: "Search Console and analytics wired in so you can see what the site is actually doing.",
        icon: "bulb",
      },
      {
        title: "Secure delivery",
        description: "HTTPS, managed hosting and dependency hygiene from the first deploy.",
        icon: "shield",
      },
      {
        title: "Support after launch",
        description: "Monitoring, fixes and iteration once real customers are using it.",
        icon: "support",
      },
    ],
    industries: [
      "Retail & nurseries",
      "Healthcare networks",
      "Scientific & research",
      "Professional services",
      "Education",
      "Local services",
    ],
    faq: [
      {
        question: "How long does a website take?",
        answer:
          "A focused marketing site runs 3–6 weeks from discovery to launch. A catalogue site or web application takes longer, scoped in sprints so you see working pages from week one.",
      },
      {
        question: "Do you work on WordPress?",
        answer:
          "We build with React and modern tooling rather than themes and plugins. If you already run WordPress and want it maintained rather than replaced, that falls under Maintenance & Support.",
      },
      {
        question: "Is SEO included?",
        answer:
          "Yes. Page-level SEO, semantic structure, an XML sitemap and Search Console submission ship with the site rather than being sold separately.",
      },
      {
        question: "Who owns the code?",
        answer:
          "You do. The source lives in your repository with the deployment workflow documented, so you are never locked to us for a change.",
      },
    ],
  },

  "mobile-app-development": {
    tagline: "Mobile apps for people who work away from a desk",
    headingLead: "Built for the counter,",
    headingAccent: "not the boardroom.",
    intro:
      "We design and build mobile applications around the person holding the phone — the pharmacist between customers, the field team between sites — so the app fits the job rather than the org chart.",
    stats: [
      { value: "iOS + Android", label: "Both platforms" },
      { value: "Role-aware", label: "Access control" },
      { value: "Live", label: "In member hands" },
    ],
    positioning: {
      heading: "An app is a product, not a port of your website",
      body: [
        "A responsive site wrapped in an app shell is the cheapest thing to build and the first thing users delete. The screens are too dense, the flows assume a keyboard, and nothing works when the signal drops.",
        "We start from the moments the app is actually opened — usually short, one-handed and interrupted — and design the smallest interface that gets that job done. PharmaConnect, the association app we built, exists for exactly those moments.",
      ],
    },
    problems: [
      {
        title: "The web app in a wrapper",
        description:
          "Desktop layouts squeezed onto a phone, with tap targets and forms never meant for thumbs.",
        icon: "phone",
      },
      {
        title: "Everyone sees everything",
        description:
          "No role model, so a retailer, a supplier and an administrator all land on the same screen.",
        icon: "shield",
      },
      {
        title: "Nobody opens it twice",
        description:
          "No clear reason to return, so installs happen once and the app dies on the home screen.",
        icon: "bulb",
      },
      {
        title: "Shipping is a mystery",
        description:
          "No release process, so every update becomes an event rather than a routine.",
        icon: "gear",
      },
    ],
    included: [
      {
        title: "Flow mapping",
        description:
          "We map the handful of jobs the app must do well before designing a single screen.",
        icon: "team",
      },
      {
        title: "Interface design",
        description:
          "Thumb-reachable layouts, legible type and states designed for interruption and poor light.",
        icon: "design",
      },
      {
        title: "App development",
        description:
          "One codebase covering Android and iOS, built against your real data rather than mock screens.",
        icon: "phone",
      },
      {
        title: "Role-based access",
        description:
          "Each member type sees only what belongs to them, enforced on the server as well as the screen.",
        icon: "shield",
      },
      {
        title: "API integration",
        description:
          "Clean contracts with your backend or portal so the app and the web stay in step.",
        icon: "cloud",
      },
      {
        title: "Release and support",
        description:
          "Store submission, versioning and the fixes that follow once real users are in.",
        icon: "support",
      },
    ],
    stages: [
      {
        title: "Companion app",
        description:
          "A mobile front for a system you already run — the pattern behind PharmaConnect.",
        icon: "phone",
      },
      {
        title: "Field tool",
        description:
          "Task, capture and reporting flows for teams working away from a desk.",
        icon: "gear",
      },
      {
        title: "Product app",
        description:
          "Accounts, content and transactions when the app is the business rather than an extension of it.",
        icon: "bulb",
      },
    ],
    features: [
      {
        title: "Offline tolerance",
        description:
          "Sensible behaviour when the connection drops mid-task, not a blank error screen.",
        icon: "cloud",
      },
      {
        title: "Fast cold start",
        description:
          "Opens and is usable in seconds, because most sessions are under a minute.",
        icon: "gear",
      },
      {
        title: "Accessible by default",
        description:
          "Readable type sizes, contrast and touch targets that work for every age of user.",
        icon: "team",
      },
      {
        title: "Secure sessions",
        description:
          "Token handling and role checks done properly rather than hidden in the interface.",
        icon: "shield",
      },
      {
        title: "Analytics ready",
        description:
          "You can see which flows are used and which were built for nobody.",
        icon: "bulb",
      },
      {
        title: "Maintained after launch",
        description:
          "OS updates, store policy changes and fixes handled as routine work.",
        icon: "support",
      },
    ],
    industries: [
      "Healthcare networks",
      "Pharmacy & distribution",
      "Retail & trade bodies",
      "Field services",
      "Membership associations",
      "Professional services",
    ],
    faq: [
      {
        question: "Native or cross-platform?",
        answer:
          "Cross-platform for most business apps — one codebase covering both stores keeps cost and maintenance sane. Native is the right call when the app leans hard on device hardware.",
      },
      {
        question: "Do you handle App Store and Play submission?",
        answer:
          "Yes, including the store listings, review responses and the versioning process for later updates.",
      },
      {
        question: "Can the app share a backend with our website?",
        answer:
          "That is usually the point. PharmaConnect and the association portal share the same roles and directory, so a change in one is reflected in the other.",
      },
      {
        question: "What happens after launch?",
        answer:
          "Operating systems and store policies keep moving, so apps need maintenance. That sits under Maintenance & Support, either as a retainer or per release.",
      },
    ],
  },

  "cloud-solutions": {
    tagline: "Hosting and infrastructure that stays boring",
    headingLead: "Deployed properly.",
    headingAccent: "Quiet ever after.",
    intro:
      "We set up hosting, deployment and environments so shipping a change is routine, the site stays up, and nobody needs to remember which laptop the production files live on.",
    stats: [
      { value: "Firebase", label: "Managed hosting" },
      { value: "Git-based", label: "Deployments" },
      { value: "Zero", label: "Manual uploads" },
    ],
    positioning: {
      heading: "Infrastructure sized to the business, not the brochure",
      body: [
        "Small businesses get sold architecture built for traffic they will never see — clusters, queues and dashboards that cost money monthly and solve nothing.",
        "We pick the smallest arrangement that meets the actual load, automate the deployment and document it. The nursery sites run on managed hosting with a Git workflow; the analysis suite runs a Python service beside its frontend. Each is as complex as it needs to be and no more.",
      ],
    },
    problems: [
      {
        title: "Deploys happen by hand",
        description:
          "Files dragged across from one person's machine, with no record of what changed or how to undo it.",
        icon: "gear",
      },
      {
        title: "Nobody owns the account",
        description:
          "Hosting and domains registered under a former contractor, with no access when something breaks.",
        icon: "shield",
      },
      {
        title: "Paying for air",
        description:
          "Servers sized for imagined traffic, running months after the project that needed them ended.",
        icon: "cloud",
      },
      {
        title: "No environments",
        description:
          "Every change tested in production, because there is nowhere else to try it.",
        icon: "code",
      },
    ],
    included: [
      {
        title: "Hosting setup",
        description:
          "Managed platforms chosen for the workload, with domains, HTTPS and DNS configured properly.",
        icon: "cloud",
      },
      {
        title: "Deployment pipeline",
        description:
          "Push to the repository, the site builds and goes live — repeatable and reversible.",
        icon: "gear",
      },
      {
        title: "Environments",
        description:
          "A place to test changes that is not your live site, with data close enough to be useful.",
        icon: "code",
      },
      {
        title: "Backups and recovery",
        description:
          "A tested answer to what happens when something is deleted or a deploy goes wrong.",
        icon: "shield",
      },
      {
        title: "Monitoring",
        description:
          "Uptime and error visibility, so you hear about problems from us rather than a customer.",
        icon: "bulb",
      },
      {
        title: "Ownership handover",
        description:
          "Accounts in your name, credentials documented and access transferred at the end.",
        icon: "handshake",
      },
    ],
    stages: [
      {
        title: "Static site hosting",
        description:
          "Managed hosting with a CDN and a Git deploy workflow — right for most marketing and catalogue sites.",
        icon: "cloud",
      },
      {
        title: "Application hosting",
        description:
          "A frontend plus an API service, as with the React and FastAPI split behind the EIS analyzer.",
        icon: "gear",
      },
      {
        title: "Platform infrastructure",
        description:
          "Databases, storage, background jobs and environments for systems with accounts and data.",
        icon: "code",
      },
    ],
    features: [
      {
        title: "HTTPS everywhere",
        description:
          "Certificates issued and renewed automatically, with no expiry surprises.",
        icon: "shield",
      },
      {
        title: "CDN delivery",
        description:
          "Assets served close to the visitor rather than from one distant origin.",
        icon: "cloud",
      },
      {
        title: "Rollback",
        description:
          "A bad deploy is reverted in a click, because every release is versioned.",
        icon: "gear",
      },
      {
        title: "Right-sized cost",
        description:
          "Infrastructure matched to real load, reviewed rather than left to grow quietly.",
        icon: "bulb",
      },
      {
        title: "Documented",
        description:
          "How it is built and how to run it, written down for whoever comes next.",
        icon: "code",
      },
      {
        title: "Monitored",
        description:
          "Uptime and errors watched after launch, not just on the day it went live.",
        icon: "support",
      },
    ],
    industries: [
      "Retail & nurseries",
      "Scientific & research",
      "Healthcare networks",
      "Professional services",
      "Education",
      "Local services",
    ],
    faq: [
      {
        question: "Which cloud provider do you use?",
        answer:
          "Whichever fits the workload. Managed platforms like Firebase for static sites, a service host for Python or Node APIs, and the larger providers only when the project genuinely needs them.",
      },
      {
        question: "Can you move our existing site?",
        answer:
          "Yes. Migrations usually mean taking ownership of domains and DNS, standing the site up on new hosting, and cutting over with minimal downtime.",
      },
      {
        question: "Will we be locked in to you?",
        answer:
          "No. Accounts are registered in your name and the setup is documented, so another team could take it over tomorrow.",
      },
      {
        question: "Do you manage ongoing hosting costs?",
        answer:
          "We can either hand the billing to you or manage it within a support retainer, with the costs itemised either way.",
      },
    ],
  },

  "cybersecurity-services": {
    tagline: "Security work sized for a real business",
    headingLead: "Locked down,",
    headingAccent: "without the theatre.",
    intro:
      "Access control, hardening and sensible handling of the data you hold — the practical security work that keeps a members' portal or a customer database out of trouble.",
    stats: [
      { value: "8", label: "Member roles secured" },
      { value: "Server-side", label: "Access checks" },
      { value: "HTTPS", label: "By default" },
    ],
    positioning: {
      heading: "Most breaches are not sophisticated",
      body: [
        "The systems we are asked to look at rarely fail to a clever attack. They fail because a shared password was reused, an admin route was protected only by hiding the link, or a dependency sat unpatched for two years.",
        "We fix that class of problem first. On the pharmacy portal that meant eight member types with genuinely separate access, enforced on the server rather than in the interface — so a retailer cannot reach a wholesaler's records by editing a URL.",
      ],
    },
    problems: [
      {
        title: "Security by obscurity",
        description:
          "Admin pages protected only by an unlinked URL, which anyone can reach once they guess it.",
        icon: "shield",
      },
      {
        title: "Shared logins",
        description:
          "One account passed around the team, so nothing can be traced and nobody can be removed.",
        icon: "team",
      },
      {
        title: "Unpatched dependencies",
        description:
          "Libraries years out of date, carrying published vulnerabilities that anyone can look up.",
        icon: "code",
      },
      {
        title: "Data kept without a reason",
        description:
          "Customer records collected and stored indefinitely because nobody decided what to keep.",
        icon: "bulb",
      },
    ],
    included: [
      {
        title: "Access review",
        description:
          "Who can reach what, checked against what each role should actually be able to do.",
        icon: "shield",
      },
      {
        title: "Authentication",
        description:
          "Proper sessions, password handling and account recovery that cannot be talked around.",
        icon: "code",
      },
      {
        title: "Role-based permissions",
        description:
          "Rules enforced on the server for every request, not applied by hiding buttons.",
        icon: "team",
      },
      {
        title: "Dependency hygiene",
        description:
          "An inventory of what the system depends on and a routine for keeping it current.",
        icon: "gear",
      },
      {
        title: "Transport and storage",
        description:
          "HTTPS everywhere, secrets kept out of the codebase and sensitive fields handled deliberately.",
        icon: "cloud",
      },
      {
        title: "Incident readiness",
        description:
          "Backups that have been restored at least once, and a written answer to what happens if.",
        icon: "support",
      },
    ],
    stages: [
      {
        title: "Review",
        description:
          "A read of the system as it stands, with findings ranked by what an attacker would reach first.",
        icon: "bulb",
      },
      {
        title: "Hardening",
        description:
          "Fixing the findings: access rules, authentication, dependencies and configuration.",
        icon: "shield",
      },
      {
        title: "Ongoing care",
        description:
          "Patching, monitoring and periodic review, because security is a habit rather than a project.",
        icon: "support",
      },
    ],
    features: [
      {
        title: "Least privilege",
        description:
          "Each role gets the narrowest access that lets it do the job, and nothing beyond.",
        icon: "shield",
      },
      {
        title: "Audit trail",
        description:
          "Who did what and when, so an incident can actually be investigated.",
        icon: "code",
      },
      {
        title: "Secrets management",
        description:
          "Keys and credentials kept out of the repository and rotated when people move on.",
        icon: "gear",
      },
      {
        title: "Tested backups",
        description:
          "Restores practised rather than assumed, because an untested backup is a guess.",
        icon: "cloud",
      },
      {
        title: "Sensible data retention",
        description:
          "A decision about what is kept and for how long, rather than keeping everything forever.",
        icon: "bulb",
      },
      {
        title: "Handover documentation",
        description:
          "The security model written down so your team can maintain it without us.",
        icon: "team",
      },
    ],
    industries: [
      "Healthcare networks",
      "Pharmacy & distribution",
      "Membership associations",
      "Professional services",
      "Education",
      "Local services",
    ],
    faq: [
      {
        question: "Do you do penetration testing?",
        answer:
          "We do practical review and hardening rather than formal certified pen testing. If you need a certified test for compliance, we will prepare the system for it and fix what comes back.",
      },
      {
        question: "Can you work on a system you did not build?",
        answer:
          "Yes. A review of an existing system is usually where this starts, and the findings decide what is worth fixing first.",
      },
      {
        question: "Is this needed for a small business site?",
        answer:
          "A brochure site needs HTTPS and current dependencies. Anything holding customer or member data needs the rest of it.",
      },
      {
        question: "What about compliance?",
        answer:
          "We can align the build to a standard you have to meet, but we are engineers rather than auditors — certification is a separate exercise.",
      },
    ],
  },

  "ai-chat-bots": {
    tagline: "Assistants that answer, then get out of the way",
    headingLead: "Fewer repeat questions.",
    headingAccent: "More real conversations.",
    intro:
      "Conversational assistants that handle the questions your team answers twenty times a week, and hand over cleanly to a person the moment the question is worth a person.",
    stats: [
      { value: "24/7", label: "First response" },
      { value: "Scoped", label: "To your content" },
      { value: "Handover", label: "To a human" },
    ],
    positioning: {
      heading: "A bot that says nothing is worse than no bot",
      body: [
        "Most business chatbots are a keyword tree wearing a friendly face. They fail on the second question, cannot say they do not know, and trap the customer in a loop with no way to reach anyone.",
        "We scope an assistant to what your business actually publishes — services, hours, stock, process — give it a clear boundary, and design the handover so a real question reaches a real person quickly.",
      ],
    },
    problems: [
      {
        title: "The same twenty questions",
        description:
          "Staff time spent retyping opening hours, pricing basics and availability, every single day.",
        icon: "headset",
      },
      {
        title: "Enquiries arrive after hours",
        description:
          "Interest at 10pm goes unanswered until morning, by which point the customer has moved on.",
        icon: "bulb",
      },
      {
        title: "Bots that make things up",
        description:
          "An assistant with no boundary invents answers about pricing or availability, and you carry the consequence.",
        icon: "shield",
      },
      {
        title: "No way to reach a person",
        description:
          "The customer with a real problem is stuck in a loop with no exit to a human.",
        icon: "team",
      },
    ],
    included: [
      {
        title: "Scope definition",
        description:
          "We agree what the assistant answers and what it must always hand over, before building anything.",
        icon: "bulb",
      },
      {
        title: "Knowledge setup",
        description:
          "Grounding it in your real content so answers reflect your business rather than the open internet.",
        icon: "code",
      },
      {
        title: "Conversation design",
        description:
          "Prompts, tone and fallbacks written so it sounds like your business and admits what it does not know.",
        icon: "design",
      },
      {
        title: "Handover to a person",
        description:
          "A clean route to WhatsApp, email or a form, carrying the conversation context with it.",
        icon: "handshake",
      },
      {
        title: "Integration",
        description:
          "Embedded in your site or app, matched to your interface rather than a third-party bubble.",
        icon: "phone",
      },
      {
        title: "Review and tuning",
        description:
          "Reading real transcripts after launch and fixing what the assistant handled badly.",
        icon: "support",
      },
    ],
    stages: [
      {
        title: "FAQ assistant",
        description:
          "Answers the common questions and routes everything else to you. The right starting point for most businesses.",
        icon: "headset",
      },
      {
        title: "Enquiry qualifier",
        description:
          "Asks the few questions you would ask first, then hands over a conversation worth having.",
        icon: "handshake",
      },
      {
        title: "Internal assistant",
        description:
          "Pointed at your own documents so staff can find process and policy answers quickly.",
        icon: "team",
      },
    ],
    features: [
      {
        title: "Grounded answers",
        description:
          "Responses come from your content, with a boundary on what it will speak to.",
        icon: "shield",
      },
      {
        title: "Knows when to stop",
        description:
          "Says it does not know and offers a person, instead of guessing confidently.",
        icon: "bulb",
      },
      {
        title: "Context carried over",
        description:
          "The handover includes what was already said, so the customer is not asked twice.",
        icon: "handshake",
      },
      {
        title: "Transcript review",
        description:
          "Conversations are readable, so you can see what people actually ask.",
        icon: "code",
      },
      {
        title: "On-brand voice",
        description:
          "Written to sound like your business rather than a generic support bot.",
        icon: "design",
      },
      {
        title: "Cost visibility",
        description:
          "Usage and model costs surfaced up front, so the running cost is never a surprise.",
        icon: "gear",
      },
    ],
    industries: [
      "Retail & nurseries",
      "Healthcare networks",
      "Membership associations",
      "Professional services",
      "Education",
      "Local services",
    ],
    faq: [
      {
        question: "Will it make things up?",
        answer:
          "That is the main risk with assistants, so we scope it to your content, define what it must not answer, and route anything outside that to a person.",
      },
      {
        question: "What does it cost to run?",
        answer:
          "There is a per-conversation model cost on top of hosting. We size it against your expected volume before you commit, so the monthly figure is known in advance.",
      },
      {
        question: "Can it work on WhatsApp?",
        answer:
          "It can hand conversations to WhatsApp, which is usually the right pattern here — the assistant filters, a person closes.",
      },
      {
        question: "Do we need one at all?",
        answer:
          "Often not. If your enquiry volume is low, better contact paths and a clear FAQ page will do more for less. We will say so.",
      },
    ],
  },

  "ui-ux-design": {
    tagline: "Interface design judged on what people do",
    headingLead: "Designed to be used,",
    headingAccent: "not just admired.",
    intro:
      "We design interfaces around how people actually decide — what they came for, what they need to see, and the smallest number of steps between those two things.",
    stats: [
      { value: "Sketch first", label: "Before code" },
      { value: "Reviewed", label: "With you" },
      { value: "Systems", label: "Not one-offs" },
    ],
    positioning: {
      heading: "Design is the shape of the decision",
      body: [
        "Design gets treated as the paint at the end — the part that makes a finished build look nicer. By then the structure has already decided whether the thing is usable.",
        "We design before the build, from the journey inward: what a nursery customer needs to choose a plant, what a lab user needs to read a measurement. The visual system comes after that, and it comes as a system rather than a set of screens.",
      ],
    },
    problems: [
      {
        title: "Pretty but unusable",
        description:
          "A polished visual layer over a structure that makes people hunt for the one thing they came for.",
        icon: "design",
      },
      {
        title: "Every screen is a one-off",
        description:
          "No shared components, so buttons, spacing and type drift apart and the build slows down.",
        icon: "code",
      },
      {
        title: "Designed for the brochure",
        description:
          "Screens that demo well on a wide monitor and fall apart on the phone people actually carry.",
        icon: "phone",
      },
      {
        title: "Nobody can read it",
        description:
          "Low contrast, tiny type and colour used as the only signal — fine for the designer, hard for everyone else.",
        icon: "team",
      },
    ],
    included: [
      {
        title: "Journey mapping",
        description:
          "The steps someone takes to get what they came for, before any screen is drawn.",
        icon: "team",
      },
      {
        title: "Wireframes",
        description:
          "Structure and hierarchy settled in low fidelity, where changes cost minutes rather than days.",
        icon: "bulb",
      },
      {
        title: "Visual system",
        description:
          "Type scale, colour, spacing and states defined once and applied everywhere.",
        icon: "design",
      },
      {
        title: "High-fidelity screens",
        description:
          "The real thing with real content, reviewed with you before engineering starts.",
        icon: "code",
      },
      {
        title: "Responsive behaviour",
        description:
          "How every layout reflows from phone to desktop, specified rather than left to chance.",
        icon: "phone",
      },
      {
        title: "Handover to build",
        description:
          "Components, tokens and states documented so the build matches the design.",
        icon: "handshake",
      },
    ],
    stages: [
      {
        title: "Marketing site design",
        description:
          "Brand-led pages designed to explain a business and prompt an enquiry.",
        icon: "bulb",
      },
      {
        title: "Product interface",
        description:
          "Dashboards, data views and forms where people will spend real working hours.",
        icon: "gear",
      },
      {
        title: "Design system",
        description:
          "A reusable component and token set, for when screens will keep being added.",
        icon: "design",
      },
    ],
    features: [
      {
        title: "Mobile first",
        description:
          "The narrow layout is designed first, because that is where most people arrive.",
        icon: "phone",
      },
      {
        title: "Accessible contrast",
        description:
          "Type sizes and colour pairings checked against real legibility, not taste alone.",
        icon: "team",
      },
      {
        title: "Every state designed",
        description:
          "Empty, loading, error and success — the states that decide how a product feels.",
        icon: "code",
      },
      {
        title: "Consistent by construction",
        description:
          "Shared tokens mean the fiftieth screen still matches the first.",
        icon: "design",
      },
      {
        title: "Built to hand over",
        description:
          "Designs that an engineer can build without guessing at spacing or behaviour.",
        icon: "handshake",
      },
      {
        title: "Measured after launch",
        description:
          "We look at what people actually do and adjust, rather than defending the original design.",
        icon: "bulb",
      },
    ],
    industries: [
      "Retail & nurseries",
      "Scientific & research",
      "Healthcare networks",
      "Membership associations",
      "Professional services",
      "Education",
    ],
    faq: [
      {
        question: "Can you design without building?",
        answer:
          "Yes. We hand over a documented design system and screens your own engineers can build from.",
      },
      {
        question: "Do you redesign existing products?",
        answer:
          "Often. That usually starts with a review of where people get stuck, so the redesign fixes real problems rather than refreshing the paint.",
      },
      {
        question: "Will we see it before it is built?",
        answer:
          "Always. Wireframes first, then high-fidelity screens, both reviewed with you. Nothing goes to engineering unseen.",
      },
      {
        question: "Do you provide brand identity?",
        answer:
          "We work within an existing identity and extend it into a digital system. A full brand identity from scratch is a different discipline and we will say so.",
      },
    ],
  },

  "it-consulting": {
    tagline: "Straight answers before anyone writes code",
    headingLead: "Advice you can act on,",
    headingAccent: "not a deck.",
    intro:
      "Where to modernise, what to leave alone, and what it will realistically cost — the thinking that happens before a build, from people who will also have to build it.",
    stats: [
      { value: "Build-side", label: "Advice" },
      { value: "Written", label: "Recommendations" },
      { value: "No", label: "Vendor kickbacks" },
    ],
    positioning: {
      heading: "Advice from people who have to live with it",
      body: [
        "Consultancy that never ships tends to recommend whatever is fashionable, then leaves before the consequences arrive. The report reads well and the build team inherits the problems.",
        "We give the same advice we would follow ourselves, because we usually do. That includes telling you when a project is not worth doing, when your current system is fine, and when the cheaper option is the right one.",
      ],
    },
    problems: [
      {
        title: "Nobody can say what it costs",
        description:
          "A project everyone wants and nobody can size, so it never starts or starts badly.",
        icon: "bulb",
      },
      {
        title: "Tools bought, never adopted",
        description:
          "Licences paid for annually and used by nobody, because the process never changed.",
        icon: "gear",
      },
      {
        title: "Manual work everywhere",
        description:
          "Spreadsheets rekeyed between systems because the two were never connected.",
        icon: "code",
      },
      {
        title: "One person holds it all",
        description:
          "The whole operation depends on somebody who has never written any of it down.",
        icon: "team",
      },
    ],
    included: [
      {
        title: "Current-state review",
        description:
          "What you run, what it costs and where the actual friction is — from talking to the people using it.",
        icon: "bulb",
      },
      {
        title: "Options and trade-offs",
        description:
          "Two or three realistic routes with honest costs, not one recommendation with a price attached.",
        icon: "team",
      },
      {
        title: "Technical architecture",
        description:
          "What to build, what to buy and what to integrate, with the reasoning written down.",
        icon: "cloud",
      },
      {
        title: "Roadmap",
        description:
          "Sequenced so early work pays for the later work, rather than a big-bang release.",
        icon: "gear",
      },
      {
        title: "Automation review",
        description:
          "The manual steps worth removing first, measured by hours rather than novelty.",
        icon: "bot",
      },
      {
        title: "Documentation",
        description:
          "Findings and decisions in writing, so they survive the meeting and the people in it.",
        icon: "code",
      },
    ],
    stages: [
      {
        title: "Discovery engagement",
        description:
          "A short, fixed-price review that ends in a written recommendation you can act on or shelve.",
        icon: "bulb",
      },
      {
        title: "Architecture and planning",
        description:
          "Deeper design work for a specific build, producing scope, sequence and cost.",
        icon: "gear",
      },
      {
        title: "Ongoing advisory",
        description:
          "A technical voice in the room for teams without one, on a light retainer.",
        icon: "team",
      },
    ],
    features: [
      {
        title: "Vendor neutral",
        description:
          "No referral fees, so the recommendation is not quietly shaped by someone else.",
        icon: "shield",
      },
      {
        title: "Costed honestly",
        description:
          "Ranges rather than false precision, with the assumptions behind each number stated.",
        icon: "bulb",
      },
      {
        title: "Written down",
        description:
          "Recommendations you can circulate, question and revisit in six months.",
        icon: "code",
      },
      {
        title: "Sequenced",
        description:
          "What to do first, and what can wait without hurting anything.",
        icon: "gear",
      },
      {
        title: "Willing to say no",
        description:
          "If the answer is to keep what you have, that is the answer you get.",
        icon: "handshake",
      },
      {
        title: "Build-ready",
        description:
          "The output is enough to brief any competent team, including one that is not us.",
        icon: "team",
      },
    ],
    industries: [
      "Healthcare networks",
      "Pharmacy & distribution",
      "Retail & nurseries",
      "Membership associations",
      "Professional services",
      "Education",
    ],
    faq: [
      {
        question: "Do we have to build with you afterwards?",
        answer:
          "No. The recommendation is written so any competent team can act on it. Plenty of clients take it in-house.",
      },
      {
        question: "How long does a review take?",
        answer:
          "A focused discovery engagement is usually one to three weeks depending on how many systems and people are involved.",
      },
      {
        question: "Is this worth it for a small business?",
        answer:
          "It is worth it when a decision is expensive or hard to reverse. For a straightforward website, skip it and talk to us about the build.",
      },
      {
        question: "What do we actually receive?",
        answer:
          "A written document: current state, options with trade-offs, a recommended route, sequencing and cost ranges.",
      },
    ],
  },

  "maintenance-support": {
    tagline: "Care after launch, not just at it",
    headingLead: "Still working",
    headingAccent: "a year from now.",
    intro:
      "Monitoring, fixes, updates and small improvements once the product is live and earning — the part most agencies treat as a handover email.",
    stats: [
      { value: "Live", label: "Sites monitored" },
      { value: "Same team", label: "That built it" },
      { value: "Documented", label: "Every change" },
    ],
    positioning: {
      heading: "Launch is the start of the useful life",
      body: [
        "A product goes live and the work quietly stops. Dependencies age, certificates lapse, a form breaks after a browser update, and nobody notices until a customer says so.",
        "We stay with what we build. That means patching, monitoring, fixing what real use exposes, and making the small improvements that are obvious only once people are actually using it.",
      ],
    },
    problems: [
      {
        title: "Nobody is watching",
        description:
          "The site goes down on a Saturday and stays down until someone happens to visit it.",
        icon: "bulb",
      },
      {
        title: "Aging dependencies",
        description:
          "A build that cannot be updated safely, because nothing has been touched since launch.",
        icon: "code",
      },
      {
        title: "Silent breakage",
        description:
          "An enquiry form failing for weeks, with the lost enquiries never showing up anywhere.",
        icon: "shield",
      },
      {
        title: "Small change, big quote",
        description:
          "Every minor edit priced as a project, so the site slowly stops reflecting the business.",
        icon: "handshake",
      },
    ],
    included: [
      {
        title: "Uptime monitoring",
        description:
          "Automated checks that tell us the site is down before your customers do.",
        icon: "bulb",
      },
      {
        title: "Security updates",
        description:
          "Dependencies and platform patches applied on a routine rather than after an incident.",
        icon: "shield",
      },
      {
        title: "Bug fixes",
        description:
          "What real use exposes, fixed with an agreed response time depending on severity.",
        icon: "gear",
      },
      {
        title: "Content and small changes",
        description:
          "Copy, images, new pages and sections — included up to an agreed monthly allowance.",
        icon: "design",
      },
      {
        title: "Backups",
        description:
          "Taken regularly and restored occasionally, so we know they work.",
        icon: "cloud",
      },
      {
        title: "Reporting",
        description:
          "What changed, what broke and what it means, in plain language each month.",
        icon: "code",
      },
    ],
    stages: [
      {
        title: "Essential care",
        description:
          "Monitoring, patching and backups. The minimum for anything with your name on it.",
        icon: "shield",
      },
      {
        title: "Active support",
        description:
          "The above plus a monthly allowance for fixes, content and small improvements.",
        icon: "support",
      },
      {
        title: "Ongoing development",
        description:
          "A standing share of our week for products that keep evolving after launch.",
        icon: "gear",
      },
    ],
    features: [
      {
        title: "Same people",
        description:
          "Supported by the team that built it, so nobody has to learn the codebase first.",
        icon: "team",
      },
      {
        title: "Agreed response times",
        description:
          "Severity levels with response windows, written down rather than implied.",
        icon: "handshake",
      },
      {
        title: "No lock-in",
        description:
          "Your code, your accounts. The retainer is monthly and you can stop it.",
        icon: "shield",
      },
      {
        title: "Version controlled",
        description:
          "Every change tracked and reversible, including the small ones.",
        icon: "code",
      },
      {
        title: "Proactive, not reactive",
        description:
          "We raise what we notice rather than waiting to be asked.",
        icon: "bulb",
      },
      {
        title: "Also for sites we did not build",
        description:
          "After a review to see what we would be taking on.",
        icon: "support",
      },
    ],
    industries: [
      "Retail & nurseries",
      "Healthcare networks",
      "Scientific & research",
      "Membership associations",
      "Professional services",
      "Local services",
    ],
    faq: [
      {
        question: "Do you support sites you did not build?",
        answer:
          "Usually yes, after a short review. Some inherited builds are cheaper to replace than maintain, and we will tell you which one you have.",
      },
      {
        question: "How is it priced?",
        answer:
          "A monthly retainer sized to the product and the allowance you want for changes. Larger pieces of work are quoted separately.",
      },
      {
        question: "What response time do we get?",
        answer:
          "It depends on severity: a site being down is treated differently from a copy change. The tiers are agreed before the retainer starts.",
      },
      {
        question: "Can we stop?",
        answer:
          "Yes. It is monthly, your accounts are in your name and the setup is documented, so leaving is straightforward.",
      },
    ],
  },

  "seo-services": {
    tagline: "SEO with an engineer attached",
    headingLead: "Found by the people",
    headingAccent: "already looking.",
    intro:
      "Technical audits, page structure and indexing work that turn a site into a steady source of enquiries — measured on what arrives, not on a ranking screenshot.",
    stats: [
      { value: "Search Console", label: "Wired in" },
      { value: "Sitemaps", label: "Maintained" },
      { value: "Indexed", label: "Page by page" },
    ],
    positioning: {
      heading: "An engineering-aware SEO partner, not a ranking racket",
      body: [
        "Most SEO retainers sell reports. Positions move a little, traffic is claimed as a win, and nobody looks at whether a single extra customer got in touch.",
        "We come at it from the build side, because the usual blockers are technical: pages that are never indexed, a sitemap nobody submitted, a slow page that visitors abandon before it renders. Fix those and content has somewhere to land.",
      ],
    },
    problems: [
      {
        title: "Invisible technical debt",
        description:
          "Pages blocked, duplicated or missing from the sitemap, so search engines never see the work you paid for.",
        icon: "code",
      },
      {
        title: "Content with no buyer behind it",
        description:
          "Articles written for a keyword tool rather than for the person deciding whether to call you.",
        icon: "bulb",
      },
      {
        title: "Page experience drag",
        description:
          "Slow loads and shifting layouts that push visitors back to the results page before they read anything.",
        icon: "gear",
      },
      {
        title: "Reporting with no outcome",
        description:
          "Monthly rank charts that never connect to enquiries, so nobody can tell if it is working.",
        icon: "handshake",
      },
    ],
    included: [
      {
        title: "Technical audit",
        description:
          "Crawl and index diagnostics: what search engines can reach, what they ignore and why.",
        icon: "code",
      },
      {
        title: "On-page structure",
        description:
          "Titles, headings, metadata and internal links set so each page has one clear job.",
        icon: "design",
      },
      {
        title: "Content architecture",
        description:
          "Pages organised around what customers actually search for, rather than your internal wording.",
        icon: "bulb",
      },
      {
        title: "Schema and structured data",
        description:
          "Marking up services, locations and questions so results carry more than a blue link.",
        icon: "gear",
      },
      {
        title: "Sitemaps and Search Console",
        description:
          "XML sitemaps maintained and submitted, with indexing watched rather than assumed.",
        icon: "cloud",
      },
      {
        title: "Page experience",
        description:
          "Core Web Vitals treated as an SEO input, because a slow page loses the visit anyway.",
        icon: "support",
      },
    ],
    stages: [
      {
        title: "Technical recovery",
        description:
          "A focused sprint when pages are not indexed or the site was rebuilt and rankings fell away.",
        icon: "gear",
      },
      {
        title: "Launch SEO",
        description:
          "Structure, metadata and sitemaps built into a new site so it starts indexed rather than invisible.",
        icon: "bulb",
      },
      {
        title: "Ongoing program",
        description:
          "Content and technical work continuing month to month, reported against enquiries.",
        icon: "support",
      },
    ],
    features: [
      {
        title: "Crawl and index diagnostics",
        description:
          "What is indexed, what is blocked and what is duplicated, established before anything is rewritten.",
        icon: "code",
      },
      {
        title: "Core Web Vitals alignment",
        description:
          "Load, interaction and layout stability treated as ranking inputs, not separate work.",
        icon: "gear",
      },
      {
        title: "Schema implementation",
        description:
          "Structured data for the entities that matter to your business.",
        icon: "design",
      },
      {
        title: "Internal linking",
        description:
          "Pages connected so authority reaches the ones that actually earn enquiries.",
        icon: "team",
      },
      {
        title: "Local signals",
        description:
          "Location, hours and map presence handled for businesses customers visit in person.",
        icon: "handshake",
      },
      {
        title: "Honest reporting",
        description:
          "Indexed pages, search impressions and enquiries — not a vanity rank chart.",
        icon: "bulb",
      },
    ],
    industries: [
      "Retail & nurseries",
      "Healthcare networks",
      "Professional services",
      "Education",
      "Local services",
      "Membership associations",
    ],
    faq: [
      {
        question: "How long before we see results?",
        answer:
          "Technical fixes can show within weeks once pages get indexed. Content-led growth is a few months. Anyone promising page one in thirty days is selling something else.",
      },
      {
        question: "Do you guarantee rankings?",
        answer:
          "No, and neither can anyone else. We guarantee the work: pages indexed, structure sound, speed fixed, sitemaps submitted and progress reported honestly.",
      },
      {
        question: "Can you work on a site you did not build?",
        answer:
          "Yes. That is most of this work, and it starts with an audit of what is actually blocking the site.",
      },
      {
        question: "Is SEO included with a new website?",
        answer:
          "The foundations are — structure, metadata, sitemaps and Search Console submission ship with every site we build. An ongoing program is separate.",
      },
    ],
  },

  "rag-application-development": {
    tagline: "AI that answers from your documents, with sources",
    headingLead: "Answers you can",
    headingAccent: "trace back.",
    intro:
      "Retrieval-augmented applications that answer from your own material and cite where each answer came from, with the evaluation work that tells you whether they are right.",
    stats: [
      { value: "Cited", label: "Every answer" },
      { value: "Evaluated", label: "Before launch" },
      { value: "Your data", label: "Not the open web" },
    ],
    positioning: {
      heading: "An evaluation-led approach, not a prompt and a demo",
      body: [
        "A RAG demo is easy: load some documents, wire up a model, ask a question it happens to answer well. The demo convinces everyone, and the problems only appear once real people ask real questions.",
        "The hard part is retrieval quality, and the only way to know it works is to measure it. We build the ingestion and retrieval properly, then test against a question set drawn from your actual users before anything goes live.",
      ],
    },
    problems: [
      {
        title: "Naive chunking",
        description:
          "Documents split by character count, cutting tables and clauses in half so retrieved passages make no sense.",
        icon: "code",
      },
      {
        title: "Retrieval that misses",
        description:
          "The answer is in the corpus, but the right passage never surfaces — so the model invents one.",
        icon: "bulb",
      },
      {
        title: "No evaluation before launch",
        description:
          "Nobody measured accuracy, so the first real test is a user discovering it is wrong.",
        icon: "shield",
      },
      {
        title: "No citations",
        description:
          "Confident answers with nothing to check them against, which is worse than no answer at all.",
        icon: "handshake",
      },
    ],
    included: [
      {
        title: "Knowledge ingestion",
        description:
          "Pipelines that take your documents and prepare them properly, respecting structure and tables.",
        icon: "cloud",
      },
      {
        title: "Content-aware chunking",
        description:
          "Splitting along real boundaries — sections, clauses, rows — rather than an arbitrary character count.",
        icon: "code",
      },
      {
        title: "Vector store setup",
        description:
          "Embedding choice and index configuration matched to your content and query patterns.",
        icon: "gear",
      },
      {
        title: "Retrieval and reranking",
        description:
          "Hybrid search plus reranking so the passage that answers the question is the one that reaches the model.",
        icon: "bulb",
      },
      {
        title: "Grounded generation",
        description:
          "Answers constrained to retrieved material, with citations back to the source document.",
        icon: "shield",
      },
      {
        title: "Evaluation harness",
        description:
          "A question set with expected answers, so accuracy is measured before launch and after each change.",
        icon: "team",
      },
    ],
    stages: [
      {
        title: "Internal knowledge search",
        description:
          "Staff asking questions of policies, processes and manuals instead of hunting through folders.",
        icon: "team",
      },
      {
        title: "Customer-facing assistant",
        description:
          "Public answers grounded in your published material, with a clean handover to a person.",
        icon: "headset",
      },
      {
        title: "Document analysis",
        description:
          "Extracting and comparing across a corpus — contracts, reports, records — with sources attached.",
        icon: "code",
      },
    ],
    features: [
      {
        title: "Content-aware chunking",
        description:
          "Structure preserved, so a retrieved passage is intelligible on its own.",
        icon: "code",
      },
      {
        title: "Embedding selection",
        description:
          "The model chosen against your content rather than whichever is fashionable.",
        icon: "bot",
      },
      {
        title: "Hybrid search",
        description:
          "Keyword and semantic retrieval together, because either alone misses a class of question.",
        icon: "bulb",
      },
      {
        title: "Reranking",
        description:
          "A second pass that puts the genuinely relevant passage first.",
        icon: "gear",
      },
      {
        title: "Citations in the answer",
        description:
          "Every claim traceable to a document, so a user can verify rather than trust.",
        icon: "shield",
      },
      {
        title: "Measured accuracy",
        description:
          "A number you can point at, tracked as the corpus and the prompts change.",
        icon: "team",
      },
    ],
    industries: [
      "Healthcare networks",
      "Membership associations",
      "Scientific & research",
      "Professional services",
      "Education",
      "Pharmacy & distribution",
    ],
    faq: [
      {
        question: "How is this different from a chatbot?",
        answer:
          "A chatbot answers from what the model already knows. A RAG application retrieves from your documents first and answers from those, with citations — which is what makes it usable for policy, product or clinical material.",
      },
      {
        question: "Where does our data go?",
        answer:
          "That is a design decision we make with you up front, covering which model provider is used, what leaves your infrastructure and what is retained.",
      },
      {
        question: "How do we know it is accurate?",
        answer:
          "We build an evaluation set from real questions with known answers and measure against it before launch. Without that number, nobody is in a position to claim it works.",
      },
      {
        question: "What does it cost to run?",
        answer:
          "Embedding and generation costs scale with usage, plus hosting for the vector store. We size it against expected volume before you commit.",
      },
    ],
  },

  "landing-page-design": {
    tagline: "Campaign pages that finish what the ad started",
    headingLead: "The click is paid for.",
    headingAccent: "Do not waste it.",
    intro:
      "Focused campaign pages that carry the promise from your ad through to the form, load fast on a phone, and are built so you can test what actually converts.",
    stats: [
      { value: "Message match", label: "Ad to page" },
      { value: "One goal", label: "Per page" },
      { value: "Measured", label: "Not assumed" },
    ],
    positioning: {
      heading: "A landing page is a continuation of the ad",
      body: [
        "Most campaign traffic lands on a homepage or a generic template that says something slightly different from the ad. The visitor pauses, cannot see the thing they clicked for, and leaves — and the spend is gone.",
        "We build the page around a single promise and a single action. The headline repeats the ad, the proof follows, the form asks for as little as possible, and the whole thing is fast enough to render before an impatient thumb goes back.",
      ],
    },
    problems: [
      {
        title: "The page does not match the ad",
        description:
          "A generic template that never repeats the offer, so the visitor has to work out whether they are in the right place.",
        icon: "design",
      },
      {
        title: "Slow pages burning paid traffic",
        description:
          "Seconds of load time on a phone, paid for click by click, spent before anything appears.",
        icon: "gear",
      },
      {
        title: "Forms that ask too much",
        description:
          "Eleven fields for a first enquiry, most of which nobody needs until later.",
        icon: "handshake",
      },
      {
        title: "No way to test",
        description:
          "One version, no variants, no measurement — so nobody learns anything from the spend.",
        icon: "bulb",
      },
    ],
    included: [
      {
        title: "Message match",
        description:
          "The headline and offer above the fold repeat the ad the visitor clicked, word for word where it matters.",
        icon: "bulb",
      },
      {
        title: "Conversion-focused layout",
        description:
          "A skimmable hierarchy — promise, proof, objection, action — rather than a wall of paragraphs.",
        icon: "design",
      },
      {
        title: "Copy that carries the offer",
        description:
          "Written with you, in plain language, aimed at the decision rather than the brand.",
        icon: "team",
      },
      {
        title: "Friction-reduced forms",
        description:
          "The fewest fields that still qualify a lead, with WhatsApp and call options beside them.",
        icon: "handshake",
      },
      {
        title: "Speed build",
        description:
          "Lean pages with image and font strategy handled, because paid traffic is the least patient traffic.",
        icon: "gear",
      },
      {
        title: "Tracking and variants",
        description:
          "Conversion tracking wired in, and the page structured so a second version is cheap to try.",
        icon: "code",
      },
    ],
    stages: [
      {
        title: "Single campaign page",
        description:
          "One offer, one audience, one action — the right starting point for a first paid campaign.",
        icon: "bulb",
      },
      {
        title: "Page set",
        description:
          "A family of pages sharing a system, one per audience or offer, so each ad has its own landing.",
        icon: "design",
      },
      {
        title: "Testing program",
        description:
          "Variants and measurement running continuously, so the page improves while the campaign runs.",
        icon: "gear",
      },
    ],
    features: [
      {
        title: "Above-the-fold clarity",
        description:
          "What it is, who it is for and what happens next, visible without scrolling.",
        icon: "bulb",
      },
      {
        title: "Mobile first",
        description:
          "Designed for the phone, because that is where most paid clicks come from.",
        icon: "phone",
      },
      {
        title: "Proof close to the ask",
        description:
          "Evidence placed next to the decision rather than buried at the bottom.",
        icon: "team",
      },
      {
        title: "Fast by construction",
        description:
          "Built lean rather than optimised afterwards, so the first paint is quick.",
        icon: "gear",
      },
      {
        title: "Conversion tracking",
        description:
          "Every submission attributable, so you can see cost per enquiry rather than cost per click.",
        icon: "code",
      },
      {
        title: "Easy to iterate",
        description:
          "Copy and layout structured so changes take hours, not another project.",
        icon: "design",
      },
    ],
    industries: [
      "Retail & nurseries",
      "Healthcare networks",
      "Professional services",
      "Education",
      "Local services",
      "Events & hospitality",
    ],
    faq: [
      {
        question: "How is this different from a website page?",
        answer:
          "A site page serves everyone who arrives. A landing page serves one audience arriving from one ad, with one action available and everything else stripped out.",
      },
      {
        question: "Do you write the copy?",
        answer:
          "We draft it and work through it with you. You know the offer and the objections; we know what has to appear above the fold.",
      },
      {
        question: "Can you run the ads too?",
        answer:
          "No. We build and measure the page. We are happy to work alongside whoever runs your campaigns, and to tell them what the page data shows.",
      },
      {
        question: "How fast can a page go live?",
        answer:
          "A single campaign page is usually one to two weeks from brief to live, assuming the offer is settled.",
      },
    ],
  },

  "performance-optimization": {
    tagline: "Making a live site quick again",
    headingLead: "Fast enough",
    headingAccent: "to keep the visit.",
    intro:
      "Diagnosing and fixing slow pages on sites that are already live — load time, interaction delay and layout shift — measured before and after so the improvement is a number, not a feeling.",
    stats: [
      { value: "<2s", label: "Load time target" },
      { value: "Measured", label: "Before and after" },
      { value: "Any stack", label: "Not just ours" },
    ],
    positioning: {
      heading: "Speed is a feature people notice by leaving",
      body: [
        "Nobody complains that a site is slow. They just go back to the search results, and the business never learns why the enquiry did not arrive.",
        "This work starts with measurement on real devices and connections, not a score from a laptop on office wifi. Then we fix the things the numbers actually blame — usually images, fonts and far too much JavaScript — and measure again.",
      ],
    },
    problems: [
      {
        title: "Slow to show anything",
        description:
          "The largest element on the page takes seconds to appear, so the visitor stares at a blank screen.",
        icon: "gear",
      },
      {
        title: "Taps that do nothing",
        description:
          "The page looks ready but the main thread is busy, so the first tap is ignored.",
        icon: "phone",
      },
      {
        title: "Unoptimised images and fonts",
        description:
          "Full-resolution photos and blocking web fonts shipped to phones on mobile data.",
        icon: "design",
      },
      {
        title: "Content that jumps",
        description:
          "Layout shifting as things load, so people tap the wrong thing and give up.",
        icon: "bulb",
      },
    ],
    included: [
      {
        title: "Real measurement",
        description:
          "Field and lab data on the devices and connections your visitors actually use.",
        icon: "bulb",
      },
      {
        title: "Core Web Vitals audit",
        description:
          "Load, interaction and layout stability profiled per template rather than per page.",
        icon: "gear",
      },
      {
        title: "Image and asset work",
        description:
          "Correct formats, sizes and lazy loading, which is usually the single biggest win.",
        icon: "design",
      },
      {
        title: "JavaScript reduction",
        description:
          "Finding what is shipped and never used, and removing or deferring it.",
        icon: "code",
      },
      {
        title: "Font and render path",
        description:
          "Font loading and critical CSS sorted so text appears immediately rather than after a flash.",
        icon: "team",
      },
      {
        title: "Before and after report",
        description:
          "The same measurements repeated, so the improvement is evidence rather than a claim.",
        icon: "support",
      },
    ],
    stages: [
      {
        title: "Diagnostic",
        description:
          "A measured audit with findings ranked by what would gain the most time for the least work.",
        icon: "bulb",
      },
      {
        title: "Fix sprint",
        description:
          "A focused piece of work through the ranked list, re-measured at the end.",
        icon: "gear",
      },
      {
        title: "Performance budget",
        description:
          "Thresholds agreed and watched over time, so the site does not quietly get slow again.",
        icon: "shield",
      },
    ],
    features: [
      {
        title: "LCP",
        description:
          "Getting the main content on screen quickly, which is what visitors judge you on.",
        icon: "gear",
      },
      {
        title: "INP",
        description:
          "Interactions that respond immediately, especially on mid-range phones.",
        icon: "phone",
      },
      {
        title: "CLS",
        description:
          "Space reserved so nothing jumps while the page settles.",
        icon: "design",
      },
      {
        title: "Asset discipline",
        description:
          "Images, fonts and scripts sized for the job rather than shipped as they came.",
        icon: "code",
      },
      {
        title: "Caching and delivery",
        description:
          "CDN and cache headers doing the work they should already have been doing.",
        icon: "cloud",
      },
      {
        title: "Regression watch",
        description:
          "Monitoring after the fix, because performance decays with every new addition.",
        icon: "support",
      },
    ],
    industries: [
      "Retail & nurseries",
      "Healthcare networks",
      "Scientific & research",
      "Professional services",
      "Education",
      "Local services",
    ],
    faq: [
      {
        question: "Can you work on a site you did not build?",
        answer:
          "Yes, and most of this work is exactly that. WordPress, Shopify, a custom build — the diagnosis is the same, only the fixes differ.",
      },
      {
        question: "How much faster will it get?",
        answer:
          "We will not guess before measuring. The audit tells us what is possible and what it would take, and you decide whether the gain is worth the work.",
      },
      {
        question: "Does this help SEO?",
        answer:
          "Page experience is a ranking input, so yes — but the stronger reason is that people stop leaving before the page renders.",
      },
      {
        question: "Will it stay fast?",
        answer:
          "Only if someone watches it. New images, scripts and tags all cost time, which is why we offer a performance budget and monitoring after the fix.",
      },
    ],
  },
};
