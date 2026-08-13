// src/lib/pricing/webuzoPlans.ts
import { default_bandwidth_fup, default_storage_fup } from "./constants";
import type { HostingPlan } from "./cloudPlans";

export const PLANS_WEBUZO_HOSTING: HostingPlan[] = [
  {
    name: "VENUS",
    caption: "BEST FOR STARTERS!",
    icon: "/img/plan-venus.png",
    color: "text-[#0D9488]",
    button: "text-[#0D9488] border-[#0D9488] hover:bg-[#0D9488] hover:text-white",
    className: "bg-[#ECFDF5] hover:border-[#0D9488] dark:bg-[#0f2a22]",
    description: "SELECT BILLING CYCLE ON CHECKOUT",
    features: [
      { label: "Host 1 Website" },
      { label: "5 Sub-Domains" },
      { label: "1 Alias Domain" },
      { label: "5 MySQL/PostgreSQL Databases" },
      { label: "5 Email Accounts" },
      { label: "5 FTP Accounts" },
      { label: "10GB Pure NVMe SSD Storage" },
      { label: "Unlimited Bandwidth", info: default_bandwidth_fup },
      { label: "Webuzo Control Panel" },
      { label: "Apache + Nginx Dual Stack" },
      { label: "MultiPHP (PHP 5.6 - 8.3+)" },
      { label: "Softaculous 1-Click (350+ Apps)" },
      { label: "Free SSL (Let's Encrypt)" },
      { label: "Imunify360 Anti-Virus" },
      { label: "Free Daily Automatic Backup" },
      { label: "24/7/365 Expert Support" },
    ],
    links: {
      IND: "https://manage.hostingspell.com/store/webuzo-shared-hosting/venus",
      SGP: "https://manage.hostingspell.com/store/webuzo-shared-hosting/venus",
      USA: "https://manage.hostingspell.com/store/webuzo-shared-hosting/venus",
      UK: "https://manage.hostingspell.com/store/webuzo-shared-hosting/venus",
      NET: "https://manage.hostingspell.com/store/webuzo-shared-hosting/venus",
    },
    pricing: {
      IND: {
        INR: { monthly: 69, annual: 699, biannual: 1299, triannual: 1799 },
        USD: { monthly: 0.89, annual: 8.99, biannual: 15.99, triannual: 21.99 }
      },
      SGP: {
        INR: { monthly: 69, annual: 699, biannual: 1299, triannual: 1799 },
        USD: { monthly: 0.89, annual: 8.99, biannual: 15.99, triannual: 21.99 }
      },
      USA: {
        INR: { monthly: 69, annual: 699, biannual: 1299, triannual: 1799 },
        USD: { monthly: 0.89, annual: 8.99, biannual: 15.99, triannual: 21.99 }
      },
      UK: {
        INR: { monthly: 69, annual: 699, biannual: 1299, triannual: 1799 },
        USD: { monthly: 0.89, annual: 8.99, biannual: 15.99, triannual: 21.99 }
      },
      NET: {
        INR: { monthly: 69, annual: 699, biannual: 1299, triannual: 1799 },
        USD: { monthly: 0.89, annual: 8.99, biannual: 15.99, triannual: 21.99 }
      },
    },
  },
  {
    name: "MARS",
    caption: "BEST FOR SMALL BUSINESSES!",
    icon: "/img/plan-mars.png",
    color: "text-[#0891B2]",
    button: "text-[#0891B2] border-[#0891B2] hover:bg-[#0891B2]",
    className: "bg-[#E0F7FA] hover:border-[#0891B2] dark:bg-[#0c2a33]",
    highlight: true,
    highlightClass: "border-2 border-[#0891B2] shadow-xl shadow-cyan-500/10",
    description: "SELECT BILLING CYCLE ON CHECKOUT",
    features: [
      { label: "Host 3 Websites" },
      { label: "15 Sub-Domains" },
      { label: "3 Alias Domains" },
      { label: "15 MySQL/PostgreSQL Databases" },
      { label: "15 Email Accounts" },
      { label: "15 FTP Accounts" },
      { label: "25GB Pure NVMe SSD Storage" },
      { label: "Unlimited Bandwidth", info: default_bandwidth_fup },
      { label: "Webuzo Control Panel" },
      { label: "Apache + Nginx Dual Stack" },
      { label: "MultiPHP (PHP 5.6 - 8.3+)" },
      { label: "Softaculous 1-Click (350+ Apps)" },
      { label: "Free SSL (Let's Encrypt)" },
      { label: "Imunify360 Anti-Virus" },
      { label: "Free Daily Automatic Backup" },
      { label: "24/7/365 Expert Support" },
    ],
    links: {
      IND: "https://manage.hostingspell.com/store/webuzo-shared-hosting/mars",
      SGP: "https://manage.hostingspell.com/store/webuzo-shared-hosting/mars",
      USA: "https://manage.hostingspell.com/store/webuzo-shared-hosting/mars",
      UK: "https://manage.hostingspell.com/store/webuzo-shared-hosting/mars",
      NET: "https://manage.hostingspell.com/store/webuzo-shared-hosting/mars",
    },
    pricing: {
      IND: {
        INR: { monthly: 119, annual: 1099, biannual: 1999, triannual: 2799 },
        USD: { monthly: 1.39, annual: 13.99, biannual: 24.99, triannual: 34.99 }
      },
      SGP: {
        INR: { monthly: 119, annual: 1099, biannual: 1999, triannual: 2799 },
        USD: { monthly: 1.39, annual: 13.99, biannual: 24.99, triannual: 34.99 }
      },
      USA: {
        INR: { monthly: 119, annual: 1099, biannual: 1999, triannual: 2799 },
        USD: { monthly: 1.39, annual: 13.99, biannual: 24.99, triannual: 34.99 }
      },
      UK: {
        INR: { monthly: 119, annual: 1099, biannual: 1999, triannual: 2799 },
        USD: { monthly: 1.39, annual: 13.99, biannual: 24.99, triannual: 34.99 }
      },
      NET: {
        INR: { monthly: 119, annual: 1099, biannual: 1999, triannual: 2799 },
        USD: { monthly: 1.39, annual: 13.99, biannual: 24.99, triannual: 34.99 }
      },
    },
  },
  {
    name: "SATURN",
    caption: "BEST FOR GROWING SITES!",
    icon: "/img/plan-saturn.png",
    color: "text-[#059669]",
    button: "text-[#059669] border-[#059669] hover:bg-[#059669]",
    className: "bg-[#D1FAE5] hover:border-[#059669] dark:bg-[#0a2918]",
    description: "SELECT BILLING CYCLE ON CHECKOUT",
    features: [
      { label: "Host 10 Websites" },
      { label: "Unlimited Sub-Domains" },
      { label: "10 Alias Domains" },
      { label: "Unlimited MySQL/PostgreSQL Databases" },
      { label: "Unlimited Email Accounts" },
      { label: "Unlimited FTP Accounts" },
      { label: "50GB Pure NVMe SSD Storage" },
      { label: "Unlimited Bandwidth", info: default_bandwidth_fup },
      { label: "Webuzo Control Panel" },
      { label: "Apache + Nginx Dual Stack" },
      { label: "MultiPHP (PHP 5.6 - 8.3+)" },
      { label: "Softaculous 1-Click (350+ Apps)" },
      { label: "Free SSL (Let's Encrypt)" },
      { label: "Imunify360 Anti-Virus" },
      { label: "Free Daily Automatic Backup" },
      { label: "24/7/365 Expert Support" },
    ],
    links: {
      IND: "https://manage.hostingspell.com/store/webuzo-shared-hosting/saturn",
      SGP: "https://manage.hostingspell.com/store/webuzo-shared-hosting/saturn",
      USA: "https://manage.hostingspell.com/store/webuzo-shared-hosting/saturn",
      UK: "https://manage.hostingspell.com/store/webuzo-shared-hosting/saturn",
      NET: "https://manage.hostingspell.com/store/webuzo-shared-hosting/saturn",
    },
    pricing: {
      IND: {
        INR: { monthly: 149, annual: 1399, biannual: 2499, triannual: 3499 },
        USD: { monthly: 1.79, annual: 16.99, biannual: 30.99, triannual: 43.99 }
      },
      SGP: {
        INR: { monthly: 149, annual: 1399, biannual: 2499, triannual: 3499 },
        USD: { monthly: 1.79, annual: 16.99, biannual: 30.99, triannual: 43.99 }
      },
      USA: {
        INR: { monthly: 149, annual: 1399, biannual: 2499, triannual: 3499 },
        USD: { monthly: 1.79, annual: 16.99, biannual: 2499, triannual: 3499 }
      },
      UK: {
        INR: { monthly: 149, annual: 1399, biannual: 2499, triannual: 3499 },
        USD: { monthly: 1.79, annual: 16.99, biannual: 30.99, triannual: 43.99 }
      },
      NET: {
        INR: { monthly: 149, annual: 1399, biannual: 2499, triannual: 3499 },
        USD: { monthly: 1.79, annual: 16.99, biannual: 30.99, triannual: 43.99 }
      },
    },
  },
  {
    name: "JUPITER",
    caption: "BEST FOR LARGE BUSINESSES!",
    icon: "/img/plan-jupiter.png",
    color: "text-[#065F46]",
    button: "text-[#065F46] border-[#065F46] hover:bg-[#065F46]",
    className: "bg-[#A7F3D0] hover:border-[#065F46] dark:bg-[#072416]",
    description: "SELECT BILLING CYCLE ON CHECKOUT",
    features: [
      { label: "Host Unlimited Websites" },
      { label: "Unlimited Sub-Domains" },
      { label: "Unlimited Alias Domains" },
      { label: "Unlimited MySQL/PostgreSQL Databases" },
      { label: "Unlimited Email Accounts" },
      { label: "Unlimited FTP Accounts" },
      { label: "Unlimited NVMe SSD Storage", info: default_storage_fup },
      { label: "Unlimited Bandwidth", info: default_bandwidth_fup },
      { label: "Webuzo Control Panel" },
      { label: "Apache + Nginx Dual Stack" },
      { label: "MultiPHP (PHP 5.6 - 8.3+)" },
      { label: "Softaculous 1-Click (350+ Apps)" },
      { label: "Free SSL (Let's Encrypt)" },
      { label: "Imunify360 Anti-Virus" },
      { label: "Free Daily Automatic Backup" },
      { label: "24/7/365 Expert Support" },
    ],
    links: {
      IND: "https://manage.hostingspell.com/store/webuzo-shared-hosting/jupiter",
      SGP: "https://manage.hostingspell.com/store/webuzo-shared-hosting/jupiter",
      USA: "https://manage.hostingspell.com/store/webuzo-shared-hosting/jupiter",
      UK: "https://manage.hostingspell.com/store/webuzo-shared-hosting/jupiter",
      NET: "https://manage.hostingspell.com/store/webuzo-shared-hosting/jupiter",
    },
    pricing: {
      IND: {
        INR: { monthly: 199, annual: 1899, biannual: 3399, triannual: 4799 },
        USD: { monthly: 2.39, annual: 22.99, biannual: 41.99, triannual: 58.99 }
      },
      SGP: {
        INR: { monthly: 199, annual: 1899, biannual: 3399, triannual: 4799 },
        USD: { monthly: 2.39, annual: 22.99, biannual: 41.99, triannual: 58.99 }
      },
      USA: {
        INR: { monthly: 199, annual: 1899, biannual: 3399, triannual: 4799 },
        USD: { monthly: 2.39, annual: 22.99, biannual: 41.99, triannual: 58.99 }
      },
      UK: {
        INR: { monthly: 199, annual: 1899, biannual: 3399, triannual: 4799 },
        USD: { monthly: 2.39, annual: 22.99, biannual: 41.99, triannual: 58.99 }
      },
      NET: {
        INR: { monthly: 199, annual: 1899, biannual: 3399, triannual: 4799 },
        USD: { monthly: 2.39, annual: 22.99, biannual: 41.99, triannual: 58.99 }
      },
    },
  },
];
