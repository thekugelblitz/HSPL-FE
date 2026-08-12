export const INDIA_VPS_LATENCY_CITIES = [
    { city: "Mumbai", latency: "< 5 ms", region: "West India" },
    { city: "Delhi NCR", latency: "< 8 ms", region: "North India" },
    { city: "Bangalore", latency: "< 12 ms", region: "South India" },
    { city: "Hyderabad", latency: "< 15 ms", region: "South India" },
    { city: "Chennai", latency: "< 18 ms", region: "South India" },
    { city: "Kolkata", latency: "< 20 ms", region: "East India" },
    { city: "Pune", latency: "< 10 ms", region: "West India" },
    { city: "Ahmedabad", latency: "< 12 ms", region: "West India" },
] as const;

export const INDIA_VPS_FEATURES = [
    {
        title: "India-Local NVMe Storage",
        description:
            "Every India VPS runs on enterprise NVMe SSD arrays for ultra-fast read/write speeds — ideal for databases, eCommerce checkout flows, and high-traffic WordPress sites serving Indian audiences.",
    },
    {
        title: "AMD EPYC Enterprise Hardware",
        description:
            "Powered by AMD EPYC processors with dedicated vCPU and RAM allocation. No noisy neighbours — your resources stay yours, even during peak traffic from Indian metro cities.",
    },
    {
        title: "Low-Latency Indian Network",
        description:
            "Hosted on infrastructure connected to major Indian internet exchanges. Deliver sub-20 ms response times to users across Mumbai, Delhi, Bangalore, Hyderabad, and beyond.",
    },
    {
        title: "KVM Virtualization & Root Access",
        description:
            "Full root access on KVM-based virtual servers. Install any stack — Docker, Node.js, Python, Java, game servers, or custom trading platforms — with complete control over your environment.",
    },
    {
        title: "Scalable Resources on Demand",
        description:
            "Start lean and scale CPU, RAM, and storage as your business grows. Upgrade without migration headaches — perfect for startups, agencies, and SaaS products expanding across India.",
    },
    {
        title: "Enterprise Security & Monitoring",
        description:
            "Configurable firewalls, DDoS protection, free SSL certificates, and proactive uptime monitoring keep your workloads secure — whether you run a fintech app or a production API.",
    },
] as const;

export const INDIA_VPS_USE_CASES = [
    {
        title: "Indian Businesses & eCommerce",
        description:
            "Speed up product pages, checkout flows, and admin dashboards for customers shopping from Tier 1 and Tier 2 cities. Local hosting means faster TTFB and better Core Web Vitals.",
        tag: "Business",
    },
    {
        title: "Developers & DevOps Teams",
        description:
            "Deploy staging environments, CI/CD runners, API backends, and microservices with full SSH access. Choose Ubuntu, Debian, AlmaLinux, or CentOS — your stack, your rules.",
        tag: "Developers",
    },
    {
        title: "Digital Agencies",
        description:
            "Host multiple client websites and applications on isolated VPS instances. White-label ready with dedicated IPs, predictable INR billing, and 24/7 engineer support.",
        tag: "Agencies",
    },
    {
        title: "Startups & SaaS Products",
        description:
            "Launch MVPs without overspending. Affordable monthly plans in INR let you validate ideas fast, then scale resources when your user base takes off across India.",
        tag: "Startups",
    },
    {
        title: "Game & Community Servers",
        description:
            "Run Minecraft, Valorant custom servers, Discord bots, and multiplayer backends with low ping for Indian players. Dedicated CPU cores keep gameplay smooth during peak hours.",
        tag: "Gaming",
    },
    {
        title: "Trading & FinTech Applications",
        description:
            "Minimize order execution latency for algo-trading platforms, market data feeds, and financial dashboards. Local infrastructure reduces round-trip time to Indian exchanges and APIs.",
        tag: "FinTech",
    },
    {
        title: "Enterprise Workloads",
        description:
            "Host ERP integrations, internal tools, VPN gateways, and compliance-sensitive applications on managed India VPS plans with enhanced monitoring and backup options.",
        tag: "Enterprise",
    },
    {
        title: "Media & Content Platforms",
        description:
            "Serve video streaming backends, podcast hosting, news portals, and high-traffic blogs with generous bandwidth and NVMe throughput tuned for Indian audience peaks.",
        tag: "Media",
    },
] as const;

export const INDIA_VPS_TRUST_STATS = [
    { value: "110,000+", label: "Websites Hosted" },
    { value: "10+ Years", label: "Hosting Expertise" },
    { value: "99.9%", label: "Network Uptime SLA" },
    { value: "24/7", label: "Engineer Support" },
] as const;

export const INDIA_VPS_OFFSHORE_COMPARISON = {
    headers: ["Feature", "HostingSpell India VPS", "Offshore VPS (US/EU)"],
    rows: [
        ["Latency to Indian users", "Sub-20 ms across major cities", "150–300+ ms typical"],
        ["Data residency", "Hosted in India", "Data stored abroad"],
        ["Billing currency", "INR & USD supported", "Mostly USD only"],
        ["Local support timezone", "IST-aligned 24/7 team", "Limited IST overlap"],
        ["Payment methods", "UPI, cards, net banking friendly", "International cards only"],
        ["SEO for .in audiences", "Faster page loads boost rankings", "Higher TTFB hurts UX signals"],
        ["Compliance readiness", "Ideal for India-focused workloads", "Cross-border data concerns"],
        ["NVMe storage", "Included on all plans", "Often SATA or limited NVMe"],
    ],
} as const;

export const INDIA_VPS_PRICING_FEATURES = [
    "KVM Virtualization",
    "NVMe SSD Storage",
    "Dedicated IP Address",
    "Virtualizor Control Panel",
    "Full Root Access",
    "India Data Center",
    "Free SSL Certificates",
    "24/7 Technical Support",
    "Instant Provisioning",
    "Scalable Upgrades",
] as const;

export const INDIA_VPS_FAQS = [
    {
        question: "What is India VPS hosting and who is it for?",
        answer:
            "India VPS hosting gives you a virtual private server hosted on infrastructure located in India. It is ideal for Indian businesses, developers, agencies, startups, gaming communities, trading platforms, and enterprise teams that need low latency, data proximity, and affordable INR pricing for users across the country.",
    },
    {
        question: "Which Indian cities benefit from the lowest latency?",
        answer:
            "Our India VPS delivers the lowest latency to Mumbai, Delhi NCR, Pune, and Ahmedabad — typically under 10–15 ms. Bangalore, Hyderabad, Chennai, and Kolkata also see excellent response times, generally under 20 ms, making the platform suitable for nationwide applications.",
    },
    {
        question: "Do you offer managed VPS plans in India?",
        answer:
            "Yes. Our Advance and Ultimate India VPS tiers include managed services with enhanced monitoring, backups, and proactive support. Entry-level plans are self-managed with full root access, giving you complete control while our team remains available 24/7 for technical assistance.",
    },
    {
        question: "What operating systems can I install on my Indian VPS?",
        answer:
            "You can deploy popular Linux distributions including Ubuntu, Debian, AlmaLinux, and CentOS. Windows Server options are also available on select plans. Reinstall or switch OS templates anytime through the Virtualizor control panel.",
    },
    {
        question: "Is NVMe SSD storage included on all India VPS plans?",
        answer:
            "Yes. Every India VPS plan includes high-performance NVMe SSD storage — from 100 GB on entry plans up to 500 GB on higher tiers. NVMe delivers significantly faster I/O than traditional SSDs, which matters for databases, caching layers, and I/O-heavy applications.",
    },
    {
        question: "Can I pay in Indian Rupees (INR)?",
        answer:
            "Absolutely. All India VPS plans support INR billing with transparent monthly, quarterly, semi-annual, and annual cycles. USD billing is also available if you prefer. Prices start from ₹899/month for our entry-level plan.",
    },
    {
        question: "How quickly is my India VPS provisioned?",
        answer:
            "Most India VPS orders are provisioned within a few hours during business hours, and often much faster. You receive login credentials via email once your server is ready, along with access to the Virtualizor control panel for management.",
    },
    {
        question: "Can I upgrade CPU, RAM, or storage later?",
        answer:
            "Yes. All India VPS plans support scalable upgrades. As your traffic grows — whether from a viral campaign or a new product launch — you can increase resources without migrating to a different provider or data center.",
    },
    {
        question: "Is India VPS suitable for game servers and trading apps?",
        answer:
            "Yes. Low latency to Indian players and traders is critical for real-time applications. Dedicated vCPU cores, NVMe storage, and local network routing make our India VPS an excellent choice for multiplayer game servers, Discord bots, algo-trading systems, and market data platforms.",
    },
    {
        question: "Do you help migrate my existing VPS or website to India?",
        answer:
            "Our migration engineers can assist with moving websites, applications, and databases to your new India VPS. Contact our 24/7 support team via live chat or ticket with your current setup details and we will guide you through the process.",
    },
    {
        question: "What uptime guarantee do you offer for India VPS?",
        answer:
            "We target 99.9% network uptime across our India VPS infrastructure, backed by enterprise-grade hardware, redundant networking, and continuous monitoring. Higher-tier plans include enhanced uptime monitoring and managed support options.",
    },
    {
        question: "How is India VPS different from your global VPS hosting?",
        answer:
            "Our global VPS page covers worldwide server options, while this dedicated India VPS page focuses exclusively on locally hosted infrastructure optimised for Indian audiences. If your users are primarily in India, choosing an India-based VPS significantly improves speed, SEO performance, and user experience.",
    },
] as const;
