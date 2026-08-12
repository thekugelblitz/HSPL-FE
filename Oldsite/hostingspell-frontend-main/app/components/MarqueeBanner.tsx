"use client";

import { useState, useEffect } from "react";
import { useCurrency } from "@/context/CurrencyContext";
import { motion } from "framer-motion";
import posthog from 'posthog-js'

function useIsMobile() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mq = window.matchMedia("(max-width: 767px)");
        const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);

        setIsMobile(mq.matches);
        mq.addEventListener("change", handler);

        return () => mq.removeEventListener("change", handler);
    }, []);

    return isMobile;
}

export default function MarqueeBanner() {
    const { currency } = useCurrency();
    // const domainPrice = currency === "INR" ? "₹699" : "$7.99";

    const text = `🎉 Get 10% OFF on all Hosting plans for new users.`;
    const items = Array(8).fill(text); // extra copies for seamless flow

    const isMobile = useIsMobile();
    const duration = isMobile ? 80 : 80; // faster on mobile, smoother on desktop

    return (
        <div className="bg-blue-600 overflow-hidden py-2 relative">
            {/* Gradient edges */}
            <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-blue-600 to-transparent z-10" />
            <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-blue-600 to-transparent z-10" />

            {/* Two tracks for infinite loop */}
            <div className="flex whitespace-nowrap">
                <motion.div
                    initial={{ x: "0%" }}
                    animate={{ x: "-100%" }}
                    transition={{
                        duration,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="flex"
                >
                    {items.map((item, i) => (
                        <span
                            key={i}
                            className="text-white font-black text-md px-4 tracking-wider"
                        >
                            {item}
                        </span>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ x: "100%" }}
                    animate={{ x: "0%" }}
                    transition={{
                        duration,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="flex"
                >
                    {items.map((item, i) => (
                        <span
                            key={i}
                            className="text-white font-black text-md px-4 tracking-wider"
                        >
                            {item}
                        </span>
                    ))}
                </motion.div>
            </div>

            {/* Clickable overlay */}
            <a
                href="/pricing"
                className="absolute inset-0 z-20 hover:bg-blue-700/20 transition-colors"
                aria-label="Start your website with reliable and affordable hosting today."
                onClick={() => {
                    posthog.capture('clicked_discount_banner', {
                        message: text,
                        location: 'top_banner',
                        destination: '/pricing',
                    })
                }}
            >
            </a>

        </div>
    );
}
