// src/lib/comparisonData.ts

export interface PlanHeader {
  name: string;
  tagline: string;
  price: string;
  originalPrice?: string;
  discount?: string;
  billingCycle: string;
  isPopular: boolean;
  link: string;
}

export interface FeatureRow {
  name: string;
  description?: string;
  values: Record<string, string | boolean>;
}

export interface FeatureCategory {
  name: string;
  features: FeatureRow[];
}

export interface ServiceComparison {
  title: string;
  subtitle: string;
  plans: PlanHeader[];
  categories: FeatureCategory[];
}

export const comparisonData: Record<string, ServiceComparison> = {
  cloud: {
    title: "Cloud NVMe Shared Hosting",
    subtitle: "Compare our Venus, Mars, Saturn, and Jupiter cloud tiers side-by-side.",
    plans: [
      {
        name: "VENUS",
        tagline: "BEST FOR STARTERS!",
        price: "$1.29",
        originalPrice: "$4.99",
        discount: "SAVE 74%",
        billingCycle: "/mo",
        isPopular: false,
        link: "https://manage.hostingspell.com/store/ssd-web-hosting/venus?currency=1"
      },
      {
        name: "MARS",
        tagline: "BEST FOR SMALL BUSINESSES!",
        price: "$1.69",
        originalPrice: "$5.99",
        discount: "SAVE 72%",
        billingCycle: "/mo",
        isPopular: true,
        link: "https://manage.hostingspell.com/store/ssd-web-hosting/mars?currency=1"
      },
      {
        name: "SATURN",
        tagline: "BEST FOR GROWING WEBSITES!",
        price: "$1.99",
        originalPrice: "$7.99",
        discount: "SAVE 75%",
        billingCycle: "/mo",
        isPopular: false,
        link: "https://manage.hostingspell.com/store/ssd-web-hosting/saturns?currency=1"
      },
      {
        name: "JUPITER",
        tagline: "BEST FOR LARGE BUSINESSES!",
        price: "$2.99",
        originalPrice: "$9.99",
        discount: "SAVE 70%",
        billingCycle: "/mo",
        isPopular: false,
        link: "https://manage.hostingspell.com/store/ssd-web-hosting/jupiter?currency=1"
      }
    ],
    categories: [
      {
        name: "Core Limits & Resources",
        features: [
          {
            name: "Websites Hosted",
            description: "The total number of separate websites/domains you can host on this account.",
            values: { VENUS: "1 Website", MARS: "2 Websites", SATURN: "5 Websites", JUPITER: "10 Websites" }
          },
          {
            name: "Pure NVMe SSD Storage",
            description: "Ultra-fast NVMe storage limits. 10x faster than traditional hard drives.",
            values: { VENUS: "1 GB", MARS: "10 GB", SATURN: "30 GB", JUPITER: "Unlimited Storage" }
          },
          {
            name: "Monthly Bandwidth",
            description: "The amount of data transfer allowed for your websites per month.",
            values: { VENUS: "10 GB", MARS: "100 GB", SATURN: "Unlimited Bandwidth", JUPITER: "Unlimited Bandwidth" }
          },
          {
            name: "CPU Allocation",
            description: "Dedicated CPU resources allocated to your hosting container.",
            values: { VENUS: "1 vCPU Core", MARS: "1 vCPU Core", SATURN: "1 vCPU Core", JUPITER: "2 vCPU Cores" }
          },
          {
            name: "RAM Allocation",
            description: "Dedicated Physical Memory (RAM) limit for running scripts and processing requests.",
            values: { VENUS: "1 GB RAM", MARS: "1 GB RAM", SATURN: "2 GB RAM", JUPITER: "2 GB RAM" }
          },
          {
            name: "MySQL/PostgreSQL Databases",
            description: "Maximum number of databases you can create.",
            values: { VENUS: "1 Database", MARS: "10 Databases", SATURN: "Unlimited", JUPITER: "Unlimited" }
          },
          {
            name: "Email & FTP Accounts",
            description: "Maximum professional mailbox and FTP file accounts.",
            values: { VENUS: "1 Account", MARS: "10 Accounts", SATURN: "Unlimited", JUPITER: "Unlimited" }
          },
          {
            name: "Sub-Domains & Aliases",
            description: "Add-on domains and additional sub-directories mapping.",
            values: { VENUS: "1 Sub & 1 Alias", MARS: "10 Subs & 2 Aliases", SATURN: "Unlimited Subs & 5 Aliases", JUPITER: "Unlimited Subs & 10 Aliases" }
          }
        ]
      },
      {
        name: "Performance & Optimizations",
        features: [
          {
            name: "Web Server Architecture",
            description: "Underlying server technology. LiteSpeed Enterprise provides maximum speed.",
            values: { VENUS: "LiteSpeed Enterprise", MARS: "LiteSpeed Enterprise", SATURN: "LiteSpeed Enterprise", JUPITER: "LiteSpeed Enterprise" }
          },
          {
            name: "LSCache Acceleration",
            description: "LiteSpeed Cache speeds up dynamic pages (WordPress, XenForo, etc.) by caching at server level.",
            values: { VENUS: true, MARS: true, SATURN: true, JUPITER: true }
          },
          {
            name: "HTTP/3 & QUIC Support",
            description: "Latest high-speed network protocols for reduced website loading latency.",
            values: { VENUS: true, MARS: true, SATURN: true, JUPITER: true }
          },
          {
            name: "PHP Version Selector",
            description: "Switch between multiple PHP versions (7.4, 8.0, 8.1, 8.2, 8.3) directly from cPanel.",
            values: { VENUS: true, MARS: true, SATURN: true, JUPITER: true }
          },
          {
            name: "Brotli Compression",
            description: "Advanced compression standard for quicker delivery of static files.",
            values: { VENUS: true, MARS: true, SATURN: true, JUPITER: true }
          }
        ]
      },
      {
        name: "Security & Backups",
        features: [
          {
            name: "AutoSSL Certificate",
            description: "Free automated SSL certificates from Let's Encrypt / Sectigo for all domains.",
            values: { VENUS: "Free Unlimited", MARS: "Free Unlimited", SATURN: "Free Unlimited", JUPITER: "Free Unlimited" }
          },
          {
            name: "Imunify360 Security",
            description: "AI-powered malware scanner, intrusion detection, and proactive firewall protection.",
            values: { VENUS: true, MARS: true, SATURN: true, JUPITER: true }
          },
          {
            name: "JetBackup 5 Daily Backups",
            description: "Daily automated backup of all databases, files, and emails, kept offsite.",
            values: { VENUS: true, MARS: true, SATURN: true, JUPITER: true }
          },
          {
            name: "DDoS Protection Shield",
            description: "Inbound traffic filtering to mitigate denial of service attacks.",
            values: { VENUS: true, MARS: true, SATURN: true, JUPITER: true }
          }
        ]
      },
      {
        name: "Service & SLA Guarantees",
        features: [
          {
            name: "Free Site Migration",
            description: "Zero-downtime, professional migration of your existing websites managed by our team.",
            values: { VENUS: "Yes (1 Website)", MARS: "Yes (2 Websites)", SATURN: "Yes (Unlimited)", JUPITER: "Yes (Unlimited)" }
          },
          {
            name: "Support SLA Response",
            description: "Guaranteed support response times. Average response is under 15 minutes.",
            values: { VENUS: "24/7 SLA Support", MARS: "24/7 SLA Support", SATURN: "24/7 SLA Support", JUPITER: "24/7 SLA Support" }
          },
          {
            name: "Money-Back Guarantee",
            description: "No-risk refund period if you are not fully satisfied with our hosting service.",
            values: { VENUS: "30-Day Period", MARS: "30-Day Period", SATURN: "30-Day Period", JUPITER: "30-Day Period" }
          },
          {
            name: "Uptime SLA Guarantee",
            description: "SLA network uptime commitment.",
            values: { VENUS: "99.9% Uptime", MARS: "99.9% Uptime", SATURN: "99.9% Uptime", JUPITER: "99.9% Uptime" }
          }
        ]
      }
    ]
  },
  premium: {
    title: "cPanel Premium Cloud Hosting",
    subtitle: "High-resource cloud hosting powered by DigitalOcean and Linode with dedicated cPanel management.",
    plans: [
      {
        name: "PREMIUM 1",
        tagline: "STARTER TIER",
        price: "$1.99",
        billingCycle: "/mo",
        isPopular: false,
        link: "https://manage.hostingspell.com/store/cpanel-cloud-hosting-ind/ind-do-premium1?currency=1"
      },
      {
        name: "PREMIUM 2",
        tagline: "MOST POPULAR CHOICE!",
        price: "$2.79",
        billingCycle: "/mo",
        isPopular: true,
        link: "https://manage.hostingspell.com/store/cpanel-cloud-hosting-ind/ind-do-premium2?currency=1"
      },
      {
        name: "PREMIUM 3",
        tagline: "ADVANCED PERFORMANCE",
        price: "$3.49",
        billingCycle: "/mo",
        isPopular: false,
        link: "https://manage.hostingspell.com/store/cpanel-cloud-hosting-ind/ind-do-premium3?currency=1"
      },
      {
        name: "UNLIMITED POWER",
        tagline: "ENTERPRISE POWER",
        price: "$5.49",
        billingCycle: "/mo",
        isPopular: false,
        link: "https://manage.hostingspell.com/store/truly-unlimited-web-hosting/unlimitedpowertm?currency=1"
      }
    ],
    categories: [
      {
        name: "Core Limits & Resources",
        features: [
          {
            name: "Websites Hosted",
            description: "Number of unique domains you can host and manage on one dashboard.",
            values: { "PREMIUM 1": "2 Websites", "PREMIUM 2": "4 Websites", "PREMIUM 3": "6 Websites", "UNLIMITED POWER": "Unlimited Websites" }
          },
          {
            name: "Fast SSD Storage",
            description: "Pure solid-state storage limit for database files and code scripts.",
            values: { "PREMIUM 1": "30 GB SSD", "PREMIUM 2": "Unlimited Space", "PREMIUM 3": "Unlimited Space", "UNLIMITED POWER": "Unlimited Space" }
          },
          {
            name: "Monthly Bandwidth",
            description: "The amount of network traffic allowed for your sites per month.",
            values: { "PREMIUM 1": "300 GB", "PREMIUM 2": "Unlimited Bandwidth", "PREMIUM 3": "Unlimited Bandwidth", "UNLIMITED POWER": "Unlimited Bandwidth" }
          },
          {
            name: "CPU Cores Allocation",
            description: "Dedicated CPU resources allotted for your website processes.",
            values: { "PREMIUM 1": "2 CPU Cores", "PREMIUM 2": "2 CPU Cores", "PREMIUM 3": "2 CPU Cores", "UNLIMITED POWER": "2 CPU Cores" }
          },
          {
            name: "RAM Allocation",
            description: "Physical Memory resource allocation.",
            values: { "PREMIUM 1": "2 GB RAM", "PREMIUM 2": "2 GB RAM", "PREMIUM 3": "2 GB RAM", "UNLIMITED POWER": "2 GB RAM" }
          },
          {
            name: "I/O Speed Limit",
            description: "Data transfer speed limit between disk and CPU.",
            values: { "PREMIUM 1": "50 MB/s", "PREMIUM 2": "50 MB/s", "PREMIUM 3": "50 MB/s", "UNLIMITED POWER": "50 MB/s" }
          },
          {
            name: "Entry Processes (EP) / NOP",
            description: "Concurrent HTTP requests and total active processes limit.",
            values: { "PREMIUM 1": "30 EP / 100 NOP", "PREMIUM 2": "30 EP / 100 NOP", "PREMIUM 3": "30 EP / 100 NOP", "UNLIMITED POWER": "30 EP / 100 NOP" }
          },
          {
            name: "Infrastructure Cloud",
            description: "Underlying virtualized hypervisor cloud node.",
            values: { "PREMIUM 1": "DigitalOcean", "PREMIUM 2": "DigitalOcean", "PREMIUM 3": "DigitalOcean", "UNLIMITED POWER": "Linode & DigitalOcean" }
          }
        ]
      },
      {
        name: "Standard Features",
        features: [
          {
            name: "cPanel® Dashboard",
            values: { "PREMIUM 1": true, "PREMIUM 2": true, "PREMIUM 3": true, "UNLIMITED POWER": true }
          },
          {
            name: "MySQL Databases",
            values: { "PREMIUM 1": "Unlimited", "PREMIUM 2": "Unlimited", "PREMIUM 3": "Unlimited", "UNLIMITED POWER": "Unlimited" }
          },
          {
            name: "Email & FTP Accounts",
            values: { "PREMIUM 1": "Unlimited", "PREMIUM 2": "Unlimited", "PREMIUM 3": "Unlimited", "UNLIMITED POWER": "Unlimited" }
          },
          {
            name: "Free AutoSSL",
            values: { "PREMIUM 1": true, "PREMIUM 2": true, "PREMIUM 3": true, "UNLIMITED POWER": true }
          },
          {
            name: "JetBackup Daily Backups",
            values: { "PREMIUM 1": true, "PREMIUM 2": true, "PREMIUM 3": true, "UNLIMITED POWER": true }
          },
          {
            name: "Imunify360 Protection",
            values: { "PREMIUM 1": true, "PREMIUM 2": true, "PREMIUM 3": true, "UNLIMITED POWER": true }
          }
        ]
      }
    ]
  },
  vps: {
    title: "KVM Dedicated VPS Hosting",
    subtitle: "High-performance root access KVM virtualization servers built on Ryzen and Intel Xeon scalable platforms.",
    plans: [
      {
        name: "CONSOLUS ENTER",
        tagline: "4GB RAM STARTER",
        price: "$10",
        billingCycle: "/mo",
        isPopular: false,
        link: "https://manage.hostingspell.com/store/kvm-vps-hosting/consolus-enter?currency=1"
      },
      {
        name: "CONSOLUS MODEL",
        tagline: "8GB RAM VALUE",
        price: "$20",
        billingCycle: "/mo",
        isPopular: true,
        link: "https://manage.hostingspell.com/store/kvm-vps-hosting/consolus-model?currency=1"
      },
      {
        name: "CONSOLUS HOST",
        tagline: "16GB RAM ADVANCED",
        price: "$40",
        billingCycle: "/mo",
        isPopular: false,
        link: "https://manage.hostingspell.com/store/kvm-vps-hosting/consolus-host?currency=1"
      },
      {
        name: "CONSOLUS BEAST",
        tagline: "32GB RAM EXTREME",
        price: "$80",
        billingCycle: "/mo",
        isPopular: false,
        link: "https://manage.hostingspell.com/store/kvm-vps-hosting/consolus-beast?currency=1"
      }
    ],
    categories: [
      {
        name: "Hardware Specifications",
        features: [
          {
            name: "vCPU Cores",
            description: "Number of dedicated virtual CPU processing cores.",
            values: { "CONSOLUS ENTER": "1 vCPU Core", "CONSOLUS MODEL": "2 vCPU Cores", "CONSOLUS HOST": "4 vCPU Cores", "CONSOLUS BEAST": "8 vCPU Cores" }
          },
          {
            name: "Dedicated RAM",
            description: "High-speed ECC DDR4/DDR5 system memory allocated purely to your instance.",
            values: { "CONSOLUS ENTER": "4 GB RAM", "CONSOLUS MODEL": "8 GB RAM", "CONSOLUS HOST": "16 GB RAM", "CONSOLUS BEAST": "32 GB RAM" }
          },
          {
            name: "RAID-10 Storage Space",
            description: "Enterprise SSD Storage array in redundant RAID-10 configuration.",
            values: { "CONSOLUS ENTER": "40 GB SSD", "CONSOLUS MODEL": "80 GB SSD", "CONSOLUS HOST": "160 GB SSD", "CONSOLUS BEAST": "320 GB SSD" }
          },
          {
            name: "Monthly Bandwidth",
            description: "Monthly data transfer limit over our high-speed 1Gbps uplink interface.",
            values: { "CONSOLUS ENTER": "1 TB", "CONSOLUS MODEL": "2 TB", "CONSOLUS HOST": "4 TB", "CONSOLUS BEAST": "8 TB" }
          },
          {
            name: "IPv4 Address",
            description: "Dedicated IPv4 address dedicated solely to your VPS.",
            values: { "CONSOLUS ENTER": "1 Dedicated IP", "CONSOLUS MODEL": "1 Dedicated IP", "CONSOLUS HOST": "1 Dedicated IP", "CONSOLUS BEAST": "1 Dedicated IP" }
          }
        ]
      },
      {
        name: "Control & Virtualization",
        features: [
          {
            name: "Virtualization Type",
            description: "Kernel-based Virtual Machine (KVM) ensures isolated kernel and dedicated RAM allocation.",
            values: { "CONSOLUS ENTER": "KVM Hypervisor", "CONSOLUS MODEL": "KVM Hypervisor", "CONSOLUS HOST": "KVM Hypervisor", "CONSOLUS BEAST": "KVM Hypervisor" }
          },
          {
            name: "Control Dashboard Panel",
            description: "Virtualizor client panel lets you stop, start, reboot, and reinstall operating systems with 1-click.",
            values: { "CONSOLUS ENTER": "Virtualizor Panel", "CONSOLUS MODEL": "Virtualizor Panel", "CONSOLUS HOST": "Virtualizor Panel", "CONSOLUS BEAST": "Virtualizor Panel" }
          },
          {
            name: "Full Root SSH Access",
            description: "Complete administrator control access to the server command line.",
            values: { "CONSOLUS ENTER": true, "CONSOLUS MODEL": true, "CONSOLUS HOST": true, "CONSOLUS BEAST": true }
          },
          {
            name: "OS Configurations Supported",
            description: "Supported Linux distributions (Ubuntu, AlmaLinux, RockyLinux, Debian, CentOS).",
            values: { "CONSOLUS ENTER": "Yes (All distros)", "CONSOLUS MODEL": "Yes (All distros)", "CONSOLUS HOST": "Yes (All distros)", "CONSOLUS BEAST": "Yes (All distros)" }
          },
          {
            name: "Deployment Speed",
            values: { "CONSOLUS ENTER": "Instant (< 5 min)", "CONSOLUS MODEL": "Instant (< 5 min)", "CONSOLUS HOST": "Instant (< 5 min)", "CONSOLUS BEAST": "Instant (< 5 min)" }
          }
        ]
      }
    ]
  },
  reseller: {
    title: "cPanel Reseller Hosting",
    subtitle: "Launch your hosting brand using white-labeled WHM reseller servers.",
    plans: [
      {
        name: "HS INITIATIVE",
        tagline: "ENTRY AGENCY LEVEL",
        price: "$12.99",
        billingCycle: "/mo",
        isPopular: false,
        link: "https://manage.hostingspell.com/store/cpanel-unlimited-reseller-hosting/hs-initiative?currency=1"
      },
      {
        name: "HS EARLDOM",
        tagline: "MOST POPULAR CHOICE!",
        price: "$25.99",
        billingCycle: "/mo",
        isPopular: true,
        link: "https://manage.hostingspell.com/store/cpanel-unlimited-reseller-hosting/hs-earldom?currency=1"
      },
      {
        name: "HS DUKEDOM",
        tagline: "HIGH PERFORMANCE TIER",
        price: "$51.99",
        billingCycle: "/mo",
        isPopular: false,
        link: "https://manage.hostingspell.com/store/cpanel-unlimited-reseller-hosting/hs-dukedom?currency=1"
      },
      {
        name: "HS KINGDOM",
        tagline: "ULTRA ENTERPRISE RESELLER",
        price: "$77.99",
        billingCycle: "/mo",
        isPopular: false,
        link: "https://manage.hostingspell.com/store/cpanel-unlimited-reseller-hosting/hs-kingdom?currency=1"
      }
    ],
    categories: [
      {
        name: "Client Limits & Resources",
        features: [
          {
            name: "cPanel Accounts Allowed",
            description: "The maximum number of separate customer cPanel accounts you can create and manage.",
            values: { "HS INITIATIVE": "25 Accounts", "HS EARLDOM": "50 Accounts", "HS DUKEDOM": "100 Accounts", "HS KINGDOM": "150 Accounts" }
          },
          {
            name: "WHM Control Panel Access",
            description: "WebHost Manager access allows you to provision, suspend, modify and manage hosting packages.",
            values: { "HS INITIATIVE": true, "HS EARLDOM": true, "HS DUKEDOM": true, "HS KINGDOM": true }
          },
          {
            name: "SSD Disk Storage",
            description: "Redundant, high-speed storage allocation for reseller accounts.",
            values: { "HS INITIATIVE": "Unlimited SSD Space", "HS EARLDOM": "Unlimited SSD Space", "HS DUKEDOM": "Unlimited SSD Space", "HS KINGDOM": "Unlimited SSD Space" }
          },
          {
            name: "Monthly Bandwidth",
            description: "The cumulative data transfer limit for all created client accounts.",
            values: { "HS INITIATIVE": "Unlimited Bandwidth", "HS EARLDOM": "Unlimited Bandwidth", "HS DUKEDOM": "Unlimited Bandwidth", "HS KINGDOM": "Unlimited Bandwidth" }
          }
        ]
      },
      {
        name: "White Label Branding",
        features: [
          {
            name: "100% White-Labeled WHM",
            description: "All client interfaces are custom branded with no mention of HostingSpell.",
            values: { "HS INITIATIVE": true, "HS EARLDOM": true, "HS DUKEDOM": true, "HS KINGDOM": true }
          },
          {
            name: "Custom Private Nameservers",
            description: "Ability to configure custom DNS nameservers like ns1.yourbrand.com.",
            values: { "HS INITIATIVE": true, "HS EARLDOM": true, "HS DUKEDOM": true, "HS KINGDOM": true }
          },
          {
            name: "Custom Hosting Packages",
            description: "Set custom quotas for disk space, bandwidth, and emails, and price them as you wish.",
            values: { "HS INITIATIVE": true, "HS EARLDOM": true, "HS DUKEDOM": true, "HS KINGDOM": true }
          }
        ]
      },
      {
        name: "Premium Integrations",
        features: [
          {
            name: "LiteSpeed Web Server + LSCache",
            values: { "HS INITIATIVE": true, "HS EARLDOM": true, "HS DUKEDOM": true, "HS KINGDOM": true }
          },
          {
            name: "JetBackup 5 Daily Backups",
            values: { "HS INITIATIVE": true, "HS EARLDOM": true, "HS DUKEDOM": true, "HS KINGDOM": true }
          },
          {
            name: "Free SSL Certificates",
            values: { "HS INITIATIVE": true, "HS EARLDOM": true, "HS DUKEDOM": true, "HS KINGDOM": true }
          },
          {
            name: "Imunify360 Security",
            values: { "HS INITIATIVE": true, "HS EARLDOM": true, "HS DUKEDOM": true, "HS KINGDOM": true }
          }
        ]
      }
    ]
  },
  wordpress: {
    title: "WordPress Managed Hosting",
    subtitle: "Highly optimized WordPress hosting with automatic core updates, staging, and LiteSpeed cache engines.",
    plans: [
      {
        name: "WP STARTER",
        tagline: "FOR BLOGS & WEBSITES",
        price: "$1.49",
        billingCycle: "/mo",
        isPopular: false,
        link: "https://manage.hostingspell.com/store/ssd-web-hosting/mars?currency=1"
      },
      {
        name: "WP PRO",
        tagline: "BEST VALUE FOR SMALL BUSINESS",
        price: "$2.49",
        billingCycle: "/mo",
        isPopular: true,
        link: "https://manage.hostingspell.com/store/ssd-web-hosting/saturns?currency=1"
      },
      {
        name: "WP TURBO",
        tagline: "HIGH TRAFFIC & COMMERCE",
        price: "$4.99",
        billingCycle: "/mo",
        isPopular: false,
        link: "https://manage.hostingspell.com/store/ssd-web-hosting/jupiter?currency=1"
      }
    ],
    categories: [
      {
        name: "Resources & Quotas",
        features: [
          {
            name: "WP Installations",
            description: "Number of separate WordPress sites you can host.",
            values: { "WP STARTER": "1 Website", "WP PRO": "5 Websites", "WP TURBO": "Unlimited Websites" }
          },
          {
            name: "Pure NVMe SSD",
            description: "Ultra-fast SSD disk space allocated for database files, themes, and uploads.",
            values: { "WP STARTER": "10 GB NVMe", "WP PRO": "30 GB NVMe", "WP TURBO": "Unlimited Storage" }
          },
          {
            name: "Monthly Bandwidth",
            values: { "WP STARTER": "50 GB Bandwidth", "WP PRO": "Unlimited Bandwidth", "WP TURBO": "Unmetered Bandwidth" }
          },
          {
            name: "CPU Core Allocation",
            values: { "WP STARTER": "1 CPU Core", "WP PRO": "1 CPU Core", "WP TURBO": "2 CPU Cores" }
          },
          {
            name: "RAM Allocation",
            values: { "WP STARTER": "1 GB RAM", "WP PRO": "2 GB RAM", "WP TURBO": "2 GB RAM" }
          },
          {
            name: "PHP Memory Limit",
            description: "Maximum memory limit allotted for execution of heavy plugins (Elementor, WooCommerce).",
            values: { "WP STARTER": "512 MB Limit", "WP PRO": "512 MB Limit", "WP TURBO": "1024 MB Limit" }
          }
        ]
      },
      {
        name: "WordPress Tooling",
        features: [
          {
            name: "Staging & Cloning Tool",
            description: "Instantly create a sandbox copy of your site to test plugins and themes, then push changes to live.",
            values: { "WP STARTER": "Staging Included", "WP PRO": "Staging & 1-Click Clone", "WP TURBO": "Staging, 1-Click Clone & Live Push" }
          },
          {
            name: "Advanced Caching Engine",
            description: "Server-side caching system optimized for fast page loads.",
            values: { "WP STARTER": "LiteSpeed Cache (LSCache)", "WP PRO": "LSCache + Redis Cache", "WP TURBO": "LSCache Enterprise + Redis Object Cache" }
          },
          {
            name: "WP-CLI & Git Integration",
            description: "Access command-line WordPress operations and deploy directly via Git.",
            values: { "WP STARTER": true, "WP PRO": true, "WP TURBO": true }
          },
          {
            name: "Automated Core Updates",
            description: "Keep WordPress core, templates, and plugins updated automatically.",
            values: { "WP STARTER": true, "WP PRO": true, "WP TURBO": true }
          }
        ]
      },
      {
        name: "Backup & Priority SLA",
        features: [
          {
            name: "Backup Frequency & Retention",
            values: { "WP STARTER": "Daily Automated Backup", "WP PRO": "Daily Automated Backup", "WP TURBO": "Daily Offsite & On-Demand Backup" }
          },
          {
            name: "Support SLA",
            values: { "WP STARTER": "24/7 Human Support", "WP PRO": "24/7 Human Support", "WP TURBO": "24/7 VIP Priority Support" }
          }
        ]
      }
    ]
  },
  nodejs: {
    title: "Node.js Application Hosting",
    subtitle: "Deploy full-stack Node.js applications with Nginx reverse proxy routing and cPanel control integration.",
    plans: [
      {
        name: "NODE MINI",
        tagline: "API & MICROSERVICES",
        price: "$2.99",
        billingCycle: "/mo",
        isPopular: false,
        link: "https://manage.hostingspell.com/store/cpanel-cloud-hosting-ind/ind-do-premium1?currency=1"
      },
      {
        name: "NODE SCALE",
        tagline: "FULLSTACK APPLICATIONS",
        price: "$4.99",
        billingCycle: "/mo",
        isPopular: true,
        link: "https://manage.hostingspell.com/store/cpanel-cloud-hosting-ind/ind-do-premium2?currency=1"
      }
    ],
    categories: [
      {
        name: "Server Resources",
        features: [
          {
            name: "vCPU Cores",
            values: { "NODE MINI": "1 CPU Core", "NODE SCALE": "2 CPU Cores" }
          },
          {
            name: "Dedicated RAM",
            values: { "NODE MINI": "2 GB RAM", "NODE SCALE": "4 GB RAM" }
          },
          {
            name: "Pure NVMe SSD",
            values: { "NODE MINI": "25 GB NVMe", "NODE SCALE": "60 GB NVMe" }
          },
          {
            name: "Monthly Bandwidth",
            values: { "NODE MINI": "250 GB", "NODE SCALE": "1 TB" }
          },
          {
            name: "Node.js Version Engine",
            description: "Supports LTS versions like 18.x, 20.x, and 22.x.",
            values: { "NODE MINI": "Yes (18.x, 20.x, 22.x)", "NODE SCALE": "Yes (18.x, 20.x, 22.x)" }
          }
        ]
      },
      {
        name: "Deployment & Tooling",
        features: [
          {
            name: "Proxy Routing Method",
            description: "How network requests are routed to your Node process.",
            values: { "NODE MINI": "Passenger / Nginx Proxy", "NODE SCALE": "Passenger / PM2 Reverse Proxy" }
          },
          {
            name: "PM2 Process Manager",
            description: "Process monitor to ensure application automatically restarts on crashes.",
            values: { "NODE MINI": "Not Included", "NODE SCALE": "Included & Integrated" }
          },
          {
            name: "NPM / Yarn / PNPM",
            description: "Manage app dependencies directly from the dashboard terminal.",
            values: { "NODE MINI": true, "NODE SCALE": true }
          },
          {
            name: "Git Deploy Integration",
            values: { "NODE MINI": true, "NODE SCALE": true }
          },
          {
            name: "WebSockets & Custom Ports",
            description: "Needed for chat systems, real-time sync networks, and complex microservices.",
            values: { "NODE MINI": "No (Standard HTTP only)", "NODE SCALE": "Yes (WebSocket & Custom Port support)" }
          },
          {
            name: "Dedicated Redis Server",
            values: { "NODE MINI": "No", "NODE SCALE": "Yes (Included)" }
          },
          {
            name: "Databases Supported",
            description: "Quick setup configurations for PostgreSQL, MySQL, and MongoDB connections.",
            values: { "NODE MINI": "Postgres / MySQL / MongoDB", "NODE SCALE": "Postgres / MySQL / MongoDB" }
          }
        ]
      }
    ]
  },
  combo: {
    title: "Combo Lifetime Free Domain Hosting",
    subtitle: "Unlock a lifetime free domain subscription with our dedicated SSD hosting tiers.",
    plans: [
      {
        name: "EUROPA",
        tagline: "FREE LIFETIME DOMAIN",
        price: "$24.49",
        billingCycle: "/mo",
        isPopular: false,
        link: "https://manage.hostingspell.com/store/combo-cpanel-hosting-free-domain/europa?currency=1"
      },
      {
        name: "IO",
        tagline: "FREE LIFETIME DOMAIN",
        price: "$29.99",
        billingCycle: "/mo",
        isPopular: true,
        link: "https://manage.hostingspell.com/store/combo-cpanel-hosting-free-domain/io?currency=1"
      }
    ],
    categories: [
      {
        name: "Domain & Core Resource",
        features: [
          {
            name: "Lifetime Free Domain",
            description: "Includes a free domain registration (like .com, .in, .online) that renews for free as long as your hosting is active.",
            values: { EUROPA: "Yes (1 Domain)", IO: "Yes (1 Domain)" }
          },
          {
            name: "Websites Hosted",
            values: { EUROPA: "2 Websites", IO: "4 Websites" }
          },
          {
            name: "SSD Storage Space",
            values: { EUROPA: "20 GB SSD", IO: "Unlimited SSD Storage" }
          },
          {
            name: "Monthly Bandwidth",
            values: { EUROPA: "Unlimited", IO: "Unlimited" }
          },
          {
            name: "Server Core Allocation",
            values: { EUROPA: "2 CPU Cores / 2GB RAM", IO: "2 CPU Cores / 2GB RAM" }
          }
        ]
      },
      {
        name: "Features & Support",
        features: [
          {
            name: "cPanel Dashboard Access",
            values: { EUROPA: true, IO: true }
          },
          {
            name: "LiteSpeed Server + LSCache",
            values: { EUROPA: true, IO: true }
          },
          {
            name: "Free AutoSSL Certs",
            values: { EUROPA: true, IO: true }
          },
          {
            name: "Datacenter Hypervisors",
            values: { EUROPA: "DigitalOcean / Linode", IO: "DigitalOcean / Linode" }
          }
        ]
      }
    ]
  },
  python: {
    title: "Python Application Hosting",
    subtitle: "Compare HostingSpell's Python Lite plan side-by-side with Heroku dynos and traditional shared web hosts.",
    plans: [
      {
        name: "PYTHON LITE",
        tagline: "HOSTINGSPELL PLAN",
        price: "$2.99",
        billingCycle: "/mo",
        isPopular: true,
        link: "https://manage.hostingspell.com/store/cpanel-cloud-hosting-ind/ind-do-premium1?currency=1"
      },
      {
        name: "HEROKU ECO",
        tagline: "ECO DYNO ALTERNATIVE",
        price: "$5.00",
        billingCycle: "/mo",
        isPopular: false,
        link: "https://www.heroku.com"
      },
      {
        name: "TRADITIONAL HOST",
        tagline: "STANDARD WEB HOSTING",
        price: "$2.99",
        billingCycle: "/mo",
        isPopular: false,
        link: "https://hostingspell.com"
      }
    ],
    categories: [
      {
        name: "Python Capabilities",
        features: [
          {
            name: "Supported Python Versions",
            description: "Ability to run modern Python version environments.",
            values: { "PYTHON LITE": "Yes (3.9, 3.10, 3.11, 3.12)", "HEROKU ECO": "Yes (via buildpacks)", "TRADITIONAL HOST": "None (No Python support)" }
          },
          {
            name: "Virtual Environment (virtualenv)",
            description: "Isolated environment manager for managing dependencies via pip.",
            values: { "PYTHON LITE": true, "HEROKU ECO": true, "TRADITIONAL HOST": false }
          },
          {
            name: "WSGI / ASGI Gateway Ready",
            description: "Phusion Passenger server routing configuration for Flask, Django, and FastAPI.",
            values: { "PYTHON LITE": true, "HEROKU ECO": true, "TRADITIONAL HOST": false }
          },
          {
            name: "Sleep States (Idling)",
            description: "Whether the application goes to sleep after inactivity, slowing down initial requests.",
            values: { "PYTHON LITE": "No (Always Active)", "HEROKU ECO": "Yes (Idles after 30 mins)", "TRADITIONAL HOST": "N/A" }
          },
          {
            name: "SSH Command Line Terminal",
            description: "Ability to run remote bash commands to install requirements.txt and run manage.py migrations.",
            values: { "PYTHON LITE": true, "HEROKU ECO": true, "TRADITIONAL HOST": false }
          }
        ]
      },
      {
        name: "Resources & Database",
        features: [
          {
            name: "Server CPU & RAM Allocation",
            values: { "PYTHON LITE": "1 CPU Core / 1GB RAM", "HEROKU ECO": "Shared (Eco Dyno)", "TRADITIONAL HOST": "Shared (Heavily limited)" }
          },
          {
            name: "NVMe SSD Storage Space",
            values: { "PYTHON LITE": "20 GB NVMe Storage", "HEROKU ECO": "Ephemeral (No persistent storage)", "TRADITIONAL HOST": "5 GB HDD/SSD" }
          },
          {
            name: "Databases Included",
            description: "Included MySQL, PostgreSQL or SQLite databases.",
            values: { "PYTHON LITE": "MySQL & Postgres Included", "HEROKU ECO": "Paid Add-on ($5.00/mo+)", "TRADITIONAL HOST": "MySQL only (limited)" }
          },
          {
            name: "Daily Automatic Backups",
            values: { "PYTHON LITE": true, "HEROKU ECO": "Paid Add-on", "TRADITIONAL HOST": false }
          },
          {
            name: "Free SSL Certificates",
            values: { "PYTHON LITE": true, "HEROKU ECO": true, "TRADITIONAL HOST": false }
          }
        ]
      }
    ]
  },
  webuzo: {
    title: "Webuzo Shared Web Hosting",
    subtitle: "Compare our Venus, Mars, Saturn, and Jupiter Webuzo shared tiers side-by-side.",
    plans: [
      {
        name: "VENUS",
        tagline: "BEST FOR STARTERS!",
        price: "$0.89",
        originalPrice: "$2.99",
        discount: "SAVE 70%",
        billingCycle: "/mo",
        isPopular: false,
        link: "https://manage.hostingspell.com/store/webuzo-shared-hosting/venus?currency=1"
      },
      {
        name: "MARS",
        tagline: "BEST FOR SMALL SITES!",
        price: "$1.39",
        originalPrice: "$4.99",
        discount: "SAVE 72%",
        billingCycle: "/mo",
        isPopular: true,
        link: "https://manage.hostingspell.com/store/webuzo-shared-hosting/mars?currency=1"
      },
      {
        name: "SATURN",
        tagline: "BEST FOR GROWING SITES!",
        price: "$1.79",
        originalPrice: "$6.99",
        discount: "SAVE 74%",
        billingCycle: "/mo",
        isPopular: false,
        link: "https://manage.hostingspell.com/store/webuzo-shared-hosting/saturn?currency=1"
      },
      {
        name: "JUPITER",
        tagline: "BEST FOR BUSINESSES!",
        price: "$2.39",
        originalPrice: "$8.99",
        discount: "SAVE 73%",
        billingCycle: "/mo",
        isPopular: false,
        link: "https://manage.hostingspell.com/store/webuzo-shared-hosting/jupiter?currency=1"
      }
    ],
    categories: [
      {
        name: "Core Limits & Resources",
        features: [
          {
            name: "Websites Hosted",
            description: "The total number of separate websites/domains you can host on this account.",
            values: { VENUS: "1 Website", MARS: "3 Websites", SATURN: "10 Websites", JUPITER: "Unlimited Websites" }
          },
          {
            name: "Pure NVMe SSD Storage",
            description: "Ultra-fast NVMe storage limits for database files and site media.",
            values: { VENUS: "10 GB NVMe", MARS: "25 GB NVMe", SATURN: "50 GB NVMe", JUPITER: "Unlimited Storage" }
          },
          {
            name: "Monthly Bandwidth",
            description: "The amount of network traffic allowed for your sites per month.",
            values: { VENUS: "Unlimited Bandwidth", MARS: "Unlimited Bandwidth", SATURN: "Unlimited Bandwidth", JUPITER: "Unlimited Bandwidth" }
          },
          {
            name: "Control Panel",
            description: "Modern control panel for account and website management.",
            values: { VENUS: "Webuzo Panel", MARS: "Webuzo Panel", SATURN: "Webuzo Panel", JUPITER: "Webuzo Panel" }
          },
          {
            name: "Web Server Stack",
            description: "Web server engine powering request execution.",
            values: { VENUS: "Apache + Nginx Dual Stack", MARS: "Apache + Nginx Dual Stack", SATURN: "Apache + Nginx Dual Stack", JUPITER: "Apache + Nginx Dual Stack" }
          },
          {
            name: "PHP Runtime Versions",
            description: "MultiPHP version selection per domain.",
            values: { VENUS: "PHP 5.6 - 8.3+", MARS: "PHP 5.6 - 8.3+", SATURN: "PHP 5.6 - 8.3+", JUPITER: "PHP 5.6 - 8.3+" }
          },
          {
            name: "Softaculous 1-Click Apps",
            description: "One-click application installer for WordPress, Laravel, Joomla, etc.",
            values: { VENUS: "350+ Apps", MARS: "350+ Apps", SATURN: "350+ Apps", JUPITER: "350+ Apps" }
          },
          {
            name: "MySQL/PostgreSQL Databases",
            description: "Maximum number of databases you can create.",
            values: { VENUS: "5 Databases", MARS: "15 Databases", SATURN: "Unlimited", JUPITER: "Unlimited" }
          },
          {
            name: "Email & FTP Accounts",
            description: "Maximum professional mailbox and FTP accounts.",
            values: { VENUS: "5 Accounts", MARS: "15 Accounts", SATURN: "Unlimited", JUPITER: "Unlimited" }
          },
          {
            name: "Free Auto SSL & Backups",
            values: { VENUS: true, MARS: true, SATURN: true, JUPITER: true }
          }
        ]
      }
    ]
  },
  webuzoreseller: {
    title: "Webuzo Reseller Hosting",
    subtitle: "Compare our Webuzo Reseller tiers with white-label features and admin controls.",
    plans: [
      {
        name: "HS INITIATIVE",
        tagline: "ENTRY LEVEL RESELLER",
        price: "$9.99",
        originalPrice: "$14.99",
        discount: "SAVE 33%",
        billingCycle: "/mo",
        isPopular: false,
        link: "https://manage.hostingspell.com/store/webuzo-reseller-hosting/hs-initiative?currency=1"
      },
      {
        name: "HS EARLDOM",
        tagline: "MID TIER RESELLER",
        price: "$19.99",
        originalPrice: "$29.99",
        discount: "SAVE 33%",
        billingCycle: "/mo",
        isPopular: true,
        link: "https://manage.hostingspell.com/store/webuzo-reseller-hosting/hs-earldom?currency=1"
      },
      {
        name: "HS DUKEDOM",
        tagline: "HIGH PERFORMANCE",
        price: "$39.99",
        originalPrice: "$54.99",
        discount: "SAVE 27%",
        billingCycle: "/mo",
        isPopular: false,
        link: "https://manage.hostingspell.com/store/webuzo-reseller-hosting/hs-dukedom?currency=1"
      },
      {
        name: "HS KINGDOM",
        tagline: "ULTRA PERFORMANCE",
        price: "$59.99",
        originalPrice: "$79.99",
        discount: "SAVE 25%",
        billingCycle: "/mo",
        isPopular: false,
        link: "https://manage.hostingspell.com/store/webuzo-reseller-hosting/hs-kingdom?currency=1"
      }
    ],
    categories: [
      {
        name: "Reseller Infrastructure",
        features: [
          {
            name: "End-User Accounts Limit",
            description: "Number of independent Webuzo hosting accounts you can provision for clients.",
            values: { "HS INITIATIVE": "25 Accounts", "HS EARLDOM": "50 Accounts", "HS DUKEDOM": "100 Accounts", "HS KINGDOM": "150 Accounts" }
          },
          {
            name: "100% White-Label Panel",
            description: "Rebrand logo, colors, links, and nameservers (ns1/ns2.yourbrand.com).",
            values: { "HS INITIATIVE": true, "HS EARLDOM": true, "HS DUKEDOM": true, "HS KINGDOM": true }
          },
          {
            name: "WHMCS Automation",
            description: "Automate billing, ordering, ticketing, and user creation with WHMCS.",
            values: { "HS INITIATIVE": true, "HS EARLDOM": true, "HS DUKEDOM": true, "HS KINGDOM": true }
          },
          {
            name: "Web Server Stack",
            description: "Dual-stack performance for client accounts.",
            values: { "HS INITIATIVE": "Apache + Nginx", "HS EARLDOM": "Apache + Nginx", "HS DUKEDOM": "Apache + Nginx", "HS KINGDOM": "Apache + Nginx" }
          },
          {
            name: "cPanel Migration Importer",
            description: "Import client cPanel/Plesk accounts directly into Webuzo.",
            values: { "HS INITIATIVE": true, "HS EARLDOM": true, "HS DUKEDOM": true, "HS KINGDOM": true }
          },
          {
            name: "Free SSL & Daily Backups",
            values: { "HS INITIATIVE": true, "HS EARLDOM": true, "HS DUKEDOM": true, "HS KINGDOM": true }
          }
        ]
      }
    ]
  }
};
