// src/lib/pricing/cloudPlans.ts
import { default_bandwidth_fup, default_storage_fup } from "./constants";

export interface PlanFeature {
  label: string;
  info?: string;
}

export interface PlanPricingDetail {
  monthly: number;
  annual: number;
  biannual: number;
  triannual: number;
  [key: string]: number;
}

export interface PlanPricingByCurrency {
  INR: PlanPricingDetail;
  USD: PlanPricingDetail;
}

export interface HostingPlan {
  name: string;
  caption: string;
  icon: string;
  color?: string;
  button?: string;
  className?: string;
  highlight?: boolean;
  highlightClass?: string;
  description?: string;
  link?: string;
  ram?: string;
  features: PlanFeature[];
  locationFeatures?: Record<string, PlanFeature[]>;
  locationNames?: Record<string, string>;
  links: Record<string, string>;
  pricing: Record<string, PlanPricingByCurrency>;
}

export const PLANS_CLOUD_HOSTING: HostingPlan[] = [
  {
    name: "VENUS",
    caption: "BEST FOR STARTERS!",
    icon: "/img/plan-venus.png",
    color: "text-[#F9C929]",
    button: "text-[#F9C929] border-[#F9C929] hover:bg-[#F9C929] hover:text-black",
    className: "bg-[#FFF8E7] hover:border-yellow-300 dark:bg-[#121829]",
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
      { label: "1GB Pure NVMe SSD Storage" },
      { label: "10GB Bandwidth" },
      { label: "1 CPU, 1GB RAM & + LVE Resources" },
      { label: "All cPanel® Features & Free SSL" },
      { label: "LiteSpeed Enterprise Web Server" },
      { label: "Imunify360 AI Anti-Virus" },
      { label: "Premium Datacenter Infrastructure" }
    ],
    links: {
      IND: "https://manage.hostingspell.com/store/ssd-web-hosting/venus",
      DE: "https://manage.hostingspell.com/store/ssd-web-hosting/venus",
    },
    pricing: {
      IND: {
        INR: { monthly: 99.00, annual: 1100, biannual: 1949, triannual: 2749 },
        USD: { monthly: 1.29, annual: 12.99, biannual: 22.99, triannual: 31.99 }
      },
      DE: {
        INR: { monthly: 99.00, annual: 1100, biannual: 1949, triannual: 2749 },
        USD: { monthly: 1.29, annual: 12.99, biannual: 22.99, triannual: 31.99 }
      },
    },
  },
  {
    name: "MARS",
    caption: "BEST FOR SMALL BUSINESSES!",
    icon: "/img/plan-mars.png",
    color: "text-[#EF4136]",
    button: "text-[#EF4136] border-[#EF4136] hover:bg-[#EF4136]",
    className: "bg-[#FFE7E7] hover:border-red-300 dark:bg-[#1f1624]",
    highlight: true,
    highlightClass: "border-2 border-primary shadow-xl shadow-primary/10",
    description: "SELECT BILLING CYCLE ON CHECKOUT",
    link: "https://manage.hostingspell.com/store/ssd-web-hosting/mars",
    features: [
      { label: "Host 2 Websites" },
      { label: "10 Sub-Domains" },
      { label: "2 Alias Domains" },
      { label: "10 MySQL/PostgreSQL Database" },
      { label: "10 Email Accounts" },
      { label: "10 FTP Accounts" },
      { label: "100% Uptime Mark" },
      { label: "10GB Pure NVMe SSD Storage" },
      { label: "100GB Bandwidth" },
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
        INR: { monthly: 149, annual: 1399, biannual: 2399, triannual: 3349 },
        USD: { monthly: 1.69, annual: 16.49, biannual: 27.99, triannual: 38.99 }
      },
      DE: {
        INR: { monthly: 149, annual: 1399, biannual: 2399, triannual: 3349 },
        USD: { monthly: 1.69, annual: 16.49, biannual: 27.99, triannual: 38.99 }
      },
    },
  },
  {
    name: "SATURN",
    caption: "BEST FOR GROWING WEBSITES!",
    icon: "/img/plan-saturn.png",
    color: "text-[#7715F3]",
    button: "text-[#7715F3] border-[#7715F3] hover:bg-[#7715F3]",
    className: "bg-[#F6E7FF] hover:border-purple-300 dark:bg-[#1a132e]",
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
      { label: "30GB Pure NVMe SSD Storage" },
      { label: "Unlimited Bandwidth", info: default_bandwidth_fup },
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
        INR: { monthly: 169, annual: 1749, biannual: 3149, triannual: 4449 },
        USD: { monthly: 1.99, annual: 20.49, biannual: 36.99, triannual: 51.99 }
      },
      DE: {
        INR: { monthly: 169, annual: 1749, biannual: 3149, triannual: 4449 },
        USD: { monthly: 1.99, annual: 20.49, biannual: 36.99, triannual: 51.99 }
      },
    },
  },
  {
    name: "JUPITER",
    caption: "BEST FOR LARGE BUSINESSES!",
    icon: "/img/plan-jupiter.png",
    color: "text-[#FF7E22]",
    button: "text-[#FF7E22] border-[#FF7E22] hover:bg-[#FF7E22]",
    className: "bg-[#FFEDE7] hover:border-orange-300 dark:bg-[#271914]",
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
      { label: "Unlimited Storage (NVMe)", info: default_storage_fup },
      { label: "Unlimited Bandwidth", info: default_bandwidth_fup },
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
        INR: { monthly: 249, annual: 2449, biannual: 4449, triannual: 6249 },
        USD: { monthly: 2.99, annual: 28.99, biannual: 51.99, triannual: 72.99 }
      },
      DE: {
        INR: { monthly: 249, annual: 2449, biannual: 4449, triannual: 6249 },
        USD: { monthly: 2.99, annual: 28.99, biannual: 51.99, triannual: 72.99 }
      },
    },
  },
];
