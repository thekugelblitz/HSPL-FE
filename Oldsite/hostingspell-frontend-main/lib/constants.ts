// utils/constants.ts

import { DEFAULT_SERIF_FONT } from "next/dist/shared/lib/constants"

export type LocationType = "india" | "usa" | "uk" | "singapore" | "germany" | "australia"
export type BillingCycle = "monthly" | "annual" | "biannual" | "triannual"
export type VpsBillingCycle = "monthly" | "quarterly" | "semiannual" | "annual"

export const ALL_PROVIDER_LOCATIONS = [
    { value: "india", label: "India", code: "IND" },
    { value: "germany", label: "Germany", code: "DE" },
    { value: "usa", label: "United States", code: "USA" },
    { value: "uk", label: "United Kingdom", code: "UK" },
    { value: "singapore", label: "Singapore", code: "SGP" },
]

export const CLOUD_PROVIDER_LOCATIONS = ALL_PROVIDER_LOCATIONS.filter(
    (loc) => loc.value === "india" || loc.value === "germany"
)

export const PREMIUM_PROVIDER_LOCATIONS = [
    { value: "india", label: "India", code: "IND" },
    { value: "netherlands", label: "Netherlands", code: "NET" },
    { value: "usa", label: "United States", code: "USA" },
    { value: "uk", label: "United Kingdom", code: "UK" },
    { value: "singapore", label: "Singapore", code: "SGP" },
    { value: "australia", label: "Australia", code: "AUS" },
]

export const COMBO_PROVIDER_LOCATIONS = [
    { value: "india", label: "India", code: "IND" },
    { value: "netherlands", label: "Netherlands", code: "NET" },
    { value: "usa", label: "United States", code: "USA" },
    { value: "uk", label: "United Kingdom", code: "UK" },
    { value: "singapore", label: "Singapore", code: "SGP" },
]

export const VPS_PROVIDER_LOCATIONS = [
    { value: "usa", label: "United States", code: "USA" },
]

export const VPS_LINUX_CLOUD_PROVIDER_LOCATIONS = [
    { value: "india", label: "India", code: "IND" },
]

export const VPS_WINDOWS_CLOUD_PROVIDER_LOCATIONS = VPS_LINUX_CLOUD_PROVIDER_LOCATIONS;

export const RESELLER_PROVIDER_LOCATIONS = [
    { value: "india", label: "India", code: "IND" },
    { value: "netherlands", label: "Netherlands", code: "NET" },
    // { value: "usa", label: "United States", code: "USA" },
    // { value: "uk", label: "United Kingdom", code: "UK" },
    // { value: "singapore", label: "Singapore", code: "SGP" },
    // { value: "australia", label: "Australia", code: "AUS" },
    // { value: "canada", label: "Canada", code: "CAN" },
    // { value: "mexico", label: "Mexico", code: "MEX" },
]

export const SUPPORTED_CURRENCIES = [
    { label: "INR ₹", value: "INR", symbol: "₹" },
    { label: "USD $", value: "USD", symbol: "$" }
]

export const GLOBAL_BILLING_CYCLES = {
    cloudhosting: [
        { value: "monthly", label: "1 Month" },
        { value: "annual", label: "12 Months (16% OFF)" },
        { value: "biannual", label: "24 Months (26% OFF)" },
        { value: "triannual", label: "36 Months (31% OFF)" },
    ],
    combohosting: [
        { value: "annual", label: "12 Months" },
        { value: "biannual", label: "24 Months (6% OFF)" },
        { value: "triannual", label: "36 Months (7% OFF)" },
    ],
    premiumhosting: [
        { value: "monthly", label: "1 Month" },
        { value: "annual", label: "12 Months" },
        { value: "biannual", label: "24 Months" },
        { value: "triannual", label: "36 Months" },
    ],
    vpshosting: [
        { value: "monthly", label: "1 Month" },
        { value: "quarterly", label: "3 Months (17% OFF)" },
        { value: "semiannually", label: "6 Months (17% OFF)" },
        { value: "annual", label: "12 Months (17% OFF)" },
    ],
    resellerhosting: [
        { value: "monthly", label: "1 Month" },
        { value: "annual", label: "12 Months (20% OFF)" },
    ],
    default: [
        { value: "annual", label: "12 Months" },
        { value: "biannual", label: "24 Months" },
        { value: "triannual", label: "36 Months" },
    ],
}

const default_bandwidth_fup = "Unlimited bandwidth is provided with your plan, subject to our Fair Usage Policies (FUP). Excessive or abusive usage (such as file sharing, video streaming, or traffic not related to normal website hosting) may result in extra charges* or suspension. To learn more, see our [Fair Usage Policies](/legal/terms-of-service#fair-usage-policies)."
const default_storage_fup = "Total NVMe storage allocated to your accounts. Disk usage is subject to strict Fair Usage Policies (FUP) in such cases it cannot be treated as unlimited. Excessive or abusive storage consumption (e.g., file archiving, backups, or non-hosting related use) may result in additional charges* or suspension. To learn more, check our [Fair Usage Policies](/legal/terms-of-service#fair-usage-policies)."

// Cloud Hostign Plans
export const PLANS_CLOUD_HOSTING = [
    {
        name: "VENUS",
        caption: "BEST FOR STARTERS!",
        icon: "/img/plan-venus.png",
        color: "text-[#F9C929]",
        button: "text-[#F9C929] border-[#F9C929] hover:bg-[#F9C929] hover:text-black",
        className: "bg-[#FFF8E7] hover:border-yellow-300",
        description: "SELECT BILLING CYCLE ON CHECKOUT",
        link: "https://manage.hostingspell.com/store/ssd-web-hosting/venus",
        features: [
            { label: "Host 1 Website" },
            { label: "1 Sub-Domain" },
            { label: "1 Alias Domain" },
            { label: "1 MySQL/PostgreSQL Database" },
            { label: "1 Email Account" },
            { label: "1 FTP Account" },
            { label: "100% Uptime Mark" },
            {
                label: "1GB Pure NVMe SSD Storage",
            },
            {
                label: "10GB Bandwidth",
            },
            { label: "1 CPU, 1GB RAM & + LVE Resources" },
            { label: "All cPanel® Features & Free SSL" },
            { label: "LiteSpeed Enterprise Web Server" },
            { label: "Imunify360 AI Anti-Virus" },
            { label: "Premium Datacenter Infrastructure" }
        ],
        billing: [
            { value: "monthly", label: "1 Month" },
            { value: "annual", label: "12 Months" },
            { value: "biannual", label: "24 Months" },
            { value: "triannual", label: "36 Months" },
        ],
        links: {
            IND: "https://manage.hostingspell.com/store/ssd-web-hosting/venus",
            DE: "https://manage.hostingspell.com/store/ssd-web-hosting/venus",
        },
        pricing: {
            IND: {
                INR: {
                    monthly: 99.00,
                    annual: 1100,
                    biannual: 1949,
                    triannual: 2749,
                },
                USD: {
                    monthly: 1.29,
                    annual: 12.99,
                    biannual: 22.99,
                    triannual: 31.99,
                }
            },
            DE: {
                INR: {
                    monthly: 99.00,
                    annual: 1100,
                    biannual: 1949,
                    triannual: 2749,
                },
                USD: {
                    monthly: 1.29,
                    annual: 12.99,
                    biannual: 22.99,
                    triannual: 31.99,
                }
            },
        },
    },
    {
        name: "MARS",
        caption: "BEST FOR SMALL BUSINESSES!",
        icon: "/img/plan-mars.png",
        color: "text-[#EF4136]",
        button: "text-[#EF4136] border-[#EF4136] hover:bg-[#EF4136]",
        className: "bg-[#FFE7E7] hover:border-red-300",
        description: "SELECT BILLING CYCLE ON CHECKOUT",
        link: "https://manage.hostingspell.com/store/ssd-web-hosting/mars",
        features: [
            { label: "Host 2 Websites" },
            { label: "10 Sub-Domains" },
            { label: "2 Alias Domains" },
            { label: "10 MySQL/PostgreSQL Database" },
            { label: "10 Email Accounts" },
            { label: "10 FTP Accounts" },
            {
                label: "100% Uptime Mark",
            },
            {
                label: "10GB Pure NVMe SSD Storage",
            },
            {
                label: "100GB Bandwidth",
            },
            { label: "1 CPU, 1GB RAM & + LVE Resources" },
            { label: "All cPanel® Features & Free SSL" },
            { label: "LiteSpeed Enterprise Web Server" },
            { label: "Imunify360 AI Anti-Virus" },
            { label: "Premium Datacenter Infrastructure" }
        ],
        links: {
            IND: "https://manage.hostingspell.com/store/ssd-web-hosting/mars",
            DE: "https://manage.hostingspell.com/store/ssd-web-hosting/mars",
        },
        pricing: {
            IND: {
                INR: {
                    monthly: 149,
                    annual: 1399,
                    biannual: 2399,
                    triannual: 3349,
                },
                USD: {
                    monthly: 1.69,
                    annual: 16.49,
                    biannual: 27.99,
                    triannual: 38.99,
                }
            },
            DE: {
                INR: {
                    monthly: 149,
                    annual: 1399,
                    biannual: 2399,
                    triannual: 3349,
                },
                USD: {
                    monthly: 1.69,
                    annual: 16.49,
                    biannual: 27.99,
                    triannual: 38.99,
                }
            },
        },
    },
    {
        name: "SATURN",
        caption: "BEST FOR GROWING WEBSITES!",
        price: 149,
        color: "text-[#7715F3]",
        button: "text-[#7715F3] border-[#7715F3] hover:bg-[#7715F3]",
        className: "bg-[#F6E7FF] hover:border-purple-300",
        highlight: false,
        icon: "/img/plan-saturn.png",
        description: "SELECT BILLING CYCLE ON CHECKOUT",
        link: "https://manage.hostingspell.com/store/ssd-web-hosting/saturns",
        features: [
            { label: "Host 5 Websites" },
            { label: "Unlimited Sub-Domains" },
            { label: "5 Alias Domains" },
            { label: "Unlimited MySQL/PostgreSQL Database" },
            { label: "Unlimited Email Accounts" },
            { label: "Unlimited FTP Accounts" },
            { label: "100% Uptime Mark" },
            {
                label: "30GB Pure NVMe SSD Storage",
            },
            {
                label: "Unlimited Bandwidth",
                info: default_bandwidth_fup
            },
            { label: "1 CPU, 2GB RAM & ++ LVE Resources" },
            { label: "All cPanel® Features & Free SSL" },
            { label: "LiteSpeed Enterprise Web Server" },
            { label: "Imunify360 AI Anti-Virus" },
            { label: "Premium Datacenter Infrastructure" },
        ],
        links: {
            IND: "https://manage.hostingspell.com/store/ssd-web-hosting/saturns",
            DE: "https://manage.hostingspell.com/store/ssd-web-hosting/saturns",
        },
        pricing: {
            IND: {
                INR: {
                    monthly: 169,
                    annual: 1749,
                    biannual: 3149,
                    triannual: 4449,
                },
                USD: {
                    monthly: 1.99,
                    annual: 20.49,
                    biannual: 36.99,
                    triannual: 51.99,
                }
            },
            DE: {
                INR: {
                    monthly: 169,
                    annual: 1749,
                    biannual: 3149,
                    triannual: 4449,
                },
                USD: {
                    monthly: 1.99,
                    annual: 20.49,
                    biannual: 36.99,
                    triannual: 51.99,
                }
            },
        },
    },
    {
        name: "JUPITER",
        caption: "BEST FOR LARGE BUSINESSES!",
        price: 220,
        color: "text-[#FF7E22]",
        button: "text-[#FF7E22] border-[#FF7E22] hover:bg-[#FF7E22]",
        className: "bg-[#FFEDE7] hover:border-orange-300",
        highlight: false,
        icon: "/img/plan-jupiter.png",
        description: "SELECT BILLING CYCLE ON CHECKOUT",
        link: "https://manage.hostingspell.com/store/ssd-web-hosting/jupiter",
        features: [
            { label: "Host 10 Websites" },
            { label: "Unlimited Sub-Domains" },
            { label: "10 Alias Domains" },
            { label: "Unlimited MySQL/PostgreSQL Database" },
            { label: "Unlimited Email Accounts" },
            { label: "Unlimited FTP Accounts" },
            { label: "100% Uptime Mark" },
            {
                label: "Unlimited Storage (NVMe)",
                info: default_storage_fup
            },
            {
                label: "Unlimited Bandwidth",
                info: default_bandwidth_fup
            },
            { label: "2 CPU, 2GB RAM & ++ LVE Resources" },
            { label: "All cPanel® Features & Free SSL" },
            { label: "LiteSpeed Enterprise Web Server" },
            { label: "Imunify360 AI Anti-Virus" },
            { label: "Premium Datacenter Infrastructure" },
        ],
        links: {
            IND: "https://manage.hostingspell.com/store/ssd-web-hosting/jupiter",
            DE: "https://manage.hostingspell.com/store/ssd-web-hosting/jupiter",
        },
        pricing: {
            IND: {
                INR: {
                    monthly: 249,
                    annual: 2449,
                    biannual: 4449,
                    triannual: 6249,
                },
                USD: {
                    monthly: 2.99,
                    annual: 28.99,
                    biannual: 51.99,
                    triannual: 72.99,
                }
            },
            DE: {
                INR: {
                    monthly: 249,
                    annual: 2449,
                    biannual: 4449,
                    triannual: 6249,
                },
                USD: {
                    monthly: 2.99,
                    annual: 28.99,
                    biannual: 51.99,
                    triannual: 72.99,
                }
            },
        },
    },
]

// Combo Hosting Plans
export const PLANS_COMBO_HOSTING = [
    {
        name: "EUROPA",
        caption: "",
        color: "text-[#2CC0FF]",
        button: "text-[#2CC0FF] border-[#2CC0FF] hover:bg-[#2CC0FF] hover:text-black",
        className: "bg-[#EAEEFC] hover:border-[#2CC0FF]",
        highlightClass: "bg-[#EAEEFC] border border-2 border-[#2CC0FF] hover:border-[#2CC0FF]",
        highlight: false,
        icon: "/img/plan-algol.png",
        description: "",
        link: "https://manage.hostingspell.com/store/combo-cpanel-hosting-free-domain/europa",
        features: [
            { label: "1 Lifetime Free Domain \n .com / .in / .org / .net / .co.in" },
            { label: "Host 2 Websites" },
            { label: "20 GB Fast SSD Storage" },
            {
                label: "Unlimited Bandwidth",
                info: default_bandwidth_fup
            },
            { label: "Unlimited MySQL/PostgreSQL Database" },
            { label: "Unlimited Email Accounts" },
            { label: "Unlimited FTP Accounts" },
            { label: "100% Uptime Mark" },
            { label: "2 CPU, 2GB RAM & ++ LVE Resources" },
            { label: "10MB/s I/O Speed" },
            { label: "All cPanel® Features & Free SSL" },
            { label: "LiteSpeed Enterprise Web Server" },
            { label: "Imunify360 AI Anti-Virus" },
            { label: "DigitalOcean/Linode Datacenter Infrastructure" },
        ],
        billing: [
            { value: "annual", label: "12 Months" },
            { value: "biannual", label: "24 Months" },
            { value: "triannual", label: "36 Months" },
        ],
        links: {
            IND: "https://manage.hostingspell.com/store/combo-cpanel-hosting-free-domain/europa",
            SGP: "https://manage.hostingspell.com/store/combo-cpanel-hosting-free-domain/europa",
            USA: "https://manage.hostingspell.com/store/combo-cpanel-hosting-free-domain/europa",
            UK: "https://manage.hostingspell.com/store/combo-cpanel-hosting-free-domain/europa",
            NET: "https://manage.hostingspell.com/store/combo-cpanel-hosting-free-domain/europa",
        },
        pricing: {
            IND: {
                INR: {
                    annual: 2099,
                    biannual: 3899,
                    triannual: 5799,
                },
                USD: {
                    annual: 24.49,
                    biannual: 45.99,
                    triannual: 68.00,
                }
            },
            SGP: {
                INR: {
                    annual: 2099,
                    biannual: 3899,
                    triannual: 5799,
                },
                USD: {
                    annual: 24.49,
                    biannual: 45.99,
                    triannual: 68.00,
                }
            },
            USA: {
                INR: {
                    annual: 2099,
                    biannual: 3899,
                    triannual: 5799,
                },
                USD: {
                    annual: 24.49,
                    biannual: 45.99,
                    triannual: 68.00,
                }
            },
            UK: {
                INR: {
                    annual: 2099,
                    biannual: 3899,
                    triannual: 5799,
                },
                USD: {
                    annual: 24.49,
                    biannual: 45.99,
                    triannual: 68.00,
                }
            },
            NET: {
                INR: {
                    annual: 2099,
                    biannual: 3899,
                    triannual: 5799,
                },
                USD: {
                    annual: 24.49,
                    biannual: 45.99,
                    triannual: 68.00,
                }
            },
        },
    },
    {
        name: "IO",
        caption: "",
        price: 2199,
        color: "text-[#FF6C2C]",
        button: "text-[#FF6C2C] border-[#FF6C2C] hover:bg-[#FF6C2C]",
        className: "bg-[#FFF0EA] hover:border-[#FF6C2C]",
        highlightClass: "bg-[#FFF0EA] border border-2 border-[#FF6C2C] hover:border-[#FF6C2C]",
        highlight: false,
        icon: "/img/plan-sirus.png",
        description: "SELECT BILLING CYCLE ON CHECKOUT",
        link: "https://manage.hostingspell.com/store/combo-cpanel-hosting-free-domain/io",
        features: [
            { label: "1 Lifetime Free Domain \n .com / .in / .org / .net / .co.in" },
            { label: "Host 4 Websites" },
            { label: "Unlimited SSD Storage", info: default_storage_fup },
            {
                label: "Unlimited Bandwidth",
                info: default_bandwidth_fup
            },
            { label: "Unlimited MySQL/PostgreSQL Database" },
            { label: "Unlimited Email Accounts" },
            { label: "Unlimited FTP Accounts" },
            { label: "100% Uptime Mark" },
            { label: "2 CPU, 2GB RAM & ++ LVE Resources" },
            { label: "10MB/s I/O Speed" },
            { label: "All cPanel® Features & Free SSL" },
            { label: "LiteSpeed Enterprise Web Server" },
            { label: "Imunify360 AI Anti-Virus" },
            { label: "DigitalOcean/Linode Datacenter Infrastructure" },
        ],
        links: {
            IND: "https://manage.hostingspell.com/store/combo-cpanel-hosting-free-domain/io",
            SGP: "https://manage.hostingspell.com/store/combo-cpanel-hosting-free-domain/io",
            USA: "https://manage.hostingspell.com/store/combo-cpanel-hosting-free-domain/io",
            UK: "https://manage.hostingspell.com/store/combo-cpanel-hosting-free-domain/io",
            NET: "https://manage.hostingspell.com/store/combo-cpanel-hosting-free-domain/io",
        },
        pricing: {
            IND: {
                INR: {
                    annual: 2549,
                    biannual: 4849,
                    triannual: 7149,
                },
                USD: {
                    annual: 29.99,
                    biannual: 56.99,
                    triannual: 84.00,
                }
            },
            SGP: {
                INR: {
                    annual: 2549,
                    biannual: 4849,
                    triannual: 7149,
                },
                USD: {
                    annual: 29.99,
                    biannual: 56.99,
                    triannual: 84.00,
                }
            },
            USA: {
                INR: {
                    annual: 2549,
                    biannual: 4849,
                    triannual: 7149,
                },
                USD: {
                    annual: 29.99,
                    biannual: 56.99,
                    triannual: 84.00,
                }
            },
            UK: {
                INR: {
                    annual: 2549,
                    biannual: 4849,
                    triannual: 7149,
                },
                USD: {
                    annual: 29.99,
                    biannual: 56.99,
                    triannual: 84.00,
                }
            },
            NET: {
                INR: {
                    annual: 2549,
                    biannual: 4849,
                    triannual: 7149,
                },
                USD: {
                    annual: 29.99,
                    biannual: 56.99,
                    triannual: 84.00,
                }
            },
        },
    }
]

// VPS Hosting Plans
export const PLANS_VPS_HOSTING = [
    {
        name: "CONSOLUS ENTER",
        caption: "ENTRY LEVEL",
        price: 10,
        color: "text-[#0FC2E1]",
        button: "text-[#0FC2E1] border-[#0FC2E1] hover:bg-[#0FC2E1] hover:text-black",
        className: "bg-[#E5FBFF] hover:border-[#0FC2E1]",
        highlight: false,
        icon: "/img/plan-solo-satelite.png",
        ram: "4GB RAM",
        features: [
            { label: "1 CPU Core" },
            { label: "40 GB Storage" },
            { label: "1 TB Bandwidth" },
            { label: "+ Benchmark Score" },
            { label: "1 Dedicated IP" },
            { label: "Virtualizor Control Panel" },
            { label: "Customizable Upgrades" },
        ],
        links: {
            IND: "https://manage.hostingspell.com/store/kvm-vps-hosting/consolus-enter",
            USA: "https://manage.hostingspell.com/store/kvm-vps-hosting/consolus-enter",
        },
        pricing: {
            IND: {
                INR: {
                    monthly: 899,
                    quarterly: 2199,
                    semiannually: 4399,
                    annual: 8799,
                },
                USD: {
                    monthly: 10,
                    quarterly: 25,
                    semiannually: 50,
                    annual: 100,
                }
            },
            USA: {
                INR: {
                    monthly: 899,
                    quarterly: 2199,
                    semiannually: 4399,
                    annual: 8799,
                },
                USD: {
                    monthly: 10,
                    quarterly: 25,
                    semiannually: 50,
                    annual: 100,
                }
            }
        },
    },
    {
        name: "CONSOLUS MODEL",
        caption: "MID TIER",
        price: 20,
        color: "text-[#62A5EE]",
        button: "text-[#62A5EE] border-[#62A5EE] hover:bg-[#62A5EE]",
        className: "bg-[#CDE5FF] hover:border-[#62A5EE]",
        highlight: false,
        icon: "/img/plan-lunar-lander.png",
        ram: "8GB RAM",
        features: [
            { label: "2 CPU Core(s)" },
            { label: "80 GB Storage" },
            { label: "2 TB Bandwidth" },
            { label: "+ Benchmark Score" },
            { label: "1 Dedicated IP" },
            { label: "Virtualizor Control Panel" },
            { label: "Customizable Upgrades" },
        ],
        links: {
            IND: "https://manage.hostingspell.com/store/kvm-vps-hosting/consolus-model",
            USA: "https://manage.hostingspell.com/store/kvm-vps-hosting/consolus-model",
        },
        pricing: {
            IND: {
                INR: {
                    monthly: 1799,
                    quarterly: 4899,
                    semiannually: 8799,
                    annual: 19299,
                },
                USD: {
                    monthly: 20,
                    quarterly: 55,
                    semiannually: 100,
                    annual: 220,
                }
            },
            USA: {
                INR: {
                    monthly: 1799,
                    quarterly: 4899,
                    semiannually: 8799,
                    annual: 19299,
                },
                USD: {
                    monthly: 20,
                    quarterly: 55,
                    semiannually: 100,
                    annual: 220,
                }
            }
        },
    },
    {
        name: "CONSOLUS HOST",
        caption: "HIGH PERFORMENCE",
        price: 40,
        color: "text-[#FB7A5B]",
        button: "text-[#FB7A5B] border-[#FB7A5B] hover:bg-[#FB7A5B]",
        className: "bg-[#FFF0ED] hover:border-[#FB7A5B]",
        highlight: false,
        icon: "/img/plan-space-shuttle.png",
        ram: "16GB RAM",
        features: [
            { label: "4 CPU Core" },
            { label: "160 GB Storage" },
            { label: "4 TB Bandwidth" },
            { label: "++ Benchmark Score" },
            { label: "1 Dedicated IP" },
            { label: "Virtualizor Control Panel" },
            { label: "Customizable Upgrades" },
        ],
        links: {
            IND: "https://manage.hostingspell.com/store/kvm-vps-hosting/consolus-host",
            USA: "https://manage.hostingspell.com/store/kvm-vps-hosting/consolus-host",
        },
        pricing: {
            IND: {
                INR: {
                    monthly: 3499,
                    quarterly: 8799,
                    semiannually: 17499,
                    annual: 34999,
                },
                USD: {
                    monthly: 40,
                    quarterly: 100,
                    semiannually: 200,
                    annual: 400,
                }
            },
            USA: {
                INR: {
                    monthly: 3499,
                    quarterly: 8799,
                    semiannually: 17499,
                    annual: 34999,
                },
                USD: {
                    monthly: 40,
                    quarterly: 100,
                    semiannually: 200,
                    annual: 400,
                }
            }
        },
    },
    {
        name: "CONSOLUS BEAST",
        caption: "ULTRA PERFORMENCE",
        price: 80,
        color: "text-[#09A755]",
        button: "text-[#09A755] border-[#09A755] hover:bg-[#09A755]",
        className: "bg-[#DBFBEF] hover:border-[#09A755]",
        highlight: false,
        icon: "/img/plan-interstellar-cruiser.png",
        ram: "32GB RAM",
        features: [
            { label: "8 CPU Core" },
            { label: "320 GB Storage" },
            { label: "8 TB Bandwidth" },
            { label: "++ Benchmark Score" },
            { label: "1 Dedicated IP" },
            { label: "Virtualizor Control Panel" },
            { label: "Customizable Upgrades" },
        ],
        links: {
            IND: "https://manage.hostingspell.com/store/kvm-vps-hosting/consolus-beast",
            USA: "https://manage.hostingspell.com/store/kvm-vps-hosting/consolus-beast",
        },
        pricing: {
            IND: {
                INR: {
                    monthly: 6999,
                    quarterly: 17499,
                    semiannually: 34999,
                    annual: 69999,
                },
                USD: {
                    monthly: 80,
                    quarterly: 200,
                    semiannually: 400,
                    annual: 800,
                }
            },
            USA: {
                INR: {
                    monthly: 6999,
                    quarterly: 17499,
                    semiannually: 34999,
                    annual: 69999,
                },
                USD: {
                    monthly: 80,
                    quarterly: 200,
                    semiannually: 400,
                    annual: 800,
                }
            }
        },
    },
    {
        name: "CONSOLUS GRAND",
        caption: "EXTREME PERFORMENCE",
        price: 160,
        color: "text-[#185E98]",
        button: "text-[#185E98] border-[#185E98] hover:bg-[#185E98]",
        className: "bg-[#D1E9FD] hover:border-[#185E98]",
        highlight: false,
        icon: "/img/plan-orbital-station.png",
        ram: "64GB RAM",
        features: [
            { label: "16 CPU Core" },
            { label: "640 GB Storage" },
            { label: "16 TB Bandwidth" },
            { label: "+++ Benchmark Score" },
            { label: "1 Dedicated IP" },
            { label: "Virtualizor Control Panel" },
            { label: "Customizable Upgrades" },
        ],
        links: {
            IND: "https://manage.hostingspell.com/store/kvm-vps-hosting/consolus-grand",
            USA: "https://manage.hostingspell.com/store/kvm-vps-hosting/consolus-grand",
        },
        pricing: {
            IND: {
                INR: {
                    monthly: 13999,
                    quarterly: 34999,
                    semiannually: 69999,
                    annual: 139999,
                },
                USD: {
                    monthly: 160,
                    quarterly: 400,
                    semiannually: 800,
                    annual: 1600,
                }
            },
            USA: {
                INR: {
                    monthly: 13999,
                    quarterly: 34999,
                    semiannually: 69999,
                    annual: 139999,
                },
                USD: {
                    monthly: 160,
                    quarterly: 400,
                    semiannually: 800,
                    annual: 1600,
                }
            }
        },
    },
    {
        name: "CONSOLUS LEGEND",
        caption: "MAXIMUM PERFORMENCE",
        price: 320, // NOT NEEDED
        color: "text-[#B91C1C]", // bright crimson accent (like warning lights on a moonbase)  
        button: "text-[#B91C1C] border-[#B91C1C] hover:bg-[#B91C1C] hover:text-white",
        className: "bg-[#FFF7ED] hover:border-[#B91C1C]", // warm pale background (sunlit lunar dust)  
        highlight: false,
        icon: "/img/plan-moonbase.png",
        ram: "128GB RAM",
        features: [
            { label: "32 CPU Core(s)" },
            { label: "1280 GB Storage" },
            { label: "64 TB Bandwidth" },
            { label: "++++ Benchmark Score" },
            { label: "1 Dedicated IP" },
            { label: "Virtualizor Control Panel" },
            { label: "Customizable Upgrades" },
        ],
        links: {
            IND: "https://manage.hostingspell.com/store/kvm-vps-hosting/consolus-legend",
            USA: "https://manage.hostingspell.com/store/kvm-vps-hosting/consolus-legend",
        },
        pricing: {
            IND: {
                INR: {
                    monthly: 27200,
                    quarterly: 76500,
                    semiannually: 153000,
                    annual: 272000,
                },
                USD: {
                    monthly: 320,
                    quarterly: 900,
                    semiannually: 1800,
                    annual: 3200,
                }
            },
            USA: {
                INR: {
                    monthly: 27200,
                    quarterly: 76500,
                    semiannually: 153000,
                    annual: 272000,
                },
                USD: {
                    monthly: 320,
                    quarterly: 900,
                    semiannually: 1800,
                    annual: 3200,
                }
            }
        },
    }
]

// Reseller Hosting Plans
export const PLANS_RESELLER_HOSTING = [
    {
        name: "HS INITIATIVE",
        caption: "ENTRY LEVEL",
        price: 12.99,
        color: "text-[#FFCD02]",
        button: "text-[#FFCD02] border-[#FFCD02] hover:bg-[#FFCD02] hover:text-black",
        className: "bg-[#EFF4ED] hover:border-[#FFCD02]",
        highlight: false,
        icon: "/img/plan-stellar-start.png",
        description: "SELECT BILLING CYCLE ON CHECKOUT",
        features: [
            { label: "25 cPanel accounts" },
            {
                label: "Unlimited Bandwidth",
                info: default_bandwidth_fup
            },
            {
                label: "Unlimited SSD Disk Space",
                info: default_storage_fup
            },
            { label: "cPanel / WHM" },
            { label: "Free Daily Automatic Backup" },
            { label: "Unlimited Custom Packages" },
            { label: "LiteSpeed Server + LSCache" },
            { label: "Free SSL" },
            { label: "Imunify360" },
            { label: "JetBackup" },
            { label: "Softaculous Script Installer" },
            { label: "24/7/365 Support" },
        ],
        links: {
            IND: "https://manage.hostingspell.com/store/cpanel-unlimited-reseller-hosting/hs-initiative",
            SGP: "https://manage.hostingspell.com/store/cpanel-unlimited-reseller-hosting/hs-initiative",
            USA: "https://manage.hostingspell.com/store/cpanel-unlimited-reseller-hosting/hs-initiative",
            UK: "https://manage.hostingspell.com/store/cpanel-unlimited-reseller-hosting/hs-initiative",
            NET: "https://manage.hostingspell.com/store/cpanel-unlimited-reseller-hosting/hs-initiative",
        },
        pricing: {
            IND: {
                INR: {
                    monthly: 1199,
                    annual: 11299,
                },
                USD: {
                    monthly: 12.99,
                    annual: 129,
                }
            },
            SGP: {
                INR: {
                    monthly: 1199,
                    annual: 11299,
                },
                USD: {
                    monthly: 12.99,
                    annual: 129,
                }
            },
            USA: {
                INR: {
                    monthly: 1199,
                    annual: 11299,
                },
                USD: {
                    monthly: 12.99,
                    annual: 129,
                }
            },
            UK: {
                INR: {
                    monthly: 1199,
                    annual: 11299,
                },
                USD: {
                    monthly: 12.99,
                    annual: 129,
                }
            },
            NET: {
                INR: {
                    monthly: 1199,
                    annual: 11299,
                },
                USD: {
                    monthly: 12.99,
                    annual: 129,
                }
            },
        },
    },
    {
        name: "HS EARLDOM",
        caption: "MID TIER",
        price: 25.99,
        color: "text-[#005CEE]",
        button: "text-[#005CEE] border-[#005CEE] hover:bg-[#005CEE]",
        className: "bg-[#BFD7FC] hover:border-[#005CEE]",
        highlight: false,
        icon: "/img/plan-galactic-growth.png",
        description: "SELECT BILLING CYCLE ON CHECKOUT",
        links: {
            IND: "https://manage.hostingspell.com/store/cpanel-unlimited-reseller-hosting/hs-earldom",
            SGP: "https://manage.hostingspell.com/store/cpanel-unlimited-reseller-hosting/hs-earldom",
            USA: "https://manage.hostingspell.com/store/cpanel-unlimited-reseller-hosting/hs-earldom",
            UK: "https://manage.hostingspell.com/store/cpanel-unlimited-reseller-hosting/hs-earldom",
            NET: "https://manage.hostingspell.com/store/cpanel-unlimited-reseller-hosting/hs-earldom",
        },
        features: [
            { label: "50 cPanel accounts" },
            {
                label: "Unlimited Bandwidth",
                info: default_bandwidth_fup
            },
            {
                label: "Unlimited SSD Disk Space",
                info: default_storage_fup
            },
            { label: "cPanel / WHM" },
            { label: "Free Daily Automatic Backup" },
            { label: "Unlimited Custom Packages" },
            { label: "LiteSpeed Server + LSCache" },
            { label: "Free SSL" },
            { label: "Imunify360" },
            { label: "JetBackup" },
            { label: "Softaculous Script Installer" },
            { label: "24/7/365 Support" },
        ],
        pricing: {
            IND: {
                INR: {
                    monthly: 2299,
                    annual: 22599,
                },
                USD: {
                    monthly: 25.99,
                    annual: 258,
                }
            },
            SGP: {
                INR: {
                    monthly: 2299,
                    annual: 22599,
                },
                USD: {
                    monthly: 25.99,
                    annual: 258,
                }
            },
            USA: {
                INR: {
                    monthly: 2299,
                    annual: 22599,
                },
                USD: {
                    monthly: 25.99,
                    annual: 258,
                }
            },
            UK: {
                INR: {
                    monthly: 2299,
                    annual: 22599,
                },
                USD: {
                    monthly: 25.99,
                    annual: 258,
                }
            },
            NET: {
                INR: {
                    monthly: 2299,
                    annual: 22599,
                },
                USD: {
                    monthly: 25.99,
                    annual: 258,
                }
            },
        },
    },
    {
        name: "HS DUKEDOM",
        caption: "HIGH PERFORMENCE",
        price: 51.99,
        color: "text-[#ED1C24]",
        button: "text-[#ED1C24] border-[#ED1C24] hover:bg-[#ED1C24]",
        className: "bg-[#EEDAE2] hover:border-[#ED1C24]",
        highlight: false,
        icon: "/img/plan-cosmic-expansion.png",
        description: "SELECT BILLING CYCLE ON CHECKOUT",
        links: {
            IND: "https://manage.hostingspell.com/store/cpanel-unlimited-reseller-hosting/hs-dukedom",
            SGP: "https://manage.hostingspell.com/store/cpanel-unlimited-reseller-hosting/hs-dukedom",
            USA: "https://manage.hostingspell.com/store/cpanel-unlimited-reseller-hosting/hs-dukedom",
            UK: "https://manage.hostingspell.com/store/cpanel-unlimited-reseller-hosting/hs-dukedom",
            NET: "https://manage.hostingspell.com/store/cpanel-unlimited-reseller-hosting/hs-dukedom",
        },
        features: [
            { label: "100 cPanel accounts" },
            {
                label: "Unlimited Bandwidth",
                info: default_bandwidth_fup
            },
            {
                label: "Unlimited SSD Disk Space",
                info: default_storage_fup
            },
            { label: "cPanel / WHM" },
            { label: "Free Daily Automatic Backup" },
            { label: "Unlimited Custom Packages" },
            { label: "LiteSpeed Server + LSCache" },
            { label: "Free SSL" },
            { label: "Imunify360" },
            { label: "JetBackup" },
            { label: "Softaculous Script Installer" },
            { label: "24/7/365 Support" },
        ],
        pricing: {
            IND: {
                INR: {
                    monthly: 4599,
                    annual: 45199,
                },
                USD: {
                    monthly: 51.99,
                    annual: 516,
                }
            },
            SGP: {
                INR: {
                    monthly: 4599,
                    annual: 45199,
                },
                USD: {
                    monthly: 51.99,
                    annual: 516,
                }
            },
            USA: {
                INR: {
                    monthly: 4599,
                    annual: 45199,
                },
                USD: {
                    monthly: 51.99,
                    annual: 516,
                }
            },
            UK: {
                INR: {
                    monthly: 4599,
                    annual: 45199,
                },
                USD: {
                    monthly: 51.99,
                    annual: 516,
                }
            },
            NET: {
                INR: {
                    monthly: 4599,
                    annual: 45199,
                },
                USD: {
                    monthly: 51.99,
                    annual: 516,
                }
            },
        },
    },
    {
        name: "HS KINGDOM",
        caption: "ULTRA PERFORMENCE",
        price: 77.99,
        color: "text-[#3F22A8]",
        button: "text-[#3F22A8] border-[#3F22A8] hover:bg-[#3F22A8]",
        className: "bg-[#D5DAF3] hover:border-[#3F22A8]",
        highlight: false,
        icon: "/img/plan-universal-power.png",
        description: "SELECT BILLING CYCLE ON CHECKOUT",
        features: [
            { label: "150 cPanel accounts" },
            {
                label: "Unlimited Bandwidth",
                info: default_bandwidth_fup
            },
            {
                label: "Unlimited SSD Disk Space",
                info: default_storage_fup
            },
            { label: "cPanel / WHM" },
            { label: "Free Daily Automatic Backup" },
            { label: "Unlimited Custom Packages" },
            { label: "LiteSpeed Server + LSCache" },
            { label: "Free SSL" },
            { label: "Imunify360" },
            { label: "JetBackup" },
            { label: "Softaculous Script Installer" },
            { label: "24/7/365 Support" },
        ],
        links: {
            IND: "https://manage.hostingspell.com/store/cpanel-unlimited-reseller-hosting/hs-kingdom",
            SGP: "https://manage.hostingspell.com/store/cpanel-unlimited-reseller-hosting/hs-kingdom",
            USA: "https://manage.hostingspell.com/store/cpanel-unlimited-reseller-hosting/hs-kingdom",
            UK: "https://manage.hostingspell.com/store/cpanel-unlimited-reseller-hosting/hs-kingdom",
            NET: "https://manage.hostingspell.com/store/cpanel-unlimited-reseller-hosting/hs-kingdom",
        },
        pricing: {
            IND: {
                INR: {
                    monthly: 6899,
                    annual: 67799,
                },
                USD: {
                    monthly: 77.99,
                    annual: 774,
                }
            },
            SGP: {
                INR: {
                    monthly: 6899,
                    annual: 67799,
                },
                USD: {
                    monthly: 77.99,
                    annual: 774,
                }
            },
            USA: {
                INR: {
                    monthly: 6899,
                    annual: 67799,
                },
                USD: {
                    monthly: 77.99,
                    annual: 774,
                }
            },
            UK: {
                INR: {
                    monthly: 6899,
                    annual: 67799,
                },
                USD: {
                    monthly: 77.99,
                    annual: 774,
                }
            },
            NET: {
                INR: {
                    monthly: 6899,
                    annual: 67799,
                },
                USD: {
                    monthly: 77.99,
                    annual: 774,
                }
            },
        },
    }
]

export const PLANS_COMPARE_CLOUD_HOSTING = [
    {
        title: "Cloud Hosting Features",
        features: [
            { label: "Websites", keys: ["websites"], info: "Number of websites you can host on this plan." },
            { label: "Storage (NVMe)", keys: ["storage_nvme"], info: "Total NVMe storage allocated to your accounts. Disk usage is subject to strict Fair Usage Policies (FUP) in such cases it cannot be treated as unlimited. Excessive or abusive storage consumption (e.g., file archiving, backups, or non-hosting related use) may result in additional charges* or suspension. To learn more, check our [Fair Usage Policies](/legal/terms-of-service#fair-usage-policies)." },
            { label: "Bandwidth (Traffic)", keys: ["bandwidth"], info: "Amount of data transfer allowed per month." },
            { label: "CPU Cores", keys: ["cpu_cores"], info: "Processing power allocated for your hosting environment." },
            { label: "RAM", keys: ["ram"], info: "Memory allocated for your hosting environment." },
            { label: "Resource Quotas", keys: ["resource_quotas"], info: "System limits for CPU, I/O, etc." },
            { label: "Free Website Transfers", keys: ["free_website_transfer"], info: "Number of websites we transfer for free." },
            { label: "Multiple Hosting Locations", keys: ["multi_location"], info: "Choose from multiple server locations." },
            { label: "Moneyback Guarantee", keys: ["moneyback"], info: "Refund period available up to 7 days" },
        ]
    },
    {
        title: "Domain Features",
        features: [
            { label: "Addon Domains", keys: ["addon_domains"], info: "Add more domains to your hosting account." },
            { label: "Parked Domains (Aliases)", keys: ["parked_domains"], info: "Alias additional domains to your main domain." },
            { label: "Subdomains", keys: ["subdomains"], info: "Create subdomains (e.g., blog.yoursite.com)." },
            { label: "DNS Management", keys: ["dns_management"], info: "Manage DNS records like A, MX, CNAME, etc." },
            { label: "Domain Redirection", keys: ["domain_redirect"], info: "Redirect domain traffic to other URLs." },
            { label: "Free Private Nameservers", keys: ["private_ns"], info: "Custom branded nameservers for your domain." },
        ],
    },
    {
        title: "Email Features",
        features: [
            { label: "Total Email Accounts", keys: ["emails"], info: "Number of email accounts you can create." },
            { label: "Emails Per Hour Per Domain", keys: ["emails_per_hour"], info: "Number of emails allowed per hour for each domain." },
            { label: "Email Attachment Size", keys: ["attachment_size"], info: "Maximum size supported for email attachments can vary based on plan." },
            { label: "Mailbox Size", keys: ["mailbox_size"], info: "Storage space allocated for each mailbox can vary based on plan." },
            { label: "POP3/IMAP Support", keys: ["pop3_imap"], info: "Access your email using POP3 or IMAP protocols." },
            { label: "SMTP Support", keys: ["smtp_support"], info: "Send and receive emails securely using SMTP protocol." },
            { label: "Webmail Access", keys: ["webmail"], info: "Login to your mailbox from any browser via webmail." },
            { label: "Roundcube Webmail", keys: ["roundcube"], info: "User-friendly Roundcube webmail client included." },
            { label: "Third-Party Client Access", keys: ["third_party_clients"], info: "Connect mailboxes with clients like Gmail, Outlook, Thunderbird, etc." },
            { label: "Email Forwarders", keys: ["email_forwarders"], info: "Forward emails automatically to other addresses." },
            { label: "Email Filters", keys: ["email_filters"], info: "Set rules to organize, block, or filter incoming emails." },
            { label: "Autoresponders", keys: ["autoresponders"], info: "Send automatic replies to incoming emails." },
            { label: "Mailing Lists", keys: ["mailing_lists"], info: "Create and manage email distribution lists." },
            { label: "Catch-All Address", keys: ["catch_all"], info: "Receive emails sent to non-existing addresses under your domain." },
            { label: "SPAM Protection", keys: ["spam_protection"], info: "Built-in filters to reduce unwanted emails." },
            { label: "DKIM & SPF Support", keys: ["dkim_spf"], info: "Email authentication standards to prevent spoofing." },
        ],
    },
    {
        title: "Security",
        features: [
            { label: "Imunify360", keys: ["imunify360"], info: "Advanced AI-based malware protection and security suite integrated with cPanel." },
            { label: "Let's Encrypt™ SSL", keys: ["letsencrypt_ssl"], info: "Free SSL certificates automatically installed for all your domains." },
            { label: "ModSecurity (WAF)", keys: ["modsecurity"], info: "Web Application Firewall (WAF) that helps block malicious web traffic." },
            { label: "IP Blocker", keys: ["ip_blocker"], info: "Block specific IP addresses from accessing your site." },
            { label: "Hotlink Protection", keys: ["hotlink_protection"], info: "Prevents other websites from directly linking to your files or images." },
            { label: "Leech Protection", keys: ["leech_protection"], info: "Protects your password-protected areas from unauthorized sharing." },
            { label: "Two-Factor Authentication (2FA)", keys: ["twofa"], info: "Adds an extra layer of security to your cPanel account login." },
        ],
    },
    {
        title: "Server Locations",
        features: [
            { label: "India", keys: ["india"], info: "Host your website on high-performance servers located in India for low-latency access in the region." },
            { label: "Germany", keys: ["germany"], info: "Serve European visitors faster with servers hosted in a secure German data center." },
            { label: "USA", keys: ["usa"], info: "Fast and reliable hosting for North American audiences from U.S.-based servers." },
            { label: "London", keys: ["london"], info: "UK-based servers for better performance across the United Kingdom and nearby regions." },
            { label: "Netherlands", keys: ["netherlands"], info: "Secure servers in the Netherlands for fast connectivity across Europe." },
            { label: "Singapore", keys: ["singapore"], info: "Optimized for Southeast Asia, our Singapore servers deliver excellent regional speed." },
            { label: "Australia", keys: ["australia"], info: "Serve Australian and Oceanic visitors with low-latency from local data centers." }
        ]
    },
    {
        title: "Database Features",
        features: [
            {
                label: "MySQL Databases",
                keys: ["mysql_databases"],
                info: "Create and manage MySQL databases for your websites and applications."
            },
            {
                label: "phpMyAdmin",
                keys: ["phpmyadmin"],
                info: "Manage MySQL databases with an easy-to-use web interface."
            },
            {
                label: "Remote MySQL",
                keys: ["remote_mysql"],
                info: "Access your MySQL databases remotely from external servers or applications."
            },
        ]
    },
    {
        title: "Development Features",
        features: [
            {
                label: "PHP",
                keys: ["php"],
                info: "Supports multiple PHP versions with customizable extensions."
            },
            {
                label: "PHP Frameworks (Laravel/Symfony/CodeIgniter)",
                keys: ["php_frameworks"],
                info: "Popular PHP frameworks supported via Composer."
            },
            {
                label: "Python (Django/Flask)",
                keys: ["python"],
                info: "Supports Python apps and Python frameworks with virtual environments."
            },
            {
                label: "Node.js",
                keys: ["nodejs"],
                info: "Host Node.js applications with version control."
            },
            {
                label: "Ruby",
                keys: ["ruby"],
                info: "Support for Ruby apps with Passenger (if available)."
            },
            {
                label: "Perl",
                keys: ["perl"],
                info: "Legacy support for Perl-based scripts."
            }
        ]
    },
    {
        title: "SEO & Browser Optimization",
        features: [
            { label: "Mod_Expires", keys: ["mod_expires"], info: "Controls how long files are cached in browsers." },
            { label: "Mod_Rewrite SEO URLs", keys: ["mod_rewrite"], info: "Enable human-readable URLs via .htaccess." },
            { label: "Browser Cache Optimization", keys: ["browser_cache"], info: "Leverages browser caching for speed." },
            { label: "Brotli Compression", keys: ["brotli"], info: "Compress files for faster delivery using Brotli." },
            { label: "KeepAlive", keys: ["keepalive"], info: "Reduces TCP overhead by reusing connections." },
        ],
    },
    {
        title: "cPanel Tools & Features",
        features: [
            // File & FTP Management
            { label: "File Manager", keys: ["file_manager"], info: "Manage, upload, and edit website files directly from your browser." },
            { label: "FTP Accounts", keys: ["ftp_accounts"], info: "Create FTP accounts for developers or team members." },
            { label: "Anonymous FTP", keys: ["anonymous_ftp"], info: "Allow anonymous access to certain FTP directories." },
            { label: "Web Disk (WebDAV)", keys: ["web_disk"], info: "Map your hosting storage as a network drive on your PC." },

            // Backup & Restore
            { label: "Backup Wizard", keys: ["backup_wizard"], info: "Guided tool for full or partial account backups." },
            { label: "JetBackup / Native Backups", keys: ["jetbackup"], info: "One-click restore for files, emails, and databases." },
            { label: "Download/Restore Home Directory", keys: ["backup_home"], info: "Backup/restore only website files." },
            { label: "Download/Restore Databases", keys: ["backup_db"], info: "Backup/restore only databases." },

            // Domains & DNS (only what's NOT already in your list)
            { label: "Zone Editor (DNS Management)", keys: ["dns_zone_editor"], info: "Edit DNS records: A, MX, TXT, CNAME, etc." },

            // Software / App Installers
            { label: "Softaculous App Installer", keys: ["softaculous"], info: "One-click install for 400+ apps like WordPress, Joomla, Magento." },
            { label: "SitePad / Sitejet Builder", keys: ["sitejet_builder"], info: "Sitejet Builder is a fully-integrated do-it-yourself website builder. It allows you to build and launch competitive websites, fast." },
            { label: "WordPress Manager", keys: ["wordpress_manager"], info: "Manage installed WordPress sites easily." },

            // Metrics & Analytics
            { label: "Visitors Log", keys: ["visitors_log"], info: "See real-time site visitors." },
            { label: "Awstats", keys: ["awstats"], info: "Detailed web analytics reports." },
            { label: "Webalizer", keys: ["webalizer"], info: "Simple site traffic stats." },
            { label: "Analog Stats", keys: ["analog_stats"], info: "Lightweight traffic analyzer." },
            { label: "Error Logs", keys: ["error_logs"], info: "Track website errors." },
            { label: "Resource Usage (CPU/RAM)", keys: ["resource_usage"], info: "Monitor account-level server resource usage." },

            // Advanced Tools
            { label: "Cron Jobs", keys: ["cron_jobs"], info: "Schedule tasks and scripts." },
            { label: "Apache Handlers", keys: ["apache_handlers"], info: "Control how Apache handles file extensions." },
            { label: "MIME Types", keys: ["mime_types"], info: "Define how files are processed." },
            { label: "Error Pages", keys: ["error_pages"], info: "Customize 401, 403, 404, 500 error pages." },
            { label: "Indexes", keys: ["indexes"], info: "Control directory listing behavior." },
            { label: "Terminal / SSH Access", keys: ["ssh"], info: "Secure shell access for advanced users." },
        ]
    },
]

export const PLANS_COMPARE_CLOUD_HOSTING_VALUES = {
    VENUS: {
        websites: "Host 1 Website",
        storage_nvme: "1GB Pure NVMe SSD Storage",
        bandwidth: "10GB Bandwidth",
        estimated_visitors_par_month: "1,000",
        cpu_cores: "1 CPU CORE",
        ram: "1 GB Physical Memory",
        resource_quotas: "20 Entry Processes & 100 Processes",
        free_website_transfer: true,
        multi_location: true,
        moneyback: "7 Days",
        cpu: "1 Core",
        free_domain: false,
        addon_domains: false,
        daily_backups: "7 Copies",
        litespeed: {
            label: "LiteSpeed",
            image: "/icons/litespeed.svg",
        },
        redis: false,
        dns_management: true,
        domain_redirect: true,
        parked_domains: "1 Alias Domain",
        subdomains: "1 Sub-Domain",
        sitejet_builder: true,
        imunify360: true,
        letsencrypt_ssl: true,
        modsecurity: true,
        ip_blocker: true,
        hotlink_protection: true,
        leech_protection: true,
        twofa: true,
        mod_expires: true,
        mod_rewrite: true,
        browser_cache: true,
        brotli: true,
        keepalive: true,
        india: true,
        germany: true,
        usa: false,
        london: false,
        netherlands: false,
        singapore: false,
        australia: false,
        mysql_databases: "1 SQL Database",
        phpmyadmin: true,
        remote_mysql: true,
        php: true,
        php_frameworks: true,
        python: true,
        nodejs: true,
        ruby: true,
        perl: true,
        // 🚀 cPanel Tools & Features
        file_manager: true,
        ftp_accounts: "1 FTP Account",
        anonymous_ftp: true,
        web_disk: true,
        backup_wizard: true,
        jetbackup: true,
        backup_home: true,
        backup_db: true,
        spam_filter: "Advanced AI + SpamAssassin",
        email_auth: "SPF, DKIM, DMARC",
        dns_zone_editor: true,
        softaculous: "400+ Apps",
        wordpress_manager: true,
        visitors_log: true,
        awstats: true,
        webalizer: true,
        analog_stats: true,
        error_logs: true,
        resource_usage: "Advanced",
        cron_jobs: true,
        apache_handlers: true,
        mime_types: true,
        error_pages: true,
        indexes: true,
        ssh: true,
        // Email
        emails: "1 Email",
        emails_per_hour: "100+ Emails/Hour/Domain",
        attachment_size: "5-128 MB",
        mailbox_size: "5-10 GB",
        pop3_imap: true,
        smtp_support: true,
        webmail: true,
        roundcube: true,
        third_party_clients: true,
        email_forwarders: true,
        email_filters: true,
        autoresponders: true,
        mailing_lists: true,
        catch_all: true,
        spam_protection: true,
        dkim_spf: true,
    },
    MARS: {
        websites: "Host 2 Websites",
        storage_nvme: "10GB Pure NVMe SSD Storage",
        bandwidth: "100GB Bandwidth",
        estimated_visitors_par_month: "10,000",
        cpu_cores: "1 CPU CORE",
        ram: "1 GB Physical Memory",
        resource_quotas: "20 Entry Processes & 100 Processes",
        free_website_transfer: true,
        multi_location: true,
        moneyback: "7 Days",
        storage: "30 GB NVMe",
        cpu: "2 Cores",
        free_domain: true,
        addon_domains: "1 Addon Domain",
        daily_backups: "14 Copies",
        litespeed: {
            label: "LiteSpeed Enterprise",
            image: "/icons/litespeed-enterprise.svg",
        },
        redis: false,
        dns_management: true,
        domain_redirect: true,
        parked_domains: "2 Alias Domains",
        subdomains: "10 Sub-Domains",
        sitejet_builder: true,
        imunify360: "Advanced malware protection",
        letsencrypt_ssl: "Free SSL certificates",
        modsecurity: "Web application firewall",
        ip_blocker: "Block unwanted IPs",
        hotlink_protection: "Prevent image stealing",
        leech_protection: "Login abuse protection",
        twofa: "Two-factor login security",
        mod_expires: true,
        mod_rewrite: true,
        browser_cache: true,
        brotli: true,
        keepalive: true,
        india: true,
        germany: true,
        usa: false,
        london: false,
        netherlands: false,
        singapore: false,
        australia: false,
        mysql_databases: "10 SQL Database",
        phpmyadmin: true,
        remote_mysql: true,
        php: true,
        php_frameworks: true,
        python: true,
        nodejs: true,
        ruby: true,
        perl: true,
        // 🚀 cPanel Tools & Features
        file_manager: true,
        ftp_accounts: "10 FTP Accounts",
        anonymous_ftp: true,
        web_disk: true,
        backup_wizard: true,
        jetbackup: true,
        backup_home: true,
        backup_db: true,
        spam_filter: "Advanced AI + SpamAssassin",
        email_auth: "SPF, DKIM, DMARC",
        dns_zone_editor: true,
        softaculous: "400+ Apps",
        wordpress_manager: true,
        visitors_log: true,
        awstats: true,
        webalizer: true,
        analog_stats: true,
        error_logs: true,
        resource_usage: "Advanced",
        cron_jobs: true,
        apache_handlers: true,
        mime_types: true,
        error_pages: true,
        indexes: true,
        ssh: true,
        // Email
        emails: "10 Emails",
        emails_per_hour: "100+ Emails/Hour/Domain",
        attachment_size: "5-128 MB",
        mailbox_size: "5-10 GB",
        pop3_imap: true,
        smtp_support: true,
        webmail: true,
        roundcube: true,
        third_party_clients: true,
        email_forwarders: true,
        email_filters: true,
        autoresponders: true,
        mailing_lists: true,
        catch_all: true,
        spam_protection: true,
        dkim_spf: true,
    },
    SATURN: {
        websites: "Host 5 Websites",
        storage_nvme: "30GB Pure NVMe SSD Storage",
        bandwidth: "Unlimited Bandwidth",
        estimated_visitors_par_month: "1,00,000",
        cpu_cores: "1 CPU CORE",
        ram: "2 GB Physical Memory",
        resource_quotas: "30 Entry Processes & 100 Processes",
        free_website_transfer: true,
        multi_location: true,
        moneyback: "7 Days",
        storage: "40 GB NVMe",
        cpu: "2 Cores",
        free_domain: true,
        addon_domains: "4 Addon Domains",
        daily_backups: "21 Copies",
        litespeed: {
            label: "LiteSpeed Enterprise",
            image: "/icons/litespeed-enterprise.svg",
        },
        redis: false,
        dns_management: true,
        domain_redirect: true,
        parked_domains: "5 Alias Domains",
        subdomains: "Unlimited Sub-Domains",
        sitejet_builder: true,
        imunify360: "Advanced malware protection",
        letsencrypt_ssl: "Free SSL certificates",
        modsecurity: "Web application firewall",
        ip_blocker: "Block unwanted IPs",
        hotlink_protection: "Prevent image stealing",
        leech_protection: "Login abuse protection",
        twofa: "Two-factor login security",
        mod_expires: true,
        mod_rewrite: true,
        browser_cache: true,
        brotli: true,
        keepalive: true,
        india: true,
        germany: true,
        usa: false,
        london: false,
        netherlands: false,
        singapore: false,
        australia: false,
        mysql_databases: "Unlimited SQL Database",
        phpmyadmin: true,
        remote_mysql: true,
        php: true,
        php_frameworks: true,
        python: true,
        nodejs: true,
        ruby: true,
        perl: true,
        // 🚀 cPanel Tools & Features
        file_manager: true,
        ftp_accounts: "Unlimited FTP Accounts",
        anonymous_ftp: true,
        web_disk: true,
        backup_wizard: true,
        jetbackup: true,
        backup_home: true,
        backup_db: true,
        spam_filter: "Advanced AI + SpamAssassin",
        email_auth: "SPF, DKIM, DMARC",
        dns_zone_editor: true,
        softaculous: "400+ Apps",
        wordpress_manager: true,
        visitors_log: true,
        awstats: true,
        webalizer: true,
        analog_stats: true,
        error_logs: true,
        resource_usage: "Advanced",
        cron_jobs: true,
        apache_handlers: true,
        mime_types: true,
        error_pages: true,
        indexes: true,
        ssh: true,
        // Email
        emails: "Unlimited Emails",
        emails_per_hour: "100+ Emails/Hour/Domain",
        attachment_size: "5-128 MB",
        mailbox_size: "5-10 GB",
        pop3_imap: true,
        smtp_support: true,
        webmail: true,
        roundcube: true,
        third_party_clients: true,
        email_forwarders: true,
        email_filters: true,
        autoresponders: true,
        mailing_lists: true,
        catch_all: true,
        spam_protection: true,
        dkim_spf: true,
    },
    JUPITER: {
        websites: "Host 10 Websites",
        storage_nvme: "Unlimited NVMe SSD Storage",
        bandwidth: "Unlimited Bandwidth",
        estimated_visitors_par_month: "1,00,000",
        cpu_cores: "2 CPU CORE",
        ram: "2 GB Physical Memory",
        resource_quotas: "30 Entry Processes & 100 Processes",
        free_website_transfer: true,
        multi_location: true,
        moneyback: "7 Days",
        storage: "40 GB NVMe",
        cpu: "2 Cores",
        free_domain: true,
        addon_domains: "9 Addon Domains",
        daily_backups: "21 Copies",
        litespeed: {
            label: "LiteSpeed Enterprise",
            image: "/icons/litespeed-enterprise.svg",
        },
        redis: false,
        dns_management: true,
        domain_redirect: true,
        parked_domains: "10 Alias Domains",
        subdomains: "Unlimited Sub-Domains",
        sitejet_builder: true,
        imunify360: "Advanced malware protection",
        letsencrypt_ssl: "Free SSL certificates",
        modsecurity: "Web application firewall",
        ip_blocker: "Block unwanted IPs",
        hotlink_protection: "Prevent image stealing",
        leech_protection: "Login abuse protection",
        twofa: "Two-factor login security",
        mod_expires: true,
        mod_rewrite: true,
        browser_cache: true,
        brotli: true,
        keepalive: true,
        india: true,
        germany: true,
        usa: false,
        london: false,
        netherlands: false,
        singapore: false,
        australia: false,
        mysql_databases: "Unlimited SQL Database",
        phpmyadmin: true,
        remote_mysql: true,
        php: true,
        php_frameworks: true,
        python: true,
        nodejs: true,
        ruby: true,
        perl: true,
        // 🚀 cPanel Tools & Features
        file_manager: true,
        ftp_accounts: "Unlimited FTP Accounts",
        anonymous_ftp: true,
        web_disk: true,
        backup_wizard: true,
        jetbackup: true,
        backup_home: true,
        backup_db: true,
        spam_filter: "Advanced AI + SpamAssassin",
        email_auth: "SPF, DKIM, DMARC",
        dns_zone_editor: true,
        softaculous: "400+ Apps",
        wordpress_manager: true,
        visitors_log: true,
        awstats: true,
        webalizer: true,
        analog_stats: true,
        error_logs: true,
        resource_usage: "Advanced",
        cron_jobs: true,
        apache_handlers: true,
        mime_types: true,
        error_pages: true,
        indexes: true,
        ssh: true,
        // Email
        emails: "Unlimited Emails",
        emails_per_hour: "100+ Emails/Hour/Domain",
        attachment_size: "5-128 MB",
        mailbox_size: "5-10 GB",
        pop3_imap: true,
        smtp_support: true,
        webmail: true,
        roundcube: true,
        third_party_clients: true,
        email_forwarders: true,
        email_filters: true,
        autoresponders: true,
        mailing_lists: true,
        catch_all: true,
        spam_protection: true,
        dkim_spf: true,
    },
};

export const PLANS_COMPARE_COMBO_HOSTING = [
    {
        title: "Combo Hosting Features",
        features: [
            { label: "Websites", keys: ["websites"], info: "Number of websites you can host on this plan." },
            { label: "Free Domains", keys: ["free_domains"], info: "Free domain included with plan" },
            { label: "Storage (NVMe)", keys: ["storage_nvme"], info: "Total NVMe storage allocated to your accounts. Disk usage is subject to strict Fair Usage Policies (FUP) in such cases it cannot be treated as unlimited. Excessive or abusive storage consumption (e.g., file archiving, backups, or non-hosting related use) may result in additional charges* or suspension. To learn more, check our [Fair Usage Policies](/legal/terms-of-service#fair-usage-policies)." },
            { label: "Bandwidth (Traffic)", keys: ["bandwidth"], info: "Amount of data transfer allowed per month." },
            { label: "Estimated Visitors per month", keys: ["estimated_visitors_par_month"], info: "Suggested monthly visitor capacity based on plan limits." },
            { label: "CPU Cores", keys: ["cpu_cores"], info: "Processing power allocated for your hosting environment." },
            { label: "RAM", keys: ["ram"], info: "Memory allocated for your hosting environment." },
            { label: "Resource Quotas", keys: ["resource_quotas"], info: "System limits for CPU, I/O, etc." },
            { label: "Free Website Transfers", keys: ["free_website_transfer"], info: "Number of websites we transfer for free." },
            { label: "Multiple Hosting Locations", keys: ["multi_location"], info: "Choose from multiple server locations." },
            { label: "Moneyback Guarantee", keys: ["moneyback"], info: "Refund period available up to 7 days" },
        ]
    },
    {
        title: "Domain Features",
        features: [
            { label: "Addon Domains", keys: ["addon_domains"], info: "Add more domains to your hosting account." },
            { label: "Parked Domains (Aliases)", keys: ["parked_domains"], info: "Alias additional domains to your main domain." },
            { label: "Subdomains", keys: ["subdomains"], info: "Create subdomains (e.g., blog.yoursite.com)." },
            { label: "DNS Management", keys: ["dns_management"], info: "Manage DNS records like A, MX, CNAME, etc." },
            { label: "Domain Redirection", keys: ["domain_redirect"], info: "Redirect domain traffic to other URLs." },
            { label: "Free Private Nameservers", keys: ["private_ns"], info: "Custom branded nameservers for your domain." },
        ],
    },
    {
        title: "Email Features",
        features: [
            { label: "Total Email Accounts", keys: ["emails"], info: "Number of email accounts you can create." },
            { label: "Emails Per Hour Per Domain", keys: ["emails_per_hour"], info: "Number of emails allowed per hour for each domain." },
            { label: "Email Attachment Size", keys: ["attachment_size"], info: "Maximum size supported for email attachments can vary based on plan." },
            { label: "Mailbox Size", keys: ["mailbox_size"], info: "Storage space allocated for each mailbox can vary based on plan." },
            { label: "POP3/IMAP Support", keys: ["pop3_imap"], info: "Access your email using POP3 or IMAP protocols." },
            { label: "SMTP Support", keys: ["smtp_support"], info: "Send and receive emails securely using SMTP protocol." },
            { label: "Webmail Access", keys: ["webmail"], info: "Login to your mailbox from any browser via webmail." },
            { label: "Roundcube Webmail", keys: ["roundcube"], info: "User-friendly Roundcube webmail client included." },
            { label: "Third-Party Client Access", keys: ["third_party_clients"], info: "Connect mailboxes with clients like Gmail, Outlook, Thunderbird, etc." },
            { label: "Email Forwarders", keys: ["email_forwarders"], info: "Forward emails automatically to other addresses." },
            { label: "Email Filters", keys: ["email_filters"], info: "Set rules to organize, block, or filter incoming emails." },
            { label: "Autoresponders", keys: ["autoresponders"], info: "Send automatic replies to incoming emails." },
            { label: "Mailing Lists", keys: ["mailing_lists"], info: "Create and manage email distribution lists." },
            { label: "Catch-All Address", keys: ["catch_all"], info: "Receive emails sent to non-existing addresses under your domain." },
            { label: "SPAM Protection", keys: ["spam_protection"], info: "Built-in filters to reduce unwanted emails." },
            { label: "DKIM & SPF Support", keys: ["dkim_spf"], info: "Email authentication standards to prevent spoofing." },
        ],
    },
    {
        title: "Security",
        features: [
            { label: "Imunify360", keys: ["imunify360"], info: "Advanced AI-based malware protection and security suite integrated with cPanel." },
            { label: "Let's Encrypt™ SSL", keys: ["letsencrypt_ssl"], info: "Free SSL certificates automatically installed for all your domains." },
            { label: "ModSecurity (WAF)", keys: ["modsecurity"], info: "Web Application Firewall (WAF) that helps block malicious web traffic." },
            { label: "IP Blocker", keys: ["ip_blocker"], info: "Block specific IP addresses from accessing your site." },
            { label: "Hotlink Protection", keys: ["hotlink_protection"], info: "Prevents other websites from directly linking to your files or images." },
            { label: "Leech Protection", keys: ["leech_protection"], info: "Protects your password-protected areas from unauthorized sharing." },
            { label: "Two-Factor Authentication (2FA)", keys: ["twofa"], info: "Adds an extra layer of security to your cPanel account login." },
        ],
    },
    {
        title: "Server Locations",
        features: [
            { label: "India", keys: ["india"], info: "Host your website on high-performance servers located in India for low-latency access in the region." },
            { label: "USA", keys: ["usa"], info: "Fast and reliable hosting for North American audiences from U.S.-based servers." },
            { label: "London", keys: ["london"], info: "UK-based servers for better performance across the United Kingdom and nearby regions." },
            { label: "Netherlands", keys: ["netherlands"], info: "Secure servers in the Netherlands for fast connectivity across Europe." },
            { label: "Singapore", keys: ["singapore"], info: "Optimized for Southeast Asia, our Singapore servers deliver excellent regional speed." },
            // { label: "Germany", keys: ["germany"], info: "Serve European visitors faster with servers hosted in a secure German data center." },
            // { label: "Australia", keys: ["australia"], info: "Serve Australian and Oceanic visitors with low-latency from local data centers." }
        ]
    },
    {
        title: "Database Features",
        features: [
            {
                label: "MySQL Databases",
                keys: ["mysql_databases"],
                info: "Create and manage MySQL databases for your websites and applications."
            },
            {
                label: "phpMyAdmin",
                keys: ["phpmyadmin"],
                info: "Manage MySQL databases with an easy-to-use web interface."
            },
            {
                label: "Remote MySQL",
                keys: ["remote_mysql"],
                info: "Access your MySQL databases remotely from external servers or applications."
            },
        ]
    },
    {
        title: "Development Features",
        features: [
            {
                label: "PHP",
                keys: ["php"],
                info: "Supports multiple PHP versions with customizable extensions."
            },
            {
                label: "PHP Frameworks (Laravel/Symfony/CodeIgniter)",
                keys: ["php_frameworks"],
                info: "Popular PHP frameworks supported via Composer."
            },
            {
                label: "Python (Django/Flask)",
                keys: ["python"],
                info: "Supports Python apps and Python frameworks with virtual environments."
            },
            {
                label: "Node.js",
                keys: ["nodejs"],
                info: "Host Node.js applications with version control."
            },
            {
                label: "Ruby",
                keys: ["ruby"],
                info: "Support for Ruby apps with Passenger (if available)."
            },
            {
                label: "Perl",
                keys: ["perl"],
                info: "Legacy support for Perl-based scripts."
            }
        ]
    },
    {
        title: "SEO & Browser Optimization",
        features: [
            { label: "Mod_Expires", keys: ["mod_expires"], info: "Controls how long files are cached in browsers." },
            { label: "Mod_Rewrite SEO URLs", keys: ["mod_rewrite"], info: "Enable human-readable URLs via .htaccess." },
            { label: "Browser Cache Optimization", keys: ["browser_cache"], info: "Leverages browser caching for speed." },
            { label: "Brotli Compression", keys: ["brotli"], info: "Compress files for faster delivery using Brotli." },
            { label: "KeepAlive", keys: ["keepalive"], info: "Reduces TCP overhead by reusing connections." },
        ],
    },
    {
        title: "cPanel Tools & Features",
        features: [
            // File & FTP Management
            { label: "File Manager", keys: ["file_manager"], info: "Manage, upload, and edit website files directly from your browser." },
            { label: "FTP Accounts", keys: ["ftp_accounts"], info: "Create FTP accounts for developers or team members." },
            { label: "Anonymous FTP", keys: ["anonymous_ftp"], info: "Allow anonymous access to certain FTP directories." },
            { label: "Web Disk (WebDAV)", keys: ["web_disk"], info: "Map your hosting storage as a network drive on your PC." },

            // Backup & Restore
            { label: "Backup Wizard", keys: ["backup_wizard"], info: "Guided tool for full or partial account backups." },
            { label: "JetBackup / Native Backups", keys: ["jetbackup"], info: "One-click restore for files, emails, and databases." },
            { label: "Download/Restore Home Directory", keys: ["backup_home"], info: "Backup/restore only website files." },
            { label: "Download/Restore Databases", keys: ["backup_db"], info: "Backup/restore only databases." },

            // Domains & DNS (only what's NOT already in your list)
            { label: "Zone Editor (DNS Management)", keys: ["dns_zone_editor"], info: "Edit DNS records: A, MX, TXT, CNAME, etc." },

            // Software / App Installers
            { label: "Softaculous App Installer", keys: ["softaculous"], info: "One-click install for 400+ apps like WordPress, Joomla, Magento." },
            { label: "SitePad / Sitejet Builder", keys: ["sitejet_builder"], info: "Sitejet Builder is a fully-integrated do-it-yourself website builder. It allows you to build and launch competitive websites, fast." },
            { label: "WordPress Manager", keys: ["wordpress_manager"], info: "Manage installed WordPress sites easily." },

            // Metrics & Analytics
            { label: "Visitors Log", keys: ["visitors_log"], info: "See real-time site visitors." },
            { label: "Awstats", keys: ["awstats"], info: "Detailed web analytics reports." },
            { label: "Webalizer", keys: ["webalizer"], info: "Simple site traffic stats." },
            { label: "Analog Stats", keys: ["analog_stats"], info: "Lightweight traffic analyzer." },
            { label: "Error Logs", keys: ["error_logs"], info: "Track website errors." },
            { label: "Resource Usage (CPU/RAM)", keys: ["resource_usage"], info: "Monitor account-level server resource usage." },

            // Advanced Tools
            { label: "Cron Jobs", keys: ["cron_jobs"], info: "Schedule tasks and scripts." },
            { label: "Apache Handlers", keys: ["apache_handlers"], info: "Control how Apache handles file extensions." },
            { label: "MIME Types", keys: ["mime_types"], info: "Define how files are processed." },
            { label: "Error Pages", keys: ["error_pages"], info: "Customize 401, 403, 404, 500 error pages." },
            { label: "Indexes", keys: ["indexes"], info: "Control directory listing behavior." },
            { label: "Terminal / SSH Access", keys: ["ssh"], info: "Secure shell access for advanced users." },
        ]
    },
]

export const PLANS_COMPARE_COMBO_HOSTING_VALUES = {
    EUROPA: {
        websites: "Host 2 Website",
        free_domains: "1 Domain Free",
        storage_nvme: "20GB Pure NVMe SSD Storage",
        bandwidth: "Unlimited Bandwidth",
        estimated_visitors_par_month: "1,000",
        cpu_cores: "2 CPU CORE",
        ram: "2 GB Physical Memory",
        resource_quotas: "20 Entry Processes & 100 Processes",
        free_website_transfer: true,
        multi_location: true,
        moneyback: "7 Days",
        // domain management
        addon_domains: false,
        parked_domains: "1 Alias Domain",
        subdomains: "Unlimited Sub-Domain",
        dns_management: true,
        domain_redirect: true,
        private_ns: true,
        // leave out unrelated fields like free_domain, daily_backups, litespeed and redis
        imunify360: true,
        letsencrypt_ssl: true,
        modsecurity: true,
        ip_blocker: true,
        hotlink_protection: true,
        leech_protection: true,
        twofa: true,
        mod_expires: true,
        mod_rewrite: true,
        browser_cache: true,
        brotli: true,
        keepalive: true,
        india: true,
        germany: false,
        usa: true,
        london: true,
        netherlands: true,
        singapore: true,
        australia: false,
        mysql_databases: "Unlimited SQL Database",
        phpmyadmin: true,
        remote_mysql: true,
        php: true,
        php_frameworks: true,
        python: true,
        nodejs: true,
        ruby: true,
        perl: true,
        // 🚀 cPanel Tools & Features
        file_manager: true,
        ftp_accounts: "Unlimited FTP Accounts",
        anonymous_ftp: true,
        web_disk: true,
        backup_wizard: true,
        jetbackup: true,
        backup_home: true,
        backup_db: true,
        email_auth: "SPF, DKIM, DMARC",
        dns_zone_editor: true,
        softaculous: "400+ Apps",
        sitejet_builder: true,
        wordpress_manager: true,
        visitors_log: true,
        awstats: true,
        webalizer: true,
        analog_stats: true,
        error_logs: true,
        resource_usage: "Advanced",
        cron_jobs: true,
        apache_handlers: true,
        mime_types: true,
        error_pages: true,
        indexes: true,
        ssh: true,
        // Email
        emails: "Unlimited Emails",
        emails_per_hour: "100+ Emails/Hour/Domain",
        attachment_size: "5-128 MB",
        mailbox_size: "5-10 GB",
        pop3_imap: true,
        smtp_support: true,
        webmail: true,
        roundcube: true,
        third_party_clients: true,
        email_forwarders: true,
        email_filters: true,
        autoresponders: true,
        mailing_lists: true,
        catch_all: true,
        spam_protection: true,
        dkim_spf: true,
    },
    IO: {
        websites: "Host 4 Websites",
        free_domains: "1 Domain Free",
        storage_nvme: "Unlimited Pure NVMe SSD Storage",
        bandwidth: "Unlimited Bandwidth",
        estimated_visitors_par_month: "10,000",
        cpu_cores: "2 CPU CORE",
        ram: "2 GB Physical Memory",
        resource_quotas: "20 Entry Processes & 100 Processes",
        free_website_transfer: true,
        multi_location: true,
        moneyback: "7 Days",
        // domain management
        addon_domains: "3 Addon Domain",
        parked_domains: "4 Alias Domains",
        subdomains: "Unlimited Sub-Domains",
        dns_management: true,
        domain_redirect: true,
        private_ns: true,
        // remove unrelated fields like free_domain, daily_backups, litespeed and redis
        imunify360: "Advanced malware protection",
        letsencrypt_ssl: "Free SSL certificates",
        modsecurity: "Web application firewall",
        ip_blocker: "Block unwanted IPs",
        hotlink_protection: "Prevent image stealing",
        leech_protection: "Login abuse protection",
        twofa: "Two-factor login security",
        mod_expires: true,
        mod_rewrite: true,
        browser_cache: true,
        brotli: true,
        keepalive: true,
        india: true,
        germany: false,
        usa: true,
        london: true,
        netherlands: true,
        singapore: true,
        australia: false,
        mysql_databases: "Unlimited SQL Database",
        phpmyadmin: true,
        remote_mysql: true,
        php: true,
        php_frameworks: true,
        python: true,
        nodejs: true,
        ruby: true,
        perl: true,
        // 🚀 cPanel Tools & Features
        file_manager: true,
        ftp_accounts: "Unlimited FTP Accounts",
        anonymous_ftp: true,
        web_disk: true,
        backup_wizard: true,
        jetbackup: true,
        backup_home: true,
        backup_db: true,
        dns_zone_editor: true,
        softaculous: "400+ Apps",
        sitejet_builder: true,
        wordpress_manager: true,
        visitors_log: true,
        awstats: true,
        webalizer: true,
        analog_stats: true,
        error_logs: true,
        resource_usage: "Advanced",
        cron_jobs: true,
        apache_handlers: true,
        mime_types: true,
        error_pages: true,
        indexes: true,
        ssh: true,
        // Email
        emails: "Unlimited Emails",
        emails_per_hour: "100+ Emails/Hour/Domain",
        attachment_size: "5-128 MB",
        mailbox_size: "5-10 GB",
        pop3_imap: true,
        smtp_support: true,
        webmail: true,
        roundcube: true,
        third_party_clients: true,
        email_forwarders: true,
        email_filters: true,
        autoresponders: true,
        mailing_lists: true,
        catch_all: true,
        spam_protection: true,
        dkim_spf: true,
    }
};

// Premium Hosting Compare

export const PLANS_COMPARE_PREMIUM_HOSTING = [
    {
        title: "Premium Hosting Features",
        features: [
            { label: "Websites", keys: ["websites"], info: "Number of websites you can host on this plan." },
            { label: "Storage (NVMe)", keys: ["storage_nvme"], info: "Total NVMe storage allocated to your accounts. Disk usage is subject to strict Fair Usage Policies (FUP) in such cases it cannot be treated as unlimited. Excessive or abusive storage consumption (e.g., file archiving, backups, or non-hosting related use) may result in additional charges* or suspension. To learn more, check our [Fair Usage Policies](/legal/terms-of-service#fair-usage-policies)." },
            { label: "Bandwidth (Traffic)", keys: ["bandwidth"], info: "Amount of data transfer allowed per month." },
            { label: "Estimated Visitors per month", keys: ["estimated_visitors_par_month"], info: "Suggested monthly visitor capacity based on plan limits." },
            { label: "CPU Cores", keys: ["cpu_cores"], info: "Processing power allocated for your hosting environment." },
            { label: "RAM", keys: ["ram"], info: "Memory allocated for your hosting environment." },
            { label: "Resource Quotas", keys: ["resource_quotas"], info: "System limits for CPU, I/O, etc." },
            { label: "Free Website Transfers", keys: ["free_website_transfer"], info: "Number of websites we transfer for free." },
            { label: "Multiple Hosting Locations", keys: ["multi_location"], info: "Choose from multiple server locations." },
            { label: "Moneyback Guarantee", keys: ["moneyback"], info: "Refund period available up to 7 days" },
        ]
    },
    {
        title: "Domain Features",
        features: [
            { label: "Addon Domains", keys: ["addon_domains"], info: "Add more domains to your hosting account." },
            { label: "Parked Domains (Aliases)", keys: ["parked_domains"], info: "Alias additional domains to your main domain." },
            { label: "Subdomains", keys: ["subdomains"], info: "Create subdomains (e.g., blog.yoursite.com)." },
            { label: "DNS Management", keys: ["dns_management"], info: "Manage DNS records like A, MX, CNAME, etc." },
            { label: "Domain Redirection", keys: ["domain_redirect"], info: "Redirect domain traffic to other URLs." },
            { label: "Free Private Nameservers", keys: ["private_ns"], info: "Custom branded nameservers for your domain." },
        ],
    },
    {
        title: "Security",
        features: [
            { label: "Imunify360", keys: ["imunify360"], info: "Advanced AI-based malware protection and security suite integrated with cPanel." },
            { label: "Let's Encrypt™ SSL", keys: ["letsencrypt_ssl"], info: "Free SSL certificates automatically installed for all your domains." },
            { label: "ModSecurity (WAF)", keys: ["modsecurity"], info: "Web Application Firewall (WAF) that helps block malicious web traffic." },
            { label: "IP Blocker", keys: ["ip_blocker"], info: "Block specific IP addresses from accessing your site." },
            { label: "Hotlink Protection", keys: ["hotlink_protection"], info: "Prevents other websites from directly linking to your files or images." },
            { label: "Leech Protection", keys: ["leech_protection"], info: "Protects your password-protected areas from unauthorized sharing." },
            { label: "Two-Factor Authentication (2FA)", keys: ["twofa"], info: "Adds an extra layer of security to your cPanel account login." },
        ],
    },
    {
        title: "Server Locations",
        features: [
            { label: "India", keys: ["india"], info: "Host your website on high-performance servers located in India for low-latency access in the region." },
            { label: "Germany", keys: ["germany"], info: "Serve European visitors faster with servers hosted in a secure German data center." },
            { label: "USA", keys: ["usa"], info: "Fast and reliable hosting for North American audiences from U.S.-based servers." },
            { label: "London", keys: ["london"], info: "UK-based servers for better performance across the United Kingdom and nearby regions." },
            { label: "Netherlands", keys: ["netherlands"], info: "Secure servers in the Netherlands for fast connectivity across Europe." },
            { label: "Singapore", keys: ["singapore"], info: "Optimized for Southeast Asia, our Singapore servers deliver excellent regional speed." },
            { label: "Australia", keys: ["australia"], info: "Serve Australian and Oceanic visitors with low-latency from local data centers." }
        ]
    },
    {
        title: "Database Features",
        features: [
            {
                label: "MySQL Databases",
                keys: ["mysql_databases"],
                info: "Create and manage MySQL databases for your websites and applications."
            },
            {
                label: "phpMyAdmin",
                keys: ["phpmyadmin"],
                info: "Manage MySQL databases with an easy-to-use web interface."
            },
            {
                label: "Remote MySQL",
                keys: ["remote_mysql"],
                info: "Access your MySQL databases remotely from external servers or applications."
            },
        ]
    },
    {
        title: "Development Features",
        features: [
            {
                label: "PHP",
                keys: ["php"],
                info: "Supports multiple PHP versions with customizable extensions."
            },
            {
                label: "PHP Frameworks (Laravel/Symfony/CodeIgniter)",
                keys: ["php_frameworks"],
                info: "Popular PHP frameworks supported via Composer."
            },
            {
                label: "Python (Django/Flask)",
                keys: ["python"],
                info: "Supports Python apps and Python frameworks with virtual environments."
            },
            {
                label: "Node.js",
                keys: ["nodejs"],
                info: "Host Node.js applications with version control."
            },
            {
                label: "Ruby",
                keys: ["ruby"],
                info: "Support for Ruby apps with Passenger (if available)."
            },
            {
                label: "Perl",
                keys: ["perl"],
                info: "Legacy support for Perl-based scripts."
            }
        ]
    },
    {
        title: "SEO & Browser Optimization",
        features: [
            { label: "Mod_Expires", keys: ["mod_expires"], info: "Controls how long files are cached in browsers." },
            { label: "Mod_Rewrite SEO URLs", keys: ["mod_rewrite"], info: "Enable human-readable URLs via .htaccess." },
            { label: "Browser Cache Optimization", keys: ["browser_cache"], info: "Leverages browser caching for speed." },
            { label: "Brotli Compression", keys: ["brotli"], info: "Compress files for faster delivery using Brotli." },
            { label: "KeepAlive", keys: ["keepalive"], info: "Reduces TCP overhead by reusing connections." },
        ],
    },
    {
        title: "Additional Services",
        features: [
            { label: "Sitejet Builder", keys: ["sitejet_builder"], info: "Sitejet Builder is a fully-integrated do-it-yourself website builder. It allows you to build and launch competitive websites, fast." },
        ],
    },
]

export const PLANS_COMPARE_PREMIUM_HOSTING_VALUES = {
    CUMULUSPLUS: {
        websites: "Host 1 Website",
        storage_nvme: "1GB Pure NVMe SSD Storage",
        bandwidth: "10GB Bandwidth",
        estimated_visitors_par_month: "1,000",
        cpu_cores: "1 CPU CORE",
        ram: "1 GB Physical Memory",
        resource_quotas: "20 Entry Processes & 100 Processes",
        free_website_transfer: true,
        multi_location: true,
        moneyback: "7 Days",
        cpu: "1 Core",
        free_domain: false,
        addon_domains: false,
        daily_backups: "7 Copies",
        litespeed: {
            label: "LiteSpeed",
            image: "/icons/litespeed.svg",
        },
        redis: false,
        dns_management: true,
        domain_redirect: true,
        parked_domains: "1 Alias Domain",
        subdomains: "1 Sub-Domain",
        sitejet_builder: true,
        imunify360: true,
        letsencrypt_ssl: true,
        modsecurity: true,
        ip_blocker: true,
        hotlink_protection: true,
        leech_protection: true,
        twofa: true,
        mod_expires: true,
        mod_rewrite: true,
        browser_cache: true,
        brotli: true,
        keepalive: true,
        india: true,
        germany: true,
        usa: false,
        london: false,
        netherlands: false,
        singapore: false,
        australia: false,
        mysql_databases: "1 SQL Database",
        phpmyadmin: true,
        remote_mysql: true,
        php: true,
        php_frameworks: true,
        python: true,
        nodejs: true,
        ruby: true,
        perl: true,
    },
    NUMBUSULTIMATE: {
        websites: "Host 2 Websites",
        storage_nvme: "10GB Pure NVMe SSD Storage",
        bandwidth: "100GB Bandwidth",
        estimated_visitors_par_month: "10,000",
        cpu_cores: "1 CPU CORE",
        ram: "1 GB Physical Memory",
        resource_quotas: "20 Entry Processes & 100 Processes",
        free_website_transfer: true,
        multi_location: true,
        moneyback: "7 Days",
        storage: "30 GB NVMe",
        cpu: "2 Cores",
        free_domain: true,
        addon_domains: "1 Addon Domain",
        daily_backups: "14 Copies",
        litespeed: {
            label: "LiteSpeed Enterprise",
            image: "/icons/litespeed-enterprise.svg",
        },
        redis: false,
        dns_management: true,
        domain_redirect: true,
        parked_domains: "2 Alias Domains",
        subdomains: "10 Sub-Domains",
        sitejet_builder: true,
        imunify360: "Advanced malware protection",
        letsencrypt_ssl: "Free SSL certificates",
        modsecurity: "Web application firewall",
        ip_blocker: "Block unwanted IPs",
        hotlink_protection: "Prevent image stealing",
        leech_protection: "Login abuse protection",
        twofa: "Two-factor login security",
        mod_expires: true,
        mod_rewrite: true,
        browser_cache: true,
        brotli: true,
        keepalive: true,
        india: true,
        germany: true,
        usa: false,
        london: false,
        netherlands: false,
        singapore: false,
        australia: false,
        mysql_databases: "10 SQL Database",
        phpmyadmin: true,
        remote_mysql: true,
        php: true,
        php_frameworks: true,
        python: true,
        nodejs: true,
        ruby: true,
        perl: true,
    },
    STRATUSPRO: {
        websites: "Host 2 Websites",
        storage_nvme: "10GB Pure NVMe SSD Storage",
        bandwidth: "100GB Bandwidth",
        estimated_visitors_par_month: "10,000",
        cpu_cores: "1 CPU CORE",
        ram: "1 GB Physical Memory",
        resource_quotas: "20 Entry Processes & 100 Processes",
        free_website_transfer: true,
        multi_location: true,
        moneyback: "7 Days",
        storage: "30 GB NVMe",
        cpu: "2 Cores",
        free_domain: true,
        addon_domains: "1 Addon Domain",
        daily_backups: "14 Copies",
        litespeed: {
            label: "LiteSpeed Enterprise",
            image: "/icons/litespeed-enterprise.svg",
        },
        redis: false,
        dns_management: true,
        domain_redirect: true,
        parked_domains: "2 Alias Domains",
        subdomains: "10 Sub-Domains",
        sitejet_builder: true,
        imunify360: "Advanced malware protection",
        letsencrypt_ssl: "Free SSL certificates",
        modsecurity: "Web application firewall",
        ip_blocker: "Block unwanted IPs",
        hotlink_protection: "Prevent image stealing",
        leech_protection: "Login abuse protection",
        twofa: "Two-factor login security",
        mod_expires: true,
        mod_rewrite: true,
        browser_cache: true,
        brotli: true,
        keepalive: true,
        india: true,
        germany: true,
        usa: false,
        london: false,
        netherlands: false,
        singapore: false,
        australia: false,
        mysql_databases: "10 SQL Database",
        phpmyadmin: true,
        remote_mysql: true,
        php: true,
        php_frameworks: true,
        python: true,
        nodejs: true,
        ruby: true,
        perl: true,
    }
};


// VPS Hosting Compare
export const PLANS_COMPARE_VPS_HOSTING = [
    {
        title: "Core Resources",
        features: [
            { label: "CPU Cores", keys: ["vps_cpu_cores"], info: "Number of virtual CPU cores allocated to your VPS." },
            { label: "RAM", keys: ["vps_ram"], info: "Amount of dedicated memory for running applications." },
            {
                label: "Scalable",
                keys: ["vps_scale_upgrade"],
                info: "Resources can be scaled up as needed for growth."
            },
            {
                label: "Disk Space (NVMe)",
                keys: ["vps_storage"],
                info: "Total NVMe storage allocated. Disk usage is subject to strict Fair Usage Policies (FUP) and cannot be treated as unlimited. Excessive or abusive storage consumption (e.g., file archiving, backups, or non-hosting related use) may result in additional charges* or suspension. For Linode India hosting, additional storage beyond 50GB is billed at $1 per 10GB. To learn more, check our [Fair Usage Policies](/legal/terms-of-service#fair-usage-policies)."
            },
            { label: "Bandwidth", keys: ["vps_bandwidth"], info: "Monthly data transfer allowance." },
            { label: "Dedicated IP", keys: ["dedicated_ip"], info: "Number of dedicated IP allocated." },
        ],
    },
    {
        title: "Virtualization & Access",
        features: [
            { label: "Virtualization", keys: ["virtualization"], info: "Underlying virtualization technology powering the VPS (e.g., KVM)." },
            { label: "Root Access", keys: ["root_access"], info: "Whether you have full administrative (root) access to the server." },
            { label: "Control Panel", keys: ["control_panel"], info: "Available control panel options for managing your VPS." },
            { label: "Operating System Choices", keys: ["os_choices"], info: "Available operating systems you can install on the VPS." },
        ],
    },
    {
        title: "Management & Security",
        features: [
            { label: "SSL Certificates", keys: ["ssl_cert"], info: "Includes free SSL/TLS certificates for securing your sites." },
            { label: "Firewall", keys: ["firewall"], info: "Integrated firewall to protect your server from malicious traffic." },
            { label: "Monitoring & Alerts", keys: ["monitoring"], info: "Server monitoring and alerting services." },
        ],
    },
    {
        title: "Server Locations",
        features: [
            { label: "USA", keys: ["usa"], info: "Servers located in the United States." },
            { label: "India", keys: ["india"], info: "Servers located in the India." },
        ],
    },
]

export const PLANS_COMPARE_VPS_HOSTING_VALUES = {
    /**
     * CONSOLUSENTER represents the entry‑level VPS plan. It offers a single vCPU with
     * modest resources and is best suited for small websites, test environments or
     * lightweight applications. Root access is included, allowing full control over
     * the server configuration. cPanel is optional and the plan is self‑managed,
     * meaning the customer is responsible for server maintenance.
     */
    CONSOLUSENTER: {
        vps_cpu_cores: "1 vCPU",
        vps_ram: "4 GB RAM",
        vps_scale_upgrade: "MAX UPGRADABLE*",
        vps_storage: "40 GB NVMe SSD",
        vps_bandwidth: "1 TB Bandwidth",
        dedicated_ip: "1",
        virtualization: "KVM",
        root_access: true,
        control_panel: "cPanel/WHM Optional",
        managed_support: "Self-Managed",
        os_choices: "CentOS, Ubuntu, Debian, AlmaLinux",
        ddos_protection: "Basic",
        auto_backups: false,
        snapshots: false,
        ssl_cert: "Free Let's Encrypt",
        firewall: "Configurable",
        monitoring: "99.9% Uptime",
        usa: true,
    },
    /**
     * CONSOLUSMODEL ups the resources with two vCPUs and adds automatic backups. It
     * remains self‑managed but allows optional cPanel/WHM control panel. This plan
     * suits small business websites requiring more power and reliability.
     */
    CONSOLUSMODEL: {
        vps_cpu_cores: "2 vCPUs",
        vps_ram: "8 GB RAM",
        vps_scale_upgrade: "MAX UPGRADABLE*",
        vps_storage: "80 GB NVMe SSD",
        vps_bandwidth: "2 TB Bandwidth",
        dedicated_ip: "1",
        virtualization: "KVM",
        root_access: true,
        control_panel: "cPanel/WHM Optional",
        managed_support: "Self-Managed",
        os_choices: "CentOS, Ubuntu, Debian, AlmaLinux",
        ddos_protection: "Basic",
        auto_backups: true,
        snapshots: false,
        ssl_cert: "Free Let's Encrypt",
        firewall: "Configurable",
        monitoring: "99.9% Uptime",
        usa: true,
    },
    /**
     * CONSOLUSHOST introduces managed support and more generous resources. Four
     * virtual cores, ample RAM, and enhanced DDoS protection make it ideal for
     * growing sites, eCommerce stores, or busy applications. Snapshots allow easy
     * rollbacks and the plan includes free SSL certificates. Available in multiple
     * data centre locations.
     */
    CONSOLUSHOST: {
        vps_cpu_cores: "4 vCPUs",
        vps_ram: "16 GB RAM",
        vps_scale_upgrade: "MAX UPGRADABLE*",
        vps_storage: "160 GB NVMe SSD",
        vps_bandwidth: "4 TB Bandwidth",
        dedicated_ip: "1",
        virtualization: "KVM",
        root_access: true,
        control_panel: "cPanel/WHM Optional",
        managed_support: "Managed",
        os_choices: "CentOS, Ubuntu, Debian, AlmaLinux",
        ddos_protection: "Enhanced",
        auto_backups: true,
        snapshots: true,
        ssl_cert: "Free Let's Encrypt",
        firewall: "Configurable",
        monitoring: "99.9% Uptime",
        usa: true,
    },
    /**
     * CONSOLUSBEAST delivers six virtual cores, eight gigs of RAM and
     * extensive bandwidth. It comes fully managed and is suited for enterprises
     * requiring high availability and performance. All key locations are offered
     * with advanced DDoS protection, automatic backups and snapshots. Included
     * uptime guarantee is 99.99%.
     */
    CONSOLUSBEAST: {
        vps_cpu_cores: "8 vCPUs",
        vps_ram: "32 GB RAM",
        vps_scale_upgrade: "MAX UPGRADABLE*",
        vps_storage: "320 GB NVMe SSD",
        vps_bandwidth: "8 TB Bandwidth",
        dedicated_ip: "1",
        virtualization: "KVM",
        root_access: true,
        control_panel: "cPanel/WHM Optional",
        managed_support: "Managed",
        os_choices: "CentOS, Ubuntu, Debian, AlmaLinux",
        ddos_protection: "Advanced",
        auto_backups: true,
        snapshots: true,
        ssl_cert: "Free Let's Encrypt",
        firewall: "Configurable",
        monitoring: "100% Uptime Mark",
        usa: true,
    },
    /**
     * CONSOLUSGRAND is the flagship VPS offering. Eight virtual cores, sixteen
     * gigabytes of RAM and generous NVMe storage coupled with premium SSL and
     * enterprise firewalls ensure mission‑critical applications run smoothly.
     * Fully managed support and comprehensive DDoS mitigation are included.
     */
    CONSOLUSGRAND: {
        vps_cpu_cores: "16 vCPUs",
        vps_ram: "64 GB RAM",
        vps_scale_upgrade: "MAX UPGRADABLE*",
        vps_storage: "640 GB NVMe SSD",
        vps_bandwidth: "16 TB Bandwidth",
        dedicated_ip: "1",
        virtualization: "KVM",
        root_access: true,
        control_panel: "cPanel/WHM Optional",
        managed_support: "Fully Managed",
        os_choices: "CentOS, Ubuntu, Debian, AlmaLinux",
        ddos_protection: "Advanced",
        auto_backups: true,
        snapshots: true,
        ssl_cert: "Free Let's Encrypt",
        firewall: "Configurable",
        monitoring: "100% Uptime Mark",
        usa: true,
    },
    CONSOLUSLEGEND: {
        vps_cpu_cores: "32 vCPUs",
        vps_ram: "128 GB RAM",
        vps_scale_upgrade: "MAX UPGRADABLE*",
        vps_storage: "1280 GB NVMe SSD",
        vps_bandwidth: "64 TB Bandwidth",
        dedicated_ip: "1",
        virtualization: "KVM",
        root_access: true,
        control_panel: "cPanel/WHM Optional",
        managed_support: "Fully Managed",
        os_choices: "CentOS, Ubuntu, Debian, AlmaLinux",
        ddos_protection: "Advanced",
        auto_backups: true,
        snapshots: true,
        ssl_cert: "Free Let's Encrypt",
        firewall: "Configurable",
        monitoring: "100% Uptime Mark",
        usa: true,
    },
};