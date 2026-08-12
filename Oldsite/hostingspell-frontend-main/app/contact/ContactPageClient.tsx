"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Hero } from "./Hero";
import { AIChatCTA } from "@/components/shared/AIChatCTA";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import CountryFlag from "react-country-flag";

export default function ContactPageClient() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [istTime, setIstTime] = useState<{ hours: number; mins: number } | null>(null);

    useEffect(() => {
        async function fetchIST() {
            try {
                const res = await fetch("/api/time");
                const data = await res.json();
                setIstTime({ hours: data.istHours, mins: data.istMins });
            } catch (err) {
                console.error("Failed to fetch IST time", err);
            }
        }

        fetchIST();
        const interval = setInterval(fetchIST, 60 * 1000);
        return () => clearInterval(interval);
    }, []);

    const data = {
        company: "HostingSpell LLP.",
        address: {
            street: "940, RK World Tower, Shital Park Circle, 150 Ft. Ring Rd",
            city: "Rajkot",
            state: "Gujarat",
            postal_code: "360001",
            country: "India",
            countryCode: "IN",
            mobile: "+91 94095 94000",
        },
        contact: {
            phone: {
                number: "+91 94095 94000",
                hours: "10 AM–06 PM IST (Monday–Friday)",
            },
            sales: {
                email: "sales@hostingspell.com",
                hours: "10 AM–06 PM IST (Monday–Friday)",
            },
            technical_support: {
                email: "support@hostingspell.com",
                hours: "24/7/365",
            },
            abuse_report: {
                email: "abuse@hostingspell.com",
                hours: "24/7/365",
            },
            reseller: {
                email: "support@hostingspell.com",
                hours: "24/7/365",
            },
            affiliate_program: {
                email: "partner@hostingspell.com",
                hours: "10 AM–06 PM IST (Monday–Friday)",
            },
        },
    };

    // --- Parse "10 AM" / "06:30 PM" into minutes since midnight ---
    const parseTime = (timeStr: string) => {
        const match = timeStr.match(/(\d{1,2})(?::(\d{2}))?\s*(AM|PM)/i);
        if (!match) return null;

        let hours = parseInt(match[1], 10);
        const mins = parseInt(match[2] || "0", 10);
        const ampm = match[3].toUpperCase();

        if (ampm === "PM" && hours !== 12) hours += 12;
        if (ampm === "AM" && hours === 12) hours = 0;

        return hours * 60 + mins;
    };

    const isOnline = (hours: string) => {
        if (!istTime) return false;
        if (hours === "24/7/365") return true;

        // Expecting "10 AM–06 PM"
        const match = hours.match(/(\d{1,2}(?::\d{2})?\s*[APM]+)\s*–\s*(\d{1,2}(?::\d{2})?\s*[APM]+)/i);
        if (!match) return false;

        const startMinutes = parseTime(match[1]);
        const endMinutes = parseTime(match[2]);
        const nowMinutes = istTime.hours * 60 + istTime.mins;

        return nowMinutes >= (startMinutes ?? 0) && nowMinutes <= (endMinutes ?? 0);
    };

    const contactItems = [
        {
            label: "Technical Support Team",
            email: data.contact.technical_support.email,
            hours: data.contact.technical_support.hours,
            color: "bg-red-100",
            icon: "🧑‍💻",
            ctaText: "Contact Support",
            ctaLink: "https://2hs.in/tech-ticket",
        },
        {
            label: "Reseller & Sysadmin Team",
            email: data.contact.reseller.email,
            hours: data.contact.reseller.hours,
            color: "bg-yellow-100",
            icon: "🛠️",
            ctaText: "Contact Reseller",
            ctaLink: "https://2hs.in/resys-ticket",
        },
        {
            label: "Compliances & Report Abuse",
            email: data.contact.abuse_report.email,
            hours: data.contact.abuse_report.hours,
            color: "bg-pink-100",
            icon: "🚨",
            ctaText: "Report Issue",
            ctaLink: "https://2hs.in/abuse-ticket",
        },
        {
            label: "Sales Department",
            email: data.contact.sales.email,
            hours: data.contact.sales.hours,
            color: "bg-green-100",
            icon: "💰",
            ctaText: "Contact Sales",
            ctaLink: "https://2hs.in/sales-ticket",
        },
        {
            label: "Partnership/Affiliate",
            email: data.contact.affiliate_program.email,
            hours: data.contact.affiliate_program.hours,
            color: "bg-yellow-100",
            icon: "🤝🏻",
            ctaText: "Partner with Us",
            ctaLink: "https://2hs.in/sales-ticket",
        },
        {
            label: "Head Office Address",
            email: data.contact.phone.number,
            hours: data.contact.phone.hours,
            color: "bg-blue-100",
            icon: "📍",
            isAddress: true,
        },
    ];

    return (
        <main className="flex min-h-screen flex-col">
            <Hero />

            <div className="container mx-auto">
                {/* CTA Band */}
                <AIChatCTA />

                <div className="container mx-auto px-4 md:pt-8 md:py-24">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-8">
                        {contactItems.map((item, idx) => {
                            const online = !item.isAddress && isOnline(item.hours);

                            let status: "checking" | "online" | "offline" = "checking";

                            if (!item.isAddress) {
                                if (istTime === null) {
                                    status = "checking";
                                } else {
                                    status = isOnline(item.hours) ? "online" : "offline";
                                }
                            }

                            return (
                                <div
                                    key={idx}
                                    className="relative group p-1"
                                    onMouseEnter={() => setHoveredIndex(idx)}
                                    onMouseLeave={() => setHoveredIndex(null)}
                                >
                                    <AnimatePresence>
                                        {hoveredIndex === idx && (
                                            <motion.span
                                                layoutId="hoverBackground"
                                                className="absolute inset-0 h-full w-full rounded-3xl z-0 bg-zinc-200/60 dark:bg-slate-800/80"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1, transition: { duration: 0.15 } }}
                                                exit={{ opacity: 0, transition: { duration: 0.15, delay: 0.2 } }}
                                            />
                                        )}
                                    </AnimatePresence>

                                    <Card
                                        className="relative z-10 rounded-3xl h-full w-full p-8 overflow-hidden
                        border border-transparent group-hover:border-slate-700
                        bg-gradient-to-br from-white to-zinc-100
                        dark:from-slate-800 dark:to-slate-800/20
                        transition-all duration-200"
                                    >
                                        <CardHeader className="flex items-center gap-4">
                                            <div className={`rounded-full p-3 text-2xl ${item.color}`}>{item.icon}</div>
                                            <div className="flex flex-col text-sm">
                                                <div className="flex flex-col text-sm">
                                                    <CardTitle className="text-base text-zinc-700 dark:text-zinc-100">{item.label}</CardTitle>
                                                    {!item.isAddress && (
                                                        <span className="flex items-center gap-1 text-sm">
                                                            <span
                                                                className={`h-2 w-2 rounded-full ${status === "checking"
                                                                        ? "bg-yellow-500"
                                                                        : status === "online"
                                                                            ? "bg-green-500"
                                                                            : "bg-red-500"
                                                                    }`}
                                                            ></span>
                                                            {status === "checking"
                                                                ? "Checking..."
                                                                : status === "online"
                                                                    ? "Online"
                                                                    : "Offline"}
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                        </CardHeader>

                                        <CardContent className="text-sm space-y-1 text-zinc-600 dark:text-zinc-300">
                                            {item.isAddress ? (
                                                <>
                                                    <p className="text-sm">{data.company}</p>
                                                    <p className="text-sm">{data.address.street}</p>
                                                    <p className="text-sm">
                                                        {data.address.city}, {data.address.state} {data.address.postal_code}
                                                    </p>
                                                    <p className="text-sm flex items-center gap-2">
                                                        {data.address.country}
                                                        <div className="w-4 h-4 rounded-full overflow-hidden flex items-center justify-center">
                                                            <CountryFlag
                                                                countryCode={data.address.countryCode}
                                                                svg
                                                                style={{
                                                                    width: "100%",
                                                                    height: "100%",
                                                                    objectFit: "cover",
                                                                    objectPosition: "center",
                                                                }}
                                                                alt={data.address.country}
                                                            />
                                                        </div>
                                                    </p>
                                                    <p className="text-sm">Mobile: <a href={`tel:${data.address.mobile}`}>{data.address.mobile}</a></p>
                                                </>
                                            ) : (
                                                <>
                                                    <p className="text-sm text-zinc-800 dark:text-zinc-100">
                                                        <b>Email: </b>
                                                        {item.email}
                                                    </p>
                                                    <p className="text-sm">
                                                        <b>Availability:</b> {item.hours}
                                                    </p>
                                                    {item.ctaText && (
                                                        <a
                                                            href={item.ctaLink || `mailto:${item.email}`}
                                                            className="mt-2 inline-block px-4 py-2 rounded-sm bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200"
                                                        >
                                                            {item.ctaText}
                                                        </a>
                                                    )}
                                                </>
                                            )}
                                        </CardContent>
                                    </Card>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </main>
    );
}
