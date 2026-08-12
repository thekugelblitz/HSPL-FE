const default_bandwidth_fup = "Unlimited bandwidth is provided with your plan, subject to our Fair Usage Policies (FUP). Excessive or abusive usage (such as file sharing, video streaming, or traffic not related to normal website hosting) may result in extra charges* or suspension. To learn more, see our [Fair Usage Policies](/legal/terms-of-service#fair-usage-policies)."
const default_storage_fup = "Total NVMe storage allocated to your accounts. Disk usage is subject to strict Fair Usage Policies (FUP) in such cases it cannot be treated as unlimited. Excessive or abusive storage consumption (e.g., file archiving, backups, or non-hosting related use) may result in additional charges* or suspension. To learn more, check our [Fair Usage Policies](/legal/terms-of-service#fair-usage-policies)."
const default_storage_fup_india = "Total NVMe storage allocated. Disk usage is subject to strict Fair Usage Policies (FUP) and cannot be treated as unlimited. Excessive or abusive storage consumption (e.g., file archiving, backups, or non-hosting related use) may result in additional charges* or suspension. For Linode India hosting, additional storage beyond 50GB is billed at $1 per 10GB. To learn more, check our [Fair Usage Policies](/legal/terms-of-service#fair-usage-policies)."

const default_plan_one_features = [
    { label: "Host 2 Website" },
    { label: "30 GB Fast SSD Storage" },
    { label: "300 GB Bandwidth" },
    { label: "Unlimited MySQL Database" },
    { label: "Unlimited Email Accounts" },
    { label: "Unlimited FTP Accounts" },
    { label: "2 CPU Core & 2 GB RAM" },
    { label: "30 EP | 100 NOP | 50MB/s IO" },
    { label: "DigitalOcean Infrastructure" },
]

const default_plan_two_features = [
    { label: "Host 4 Websites" },
    { label: "Unlimited Fast SSD Storage", info: default_storage_fup },
    { label: "Unlimited GB Bandwidth", info: default_bandwidth_fup },
    { label: "Unlimited MySQL Database" },
    { label: "Unlimited Email Accounts" },
    { label: "Unlimited FTP Accounts" },
    { label: "2 CPU Core & 2 GB RAM" },
    { label: "30 EP | 100 NOP | 50MB/s IO" },
    { label: "DigitalOcean Infrastructure" }
]

const default_plan_three_features = [
    { label: "Host 6 Websites" },
    { label: "Unlimited Fast SSD Storage", info: default_storage_fup },
    { label: "Unlimited GB Bandwidth", info: default_bandwidth_fup },
    { label: "Unlimited MySQL Database" },
    { label: "Unlimited Email Accounts" },
    { label: "Unlimited FTP Accounts" },
    { label: "2 CPU Core & 2 GB RAM" },
    { label: "30 EP | 100 NOP | 50MB/s IO" },
    { label: "DigitalOcean Infrastructure" }
]

const default_plan_ultimate_features = [
    { label: "Host Unlimited Websites" },
    { label: "Unlimited Fast SSD Storage", info: default_storage_fup_india },
    { label: "Unlimited GB Bandwidth", info: default_bandwidth_fup },
    { label: "Unlimited MySQL Database" },
    { label: "Unlimited Email Accounts" },
    { label: "Unlimited FTP Accounts" },
    { label: "2 CPU Cores | 2 GB RAM" },
    { label: "30 EP | 100 NOP | 50MB/s IO" },
    { label: "Linode/DigitalOcean Infrastructure" }
]

// Premium Hosting Plans with location-specific names and features
export const PLANS_PREMIUM_HOSTING = [
    {
        name: "PLUS",
        caption: "STARTER",
        price: 319,
        color: "text-[#10B7FE]",
        button: "text-[#10B7FE] border-[#10B7FE] hover:bg-[#10B7FE] hover:text-black",
        className: "bg-[#DBF0FF] hover:border-[#10B7FE]",
        highlightClass: "bg-[#DBF0FF] border border-2 border-[#10B7FE] hover:border-[#10B7FE]",
        highlight: false,
        icon: "/img/plan-lightblue.png",
        description: "SELECT BILLING CYCLE ON CHECKOUT",
        // Location-specific features and names
        locationFeatures: {
            IND: default_plan_one_features,
            SGP: default_plan_one_features,
            USA: default_plan_one_features,
            UK: default_plan_one_features,
            NET: default_plan_one_features,
            AUS: default_plan_one_features,
        },
        // Location-specific plan names for display
        locationNames: {
            IND: "PREMIUM 1",
            SGP: "PREMIUM 1",
            USA: "PREMIUM 1",
            UK: "PREMIUM 1",
            NET: "PREMIUM 1",
            AUS: "PREMIUM 1",
        },
        links: {
            IND: "https://manage.hostingspell.com/store/cpanel-cloud-hosting-ind/ind-do-premium1",
            SGP: "https://manage.hostingspell.com/store/cpanel-digitalocean-hosting-sg/sg-do-premium1",
            USA: "https://manage.hostingspell.com/store/cpanel-digitalocean-cloud-hosting-usa/usa-do-premium1",
            UK: "https://manage.hostingspell.com/store/cpanel-digitalocean-hosting-uk/uk-do-premium1",
            NET: "https://manage.hostingspell.com/store/cpanel-digitalocean-hosting-nl/nl-do-premium1",
            AUS: "https://manage.hostingspell.com/store/cpanel-linode-hosting-aus/aus-lw-premium1",
        },
        pricing: {
            IND: {
                INR: {
                    monthly: 169,
                    annual: 1699,
                    biannual: 3399,
                    triannual: 5099,
                },
                USD: {
                    monthly: 1.99,
                    annual: 19.99,
                    biannual: 39.99,
                    triannual: 59.99,
                }
            },
            SGP: {
                INR: {
                    monthly: 169,
                    annual: 1699,
                    biannual: 3399,
                    triannual: 5099,
                },
                USD: {
                    monthly: 1.99,
                    annual: 19.99,
                    biannual: 39.99,
                    triannual: 59.99,
                }
            },
            USA: {
                INR: {
                    monthly: 169,
                    annual: 1699,
                    biannual: 3399,
                    triannual: 5099,
                },
                USD: {
                    monthly: 1.99,
                    annual: 19.99,
                    biannual: 39.99,
                    triannual: 59.99,
                }
            },
            UK: {
                INR: {
                    monthly: 169,
                    annual: 1699,
                    biannual: 3399,
                    triannual: 5099,
                },
                USD: {
                    monthly: 1.99,
                    annual: 19.99,
                    biannual: 39.99,
                    triannual: 59.99,
                }
            },
            NET: {
                INR: {
                    monthly: 169,
                    annual: 1699,
                    biannual: 3399,
                    triannual: 5099,
                },
                USD: {
                    monthly: 1.99,
                    annual: 19.99,
                    biannual: 39.99,
                    triannual: 59.99,
                }
            },
            AUS: {
                INR: {
                    monthly: 169,
                    annual: 1699,
                    biannual: 3399,
                    triannual: 5099,
                },
                USD: {
                    monthly: 1.99,
                    annual: 19.99,
                    biannual: 39.99,
                    triannual: 59.99,
                }
            },
        },
    },
    {
        name: "PRO-1",
        caption: "POPULAR",
        price: 719,
        color: "text-[#9B4EFF]",
        button: "text-[#9B4EFF] border-[#9B4EFF] hover:bg-[#9B4EFF]",
        className: "bg-[#E0DBFF] hover:border-[#9B4EFF]",
        highlightClass: "bg-[#E0DBFF] border border-2 border-[#9B4EFF] hover:border-[#9B4EFF]",
        highlight: false,
        icon: "/img/plan-purple.png",
        description: "SELECT BILLING CYCLE ON CHECKOUT",
        locationFeatures: {
            IND: default_plan_two_features,
            SGP: default_plan_two_features,
            USA: default_plan_two_features,
            UK: default_plan_two_features,
            NET: default_plan_two_features,
            AUS: default_plan_two_features,
        },
        locationNames: {
            IND: "PREMIUM 2",
            SGP: "PREMIUM 2",
            USA: "PREMIUM 2",
            UK: "PREMIUM 2",
            NET: "PREMIUM 2",
            AUS: "PREMIUM 2",
        },
        links: {
            IND: "https://manage.hostingspell.com/store/cpanel-cloud-hosting-ind/ind-do-premium2",
            SGP: "https://manage.hostingspell.com/store/cpanel-digitalocean-hosting-sg/sg-do-premium2",
            USA: "https://manage.hostingspell.com/store/cpanel-digitalocean-cloud-hosting-usa/usa-do-premium2",
            UK: "https://manage.hostingspell.com/store/cpanel-digitalocean-hosting-uk/uk-do-premium2",
            NET: "https://manage.hostingspell.com/store/cpanel-digitalocean-hosting-nl/nl-do-premium1",
            AUS: "https://manage.hostingspell.com/store/cpanel-linode-hosting-aus/aus-lw-premium2",
        },
        pricing: {
            IND: {
                INR: {
                    monthly: 249,
                    annual: 2199,
                    biannual: 4999,
                    triannual: 7500,
                },
                USD: {
                    monthly: 2.79,
                    annual: 25.99,
                    biannual: 55.99,
                    triannual: 83.99,
                }
            },
            SGP: {
                INR: {
                    monthly: 249,
                    annual: 2199,
                    biannual: 4999,
                    triannual: 7500,
                },
                USD: {
                    monthly: 2.79,
                    annual: 25.99,
                    biannual: 55.99,
                    triannual: 83.99,
                }
            },
            USA: {
                INR: {
                    monthly: 249,
                    annual: 2199,
                    biannual: 4999,
                    triannual: 7500,
                },
                USD: {
                    monthly: 2.79,
                    annual: 25.99,
                    biannual: 55.99,
                    triannual: 83.99,
                }
            },
            UK: {
                INR: {
                    monthly: 249,
                    annual: 2199,
                    biannual: 4999,
                    triannual: 7500,
                },
                USD: {
                    monthly: 2.79,
                    annual: 25.99,
                    biannual: 55.99,
                    triannual: 83.99,
                }
            },
            NET: {
                INR: {
                    monthly: 249,
                    annual: 2199,
                    biannual: 4999,
                    triannual: 7500,
                },
                USD: {
                    monthly: 2.79,
                    annual: 25.99,
                    biannual: 55.99,
                    triannual: 83.99,
                }
            },
            AUS: {
                INR: {
                    monthly: 249,
                    annual: 2199,
                    biannual: 4999,
                    triannual: 7500,
                },
                USD: {
                    monthly: 2.79,
                    annual: 25.99,
                    biannual: 55.99,
                    triannual: 83.99,
                }
            },
        },
    },
    {
        name: "ULTIMATE",
        caption: "ADVANCED",
        price: 479,
        color: "text-[#205AEE]",
        button: "text-[#205AEE] border-[#205AEE] hover:bg-[#205AEE]",
        className: "bg-[#DBE5FF] hover:border-[#205AEE]",
        highlightClass: "bg-[#DBE5FF] border border-2 border-[#205AEE] hover:border-[#205AEE]",
        highlight: false,
        icon: "/img/plan-blue.png",
        description: "SELECT BILLING CYCLE ON CHECKOUT",
        locationFeatures: {
            IND: default_plan_three_features,
            SGP: default_plan_three_features,
            USA: default_plan_three_features,
            UK: default_plan_three_features,
            NET: default_plan_three_features,
            AUS: default_plan_three_features,
        },
        locationNames: {
            IND: "PREMIUM 3",
            SGP: "PREMIUM 3",
            USA: "PREMIUM 3",
            UK: "PREMIUM 3",
            NET: "PREMIUM 3",
            AUS: "PREMIUM 3",
        },
        links: {
            IND: "https://manage.hostingspell.com/store/cpanel-cloud-hosting-ind/ind-do-premium3",
            SGP: "https://manage.hostingspell.com/store/cpanel-digitalocean-hosting-sg/sg-do-premium3",
            USA: "https://manage.hostingspell.com/store/cpanel-digitalocean-cloud-hosting-usa/usa-do-premium3",
            UK: "https://manage.hostingspell.com/store/cpanel-digitalocean-hosting-uk/uk-do-premium3",
            NET: "https://manage.hostingspell.com/store/cpanel-digitalocean-hosting-nl/nl-do-premium3",
            AUS: "https://manage.hostingspell.com/store/cpanel-linode-hosting-aus/aus-lw-premium3-1",
        },
        pricing: {
            IND: {
                INR: {
                    monthly: 299,
                    annual: 2799,
                    biannual: 5999,
                    triannual: 8999,
                },
                USD: {
                    monthly: 3.49,
                    annual: 32.49,
                    biannual: 69.99,
                    triannual: 105,
                }
            },
            SGP: {
                INR: {
                    monthly: 299,
                    annual: 2799,
                    biannual: 5999,
                    triannual: 8999,
                },
                USD: {
                    monthly: 3.49,
                    annual: 32.49,
                    biannual: 69.99,
                    triannual: 105,
                }
            },
            USA: {
                INR: {
                    monthly: 299,
                    annual: 2799,
                    biannual: 5999,
                    triannual: 8999,
                },
                USD: {
                    monthly: 3.49,
                    annual: 32.49,
                    biannual: 69.99,
                    triannual: 105,
                }
            },
            UK: {
                INR: {
                    monthly: 299,
                    annual: 2799,
                    biannual: 5999,
                    triannual: 8999,
                },
                USD: {
                    monthly: 3.49,
                    annual: 32.49,
                    biannual: 69.99,
                    triannual: 105,
                }
            },
            NET: {
                INR: {
                    monthly: 299,
                    annual: 2799,
                    biannual: 5999,
                    triannual: 8999,
                },
                USD: {
                    monthly: 3.49,
                    annual: 32.49,
                    biannual: 69.99,
                    triannual: 105,
                }
            },
            AUS: {
                INR: {
                    monthly: 299,
                    annual: 2799,
                    biannual: 5999,
                    triannual: 8999,
                },
                USD: {
                    monthly: 3.49,
                    annual: 32.49,
                    biannual: 69.99,
                    triannual: 105,
                }
            },
        },
    },
    {
        name: "UNLIMITED POWER",
        caption: "ENTERPRISE",
        price: 479,
        color: "text-[#FF6B35]",
        button: "text-[#FF6B35] border-[#FF6B35] hover:bg-[#FF6B35]",
        className: "bg-[#FFF0ED] border-2 border-[#FF6B35] hover:border-[#FF6B35] animated-border-glow",
        highlightClass: "bg-[#FFF0ED] border border-2 border-[#FF6B35] hover:border-[#FF6B35]",
        highlight: true,
        icon: "/img/plan-orange.png",
        description: "SELECT BILLING CYCLE ON CHECKOUT",
        locationFeatures: {
            IND: default_plan_ultimate_features,
            USA: default_plan_ultimate_features,
            UK: default_plan_ultimate_features,
            NET: default_plan_ultimate_features,
            SGP: default_plan_ultimate_features,
            AUS: default_plan_ultimate_features,
        },
        locationNames: {
            IND: "UNLIMITED POWER",
            USA: "UNLIMITED POWER",
            UK: "UNLIMITED POWER",
            NET: "UNLIMITED POWER",
            SGP: "UNLIMITED POWER",
            AUS: "UNLIMITED POWER",
        },
        links: {
            IND: "https://manage.hostingspell.com/store/truly-unlimited-web-hosting/unlimitedpowertm",
            USA: "https://manage.hostingspell.com/store/truly-unlimited-web-hosting/unlimitedpowertm",
            UK: "https://manage.hostingspell.com/store/truly-unlimited-web-hosting/unlimitedpowertm",
            NET: "https://manage.hostingspell.com/store/truly-unlimited-web-hosting/unlimitedpowertm",
            SGP: "https://manage.hostingspell.com/store/truly-unlimited-web-hosting/unlimitedpowertm",
            AUS: "https://manage.hostingspell.com/store/truly-unlimited-web-hosting/unlimitedpowertm",
        },
        pricing: {
            IND: {
                INR: {
                    monthly: 399,
                    annual: 3999,
                    biannual: 7999,
                    triannual: 11999,
                },
                USD: {
                    monthly: 5.49,
                    annual: 51.99,
                    biannual: 109.99,
                    triannual: 165,
                }
            },
            USA: {
                INR: {
                    monthly: 399,
                    annual: 3999,
                    biannual: 7999,
                    triannual: 11999,
                },
                USD: {
                    monthly: 5.49,
                    annual: 51.99,
                    biannual: 109.99,
                    triannual: 165,
                }
            },
            UK: {
                INR: {
                    monthly: 399,
                    annual: 3999,
                    biannual: 7999,
                    triannual: 11999,
                },
                USD: {
                    monthly: 5.49,
                    annual: 51.99,
                    biannual: 109.99,
                    triannual: 165,
                }
            },
            NET: {
                INR: {
                    monthly: 399,
                    annual: 3999,
                    biannual: 7999,
                    triannual: 11999,
                },
                USD: {
                    monthly: 5.49,
                    annual: 51.99,
                    biannual: 109.99,
                    triannual: 165,
                }
            },
            SGP: {
                INR: {
                    monthly: 399,
                    annual: 3999,
                    biannual: 7999,
                    triannual: 11999,
                },
                USD: {
                    monthly: 5.49,
                    annual: 51.99,
                    biannual: 109.99,
                    triannual: 165,
                }
            },
            AUS: {
                INR: {
                    monthly: 399,
                    annual: 3999,
                    biannual: 7999,
                    triannual: 11999,
                },
                USD: {
                    monthly: 5.49,
                    annual: 51.99,
                    biannual: 109.99,
                    triannual: 165,
                }
            },
        },
    }
]
