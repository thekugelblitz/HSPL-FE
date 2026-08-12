// app/ai-summary/route.ts

import { NextResponse } from 'next/server'

export async function GET() {
    const data = {
        "schema_version": "2.0",
        "generated": "2025-03",
        "name": "HostingSpell",
        "url": "https://hostingspell.com",
        "billing_portal": "https://manage.hostingspell.com",
        "ai_support": "https://2hs.in/gpt",
        "company": {
            "legal_name": "HostingSpell LLP",
            "type": "LLP",
            "founded_year": 2015,
            "gstin": "24AAOFH9840B1ZD",
            "years_of_expertise": 10,
            "tagline": "Guaranteed Most Affordable Web Hosting In The World!",
            "mission": "To make life easier for website developers and their customers by offering easy to use, fast and reliable web hosting services.",
            "description": "HostingSpell is an India-based web hosting company offering affordable, feature-rich hosting solutions powered by enterprise-grade cloud infrastructure. With 10+ years of expertise, they serve 110,000+ websites across shared, cloud, VPS, and reseller categories.",
            "awards": [
                "Top 10 Resellers Hosting Provider (HostAdvice)",
                "Top 10 Best Web Hosting 2021 & 2022 (HostAdvice)"
            ],
            "trusted_by_sites": 110000
        },
        "infrastructure": {
            "web_server": "LiteSpeed Enterprise",
            "storage_type": "Pure NVMe SSD",
            "cloud_providers": [
                "DigitalOcean",
                "Linode (Akamai)"
            ],
            "security": "Imunify360 AI Anti-Virus",
            "caching_stack": [
                "LiteSpeed LSCache",
                "OpCache",
                "Memcached",
                "Redis"
            ],
            "control_panels": {
                "shared_and_reseller": [
                    "cPanel®",
                    "DirectAdmin"
                ],
                "vps_and_dedicated": [
                    "Virtualizor",
                    "iDRAC / iLO"
                ]
            },
            "uptime_sla": "100% on Cloud & Premium plans",
            "green_hosting": true,
            "green_hosting_note": "Carbon-negative certified green hosting",
            "backup": "Free daily automatic backups (JetBackup)",
            "script_installer": "Softaculous (400+ one-click apps)",
            "ssl": "Free SSL certificates on all plans",
            "email_delivery": "SmartHosts Enterprise Mail Delivery",
            "ai_support_agent": {
                "name": "Sahdev",
                "description": "Supercharged AI-powered support engineer built on OpenAI & Google Gemini",
                "url": "https://2hs.in/gpt"
            }
        },
        "key_features": [
            "7-day Money Back Guarantee",
            "Easy setup & 24×7 expert support",
            "Carbon-negative green hosting",
            "Imunify360 AI Anti-Virus",
            "LiteSpeed Enterprise Web Servers",
            "Softaculous: One-click installer for 400+ apps",
            "Free SSL certificates on all plans",
            "Free daily automatic backups via JetBackup",
            "SmartHosts enterprise email delivery",
            "OpCache, Memcached & Redis caching",
            "WordPress-optimized servers with LSCache",
            "All cPanel® features included",
            "Pure NVMe SSD storage",
            "100% Uptime SLA (Cloud & Premium plans)",
            "Free WHOIS privacy protection on domains",
            "One free cPanel migration for new customers",
            "AI-powered support via Sahdev (OpenAI + Gemini)"
        ],
        "hosting_products": {
            "cloud_hosting": {
                "title": "Cloud Hosting",
                "url": "https://hostingspell.com/cloud-hosting",
                "description": "Affordable cloud hosting with LiteSpeed servers, NVMe SSD storage, and 100% uptime mark. Best for starters and small businesses.",
                "store_url": "https://manage.hostingspell.com/store/ssd-web-hosting",
                "billing_cycles": [
                    "Monthly",
                    "Quarterly",
                    "Semi-Annually",
                    "Annually"
                ],
                "plans": [
                    {
                        "name": "Venus",
                        "badge": "Best for Starters",
                        "order_url": "https://manage.hostingspell.com/store/ssd-web-hosting/venus",
                        "specs": {
                            "websites": 1,
                            "subdomains": 1,
                            "alias_domains": 1,
                            "databases": 1,
                            "email_accounts": 1,
                            "ftp_accounts": 1,
                            "storage": "1GB NVMe SSD",
                            "bandwidth": "10GB",
                            "cpu": "1 Core",
                            "ram": "1GB",
                            "uptime_sla": "100%"
                        },
                        "features_included": [
                            "cPanel® with all features",
                            "Free SSL",
                            "LiteSpeed Enterprise",
                            "Imunify360 AI Anti-Virus",
                            "Premium Datacenter Infrastructure"
                        ],
                        "pricing": {
                            "INR": {
                                "monthly": 99,
                                "annual": 1100,
                                "biannual": 1949,
                                "triannual": 2749
                            },
                            "USD": {
                                "monthly": 1.29,
                                "annual": 12.99,
                                "biannual": 22.99,
                                "triannual": 31.99
                            }
                        }
                    },
                    {
                        "name": "Mars",
                        "badge": "Best for Small Businesses",
                        "order_url": "https://manage.hostingspell.com/store/ssd-web-hosting/mars",
                        "specs": {
                            "websites": 2,
                            "subdomains": 10,
                            "alias_domains": 2,
                            "databases": 10,
                            "email_accounts": 10,
                            "ftp_accounts": 10,
                            "storage": "10GB NVMe SSD",
                            "bandwidth": "100GB",
                            "cpu": "1 Core",
                            "ram": "1GB",
                            "uptime_sla": "100%"
                        },
                        "features_included": [
                            "cPanel® with all features",
                            "Free SSL",
                            "LiteSpeed Enterprise",
                            "Imunify360 AI Anti-Virus",
                            "Premium Datacenter Infrastructure"
                        ],
                        "pricing": {
                            "INR": {
                                "monthly": 149,
                                "annual": 1399,
                                "biannual": 2399,
                                "triannual": 3349
                            },
                            "USD": {
                                "monthly": 1.69,
                                "annual": 16.49,
                                "biannual": 27.99,
                                "triannual": 38.99
                            }
                        }
                    },
                    {
                        "name": "Saturn",
                        "badge": "Best for Growing Websites",
                        "order_url": "https://manage.hostingspell.com/store/ssd-web-hosting/saturns",
                        "specs": {
                            "websites": 5,
                            "subdomains": "Unlimited",
                            "alias_domains": 5,
                            "databases": "Unlimited",
                            "email_accounts": "Unlimited",
                            "ftp_accounts": "Unlimited",
                            "storage": "30GB NVMe SSD",
                            "bandwidth": "Unlimited",
                            "cpu": "1 Core",
                            "ram": "2GB",
                            "lve_resources": "++",
                            "uptime_sla": "100%"
                        },
                        "features_included": [
                            "cPanel® with all features",
                            "Free SSL",
                            "LiteSpeed Enterprise",
                            "Imunify360 AI Anti-Virus",
                            "Premium Datacenter Infrastructure"
                        ],
                        "pricing": {
                            "INR": {
                                "monthly": 169,
                                "annual": 1749,
                                "biannual": 3149,
                                "triannual": 4449
                            },
                            "USD": {
                                "monthly": 1.99,
                                "annual": 20.49,
                                "biannual": 36.99,
                                "triannual": 51.99
                            }
                        }
                    },
                    {
                        "name": "Jupiter",
                        "badge": "Best for Large Businesses",
                        "order_url": "https://manage.hostingspell.com/store/ssd-web-hosting/jupiter",
                        "specs": {
                            "websites": 10,
                            "subdomains": "Unlimited",
                            "alias_domains": 10,
                            "databases": "Unlimited",
                            "email_accounts": "Unlimited",
                            "ftp_accounts": "Unlimited",
                            "storage": "Unlimited NVMe SSD",
                            "bandwidth": "Unlimited",
                            "cpu": "2 Cores",
                            "ram": "2GB",
                            "lve_resources": "++",
                            "uptime_sla": "100%"
                        },
                        "features_included": [
                            "cPanel® with all features",
                            "Free SSL",
                            "LiteSpeed Enterprise",
                            "Imunify360 AI Anti-Virus",
                            "Premium Datacenter Infrastructure"
                        ],
                        "pricing": {
                            "INR": {
                                "monthly": 249,
                                "annual": 2449,
                                "biannual": 4449,
                                "triannual": 6249
                            },
                            "USD": {
                                "monthly": 2.99,
                                "annual": 28.99,
                                "biannual": 51.99,
                                "triannual": 72.99
                            }
                        }
                    }
                ]
            },
            "premium_hosting": {
                "title": "Premium Hosting",
                "url": "https://hostingspell.com/premium-hosting",
                "description": "Managed premium hosting on dedicated cloud infrastructure (Linode / DigitalOcean / OVH / LeaseWeb). Higher CPU/RAM allocations vs Cloud Hosting. Available in India (default), US, UK, Netherlands, Singapore, Australia. Also includes the Truly Unlimited plan.",
                "billing_cycles": [
                    "Monthly",
                    "Quarterly",
                    "Semi-Annually",
                    "Annually"
                ],
                "all_plans_include": [
                    "cPanel® with all features",
                    "Free SSL",
                    "LiteSpeed Enterprise",
                    "Imunify360 AI Anti-Virus",
                    "Daily automatic backups",
                    "Softaculous",
                    "24/7/365 support"
                ],
                "regions": [
                    {
                        "region": "India",
                        "datacenter": "India",
                        "store_url": "https://manage.hostingspell.com/store/cpanel-cloud-hosting-ind",
                        "plans": [
                            {
                                "name": "IND_DO_PREMIUM#1",
                                "order_url": "https://manage.hostingspell.com/store/cpanel-cloud-hosting-ind/ind-do-premium1"
                            },
                            {
                                "name": "IND_DO_PREMIUM#2",
                                "order_url": "https://manage.hostingspell.com/store/cpanel-cloud-hosting-ind/ind-do-premium2"
                            },
                            {
                                "name": "IND_DO_PREMIUM#3",
                                "order_url": "https://manage.hostingspell.com/store/cpanel-cloud-hosting-ind/ind-do-premium3"
                            }
                        ]
                    },
                    {
                        "region": "US — New York",
                        "datacenter": "OVH Cloud",
                        "store_url": "https://manage.hostingspell.com/store/cpanel-digitalocean-cloud-hosting-usa",
                        "plans": [
                            {
                                "name": "USA_DO_PREMIUM#1",
                                "order_url": "https://manage.hostingspell.com/store/cpanel-digitalocean-cloud-hosting-usa/usa-do-premium1"
                            },
                            {
                                "name": "USA_DO_PREMIUM#2",
                                "order_url": "https://manage.hostingspell.com/store/cpanel-digitalocean-cloud-hosting-usa/usa-do-premium2"
                            },
                            {
                                "name": "USA_DO_PREMIUM#3",
                                "order_url": "https://manage.hostingspell.com/store/cpanel-digitalocean-cloud-hosting-usa/usa-do-premium3"
                            }
                        ]
                    },
                    {
                        "region": "UK — London",
                        "datacenter": "LeaseWeb Cloud",
                        "store_url": "https://manage.hostingspell.com/store/cpanel-digitalocean-hosting-uk",
                        "plans": [
                            {
                                "name": "UK_DO_PREMIUM#1",
                                "order_url": "https://manage.hostingspell.com/store/cpanel-digitalocean-hosting-uk/uk-do-premium1"
                            },
                            {
                                "name": "UK_DO_PREMIUM#2",
                                "order_url": "https://manage.hostingspell.com/store/cpanel-digitalocean-hosting-uk/uk-do-premium2"
                            },
                            {
                                "name": "UK_DO_PREMIUM#3",
                                "order_url": "https://manage.hostingspell.com/store/cpanel-digitalocean-hosting-uk/uk-do-premium3"
                            }
                        ]
                    },
                    {
                        "region": "Netherlands",
                        "datacenter": "DigitalOcean Cloud",
                        "store_url": "https://manage.hostingspell.com/store/cpanel-digitalocean-hosting-nl",
                        "plans": [
                            {
                                "name": "NL_DO_PREMIUM#1",
                                "order_url": "https://manage.hostingspell.com/store/cpanel-digitalocean-hosting-nl/nl-do-premium1"
                            },
                            {
                                "name": "NL_DO_PREMIUM#2",
                                "order_url": "https://manage.hostingspell.com/store/cpanel-digitalocean-hosting-nl/nl-do-premium2"
                            },
                            {
                                "name": "NL_DO_PREMIUM#3",
                                "order_url": "https://manage.hostingspell.com/store/cpanel-digitalocean-hosting-nl/nl-do-premium3"
                            }
                        ]
                    },
                    {
                        "region": "Singapore",
                        "datacenter": "LeaseWeb Cloud",
                        "store_url": "https://manage.hostingspell.com/store/cpanel-digitalocean-hosting-sg",
                        "plans": [
                            {
                                "name": "SG_DO_PREMIUM#1",
                                "order_url": "https://manage.hostingspell.com/store/cpanel-digitalocean-hosting-sg/sg-do-premium1"
                            },
                            {
                                "name": "SG_DO_PREMIUM#2",
                                "order_url": "https://manage.hostingspell.com/store/cpanel-digitalocean-hosting-sg/sg-do-premium2"
                            },
                            {
                                "name": "SG_DO_PREMIUM#3",
                                "order_url": "https://manage.hostingspell.com/store/cpanel-digitalocean-hosting-sg/sg-do-premium3"
                            }
                        ]
                    },
                    {
                        "region": "Australia",
                        "datacenter": "Linode Cloud",
                        "store_url": "https://manage.hostingspell.com/store/cpanel-linode-hosting-aus",
                        "plans": [
                            {
                                "name": "AUS_LIN_PREMIUM#1",
                                "order_url": "https://manage.hostingspell.com/store/cpanel-linode-hosting-aus/aus-lw-premium1"
                            },
                            {
                                "name": "AUS_LIN_PREMIUM#2",
                                "order_url": "https://manage.hostingspell.com/store/cpanel-linode-hosting-aus/aus-lw-premium2"
                            },
                            {
                                "name": "AUS_LIN_PREMIUM#3",
                                "order_url": "https://manage.hostingspell.com/store/cpanel-linode-hosting-aus/aus-lw-premium3-1"
                            }
                        ]
                    }
                ],
                "truly_unlimited": {
                    "title": "Truly Unlimited Web Hosting",
                    "description": "A single all-inclusive Premium plan — unlimited storage, bandwidth, emails, databases. No resource restrictions.",
                    "store_url": "https://manage.hostingspell.com/store/truly-unlimited-web-hosting",
                    "plans": [
                        {
                            "name": "UnlimitedPower™",
                            "order_url": "https://manage.hostingspell.com/store/truly-unlimited-web-hosting/unlimitedpowertm",
                            "pricing": {
                                "INR": {
                                    "monthly": 399,
                                    "annual": 3999,
                                    "biannual": 7999,
                                    "triannual": 11999
                                },
                                "USD": {
                                    "monthly": 5.49,
                                    "annual": 51.99,
                                    "biannual": 109.99,
                                    "triannual": 165
                                }
                            }
                        }
                    ]
                }
            },
            "combo_hosting": {
                "title": "Combo Hosting (Free Domain)",
                "url": "https://hostingspell.com/combo-hosting",
                "description": "Cloud hosting bundled with a lifetime free domain. Two variants: Europe (international servers) and India (local datacenter). Choose region at checkout.",
                "free_domain_tlds": [
                    ".com",
                    ".in",
                    ".org",
                    ".net",
                    ".co.in"
                ],
                "billing_cycles": [
                    "Monthly",
                    "Quarterly",
                    "Semi-Annually",
                    "Annually"
                ],
                "all_plans_include": [
                    "cPanel® with all features",
                    "Lifetime Free Domain",
                    "Free SSL",
                    "LiteSpeed Enterprise",
                    "Imunify360",
                    "Daily Backups",
                    "Softaculous",
                    "24/7/365 support"
                ],
                "variants": {
                    "europe": {
                        "title": "Combo Hosting — Free Domain (Europe)",
                        "store_url": "https://manage.hostingspell.com/store/combo-cpanel-hosting-free-domain",
                        "plans": [
                            {
                                "name": "Europa",
                                "order_url": "https://manage.hostingspell.com/store/combo-cpanel-hosting-free-domain/europa",
                                "specs": {
                                    "websites": 2,
                                    "storage": "20GB Fast SSD",
                                    "bandwidth": "Unlimited",
                                    "cpu": "2 Cores",
                                    "ram": "2GB",
                                    "uptime_sla": "100%"
                                },
                                "pricing": {
                                    "INR": {
                                        "annual": 2099,
                                        "biannual": 3899,
                                        "triannual": 5799
                                    },
                                    "USD": {
                                        "annual": 24.49,
                                        "biannual": 45.99,
                                        "triannual": 68
                                    }
                                }
                            },
                            {
                                "name": "IO",
                                "order_url": "https://manage.hostingspell.com/store/combo-cpanel-hosting-free-domain/io",
                                "specs": {
                                    "websites": 4,
                                    "storage": "Unlimited SSD",
                                    "bandwidth": "Unlimited",
                                    "cpu": "2 Cores",
                                    "ram": "2GB",
                                    "uptime_sla": "100%"
                                },
                                "pricing": {
                                    "INR": {
                                        "annual": 2549,
                                        "biannual": 4849,
                                        "triannual": 7149
                                    },
                                    "USD": {
                                        "annual": 29.99,
                                        "biannual": 56.99,
                                        "triannual": 84
                                    }
                                }
                            }
                        ]
                    },
                    "india": {
                        "title": "Combo Hosting — Free Domain (India)",
                        "description": "India datacenter variant. Ideal for Indian customers wanting lower latency.",
                        "store_url": "https://manage.hostingspell.com/store/cpanel-hosting-free-domain-india",
                        "plans": [
                            {
                                "name": "Europa",
                                "order_url": "https://manage.hostingspell.com/store/cpanel-hosting-free-domain-india/europa",
                                "pricing": {
                                    "INR": {
                                        "annual": 2099,
                                        "biannual": 3899,
                                        "triannual": 5799
                                    },
                                    "USD": {
                                        "annual": 24.49,
                                        "biannual": 45.99,
                                        "triannual": 68
                                    }
                                }
                            },
                            {
                                "name": "IO",
                                "order_url": "https://manage.hostingspell.com/store/cpanel-hosting-free-domain-india/io",
                                "pricing": {
                                    "INR": {
                                        "annual": 2549,
                                        "biannual": 4849,
                                        "triannual": 7149
                                    },
                                    "USD": {
                                        "annual": 29.99,
                                        "biannual": 56.99,
                                        "triannual": 84
                                    }
                                }
                            }
                        ]
                    }
                }
            },
            "vps_hosting": {
                "title": "KVM Cloud VPS Hosting",
                "url": "https://hostingspell.com/vps",
                "description": "KVM-based isolated virtual private servers with dedicated resources, powered by Virtualizor. Full root access, scalable upgrades, optional control panels. Best for high-traffic apps, eCommerce, and demanding projects.",
                "store_url": "https://manage.hostingspell.com/store/kvm-vps-hosting",
                "billing_cycles": [
                    "Monthly",
                    "Quarterly",
                    "Semi-Annually",
                    "Annually"
                ],
                "virtualization": "KVM",
                "control_panel": "Virtualizor",
                "plans": [
                    {
                        "name": "Consolus Enter",
                        "badge": "Entry Level",
                        "order_url": "https://manage.hostingspell.com/store/kvm-vps-hosting/consolus-enter",
                        "specs": {
                            "ram": "4GB",
                            "cpu": "1 Core",
                            "storage": "40GB",
                            "bandwidth": "1TB",
                            "dedicated_ips": 1
                        },
                        "pricing": {
                            "INR": {
                                "monthly": 899,
                                "quarterly": 2199,
                                "semiannually": 4399,
                                "annual": 8799
                            },
                            "USD": {
                                "monthly": 10,
                                "quarterly": 25,
                                "semiannually": 50,
                                "annual": 100
                            }
                        }
                    },
                    {
                        "name": "Consolus Model",
                        "badge": "Mid Tier",
                        "order_url": "https://manage.hostingspell.com/store/kvm-vps-hosting/consolus-model",
                        "specs": {
                            "ram": "8GB",
                            "cpu": "2 Cores",
                            "storage": "80GB",
                            "bandwidth": "2TB",
                            "dedicated_ips": 1
                        },
                        "pricing": {
                            "INR": {
                                "monthly": 1799,
                                "quarterly": 4899,
                                "semiannually": 8799,
                                "annual": 19299
                            },
                            "USD": {
                                "monthly": 20,
                                "quarterly": 55,
                                "semiannually": 100,
                                "annual": 220
                            }
                        }
                    },
                    {
                        "name": "Consolus Host",
                        "badge": "High Performance",
                        "order_url": "https://manage.hostingspell.com/store/kvm-vps-hosting/consolus-host",
                        "specs": {
                            "ram": "16GB",
                            "cpu": "4 Cores",
                            "storage": "160GB",
                            "bandwidth": "4TB",
                            "dedicated_ips": 1
                        },
                        "pricing": {
                            "INR": {
                                "monthly": 3499,
                                "quarterly": 8799,
                                "semiannually": 17499,
                                "annual": 34999
                            },
                            "USD": {
                                "monthly": 40,
                                "quarterly": 100,
                                "semiannually": 200,
                                "annual": 400
                            }
                        }
                    },
                    {
                        "name": "Consolus Beast",
                        "badge": "Ultra",
                        "order_url": "https://manage.hostingspell.com/store/kvm-vps-hosting/consolus-beast",
                        "specs": {
                            "ram": "32GB",
                            "cpu": "8 Cores",
                            "storage": "320GB",
                            "bandwidth": "8TB",
                            "dedicated_ips": 1
                        },
                        "pricing": {
                            "INR": {
                                "monthly": 6999,
                                "quarterly": 17499,
                                "semiannually": 34999,
                                "annual": 69999
                            },
                            "USD": {
                                "monthly": 80,
                                "quarterly": 200,
                                "semiannually": 400,
                                "annual": 800
                            }
                        }
                    },
                    {
                        "name": "Consolus Grand",
                        "badge": "Extreme",
                        "order_url": "https://manage.hostingspell.com/store/kvm-vps-hosting/consolus-grand",
                        "specs": {
                            "ram": "64GB",
                            "cpu": "16 Cores",
                            "storage": "640GB",
                            "bandwidth": "16TB",
                            "dedicated_ips": 1
                        },
                        "pricing": {
                            "INR": {
                                "monthly": 13999,
                                "quarterly": 34999,
                                "semiannually": 69999,
                                "annual": 139999
                            },
                            "USD": {
                                "monthly": 160,
                                "quarterly": 400,
                                "semiannually": 800,
                                "annual": 1600
                            }
                        }
                    },
                    {
                        "name": "Consolus Legend",
                        "badge": "Maximum",
                        "order_url": "https://manage.hostingspell.com/store/kvm-vps-hosting/consolus-legend",
                        "specs": {
                            "ram": "128GB",
                            "cpu": "32 Cores",
                            "storage": "1280GB",
                            "bandwidth": "64TB",
                            "dedicated_ips": 1
                        },
                        "pricing": {
                            "INR": {
                                "monthly": 27200,
                                "quarterly": 76500,
                                "semiannually": 153000,
                                "annual": 272000
                            },
                            "USD": {
                                "monthly": 320,
                                "quarterly": 900,
                                "semiannually": 1800,
                                "annual": 3200
                            }
                        }
                    }
                ],
                "all_plans_include": [
                    "Virtualizor Control Panel",
                    "1 Dedicated IP",
                    "KVM Virtualization",
                    "Customizable resource upgrades",
                    "Optional cPanel / DirectAdmin",
                    "24/7 support"
                ],
                "os_support": [
                    "Ubuntu",
                    "CentOS",
                    "Debian",
                    "AlmaLinux",
                    "Rocky Linux",
                    "Windows Server (optional)"
                ]
            },
            "reseller_hosting": {
                "title": "Reseller Hosting",
                "url": "https://hostingspell.com/reseller",
                "description": "White-label cPanel/WHM reseller hosting with branded nameservers. Two tiers: Standard (shared infrastructure) and Cloud (dedicated cloud nodes on DigitalOcean/Linode for higher performance).",
                "billing_cycles": [
                    "Monthly",
                    "Quarterly",
                    "Semi-Annually",
                    "Annually"
                ],
                "tiers": {
                    "standard": {
                        "title": "cPanel: Unlimited Reseller Hosting",
                        "store_url": "https://manage.hostingspell.com/store/cpanel-unlimited-reseller-hosting",
                        "plans": [
                            {
                                "name": "HS Initiative",
                                "badge": "25 Accounts",
                                "order_url": "https://manage.hostingspell.com/store/cpanel-unlimited-reseller-hosting/hs-initiative",
                                "specs": {
                                    "cpanel_accounts": 25,
                                    "bandwidth": "Unlimited",
                                    "disk_space": "Unlimited SSD"
                                },
                                "pricing": {
                                    "INR": {
                                        "monthly": 1199,
                                        "annual": 11299
                                    },
                                    "USD": {
                                        "monthly": 12.99,
                                        "annual": 129
                                    }
                                }
                            },
                            {
                                "name": "HS Earldom",
                                "badge": "50 Accounts",
                                "order_url": "https://manage.hostingspell.com/store/cpanel-unlimited-reseller-hosting/hs-earldom",
                                "specs": {
                                    "cpanel_accounts": 50,
                                    "bandwidth": "Unlimited",
                                    "disk_space": "Unlimited SSD"
                                },
                                "pricing": {
                                    "INR": {
                                        "monthly": 2299,
                                        "annual": 22599
                                    },
                                    "USD": {
                                        "monthly": 25.99,
                                        "annual": 258
                                    }
                                }
                            },
                            {
                                "name": "HS Dukedom",
                                "badge": "100 Accounts",
                                "order_url": "https://manage.hostingspell.com/store/cpanel-unlimited-reseller-hosting/hs-dukedom",
                                "specs": {
                                    "cpanel_accounts": 100,
                                    "bandwidth": "Unlimited",
                                    "disk_space": "Unlimited SSD"
                                },
                                "pricing": {
                                    "INR": {
                                        "monthly": 4599,
                                        "annual": 45199
                                    },
                                    "USD": {
                                        "monthly": 51.99,
                                        "annual": 516
                                    }
                                }
                            },
                            {
                                "name": "HS Kingdom",
                                "badge": "150 Accounts",
                                "order_url": "https://manage.hostingspell.com/store/cpanel-unlimited-reseller-hosting/hs-kingdom",
                                "specs": {
                                    "cpanel_accounts": 150,
                                    "bandwidth": "Unlimited",
                                    "disk_space": "Unlimited SSD"
                                },
                                "pricing": {
                                    "INR": {
                                        "monthly": 6899,
                                        "annual": 67799
                                    },
                                    "USD": {
                                        "monthly": 77.99,
                                        "annual": 774
                                    }
                                }
                            }
                        ],
                        "all_plans_include": [
                            "cPanel® / WHM",
                            "Unlimited Custom Packages",
                            "LiteSpeed + LSCache",
                            "Free SSL",
                            "Imunify360",
                            "JetBackup Daily",
                            "Softaculous",
                            "Free Branded Nameservers",
                            "24/7/365 Support"
                        ]
                    },
                    "cloud": {
                        "title": "cPanel: Cloud Unlimited Reseller Hosting",
                        "description": "Higher performance tier on dedicated cloud nodes (DigitalOcean / Linode).",
                        "store_url": "https://manage.hostingspell.com/store/cpanel-cloud-unlimited-reseller-hosting",
                        "plans": [
                            {
                                "name": "HS Cloud Startup",
                                "order_url": "https://manage.hostingspell.com/store/cpanel-cloud-unlimited-reseller-hosting/hs-cloud15-startup",
                                "specs": {
                                    "cpanel_accounts": 15
                                }
                            },
                            {
                                "name": "HS Cloud Corporate",
                                "order_url": "https://manage.hostingspell.com/store/cpanel-cloud-unlimited-reseller-hosting/hs-cloud50-corporate",
                                "specs": {
                                    "cpanel_accounts": 25
                                }
                            },
                            {
                                "name": "HS Cloud Business",
                                "order_url": "https://manage.hostingspell.com/store/cpanel-cloud-unlimited-reseller-hosting/hs-cloud100-enterprise",
                                "specs": {
                                    "cpanel_accounts": 50
                                }
                            },
                            {
                                "name": "HS Cloud Enterprise",
                                "order_url": "https://manage.hostingspell.com/store/cpanel-cloud-unlimited-reseller-hosting/hs-cloud50-enterprise",
                                "specs": {
                                    "cpanel_accounts": 100
                                }
                            }
                        ]
                    }
                }
            },
            "add_ons": {
                "managed_wordpress": {
                    "title": "Managed WordPress Hosting",
                    "description": "Pre-configured managed WordPress with LiteSpeed LSCache, automatic updates, daily backups, one-click staging.",
                    "store_url": "https://manage.hostingspell.com/store/managed-wordpress-hosting",
                    "plans": [
                        {
                            "name": "WordBeast E1",
                            "order_url": "https://manage.hostingspell.com/store/managed-wordpress-hosting/wordbeast-e1"
                        }
                    ]
                },
                "ssl_certificates": {
                    "title": "SSL Certificates",
                    "store_url": "https://manage.hostingspell.com/store/ssl-certificates"
                },
                "pro_email_hosting": {
                    "title": "Pro Email Hosting",
                    "store_url": "https://manage.hostingspell.com/store/pro-email-hosting"
                },
                "vpn": {
                    "title": "VPN (NordVPN)",
                    "store_url": "https://manage.hostingspell.com/store/nordvpn"
                },
                "software_licenses": {
                    "title": "Software Licenses (cPanel, Plesk…)",
                    "store_url": "https://manage.hostingspell.com/store/software-licenses"
                },
                "technical_support": {
                    "title": "Technical Solutions On-Demand",
                    "description": "Professional one-off technical support and server management tasks",
                    "store_url": "https://manage.hostingspell.com/store/managtechnical-support"
                }
            }
        },
        "domains": {
            "url": "https://hostingspell.com/domain",
            "register_url": "https://manage.hostingspell.com/cart.php?a=add&domain=register",
            "transfer_url": "https://manage.hostingspell.com/cart.php?a=add&domain=transfer",
            "description": "Register, transfer, and manage domain names at affordable prices. Free WHOIS privacy protection included with every eligible domain.",
            "free_domain_offer": "Get a free domain (.com, .in, .net etc.) when you select a 36-month hosting plan via Combo Hosting.",
            "features": [
                "Free WHOIS privacy protection",
                "Domain locking to prevent unauthorized transfers",
                "Easy management via client portal",
                "Auto-renewal to prevent expiry",
                "AI domain name generator",
                "Bulk availability checker",
                "Free domain transfer assistance"
            ],
            "popular_tlds": [
                {
                    "tld": ".com",
                    "note": "Most popular global TLD"
                },
                {
                    "tld": ".in",
                    "note": "India country code TLD"
                },
                {
                    "tld": ".org",
                    "note": "For organizations & nonprofits"
                },
                {
                    "tld": ".net",
                    "note": "Network & tech websites"
                },
                {
                    "tld": ".xyz",
                    "note": "Modern low-cost TLD"
                },
                {
                    "tld": ".monster",
                    "note": "Unique low-cost TLD"
                },
                {
                    "tld": ".info",
                    "note": "Informational websites"
                },
                {
                    "tld": ".co.in",
                    "note": "India commercial TLD"
                }
            ]
        },
        "billing_and_payment": {
            "available_cycles": [
                "Monthly",
                "Quarterly",
                "Semi-Annually",
                "Annually",
                "36-Months (Biennially)"
            ],
            "payment_methods": [
                "Visa",
                "MasterCard",
                "PayPal",
                "Net Banking",
                "UPI"
            ],
            "currency": "USD (default); INR available at checkout",
            "refund_policy": "7-day money-back guarantee on all hosting plans",
            "refund_process": "Create a sales ticket in the client area; processed within 2–4 working days",
            "discount_programs": "Bulk-order discounts available via live chat, ticket, or WhatsApp",
            "free_migration": "1 free cPanel migration for new hosting customers"
        },
        "support": {
            "availability": "24/7/365",
            "channels": {
                "live_chat": "Available 24/7 on website",
                "ticket_system": "Open a ticket at manage.hostingspell.com",
                "whatsapp": "Available for bulk discount inquiries",
                "ai_support": {
                    "name": "Sahdev",
                    "url": "https://2hs.in/gpt",
                    "description": "AI-powered support agent built on OpenAI & Google Gemini for instant answers"
                }
            },
            "activation_times": {
                "shared_cloud_hosting": "Instant (within seconds)",
                "vps": "A few business hours",
                "dedicated": "A few business hours"
            }
        },
        "special_programs": {
            "affiliate_program": {
                "url": "https://manage.hostingspell.com/affiliates.php",
                "description": "Earn commissions by referring customers to HostingSpell via the WHMCS affiliate portal"
            },
            "partnership": {
                "url": "https://hostingspell.com/contact",
                "description": "Business partnership inquiries — reach out via the contact page"
            },
            "ngo_student_discounts": "Available — contact support via live chat or ticket",
            "eco_friendly": {
                "url": "https://hostingspell.com/about",
                "description": "Carbon-negative certified green hosting — details on the About page"
            }
        },
        "policies": {
            "refund": "7-day money-back guarantee on all hosting plans",
            "prohibited_content": "Proxy, pornographic, and phishing sites are prohibited (P3 Policy)",
            "allowed_content": "All legal websites including uncommon apps, scripts, and specialized platforms",
            "terms_of_service": "https://hostingspell.com/legal/terms-of-service",
            "privacy_policy": "https://hostingspell.com/legal/privacy-policy",
            "refund_policy": "https://hostingspell.com/legal/refund-policy",
            "legal_hub": "https://hostingspell.com/legal",
            "abuse_report": "https://manage.hostingspell.com/submitticket.php?step=2&deptid=5"
        },
        "navigation": {
            "main_pages": [
                {
                    "label": "Cloud Hosting",
                    "url": "https://hostingspell.com/cloud-hosting"
                },
                {
                    "label": "Premium Hosting",
                    "url": "https://hostingspell.com/premium-hosting"
                },
                {
                    "label": "Combo Hosting (Free Domain)",
                    "url": "https://hostingspell.com/combo-hosting"
                },
                {
                    "label": "VPS Hosting",
                    "url": "https://hostingspell.com/vps"
                },
                {
                    "label": "Reseller Hosting",
                    "url": "https://hostingspell.com/reseller"
                },
                {
                    "label": "Domain Registration",
                    "url": "https://hostingspell.com/domain"
                },
                {
                    "label": "Pricing",
                    "url": "https://hostingspell.com/pricing"
                },
                {
                    "label": "Offers & Deals",
                    "url": "https://hostingspell.com/offers"
                },
                {
                    "label": "Blog",
                    "url": "https://hostingspell.com/blog"
                },
                {
                    "label": "About",
                    "url": "https://hostingspell.com/about"
                },
                {
                    "label": "Contact",
                    "url": "https://hostingspell.com/contact"
                },
                {
                    "label": "Legal",
                    "url": "https://hostingspell.com/legal"
                },
                {
                    "label": "Terms of Service",
                    "url": "https://hostingspell.com/legal/terms-of-service"
                },
                {
                    "label": "Privacy Policy",
                    "url": "https://hostingspell.com/legal/privacy-policy"
                },
                {
                    "label": "Refund Policy",
                    "url": "https://hostingspell.com/legal/refund-policy"
                },
                {
                    "label": "Affiliate Program",
                    "url": "https://manage.hostingspell.com/affiliates.php"
                },
                {
                    "label": "Open Support Ticket",
                    "url": "https://manage.hostingspell.com/submitticket.php"
                },
                {
                    "label": "Knowledge Base",
                    "url": "https://manage.hostingspell.com/knowledgebase"
                },
                {
                    "label": "Server Status",
                    "url": "https://status.2hs.in"
                },
                {
                    "label": "Client Login",
                    "url": "https://manage.hostingspell.com/login"
                }
            ]
        },
        "faqs": [
            {
                "question": "Why & how does HostingSpell provide affordable hosting at such low prices?",
                "answer": "With 10+ years of expertise, the team partners with top infrastructure providers (DigitalOcean, Linode) to deliver equal or better quality at low profit margins — no cracked software used."
            },
            {
                "question": "Is there any discount program for customers?",
                "answer": "Yes — bulk-order discounts are available via live chat, support tickets, or WhatsApp. NGOs, universities, and students can also request special discounts."
            },
            {
                "question": "How can I get a refund?",
                "answer": "Create a sales ticket in the client area. Refunds are processed within 2–4 working days under the 7-day money-back guarantee."
            },
            {
                "question": "When will my service be activated?",
                "answer": "Shared and cloud hosting activates within seconds. VPS and dedicated servers may take a few business hours."
            },
            {
                "question": "Do you support uncommon websites, apps, or scripts?",
                "answer": "Yes, HostingSpell supports all legal websites and apps. The only prohibited content is proxy, pornographic, and phishing sites (P3 Policy)."
            },
            {
                "question": "What control panels are available?",
                "answer": "Shared & Reseller hosting: cPanel® & DirectAdmin. VPS & Dedicated: Virtualizor & iDRAC/iLO. Virtualizor is included on all VPS plans."
            },
            {
                "question": "Does hosting include a free domain?",
                "answer": "Standard hosting plans do not include a domain. However, Combo Hosting plans include 1 lifetime free domain. Also, selecting a 36-month plan may include a free domain."
            },
            {
                "question": "Can I migrate my existing website?",
                "answer": "Yes — HostingSpell provides 1 free cPanel migration for new customers, handled by industry experts."
            },
            {
                "question": "How can disk space be unlimited?",
                "answer": "Unlimited disk space is subject to fair-use policy and is intended for normal website files. Backups stored externally and mass file storage are not permitted under the policy."
            },
            {
                "question": "What billing cycles do you offer?",
                "answer": "Monthly, Quarterly, Semi-Annually, Annually, and 36-Month (Biennial) billing cycles are available. Longer billing cycles usually attract better discounts."
            },
            {
                "question": "Do you offer 24/7 support?",
                "answer": "Yes — support is available 24/7/365 via live chat, ticket, and the AI agent Sahdev (powered by OpenAI & Google Gemini)."
            },
            {
                "question": "Do you offer a money-back guarantee?",
                "answer": "Yes — all hosting plans come with a 7-day money-back guarantee, no questions asked."
            }
        ],
        "knowledge_base": {
            "url": "https://manage.hostingspell.com/knowledgebase",
            "articles": [
                {
                    "title": "Best Practice to Start Hosting on New cPanel",
                    "category": "Getting Started"
                },
                {
                    "title": "How to Install WordPress Using Softaculous",
                    "category": "WordPress"
                },
                {
                    "title": "How to Completely Secure Your WordPress Website",
                    "category": "Security"
                },
                {
                    "title": "How to Configure LiteSpeed LSCache for WordPress",
                    "category": "Performance"
                },
                {
                    "title": "How to Set Up Professional Email with cPanel",
                    "category": "Email"
                }
            ]
        },
        "server_status_url": "https://status.2hs.in",
        "blog_url": "https://hostingspell.com/blog",
        "client_area_url": "https://manage.hostingspell.com"
    };

    return NextResponse.json(data)
}
