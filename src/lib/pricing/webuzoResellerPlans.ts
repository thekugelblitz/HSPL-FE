// src/lib/pricing/webuzoResellerPlans.ts
import { default_bandwidth_fup, default_storage_fup } from "./constants";
import type { HostingPlan } from "./cloudPlans";

export const PLANS_WEBUZO_RESELLER: HostingPlan[] = [
  {
    name: "HS INITIATIVE",
    caption: "ENTRY LEVEL",
    icon: "/img/plan-stellar-start.png",
    color: "text-[#0D9488]",
    button: "text-[#0D9488] border-[#0D9488] hover:bg-[#0D9488] hover:text-white",
    className: "bg-[#ECFDF5] hover:border-[#0D9488] dark:bg-[#0f2a22]",
    description: "SELECT BILLING CYCLE ON CHECKOUT",
    features: [
      { label: "25 Webuzo End-User accounts" },
      { label: "Unlimited Bandwidth", info: default_bandwidth_fup },
      { label: "Unlimited SSD Disk Space", info: default_storage_fup },
      { label: "Webuzo Admin / Reseller Panel" },
      { label: "White-Label Branding" },
      { label: "Free Daily Automatic Backup" },
      { label: "Unlimited Custom Packages" },
      { label: "Apache / Nginx + MultiPHP" },
      { label: "Free SSL (Let's Encrypt)" },
      { label: "Softaculous (350+ Apps)" },
      { label: "Imunify360" },
      { label: "24/7/365 Support" },
    ],
    links: {
      IND: "https://manage.hostingspell.com/store/webuzo-reseller-hosting/hs-initiative",
      SGP: "https://manage.hostingspell.com/store/webuzo-reseller-hosting/hs-initiative",
      USA: "https://manage.hostingspell.com/store/webuzo-reseller-hosting/hs-initiative",
      UK: "https://manage.hostingspell.com/store/webuzo-reseller-hosting/hs-initiative",
      NET: "https://manage.hostingspell.com/store/webuzo-reseller-hosting/hs-initiative",
    },
    pricing: {
      IND: {
        INR: { monthly: 899, annual: 8499, biannual: 16500, triannual: 24000 },
        USD: { monthly: 9.99, annual: 99, biannual: 190, triannual: 275 }
      },
      SGP: {
        INR: { monthly: 899, annual: 8499, biannual: 16500, triannual: 24000 },
        USD: { monthly: 9.99, annual: 99, biannual: 190, triannual: 275 }
      },
      USA: {
        INR: { monthly: 899, annual: 8499, biannual: 16500, triannual: 24000 },
        USD: { monthly: 9.99, annual: 99, biannual: 190, triannual: 275 }
      },
      UK: {
        INR: { monthly: 899, annual: 8499, biannual: 16500, triannual: 24000 },
        USD: { monthly: 9.99, annual: 99, biannual: 190, triannual: 275 }
      },
      NET: {
        INR: { monthly: 899, annual: 8499, biannual: 16500, triannual: 24000 },
        USD: { monthly: 9.99, annual: 99, biannual: 190, triannual: 275 }
      },
    },
  },
  {
    name: "HS EARLDOM",
    caption: "MID TIER",
    icon: "/img/plan-galactic-growth.png",
    color: "text-[#0891B2]",
    button: "text-[#0891B2] border-[#0891B2] hover:bg-[#0891B2]",
    className: "bg-[#E0F7FA] hover:border-[#0891B2] dark:bg-[#0c2a33]",
    highlight: true,
    highlightClass: "border-2 border-[#0891B2] shadow-xl shadow-cyan-500/10",
    description: "SELECT BILLING CYCLE ON CHECKOUT",
    features: [
      { label: "50 Webuzo End-User accounts" },
      { label: "Unlimited Bandwidth", info: default_bandwidth_fup },
      { label: "Unlimited SSD Disk Space", info: default_storage_fup },
      { label: "Webuzo Admin / Reseller Panel" },
      { label: "White-Label Branding" },
      { label: "Free Daily Automatic Backup" },
      { label: "Unlimited Custom Packages" },
      { label: "Apache / Nginx + MultiPHP" },
      { label: "Free SSL (Let's Encrypt)" },
      { label: "Softaculous (350+ Apps)" },
      { label: "Imunify360" },
      { label: "24/7/365 Support" },
    ],
    links: {
      IND: "https://manage.hostingspell.com/store/webuzo-reseller-hosting/hs-earldom",
      SGP: "https://manage.hostingspell.com/store/webuzo-reseller-hosting/hs-earldom",
      USA: "https://manage.hostingspell.com/store/webuzo-reseller-hosting/hs-earldom",
      UK: "https://manage.hostingspell.com/store/webuzo-reseller-hosting/hs-earldom",
      NET: "https://manage.hostingspell.com/store/webuzo-reseller-hosting/hs-earldom",
    },
    pricing: {
      IND: {
        INR: { monthly: 1799, annual: 17499, biannual: 34000, triannual: 49000 },
        USD: { monthly: 19.99, annual: 195, biannual: 380, triannual: 545 }
      },
      SGP: {
        INR: { monthly: 1799, annual: 17499, biannual: 34000, triannual: 49000 },
        USD: { monthly: 19.99, annual: 195, biannual: 380, triannual: 545 }
      },
      USA: {
        INR: { monthly: 1799, annual: 17499, biannual: 34000, triannual: 49000 },
        USD: { monthly: 19.99, annual: 195, biannual: 380, triannual: 545 }
      },
      UK: {
        INR: { monthly: 1799, annual: 17499, biannual: 34000, triannual: 49000 },
        USD: { monthly: 19.99, annual: 195, biannual: 380, triannual: 545 }
      },
      NET: {
        INR: { monthly: 1799, annual: 17499, biannual: 34000, triannual: 49000 },
        USD: { monthly: 19.99, annual: 195, biannual: 380, triannual: 545 }
      },
    },
  },
  {
    name: "HS DUKEDOM",
    caption: "HIGH PERFORMANCE",
    icon: "/img/plan-cosmic-expansion.png",
    color: "text-[#059669]",
    button: "text-[#059669] border-[#059669] hover:bg-[#059669]",
    className: "bg-[#D1FAE5] hover:border-[#059669] dark:bg-[#0a2918]",
    description: "SELECT BILLING CYCLE ON CHECKOUT",
    features: [
      { label: "100 Webuzo End-User accounts" },
      { label: "Unlimited Bandwidth", info: default_bandwidth_fup },
      { label: "Unlimited SSD Disk Space", info: default_storage_fup },
      { label: "Webuzo Admin / Reseller Panel" },
      { label: "White-Label Branding" },
      { label: "Free Daily Automatic Backup" },
      { label: "Unlimited Custom Packages" },
      { label: "Apache / Nginx + MultiPHP" },
      { label: "Free SSL (Let's Encrypt)" },
      { label: "Softaculous (350+ Apps)" },
      { label: "Imunify360" },
      { label: "24/7/365 Support" },
    ],
    links: {
      IND: "https://manage.hostingspell.com/store/webuzo-reseller-hosting/hs-dukedom",
      SGP: "https://manage.hostingspell.com/store/webuzo-reseller-hosting/hs-dukedom",
      USA: "https://manage.hostingspell.com/store/webuzo-reseller-hosting/hs-dukedom",
      UK: "https://manage.hostingspell.com/store/webuzo-reseller-hosting/hs-dukedom",
      NET: "https://manage.hostingspell.com/store/webuzo-reseller-hosting/hs-dukedom",
    },
    pricing: {
      IND: {
        INR: { monthly: 3499, annual: 33999, biannual: 66000, triannual: 95000 },
        USD: { monthly: 39.99, annual: 390, biannual: 755, triannual: 1080 }
      },
      SGP: {
        INR: { monthly: 3499, annual: 33999, biannual: 66000, triannual: 95000 },
        USD: { monthly: 39.99, annual: 390, biannual: 755, triannual: 1080 }
      },
      USA: {
        INR: { monthly: 3499, annual: 33999, biannual: 66000, triannual: 95000 },
        USD: { monthly: 39.99, annual: 390, biannual: 755, triannual: 1080 }
      },
      UK: {
        INR: { monthly: 3499, annual: 33999, biannual: 66000, triannual: 95000 },
        USD: { monthly: 39.99, annual: 390, biannual: 755, triannual: 1080 }
      },
      NET: {
        INR: { monthly: 3499, annual: 33999, biannual: 66000, triannual: 95000 },
        USD: { monthly: 39.99, annual: 390, biannual: 755, triannual: 1080 }
      },
    },
  },
  {
    name: "HS KINGDOM",
    caption: "ULTRA PERFORMANCE",
    icon: "/img/plan-universal-power.png",
    color: "text-[#065F46]",
    button: "text-[#065F46] border-[#065F46] hover:bg-[#065F46]",
    className: "bg-[#A7F3D0] hover:border-[#065F46] dark:bg-[#072416]",
    description: "SELECT BILLING CYCLE ON CHECKOUT",
    features: [
      { label: "150 Webuzo End-User accounts" },
      { label: "Unlimited Bandwidth", info: default_bandwidth_fup },
      { label: "Unlimited SSD Disk Space", info: default_storage_fup },
      { label: "Webuzo Admin / Reseller Panel" },
      { label: "White-Label Branding" },
      { label: "Free Daily Automatic Backup" },
      { label: "Unlimited Custom Packages" },
      { label: "Apache / Nginx + MultiPHP" },
      { label: "Free SSL (Let's Encrypt)" },
      { label: "Softaculous (350+ Apps)" },
      { label: "Imunify360" },
      { label: "24/7/365 Support" },
    ],
    links: {
      IND: "https://manage.hostingspell.com/store/webuzo-reseller-hosting/hs-kingdom",
      SGP: "https://manage.hostingspell.com/store/webuzo-reseller-hosting/hs-kingdom",
      USA: "https://manage.hostingspell.com/store/webuzo-reseller-hosting/hs-kingdom",
      UK: "https://manage.hostingspell.com/store/webuzo-reseller-hosting/hs-kingdom",
      NET: "https://manage.hostingspell.com/store/webuzo-reseller-hosting/hs-kingdom",
    },
    pricing: {
      IND: {
        INR: { monthly: 5299, annual: 51999, biannual: 100000, triannual: 145000 },
        USD: { monthly: 59.99, annual: 585, biannual: 1130, triannual: 1620 }
      },
      SGP: {
        INR: { monthly: 5299, annual: 51999, biannual: 100000, triannual: 145000 },
        USD: { monthly: 59.99, annual: 585, biannual: 1130, triannual: 1620 }
      },
      USA: {
        INR: { monthly: 5299, annual: 51999, biannual: 100000, triannual: 145000 },
        USD: { monthly: 59.99, annual: 585, biannual: 1130, triannual: 1620 }
      },
      UK: {
        INR: { monthly: 5299, annual: 51999, biannual: 100000, triannual: 145000 },
        USD: { monthly: 59.99, annual: 585, biannual: 1130, triannual: 1620 }
      },
      NET: {
        INR: { monthly: 5299, annual: 51999, biannual: 100000, triannual: 145000 },
        USD: { monthly: 59.99, annual: 585, biannual: 1130, triannual: 1620 }
      },
    },
  },
];
