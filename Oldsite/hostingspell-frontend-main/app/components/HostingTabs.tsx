// app/components/HostingTabs.tsx
"use client";

import { useState, ReactNode } from "react";
import Image from "next/image";
import { Tabs } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import LandscapeCardBase from "@/components/shared/cards/LandscapeCardBase";
import {
    FiArrowRight,
    FiStar
} from "@/components/icons/OptimizedIcons";
import {
    FiGlobe,
    FiMail,
    FiServer,
    FiBox,
    FiLayers
} from "react-icons/fi";
import { motion } from "framer-motion";

/* ----------------------------- Icons for tabs ----------------------------- */
const iconMap = {
    globe: <FiGlobe className="w-5 h-5" />,
    mail: <FiMail className="w-5 h-5" />,
    server: <FiServer className="w-5 h-5" />,
    box: <FiBox className="w-5 h-5" />,
    layers: <FiLayers className="w-5 h-5" />,
} as const;

/* --------------------------------- Types --------------------------------- */
type Base = {
    title: string;
    action: {
        label: string;
        link: string;
    };
    desc?: string;
};

type LandscapeCard = Base & {
    type: "landscape";
    image: string;
    imagedark: string;
    variant?: "full" | "half"; // full = col-span-3, half = col-span-2
};

type PortraitCard = Base & {
    type: "portrait";
    image: string;
    imagedark: string;
};

type SquareCard = Base & {
    type: "square";
    icon: ReactNode;
};

type CardItem = LandscapeCard | PortraitCard | SquareCard;

/* --------------------------------- Tabs ---------------------------------- */
const hostingTabs = [
    ["hosting", { label: "Hosting", icon: "server" }],
    ["domains", { label: "Domains", icon: "globe" }],
    ["vps", { label: "VPS", icon: "box" }],
] as const;

/* ------------------------------- Data / UI ------------------------------- */
const hostingConfig: Record<(typeof hostingTabs)[number][0], CardItem[]> = {
    hosting: [
        {
            type: "landscape",
            title: "Premium Hosting",
            desc: "Our managed premium hosting delivers speed and reliability, powered by cPanel on Linode & DigitalOcean",
            action: {
                label: "View Plans",
                link: "/premium-hosting"
            },
            image: "/img/card-premiumhosting-light.webp",
            imagedark: "/img/card-premiumhosting-dark.webp",
            variant: "full",
        },
        {
            type: "portrait",
            title: "Cloud Hosting",
            desc: "Affordable hosting plans designed to fit any budget without compromising speed",
            action: {
                label: "View Plans",
                link: "/cloud-hosting"
            },
            image: "/img/card-cloudhosting-light.webp",
            imagedark: "/img/card-cloudhosting-dark.webp",
        },
        {
            type: "portrait",
            title: "Combo Hosting",
            desc: "The best Cloud Hosting with lifetime free domain and server location of your choice at checkout!",
            action: {
                label: "View Plans",
                link: "/combo-hosting"
            },
            image: "/img/card-combohosting-light.webp",
            imagedark: "/img/card-combohosting-dark.webp",
        },
        {
            type: "square",
            title: "Discover hosting prices that help your website grow.",
            action: {
                label: "Explore Plans",
                link: "/pricing"
            },
            icon: <FiServer className="w-12 h-12" />,
        },
    ],
    domains: [
        {
            type: "square",
            title: "Transfer your existing domain in a few clicks",
            action: {
                label: "Transfer Now",
                link: "https://manage.hostingspell.com/cart.php?a=add&domain=transfer"
            },
            icon: <FiArrowRight className="w-12 h-12" />,
        },
        {
            type: "landscape",
            title: "Domains",
            desc: "Pick a great name and secure your spot on the web with ease.",
            action: {
                label: "Choose Domain",
                link: "/domain#domain-name-search"
            },
            image: "/img/card-domains-light.webp",
            imagedark: "/img/card-domains-dark.webp",
            variant: "half",
        },
        {
            type: "square",
            title: "Try AI domain name generator for free",
            action: {
                label: "Generate AI Domain",
                link: "/domain#ai-domain-generator"
            },
            icon: <FiStar className="w-12 h-12" />,
        },
    ],
    vps: [
        {
            type: "landscape",
            title: "VPS Hosting",
            desc: "Full root access, powerful performance and flexibility for developers.",
            action: {
                label: "View VPS Plans",
                link: "/vps"
            },
            image: "/img/vpshosting-img-1.png",
            imagedark: "/img/vpshosting-img-1.png",
            variant: "full",
        },
    ],
};

/* ------------------------------ Card pieces ------------------------------ */
/* ---------------- Landscape ---------------- */
function Landscape({ card }: { card: LandscapeCard }) {
    return (
        <LandscapeCardBase
            image={card.image}
            imagedark={card.imagedark}
            variant={card.variant}
            useGridSpan
            priority
        >
            <h3 className="text-2xl md:text-3xl font-bold leading-snug">
                {card.title}
            </h3>
            {card.desc && (
                <p className="text-base md:text-lg text-muted-foreground mt-3">
                    {card.desc}
                </p>
            )}
            <a href={card.action.link}>
                <button className="mt-6 px-6 py-3 text-base font-semibold rounded-lg bg-blue-500 text-white hover:bg-blue-600 w-fit">
                    {card.action.label}
                </button>
            </a>
        </LandscapeCardBase>
    );
}

/* ---------------- Portrait ---------------- */
function Portrait({ card }: { card: PortraitCard }) {
    return (
        <Card className="rounded-2xl border shadow-sm overflow-hidden flex flex-col pt-0">
            {/* ✅ Full-width square image */}
            <div className="relative w-full aspect-square">
                <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover block dark:hidden"
                />
                <Image
                    src={card.imagedark}
                    alt={card.title}
                    fill
                    className="object-cover hidden dark:block"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
            </div>

            <CardHeader>
                <CardTitle className="text-lg font-bold">{card.title}</CardTitle>
            </CardHeader>

            <CardContent className="flex flex-col flex-grow">
                {card.desc && (
                    <p className="text-sm text-muted-foreground mb-4">{card.desc}</p>
                )}
                <a href={card.action.link}>
                    <button className="mt-auto px-4 py-2 text-sm font-semibold rounded-sm bg-blue-500 text-white hover:bg-blue-600">
                        {card.action.label}
                    </button>
                </a>
            </CardContent>
        </Card>

    );
}

/* ---------------- Square ---------------- */
function Square({ card }: { card: SquareCard }) {
    return (
        <Card className="rounded-2xl border shadow-sm p-6 flex flex-col justify-center hover:bg-accent transition cursor-pointer">
            <div className="mb-4 text-blue-500 text-4xl">
                {card.icon}
            </div>

            <h3 className="text-base font-semibold mb-2">{card.title}</h3>
            <a href={card.action.link}>
                <span className="text-sm font-medium text-blue-500 flex items-center gap-1">
                    {card.action.label}
                    <FiArrowRight className="w-4 h-4" />
                </span>
            </a>
        </Card>
    );
}

/* --------------------------------- View ---------------------------------- */
export default function HostingTabs() {
    const [activeTab, setActiveTab] = useState<keyof typeof hostingConfig>("hosting");

    return (
        <div className="container mx-auto px-4 py-12">

            <h2 className="text-3xl font-bold text-center mb-4">
                Hosting That Grows With You
            </h2>
            <p className="text-center text-muted-foreground mb-8">
                Everything you need to launch, manage, and scale your website in one place.
            </p>

            <Tabs
                value={activeTab}
                onValueChange={(v) => setActiveTab(v as keyof typeof hostingConfig)}
            >
                {/* Tab Buttons */}
                <div className="mb-8 grid grid-cols-1 md:flex justify-center gap-4">
                    {hostingTabs.map(([key, { label, icon }]) => (
                        <button
                            key={key}
                            onClick={() => setActiveTab(key as keyof typeof hostingConfig)}
                            className={`px-8 py-3 text-sm font-bold rounded border min-w-[180px] ${activeTab === key
                                ? "bg-blue-500 text-white border-blue-500 dark:border-white dark:bg-white dark:text-black"
                                : "bg-transparent text-black dark:text-white border border-black dark:border-gray-300 hover:bg-accent hover:text-accent-foreground"
                                }`}
                        >
                            <div className="flex items-center justify-center gap-2">
                                {iconMap[icon as keyof typeof iconMap]}
                                <span>{label}</span>
                            </div>
                        </button>
                    ))}
                </div>

                {/* Cards grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6" key={activeTab}>
                    {hostingConfig[activeTab].map((card, idx) => {
                        if (card.type === "landscape") return <Landscape key={idx} card={card} />;
                        if (card.type === "portrait") return <Portrait key={idx} card={card} />;
                        return <Square key={idx} card={card} />;
                    })}
                </div>
            </Tabs>
        </div>
    );
}
