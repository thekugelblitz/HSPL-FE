// src/lib/data.ts

export const cloudPlans = [
  {
    name: "VENUS",
    tagline: "BEST FOR STARTERS!",
    price: "$1.29",
    billingCycle: "/mo",
    features: [
      "Host 1 Website",
      "1 Sub-Domain & 1 Alias Domain",
      "1 MySQL/PostgreSQL Database",
      "1 Email & 1 FTP Account",
      "1GB Pure NVMe SSD Storage",
      "10GB Bandwidth",
      "1 CPU, 1GB RAM & + LVE Resources",
      "All cPanel® Features & Free SSL",
      "LiteSpeed Enterprise Web Server",
      "Imunify360 AI Anti-Virus"
    ],
    isPopular: false,
    link: "https://manage.hostingspell.com/store/ssd-web-hosting/venus?currency=1"
  },
  {
    name: "MARS",
    tagline: "BEST FOR SMALL BUSINESSES!",
    price: "$1.69",
    billingCycle: "/mo",
    features: [
      "Host 2 Websites",
      "10 Sub-Domains & 2 Alias Domains",
      "10 MySQL/PostgreSQL Database",
      "10 Email & 10 FTP Accounts",
      "10GB Pure NVMe SSD Storage",
      "100GB Bandwidth",
      "1 CPU, 1GB RAM & + LVE Resources",
      "All cPanel® Features & Free SSL",
      "LiteSpeed Enterprise Web Server",
      "Imunify360 AI Anti-Virus"
    ],
    isPopular: true,
    link: "https://manage.hostingspell.com/store/ssd-web-hosting/mars?currency=1"
  },
  {
    name: "SATURN",
    tagline: "BEST FOR GROWING WEBSITES!",
    price: "$1.99",
    billingCycle: "/mo",
    features: [
      "Host 5 Websites",
      "Unlimited Sub-Domains & 5 Alias",
      "Unlimited Databases & Emails",
      "Unlimited FTP Accounts",
      "30GB Pure NVMe SSD Storage",
      "Unlimited Bandwidth",
      "1 CPU, 2GB RAM & ++ LVE Resources",
      "All cPanel® Features & Free SSL",
      "LiteSpeed Enterprise Web Server",
      "Imunify360 AI Anti-Virus"
    ],
    isPopular: false,
    link: "https://manage.hostingspell.com/store/ssd-web-hosting/saturns?currency=1"
  },
  {
    name: "JUPITER",
    tagline: "BEST FOR LARGE BUSINESSES!",
    price: "$2.99",
    billingCycle: "/mo",
    features: [
      "Host 10 Websites",
      "Unlimited Sub-Domains & 10 Alias",
      "Unlimited Databases & Emails",
      "Unlimited FTP Accounts",
      "Unlimited Storage (NVMe)",
      "Unlimited Bandwidth",
      "2 CPU, 2GB RAM & ++ LVE Resources",
      "All cPanel® Features & Free SSL",
      "LiteSpeed Enterprise Web Server",
      "Imunify360 AI Anti-Virus"
    ],
    isPopular: false,
    link: "https://manage.hostingspell.com/store/ssd-web-hosting/jupiter?currency=1"
  }
];

export const premiumPlans = [
  {
    name: "PREMIUM 1",
    tagline: "STARTER",
    price: "$1.99",
    billingCycle: "/mo",
    features: [
      "Host 2 Websites",
      "30 GB Fast SSD Storage",
      "300 GB Bandwidth",
      "Unlimited MySQL Database",
      "Unlimited Email & FTP Accounts",
      "2 CPU Core & 2 GB RAM",
      "30 EP | 100 NOP | 50MB/s IO",
      "DigitalOcean Infrastructure"
    ],
    isPopular: false,
    link: "https://manage.hostingspell.com/store/cpanel-cloud-hosting-ind/ind-do-premium1?currency=1"
  },
  {
    name: "PREMIUM 2",
    tagline: "POPULAR",
    price: "$2.79",
    billingCycle: "/mo",
    features: [
      "Host 4 Websites",
      "Unlimited Fast SSD Storage",
      "Unlimited GB Bandwidth",
      "Unlimited MySQL Database",
      "Unlimited Email & FTP Accounts",
      "2 CPU Core & 2 GB RAM",
      "30 EP | 100 NOP | 50MB/s IO",
      "DigitalOcean Infrastructure"
    ],
    isPopular: true,
    link: "https://manage.hostingspell.com/store/cpanel-cloud-hosting-ind/ind-do-premium2?currency=1"
  },
  {
    name: "PREMIUM 3",
    tagline: "ADVANCED",
    price: "$3.49",
    billingCycle: "/mo",
    features: [
      "Host 6 Websites",
      "Unlimited Fast SSD Storage",
      "Unlimited GB Bandwidth",
      "Unlimited MySQL Database",
      "Unlimited Email & FTP Accounts",
      "2 CPU Core & 2 GB RAM",
      "30 EP | 100 NOP | 50MB/s IO",
      "DigitalOcean Infrastructure"
    ],
    isPopular: false,
    link: "https://manage.hostingspell.com/store/cpanel-cloud-hosting-ind/ind-do-premium3?currency=1"
  },
  {
    name: "UNLIMITED POWER",
    tagline: "ENTERPRISE",
    price: "$5.49",
    billingCycle: "/mo",
    features: [
      "Host Unlimited Websites",
      "Unlimited Fast SSD Storage",
      "Unlimited GB Bandwidth",
      "Unlimited MySQL Database",
      "Unlimited Email & FTP Accounts",
      "2 CPU Cores | 2 GB RAM",
      "30 EP | 100 NOP | 50MB/s IO",
      "Linode/DigitalOcean Infrastructure"
    ],
    isPopular: false,
    link: "https://manage.hostingspell.com/store/truly-unlimited-web-hosting/unlimitedpowertm?currency=1"
  }
];

export const vpsPlans = [
  {
    name: "CONSOLUS ENTER",
    tagline: "4GB RAM",
    price: "$10",
    billingCycle: "/mo",
    features: [
      "1 CPU Core",
      "40 GB Storage",
      "1 TB Bandwidth",
      "1 Dedicated IP",
      "Virtualizor Control Panel",
      "Customizable Upgrades"
    ],
    isPopular: false,
    link: "https://manage.hostingspell.com/store/kvm-vps-hosting/consolus-enter?currency=1"
  },
  {
    name: "CONSOLUS MODEL",
    tagline: "8GB RAM",
    price: "$20",
    billingCycle: "/mo",
    features: [
      "2 CPU Cores",
      "80 GB Storage",
      "2 TB Bandwidth",
      "1 Dedicated IP",
      "Virtualizor Control Panel",
      "Customizable Upgrades"
    ],
    isPopular: true,
    link: "https://manage.hostingspell.com/store/kvm-vps-hosting/consolus-model?currency=1"
  },
  {
    name: "CONSOLUS HOST",
    tagline: "16GB RAM",
    price: "$40",
    billingCycle: "/mo",
    features: [
      "4 CPU Cores",
      "160 GB Storage",
      "4 TB Bandwidth",
      "1 Dedicated IP",
      "Virtualizor Control Panel",
      "Customizable Upgrades"
    ],
    isPopular: false,
    link: "https://manage.hostingspell.com/store/kvm-vps-hosting/consolus-host?currency=1"
  },
  {
    name: "CONSOLUS BEAST",
    tagline: "32GB RAM",
    price: "$80",
    billingCycle: "/mo",
    features: [
      "8 CPU Cores",
      "320 GB Storage",
      "8 TB Bandwidth",
      "1 Dedicated IP",
      "Virtualizor Control Panel",
      "Customizable Upgrades"
    ],
    isPopular: false,
    link: "https://manage.hostingspell.com/store/kvm-vps-hosting/consolus-beast?currency=1"
  }
];

export const faqs = [
  {
    question: "Would you be able to help me move my website over?",
    answer: "Yes, we offer free migration services. Our team of industry experts will handle the entire process to ensure a hassle-free transition to our managed hosting."
  },
  {
    question: "How can disk space be unlimited?",
    answer: "Our unlimited plans use high-capacity SSD/NVMe drives on top-tier infrastructure. While 'unlimited' implies no hard caps for normal usage, it's subject to our fair use policy to ensure performance for all users."
  },
  {
    question: "What billing cycles do you offer?",
    answer: "We offer monthly, annually, and multi-year billing cycles. You can save up to 15-20% by opting for longer-term billing plans."
  },
  {
    question: "Do you offer 24/7 support?",
    answer: "Absolutely. Our in-house experts and Supercharged AI Powered Support Engineer are available 24/7 to resolve any issues you might encounter."
  },
  {
    question: "Any discounts for NGOs, Universities & Students?",
    answer: "Yes, we proudly support the community. Please contact our support team with valid identification for special discounted pricing."
  },
  {
    question: "Do you offer a money-back guarantee?",
    answer: "Yes! We offer a 30-day money-back guarantee. If you're not satisfied with our services within the first 30 days, we'll refund your hosting fees."
  }
];

export const resellerPlans = [
  {
    name: "HS INITIATIVE",
    tagline: "ENTRY LEVEL",
    price: "$12.99",
    billingCycle: "/mo",
    features: [
      "25 cPanel accounts",
      "Unlimited Bandwidth",
      "Unlimited SSD Disk Space",
      "Unlimited Email & FTP Accounts",
      "Unlimited MySQL Databases",
      "cPanel / WHM",
      "Free Daily Automatic Backup",
      "Unlimited Custom Packages",
      "LiteSpeed Server + LSCache",
      "Free SSL & Imunify360"
    ],
    isPopular: false,
    link: "https://manage.hostingspell.com/store/cpanel-unlimited-reseller-hosting/hs-initiative?currency=1"
  },
  {
    name: "HS EARLDOM",
    tagline: "MID TIER",
    price: "$25.99",
    billingCycle: "/mo",
    features: [
      "50 cPanel accounts",
      "Unlimited Bandwidth",
      "Unlimited SSD Disk Space",
      "Unlimited Email & FTP Accounts",
      "Unlimited MySQL Databases",
      "cPanel / WHM",
      "Free Daily Automatic Backup",
      "Unlimited Custom Packages",
      "LiteSpeed Server + LSCache",
      "Free SSL & Imunify360"
    ],
    isPopular: true,
    link: "https://manage.hostingspell.com/store/cpanel-unlimited-reseller-hosting/hs-earldom?currency=1"
  },
  {
    name: "HS DUKEDOM",
    tagline: "HIGH PERFORMENCE",
    price: "$51.99",
    billingCycle: "/mo",
    features: [
      "100 cPanel accounts",
      "Unlimited Bandwidth",
      "Unlimited SSD Disk Space",
      "Unlimited Email & FTP Accounts",
      "Unlimited MySQL Databases",
      "cPanel / WHM",
      "Free Daily Automatic Backup",
      "Unlimited Custom Packages",
      "LiteSpeed Server + LSCache",
      "Free SSL & Imunify360"
    ],
    isPopular: false,
    link: "https://manage.hostingspell.com/store/cpanel-unlimited-reseller-hosting/hs-dukedom?currency=1"
  },
  {
    name: "HS KINGDOM",
    tagline: "ULTRA PERFORMENCE",
    price: "$77.99",
    billingCycle: "/mo",
    features: [
      "150 cPanel accounts",
      "Unlimited Bandwidth",
      "Unlimited SSD Disk Space",
      "Unlimited Email & FTP Accounts",
      "Unlimited MySQL Databases",
      "cPanel / WHM",
      "Free Daily Automatic Backup",
      "Unlimited Custom Packages",
      "LiteSpeed Server + LSCache",
      "Free SSL & Imunify360"
    ],
    isPopular: false,
    link: "https://manage.hostingspell.com/store/cpanel-unlimited-reseller-hosting/hs-kingdom?currency=1"
  }
];

export const comboPlans = [
  {
    name: "EUROPA",
    tagline: "FREE DOMAIN",
    price: "$24.49",
    billingCycle: "/mo",
    features: [
      "1 Lifetime Free Domain",
      "Host 2 Websites",
      "20 GB Fast SSD Storage",
      "Unlimited Bandwidth",
      "Unlimited Databases & Emails",
      "100% Uptime Mark",
      "2 CPU, 2GB RAM & ++ LVE",
      "All cPanel® Features & Free SSL",
      "LiteSpeed Enterprise Web Server",
      "DigitalOcean/Linode Datacenter"
    ],
    isPopular: false,
    link: "https://manage.hostingspell.com/store/combo-cpanel-hosting-free-domain/europa?currency=1"
  },
  {
    name: "IO",
    tagline: "FREE DOMAIN",
    price: "$29.99",
    billingCycle: "/mo",
    features: [
      "1 Lifetime Free Domain",
      "Host 4 Websites",
      "Unlimited SSD Storage",
      "Unlimited Bandwidth",
      "Unlimited Databases & Emails",
      "100% Uptime Mark",
      "2 CPU, 2GB RAM & ++ LVE",
      "All cPanel® Features & Free SSL",
      "LiteSpeed Enterprise Web Server",
      "DigitalOcean/Linode Datacenter"
    ],
    isPopular: true,
    link: "https://manage.hostingspell.com/store/combo-cpanel-hosting-free-domain/io?currency=1"
  }
];

export const wordpressPlans = [
  {
    name: "WP STARTER",
    tagline: "FOR BLOGS & SITES",
    price: "$1.49",
    billingCycle: "/mo",
    features: [
      "1 WordPress Website",
      "10 GB Pure NVMe SSD",
      "50 GB Bandwidth",
      "LiteSpeed Cache Engine",
      "Free Auto SSL & Staging",
      "Automatic WP Core Updates",
      "WP-CLI & Git Integration",
      "Daily Automated Backups"
    ],
    isPopular: false,
    link: "https://manage.hostingspell.com/store/ssd-web-hosting/mars?currency=1"
  },
  {
    name: "WP PRO",
    tagline: "FOR BUSINESS & WOOCOMMERCE",
    price: "$2.49",
    billingCycle: "/mo",
    features: [
      "5 WordPress Websites",
      "30 GB Pure NVMe SSD",
      "Unlimited Bandwidth",
      "LiteSpeed Enterprise + LSCache",
      "Smart Staging & 1-Click Clone",
      "Advanced ObjectCache (Redis)",
      "Imunify360 Malware Defense",
      "Daily Backups & Free SSL"
    ],
    isPopular: true,
    link: "https://manage.hostingspell.com/store/ssd-web-hosting/saturns?currency=1"
  },
  {
    name: "WP TURBO",
    tagline: "HIGH TRAFFIC & STORES",
    price: "$4.99",
    billingCycle: "/mo",
    features: [
      "Unlimited WP Websites",
      "Unlimited Pure NVMe Storage",
      "Unmetered Bandwidth",
      "Dedicated PHP RAM (1024M)",
      "Instant WP Staging & Push",
      "LSCache Enterprise + Redis",
      "Priority 24/7 Expert Support",
      "Daily Offsite Backups"
    ],
    isPopular: false,
    link: "https://manage.hostingspell.com/store/ssd-web-hosting/jupiter?currency=1"
  }
];

export const nodejsPlans = [
  {
    name: "NODE MINI",
    tagline: "API & MICROSERVICES",
    price: "$2.99",
    billingCycle: "/mo",
    features: [
      "Node.js 18.x, 20.x, 22.x LTS",
      "1 CPU Core & 2GB RAM",
      "25 GB Pure NVMe SSD",
      "250 GB Monthly Bandwidth",
      "Passenger / Nginx Reverse Proxy",
      "Git Deployment & NPM/Yarn/PNPM",
      "MongoDB & PostgreSQL Ready",
      "Free SSL & DDoS Protection"
    ],
    isPopular: false,
    link: "https://manage.hostingspell.com/store/cpanel-cloud-hosting-ind/ind-do-premium1?currency=1"
  },
  {
    name: "NODE SCALE",
    tagline: "FULLSTACK APPS",
    price: "$4.99",
    billingCycle: "/mo",
    features: [
      "Node.js 18.x, 20.x, 22.x LTS",
      "2 CPU Cores & 4GB RAM",
      "60 GB Pure NVMe SSD",
      "1 TB Monthly Bandwidth",
      "Custom Port & WebSockets Support",
      "PM2 Process Management",
      "Redis Server Included",
      "Free Auto SSL & Daily Backups"
    ],
    isPopular: true,
    link: "https://manage.hostingspell.com/store/cpanel-cloud-hosting-ind/ind-do-premium2?currency=1"
  }
];

export const pythonPlans = [
  {
    name: "PYTHON LITE",
    tagline: "DJANGO & FLASK",
    price: "$2.99",
    billingCycle: "/mo",
    features: [
      "Python 3.9, 3.10, 3.11, 3.12",
      "Virtualenv & Pip Manager",
      "20 GB NVMe Storage",
      "WSGI / ASGI Gateway Ready",
      "MySQL / PostgreSQL Support",
      "Free SSL Certificate",
      "Imunify360 Firewall",
      "Automated Daily Backups"
    ],
    isPopular: true,
    link: "https://manage.hostingspell.com/store/cpanel-cloud-hosting-ind/ind-do-premium1?currency=1"
  }
];

export const datacenters = [
  {
    city: "Ashburn",
    country: "United States",
    code: "US-EAST",
    latency: "< 25ms",
    specs: "AMD EPYC™ 9004 Gen 4, DDR5 ECC RAM, NVMe RAID-10",
    status: "Optimal",
    flag: "🇺🇸"
  },
  {
    city: "Mumbai",
    country: "India",
    code: "IN-BOM",
    latency: "< 12ms",
    specs: "Intel® Xeon® Scalable 3rd Gen, NVMe RAID-10",
    status: "Optimal",
    flag: "🇮🇳"
  },
  {
    city: "Frankfurt",
    country: "Germany",
    code: "EU-FRA",
    latency: "< 18ms",
    specs: "AMD EPYC™ 7003, DDR4 ECC RAM, Pure NVMe",
    status: "Optimal",
    flag: "🇩🇪"
  },
  {
    city: "Singapore",
    country: "Singapore",
    code: "AP-SIN",
    latency: "< 20ms",
    specs: "Intel® Xeon® Gold, Enterprise NVMe Storage",
    status: "Optimal",
    flag: "🇸🇬"
  }
];

export const networkStatusData = {
  overall: "Operational",
  lastUpdated: "Just now",
  uptime: "99.99%",
  services: [
    { name: "Cloud Web Hosting Cluster (US-East)", status: "Operational", responseTime: "24ms" },
    { name: "Cloud Web Hosting Cluster (IN-BOM)", status: "Operational", responseTime: "12ms" },
    { name: "KVM VPS Hypervisors Node 1-12", status: "Operational", responseTime: "15ms" },
    { name: "cPanel / WHM Control Panel Nodes", status: "Operational", responseTime: "28ms" },
    { name: "LiteSpeed Enterprise Web Servers", status: "Operational", responseTime: "18ms" },
    { name: "Imunify360 DDoS & Firewall Engine", status: "Operational", responseTime: "4ms" },
    { name: "Global Anycast DNS Resolvers", status: "Operational", responseTime: "8ms" },
    { name: "JetBackup 5 Offsite Vaults", status: "Operational", responseTime: "32ms" }
  ],
  incidents: [
    {
      date: "August 2, 2026",
      title: "Scheduled Maintenance - Network Switch Upgrade (EU-FRA)",
      status: "Completed",
      description: "Routine hardware maintenance and switch firmware upgrades completed with zero impact on web services."
    },
    {
      date: "July 18, 2026",
      title: "Minor Latency Spike - Asia Pacific Transit Provider",
      status: "Resolved",
      description: "Upstream carrier rerouted traffic due to undersea cable degradation. Normal latency restored within 14 minutes."
    }
  ]
};

export const kbCategories = [
  {
    id: "cpanel",
    name: "cPanel & Dashboard",
    count: 24,
    description: "Email configuration, file management, subdomains, and database setups.",
    icon: "LayoutDashboard"
  },
  {
    id: "domains",
    name: "Domains & DNS",
    count: 18,
    description: "Nameservers, A/AAAA records, MX configuration, and domain transfers.",
    icon: "Globe"
  },
  {
    id: "wordpress",
    name: "WordPress & LSCache",
    count: 32,
    description: "Speed optimization, LiteSpeed plugin setup, staging sites, and troubleshooting.",
    icon: "Zap"
  },
  {
    id: "security",
    name: "SSL & Security",
    count: 15,
    description: "AutoSSL installation, Imunify360 malware cleanup, 2FA, and SSH keys.",
    icon: "ShieldCheck"
  },
  {
    id: "vps",
    name: "KVM VPS & Linux",
    count: 21,
    description: "Root SSH access, Virtualizor management, firewall configuration, and OS reinstalls.",
    icon: "Server"
  },
  {
    id: "billing",
    name: "Billing & Invoices",
    count: 12,
    description: "Payment methods, invoices, subscription changes, and affiliate payouts.",
    icon: "CreditCard"
  }
];

export const popularArticles = [
  {
    id: "1",
    title: "How to Point Your Domain Name to HostingSpell Nameservers",
    category: "Domains & DNS",
    readTime: "3 min read",
    views: "14.2k",
    link: "/knowledgebase"
  },
  {
    id: "2",
    title: "Setting Up Free AutoSSL Certificate on Your cPanel Account",
    category: "SSL & Security",
    readTime: "2 min read",
    views: "11.8k",
    link: "/knowledgebase"
  },
  {
    id: "3",
    title: "Optimizing WordPress with LiteSpeed Cache (LSCache) & Redis",
    category: "WordPress & LSCache",
    readTime: "6 min read",
    views: "22.5k",
    link: "/knowledgebase"
  },
  {
    id: "4",
    title: "How to Access Root SSH on KVM VPS via Terminal & Virtualizor",
    category: "KVM VPS & Linux",
    readTime: "4 min read",
    views: "9.1k",
    link: "/knowledgebase"
  },
  {
    id: "5",
    title: "Deploying Node.js & Python Applications using cPanel Application Manager",
    category: "cPanel & Dashboard",
    readTime: "5 min read",
    views: "18.3k",
    link: "/knowledgebase"
  }
];

export const blogPosts = [
  {
    id: "1",
    slug: "why-litespeed-nvme-outperforms-apache",
    title: "Why LiteSpeed Enterprise + Pure NVMe Outperforms Traditional Apache by 10x",
    excerpt: "Discover the architectural advantages of LiteSpeed Web Server, event-driven I/O, and hardware NVMe RAID arrays for high-concurrency web hosting.",
    date: "August 4, 2026",
    author: "HostingSpell Infrastructure Team",
    category: "Technology & Infrastructure",
    readTime: "7 min read",
    image: "⚡"
  },
  {
    id: "2",
    slug: "wordpress-core-web-vitals-optimization-2026",
    title: "The Ultimate Guide to Achieving 100/100 Core Web Vitals on WordPress in 2026",
    excerpt: "Learn how to optimize LCP, CLS, and INP metrics using server-level caching, WebP image generation, and critical CSS inline strategies.",
    date: "July 29, 2026",
    author: "Alex Morgan, CRO & Performance Lead",
    category: "WordPress & Performance",
    readTime: "10 min read",
    image: "🚀"
  },
  {
    id: "3",
    slug: "imunify360-ai-security-explained",
    title: "Inside Imunify360: How AI-Driven Security Blocks 99.9% of Web Attacks",
    excerpt: "An in-depth look at automated malware detection, web application firewalls (WAF), proactive defense layers, and brute-force mitigation.",
    date: "July 15, 2026",
    author: "Security & Operations Team",
    category: "Cybersecurity",
    readTime: "5 min read",
    image: "🛡️"
  }
];

export const affiliateTiers = [
  {
    salesRange: "1 - 5 Sales / month",
    commission: "$15 per sale",
    perk: "Instant Portal Access & Custom Links"
  },
  {
    salesRange: "6 - 20 Sales / month",
    commission: "$25 per sale",
    perk: "Dedicated Affiliate Manager + Custom Coupons"
  },
  {
    salesRange: "21 - 50 Sales / month",
    commission: "$35 per sale",
    perk: "Co-branded Landing Pages & Banner Ads"
  },
  {
    salesRange: "50+ Sales / month",
    commission: "$50+ Custom Commission",
    perk: "Weekly Payouts & VIP Bonus Rewards"
  }
];

export const affiliateFaqs = [
  {
    question: "How does the HostingSpell Affiliate Program work?",
    answer: "You simply sign up for free, get your unique affiliate referral link, share it on your blog, social media, or clients, and earn up to $50 for every customer who buys a hosting plan."
  },
  {
    question: "What is the minimum payout threshold?",
    answer: "Our minimum payout threshold is just $50. Once reached, you can request payment via PayPal, Direct Bank Transfer, or Hosting Account Credits."
  },
  {
    question: "How long is the cookie duration?",
    answer: "We offer a 90-day tracking cookie! If a visitor clicks your link and purchases within 90 days, you get full credit for the sale."
  }
];

export const domainPricing = [
  { tld: ".com", register: "$9.99", renew: "$12.99", transfer: "$9.99", popular: true },
  { tld: ".in", register: "$3.99", renew: "$6.99", transfer: "$4.99", popular: true },
  { tld: ".net", register: "$11.99", renew: "$14.99", transfer: "$11.99", popular: false },
  { tld: ".org", register: "$12.99", renew: "$15.99", transfer: "$12.99", popular: false },
  { tld: ".co", register: "$8.99", renew: "$24.99", transfer: "$10.99", popular: false },
  { tld: ".store", register: "$1.99", renew: "$29.99", transfer: "$14.99", popular: true },
  { tld: ".tech", register: "$2.99", renew: "$34.99", transfer: "$19.99", popular: false },
  { tld: ".online", register: "$1.49", renew: "$27.99", transfer: "$12.99", popular: false }
];

