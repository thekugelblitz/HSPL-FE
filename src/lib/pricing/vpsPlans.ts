// src/lib/pricing/vpsPlans.ts
import type { HostingPlan } from "./cloudPlans";

export const PLANS_VPS_HOSTING: HostingPlan[] = [
  {
    name: "CONSOLUS ENTER",
    caption: "ENTRY LEVEL",
    icon: "/img/plan-solo-satelite.png",
    color: "text-[#0FC2E1]",
    button: "text-[#0FC2E1] border-[#0FC2E1] hover:bg-[#0FC2E1] hover:text-black",
    className: "bg-[#E5FBFF] hover:border-[#0FC2E1] dark:bg-[#0f242e]",
    ram: "4GB RAM",
    features: [
      { label: "1 CPU Core" },
      { label: "40 GB NVMe Storage" },
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
        INR: { monthly: 899, quarterly: 2199, semiannually: 4399, annual: 8799 },
        USD: { monthly: 10, quarterly: 25, semiannually: 50, annual: 100 }
      },
      USA: {
        INR: { monthly: 899, quarterly: 2199, semiannually: 4399, annual: 8799 },
        USD: { monthly: 10, quarterly: 25, semiannually: 50, annual: 100 }
      }
    },
  },
  {
    name: "CONSOLUS MODEL",
    caption: "MID TIER",
    icon: "/img/plan-lunar-lander.png",
    color: "text-[#62A5EE]",
    button: "text-[#62A5EE] border-[#62A5EE] hover:bg-[#62A5EE]",
    className: "bg-[#CDE5FF] hover:border-[#62A5EE] dark:bg-[#12243b]",
    highlight: true,
    highlightClass: "border-2 border-[#62A5EE] shadow-xl shadow-blue-500/10",
    ram: "8GB RAM",
    features: [
      { label: "2 CPU Core(s)" },
      { label: "80 GB NVMe Storage" },
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
        INR: { monthly: 1799, quarterly: 4899, semiannually: 8799, annual: 19299 },
        USD: { monthly: 20, quarterly: 55, semiannually: 100, annual: 220 }
      },
      USA: {
        INR: { monthly: 1799, quarterly: 4899, semiannually: 8799, annual: 19299 },
        USD: { monthly: 20, quarterly: 55, semiannually: 100, annual: 220 }
      }
    },
  },
  {
    name: "CONSOLUS HOST",
    caption: "HIGH PERFORMANCE",
    icon: "/img/plan-space-shuttle.png",
    color: "text-[#FB7A5B]",
    button: "text-[#FB7A5B] border-[#FB7A5B] hover:bg-[#FB7A5B]",
    className: "bg-[#FFF0ED] hover:border-[#FB7A5B] dark:bg-[#2b1915]",
    ram: "16GB RAM",
    features: [
      { label: "4 CPU Core" },
      { label: "160 GB NVMe Storage" },
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
        INR: { monthly: 3499, quarterly: 8799, semiannually: 17499, annual: 34999 },
        USD: { monthly: 40, quarterly: 100, semiannually: 200, annual: 400 }
      },
      USA: {
        INR: { monthly: 3499, quarterly: 8799, semiannually: 17499, annual: 34999 },
        USD: { monthly: 40, quarterly: 100, semiannually: 200, annual: 400 }
      }
    },
  },
  {
    name: "CONSOLUS BEAST",
    caption: "ULTRA PERFORMANCE",
    icon: "/img/plan-interstellar-cruiser.png",
    color: "text-[#09A755]",
    button: "text-[#09A755] border-[#09A755] hover:bg-[#09A755]",
    className: "bg-[#DBFBEF] hover:border-[#09A755] dark:bg-[#0d2b1f]",
    ram: "32GB RAM",
    features: [
      { label: "8 CPU Core" },
      { label: "320 GB NVMe Storage" },
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
        INR: { monthly: 6999, quarterly: 17499, semiannually: 34999, annual: 69999 },
        USD: { monthly: 80, quarterly: 200, semiannually: 400, annual: 800 }
      },
      USA: {
        INR: { monthly: 6999, quarterly: 17499, semiannually: 34999, annual: 69999 },
        USD: { monthly: 80, quarterly: 200, semiannually: 400, annual: 800 }
      }
    },
  },
  {
    name: "CONSOLUS GRAND",
    caption: "EXTREME PERFORMANCE",
    icon: "/img/plan-orbital-station.png",
    color: "text-[#185E98]",
    button: "text-[#185E98] border-[#185E98] hover:bg-[#185E98]",
    className: "bg-[#D1E9FD] hover:border-[#185E98] dark:bg-[#102436]",
    ram: "64GB RAM",
    features: [
      { label: "16 CPU Core" },
      { label: "640 GB NVMe Storage" },
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
        INR: { monthly: 13999, quarterly: 34999, semiannually: 69999, annual: 139999 },
        USD: { monthly: 160, quarterly: 400, semiannually: 800, annual: 1600 }
      },
      USA: {
        INR: { monthly: 13999, quarterly: 34999, semiannually: 69999, annual: 139999 },
        USD: { monthly: 160, quarterly: 400, semiannually: 800, annual: 1600 }
      }
    },
  },
  {
    name: "CONSOLUS LEGEND",
    caption: "MAXIMUM PERFORMANCE",
    icon: "/img/plan-moonbase.png",
    color: "text-[#B91C1C]",
    button: "text-[#B91C1C] border-[#B91C1C] hover:bg-[#B91C1C] hover:text-white",
    className: "bg-[#FFF7ED] hover:border-[#B91C1C] dark:bg-[#2b1814]",
    ram: "128GB RAM",
    features: [
      { label: "32 CPU Core(s)" },
      { label: "1280 GB NVMe Storage" },
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
        INR: { monthly: 27200, quarterly: 76500, semiannually: 153000, annual: 272000 },
        USD: { monthly: 320, quarterly: 900, semiannually: 1800, annual: 3200 }
      },
      USA: {
        INR: { monthly: 27200, quarterly: 76500, semiannually: 153000, annual: 272000 },
        USD: { monthly: 320, quarterly: 900, semiannually: 1800, annual: 3200 }
      }
    },
  },
];
