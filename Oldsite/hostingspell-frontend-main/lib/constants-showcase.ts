// lib/constants-showcase.ts
// Centralized data for the /showcase page
// Update this file to add/edit clients, projects, testimonials, and metrics

/** Set to true when /showcase should be publicly accessible. */
export const SHOWCASE_ENABLED = false;

// ─── Types ────────────────────────────────────────────────────────────────────

export type ProjectCategory =
  | "SaaS"
  | "E-commerce"
  | "Portfolio"
  | "Enterprise"
  | "Dashboard"
  | "AI Tools"
  | "Website"
  | "Landing Page";

export type ShowcaseClient = {
  name: string;
  industry: string;
  summary: string;
  logo: string; // path under /public
  url?: string;
};

export type ShowcaseProject = {
  name: string;
  description: string;
  category: ProjectCategory;
  technologies: string[];
  image: string; // path under /public
  liveUrl: string;
  caseStudyUrl?: string;
  featured?: boolean;
};

export type ShowcaseTestimonial = {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number; // 1–5
  avatar?: string; // path under /public
};

export type ShowcaseMetric = {
  value: string;
  label: string;
  description: string;
};

// ─── Clients ──────────────────────────────────────────────────────────────────

export const SHOWCASE_CLIENTS: ShowcaseClient[] = [
  {
    name: "TechNova Solutions",
    industry: "SaaS / Technology",
    summary:
      "Migrated their entire SaaS platform to HostingSpell cloud infrastructure, achieving 99.99% uptime and 40% cost reduction.",
    logo: "/img/showcase/client-technova.svg",
    url: "https://hostingspell.com",
  },
  {
    name: "ShopEase India",
    industry: "E-commerce",
    summary:
      "Scaled their WooCommerce store to handle 50,000+ daily visitors with zero downtime during peak sale events.",
    logo: "/img/showcase/client-shopease.svg",
    url: "https://hostingspell.com",
  },
  {
    name: "GreenLeaf NGO",
    industry: "Non-Profit",
    summary:
      "Launched a donation platform and awareness site on HostingSpell's free NGO hosting program.",
    logo: "/img/showcase/client-greenleaf.svg",
    url: "https://hostingspell.com",
  },
  {
    name: "Apex Digital Agency",
    industry: "Digital Marketing",
    summary:
      "Manages 120+ client websites through HostingSpell's reseller hosting, streamlining billing and support.",
    logo: "/img/showcase/client-apex.svg",
    url: "https://hostingspell.com",
  },
  {
    name: "MediCare Plus",
    industry: "Healthcare",
    summary:
      "Deployed a HIPAA-compliant patient portal with SSL, daily backups, and 24/7 monitoring.",
    logo: "/img/showcase/client-medicare.svg",
    url: "https://hostingspell.com",
  },
  {
    name: "EduSpark Academy",
    industry: "Education",
    summary:
      "Hosts a learning management system serving 10,000+ students across India with LiteSpeed-powered performance.",
    logo: "/img/showcase/client-eduspark.svg",
    url: "https://hostingspell.com",
  },
];

// ─── Projects ─────────────────────────────────────────────────────────────────

export const SHOWCASE_PROJECTS: ShowcaseProject[] = [
  {
    name: "TechNova SaaS Dashboard",
    description:
      "A full-featured analytics dashboard built on React and Node.js, hosted on HostingSpell VPS with auto-scaling and Redis caching.",
    category: "Dashboard",
    technologies: ["React", "Node.js", "Redis", "PostgreSQL", "Docker"],
    image: "/img/showcase/project-technova.webp",
    liveUrl: "https://hostingspell.com",
    featured: true,
  },
  {
    name: "ShopEase E-commerce Store",
    description:
      "High-traffic WooCommerce store with custom checkout flow, payment gateway integration, and LiteSpeed caching for sub-second load times.",
    category: "E-commerce",
    technologies: ["WordPress", "WooCommerce", "LiteSpeed", "PHP 8.2"],
    image: "/img/showcase/project-shopease.webp",
    liveUrl: "https://hostingspell.com",
    featured: true,
  },
  {
    name: "EduSpark LMS Platform",
    description:
      "A Moodle-based learning management system with video streaming, quiz modules, and certificate generation for 10,000+ students.",
    category: "SaaS",
    technologies: ["Moodle", "PHP", "MySQL", "FFmpeg", "cPanel"],
    image: "/img/showcase/project-eduspark.webp",
    liveUrl: "https://hostingspell.com",
    featured: true,
  },
  {
    name: "MediCare Patient Portal",
    description:
      "Secure patient appointment and records portal with two-factor authentication, encrypted storage, and HIPAA-aligned infrastructure.",
    category: "Enterprise",
    technologies: ["Laravel", "Vue.js", "MySQL", "SSL/TLS", "Nginx"],
    image: "/img/showcase/project-medicare.webp",
    liveUrl: "https://hostingspell.com",
  },
  {
    name: "Apex Agency Portfolio",
    description:
      "A stunning agency portfolio with animated case studies, client testimonials, and a lead generation funnel — all on shared hosting.",
    category: "Portfolio",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "Vercel"],
    image: "/img/showcase/project-apex.webp",
    liveUrl: "https://hostingspell.com",
  },
  {
    name: "GreenLeaf Donation Platform",
    description:
      "A donation and awareness platform with Razorpay integration, campaign tracking, and multilingual support for NGO outreach.",
    category: "Website",
    technologies: ["WordPress", "Razorpay", "WPML", "Elementor"],
    image: "/img/showcase/project-greenleaf.webp",
    liveUrl: "https://hostingspell.com",
  },
  {
    name: "AI Content Generator",
    description:
      "A GPT-powered content generation tool for marketers, deployed on HostingSpell VPS with Python FastAPI backend and React frontend.",
    category: "AI Tools",
    technologies: ["Python", "FastAPI", "React", "OpenAI API", "Redis"],
    image: "/img/showcase/project-ai-content.webp",
    liveUrl: "https://hostingspell.com",
    featured: true,
  },
  {
    name: "Flash Sale Landing Page",
    description:
      "A high-converting product launch landing page with countdown timer, A/B tested CTAs, and integrated analytics.",
    category: "Landing Page",
    technologies: ["HTML5", "CSS3", "JavaScript", "Google Analytics"],
    image: "/img/showcase/project-landing.webp",
    liveUrl: "https://hostingspell.com",
  },
];

// ─── Testimonials ─────────────────────────────────────────────────────────────

export const SHOWCASE_TESTIMONIALS: ShowcaseTestimonial[] = [
  {
    name: "Prasath N",
    role: "CTO",
    company: "TechNova Solutions",
    content:
      "HostingSpell has been our hosting provider for 3 years. I've been consistently impressed — their support is exceptionally quick, often replying within 15 minutes. The infrastructure is rock-solid.",
    rating: 5,
  },
  {
    name: "Dipti Mishra",
    role: "Founder",
    company: "ShopEase India",
    content:
      "I have been using HostingSpell for over a year now, and it has exceeded my expectations. The hosting is fast, reliable, and incredibly affordable. They resolve issues within minutes.",
    rating: 5,
  },
  {
    name: "Kedar Kantha",
    role: "Lead Developer",
    company: "Apex Digital Agency",
    content:
      "I host 25+ travel blogs and client sites on HostingSpell. All servers are well-optimized with 100% uptime. Their tech engineers are always available on ticket support 24/7.",
    rating: 5,
  },
  {
    name: "Ananya Sharma",
    role: "Operations Manager",
    company: "EduSpark Academy",
    content:
      "Migrating our LMS to HostingSpell was seamless. The free migration service saved us days of work, and the performance improvement was immediately noticeable for our students.",
    rating: 5,
  },
  {
    name: "Rajesh Patel",
    role: "Director",
    company: "MediCare Plus",
    content:
      "Security and reliability are non-negotiable for us. HostingSpell delivers on both fronts with daily backups, SSL, and a team that understands compliance requirements.",
    rating: 5,
  },
  {
    name: "Priya Nair",
    role: "Marketing Head",
    company: "GreenLeaf NGO",
    content:
      "As an NGO, budget is always a concern. HostingSpell's free hosting program for NGOs was a game-changer. The support team went above and beyond to help us get online.",
    rating: 5,
  },
];

// ─── Metrics ──────────────────────────────────────────────────────────────────

export const SHOWCASE_METRICS: ShowcaseMetric[] = [
  {
    value: "110,000+",
    label: "Websites Hosted",
    description: "Active websites running on HostingSpell infrastructure",
  },
  {
    value: "57+",
    label: "Countries Served",
    description: "Clients from across the globe trust HostingSpell",
  },
  {
    value: "99.99%",
    label: "Uptime Guarantee",
    description: "Industry-leading reliability backed by SLA",
  },
  {
    value: "7+",
    label: "Years of Expertise",
    description: "Proven track record in web hosting & IT infrastructure",
  },
];

// ─── Project Categories (for filter UI) ───────────────────────────────────────

export const PROJECT_CATEGORIES: { value: ProjectCategory | "All"; label: string }[] = [
  { value: "All", label: "All Projects" },
  { value: "SaaS", label: "SaaS" },
  { value: "E-commerce", label: "E-commerce" },
  { value: "Portfolio", label: "Portfolio" },
  { value: "Enterprise", label: "Enterprise" },
  { value: "Dashboard", label: "Dashboard" },
  { value: "AI Tools", label: "AI Tools" },
  { value: "Website", label: "Website" },
  { value: "Landing Page", label: "Landing Page" },
];
