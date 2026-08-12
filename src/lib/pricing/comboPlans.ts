// src/lib/pricing/comboPlans.ts
import { default_bandwidth_fup, default_storage_fup } from "./constants";
import type { HostingPlan } from "./cloudPlans";

export const PLANS_COMBO_HOSTING: HostingPlan[] = [
  {
    name: "EUROPA",
    caption: "INCLUDES FREE DOMAIN",
    icon: "/img/plan-algol.png",
    color: "text-[#2CC0FF]",
    button: "text-[#2CC0FF] border-[#2CC0FF] hover:bg-[#2CC0FF] hover:text-black",
    className: "bg-[#EAEEFC] hover:border-[#2CC0FF] dark:bg-[#131b2e]",
    description: "FREE DOMAIN INCLUDED WITH ANNUAL PLAN",
    link: "https://manage.hostingspell.com/store/combo-cpanel-hosting-free-domain/europa",
    features: [
      { label: "1 Lifetime Free Domain (.com / .in / .org / .net / .co.in)" },
      { label: "Host 2 Websites" },
      { label: "20 GB Fast SSD Storage" },
      { label: "Unlimited Bandwidth", info: default_bandwidth_fup },
      { label: "Unlimited MySQL/PostgreSQL Database" },
      { label: "Unlimited Email Accounts" },
      { label: "Unlimited FTP Accounts" },
      { label: "100% Uptime Mark" },
      { label: "2 CPU, 2GB RAM & ++ LVE Resources" },
      { label: "10MB/s I/O Speed" },
      { label: "All cPanel® Features & Free SSL" },
      { label: "LiteSpeed Enterprise Web Server" },
      { label: "Imunify360 AI Anti-Virus" },
      { label: "DigitalOcean/Linode Infrastructure" },
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
        INR: { monthly: 200, annual: 2099, biannual: 3899, triannual: 5799 },
        USD: { monthly: 2.50, annual: 24.49, biannual: 45.99, triannual: 68.00 }
      },
      SGP: {
        INR: { monthly: 200, annual: 2099, biannual: 3899, triannual: 5799 },
        USD: { monthly: 2.50, annual: 24.49, biannual: 45.99, triannual: 68.00 }
      },
      USA: {
        INR: { monthly: 200, annual: 2099, biannual: 3899, triannual: 5799 },
        USD: { monthly: 2.50, annual: 24.49, biannual: 45.99, triannual: 68.00 }
      },
      UK: {
        INR: { monthly: 200, annual: 2099, biannual: 3899, triannual: 5799 },
        USD: { monthly: 2.50, annual: 24.49, biannual: 45.99, triannual: 68.00 }
      },
      NET: {
        INR: { monthly: 200, annual: 2099, biannual: 3899, triannual: 5799 },
        USD: { monthly: 2.50, annual: 24.49, biannual: 45.99, triannual: 68.00 }
      },
    },
  },
  {
    name: "IO",
    caption: "UNLIMITED COMBO BUNDLE",
    icon: "/img/plan-sirus.png",
    color: "text-[#FF6C2C]",
    button: "text-[#FF6C2C] border-[#FF6C2C] hover:bg-[#FF6C2C]",
    className: "bg-[#FFF0EA] hover:border-[#FF6C2C] dark:bg-[#2b1913]",
    highlight: true,
    highlightClass: "border-2 border-[#FF6C2C] shadow-xl shadow-orange-500/10",
    description: "FREE DOMAIN INCLUDED WITH ANNUAL PLAN",
    link: "https://manage.hostingspell.com/store/combo-cpanel-hosting-free-domain/io",
    features: [
      { label: "1 Lifetime Free Domain (.com / .in / .org / .net / .co.in)" },
      { label: "Host 4 Websites" },
      { label: "Unlimited SSD Storage", info: default_storage_fup },
      { label: "Unlimited Bandwidth", info: default_bandwidth_fup },
      { label: "Unlimited MySQL/PostgreSQL Database" },
      { label: "Unlimited Email Accounts" },
      { label: "Unlimited FTP Accounts" },
      { label: "100% Uptime Mark" },
      { label: "2 CPU, 2GB RAM & ++ LVE Resources" },
      { label: "10MB/s I/O Speed" },
      { label: "All cPanel® Features & Free SSL" },
      { label: "LiteSpeed Enterprise Web Server" },
      { label: "Imunify360 AI Anti-Virus" },
      { label: "DigitalOcean/Linode Infrastructure" },
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
        INR: { monthly: 250, annual: 2549, biannual: 4849, triannual: 7149 },
        USD: { monthly: 3.00, annual: 29.99, biannual: 56.99, triannual: 84.00 }
      },
      SGP: {
        INR: { monthly: 250, annual: 2549, biannual: 4849, triannual: 7149 },
        USD: { monthly: 3.00, annual: 29.99, biannual: 56.99, triannual: 84.00 }
      },
      USA: {
        INR: { monthly: 250, annual: 2549, biannual: 4849, triannual: 7149 },
        USD: { monthly: 3.00, annual: 29.99, biannual: 56.99, triannual: 84.00 }
      },
      UK: {
        INR: { monthly: 250, annual: 2549, biannual: 4849, triannual: 7149 },
        USD: { monthly: 3.00, annual: 29.99, biannual: 56.99, triannual: 84.00 }
      },
      NET: {
        INR: { monthly: 250, annual: 2549, biannual: 4849, triannual: 7149 },
        USD: { monthly: 3.00, annual: 29.99, biannual: 56.99, triannual: 84.00 }
      },
    },
  },
];
