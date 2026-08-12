// src/lib/pricing/resellerPlans.ts
import { default_bandwidth_fup, default_storage_fup } from "./constants";
import type { HostingPlan } from "./cloudPlans";

export const PLANS_RESELLER_HOSTING: HostingPlan[] = [
  {
    name: "HS INITIATIVE",
    caption: "ENTRY LEVEL",
    icon: "/img/plan-stellar-start.png",
    color: "text-[#FFCD02]",
    button: "text-[#FFCD02] border-[#FFCD02] hover:bg-[#FFCD02] hover:text-black",
    className: "bg-[#EFF4ED] hover:border-[#FFCD02] dark:bg-[#1f241a]",
    description: "SELECT BILLING CYCLE ON CHECKOUT",
    features: [
      { label: "25 cPanel accounts" },
      { label: "Unlimited Bandwidth", info: default_bandwidth_fup },
      { label: "Unlimited SSD Disk Space", info: default_storage_fup },
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
        INR: { monthly: 1199, annual: 11299, biannual: 22500, triannual: 33000 },
        USD: { monthly: 12.99, annual: 129, biannual: 250, triannual: 360 }
      },
      SGP: {
        INR: { monthly: 1199, annual: 11299, biannual: 22500, triannual: 33000 },
        USD: { monthly: 12.99, annual: 129, biannual: 250, triannual: 360 }
      },
      USA: {
        INR: { monthly: 1199, annual: 11299, biannual: 22500, triannual: 33000 },
        USD: { monthly: 12.99, annual: 129, biannual: 250, triannual: 360 }
      },
      UK: {
        INR: { monthly: 1199, annual: 11299, biannual: 22500, triannual: 33000 },
        USD: { monthly: 12.99, annual: 129, biannual: 250, triannual: 360 }
      },
      NET: {
        INR: { monthly: 1199, annual: 11299, biannual: 22500, triannual: 33000 },
        USD: { monthly: 12.99, annual: 129, biannual: 250, triannual: 360 }
      },
    },
  },
  {
    name: "HS EARLDOM",
    caption: "MID TIER",
    icon: "/img/plan-galactic-growth.png",
    color: "text-[#005CEE]",
    button: "text-[#005CEE] border-[#005CEE] hover:bg-[#005CEE]",
    className: "bg-[#BFD7FC] hover:border-[#005CEE] dark:bg-[#12223d]",
    highlight: true,
    highlightClass: "border-2 border-[#005CEE] shadow-xl shadow-blue-500/10",
    description: "SELECT BILLING CYCLE ON CHECKOUT",
    features: [
      { label: "50 cPanel accounts" },
      { label: "Unlimited Bandwidth", info: default_bandwidth_fup },
      { label: "Unlimited SSD Disk Space", info: default_storage_fup },
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
      IND: "https://manage.hostingspell.com/store/cpanel-unlimited-reseller-hosting/hs-earldom",
      SGP: "https://manage.hostingspell.com/store/cpanel-unlimited-reseller-hosting/hs-earldom",
      USA: "https://manage.hostingspell.com/store/cpanel-unlimited-reseller-hosting/hs-earldom",
      UK: "https://manage.hostingspell.com/store/cpanel-unlimited-reseller-hosting/hs-earldom",
      NET: "https://manage.hostingspell.com/store/cpanel-unlimited-reseller-hosting/hs-earldom",
    },
    pricing: {
      IND: {
        INR: { monthly: 2299, annual: 22599, biannual: 45000, triannual: 65000 },
        USD: { monthly: 25.99, annual: 258, biannual: 500, triannual: 720 }
      },
      SGP: {
        INR: { monthly: 2299, annual: 22599, biannual: 45000, triannual: 65000 },
        USD: { monthly: 25.99, annual: 258, biannual: 500, triannual: 720 }
      },
      USA: {
        INR: { monthly: 2299, annual: 22599, biannual: 45000, triannual: 65000 },
        USD: { monthly: 25.99, annual: 258, biannual: 500, triannual: 720 }
      },
      UK: {
        INR: { monthly: 2299, annual: 22599, biannual: 45000, triannual: 65000 },
        USD: { monthly: 25.99, annual: 258, biannual: 500, triannual: 720 }
      },
      NET: {
        INR: { monthly: 2299, annual: 22599, biannual: 45000, triannual: 65000 },
        USD: { monthly: 25.99, annual: 258, biannual: 500, triannual: 720 }
      },
    },
  },
  {
    name: "HS DUKEDOM",
    caption: "HIGH PERFORMANCE",
    icon: "/img/plan-cosmic-expansion.png",
    color: "text-[#ED1C24]",
    button: "text-[#ED1C24] border-[#ED1C24] hover:bg-[#ED1C24]",
    className: "bg-[#EEDAE2] hover:border-[#ED1C24] dark:bg-[#2e1721]",
    description: "SELECT BILLING CYCLE ON CHECKOUT",
    features: [
      { label: "100 cPanel accounts" },
      { label: "Unlimited Bandwidth", info: default_bandwidth_fup },
      { label: "Unlimited SSD Disk Space", info: default_storage_fup },
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
      IND: "https://manage.hostingspell.com/store/cpanel-unlimited-reseller-hosting/hs-dukedom",
      SGP: "https://manage.hostingspell.com/store/cpanel-unlimited-reseller-hosting/hs-dukedom",
      USA: "https://manage.hostingspell.com/store/cpanel-unlimited-reseller-hosting/hs-dukedom",
      UK: "https://manage.hostingspell.com/store/cpanel-unlimited-reseller-hosting/hs-dukedom",
      NET: "https://manage.hostingspell.com/store/cpanel-unlimited-reseller-hosting/hs-dukedom",
    },
    pricing: {
      IND: {
        INR: { monthly: 4599, annual: 45199, biannual: 90000, triannual: 130000 },
        USD: { monthly: 51.99, annual: 516, biannual: 1000, triannual: 1400 }
      },
      SGP: {
        INR: { monthly: 4599, annual: 45199, biannual: 90000, triannual: 130000 },
        USD: { monthly: 51.99, annual: 516, biannual: 1000, triannual: 1400 }
      },
      USA: {
        INR: { monthly: 4599, annual: 45199, biannual: 90000, triannual: 130000 },
        USD: { monthly: 51.99, annual: 516, biannual: 1000, triannual: 1400 }
      },
      UK: {
        INR: { monthly: 4599, annual: 45199, biannual: 90000, triannual: 130000 },
        USD: { monthly: 51.99, annual: 516, biannual: 1000, triannual: 1400 }
      },
      NET: {
        INR: { monthly: 4599, annual: 45199, biannual: 90000, triannual: 130000 },
        USD: { monthly: 51.99, annual: 516, biannual: 1000, triannual: 1400 }
      },
    },
  },
  {
    name: "HS KINGDOM",
    caption: "ULTRA PERFORMANCE",
    icon: "/img/plan-universal-power.png",
    color: "text-[#3F22A8]",
    button: "text-[#3F22A8] border-[#3F22A8] hover:bg-[#3F22A8]",
    className: "bg-[#D5DAF3] hover:border-[#3F22A8] dark:bg-[#1a1b38]",
    description: "SELECT BILLING CYCLE ON CHECKOUT",
    features: [
      { label: "150 cPanel accounts" },
      { label: "Unlimited Bandwidth", info: default_bandwidth_fup },
      { label: "Unlimited SSD Disk Space", info: default_storage_fup },
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
        INR: { monthly: 6899, annual: 67799, biannual: 135000, triannual: 195000 },
        USD: { monthly: 77.99, annual: 774, biannual: 1500, triannual: 2100 }
      },
      SGP: {
        INR: { monthly: 6899, annual: 67799, biannual: 135000, triannual: 195000 },
        USD: { monthly: 77.99, annual: 774, biannual: 1500, triannual: 2100 }
      },
      USA: {
        INR: { monthly: 6899, annual: 67799, biannual: 135000, triannual: 195000 },
        USD: { monthly: 77.99, annual: 774, biannual: 1500, triannual: 2100 }
      },
      UK: {
        INR: { monthly: 6899, annual: 67799, biannual: 135000, triannual: 195000 },
        USD: { monthly: 77.99, annual: 774, biannual: 1500, triannual: 2100 }
      },
      NET: {
        INR: { monthly: 6899, annual: 67799, biannual: 135000, triannual: 195000 },
        USD: { monthly: 77.99, annual: 774, biannual: 1500, triannual: 2100 }
      },
    },
  },
];
