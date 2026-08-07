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
