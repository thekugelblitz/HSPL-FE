"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import ChatButton from "@/components/shared/ChatButton";
import { GiftIcon } from "lucide-react";
import InfoPopover from "@/components/shared/InfoPopover";
import React from "react";
import { memo } from "react";

const HeroBlackFriday = memo(function HeroBlackFriday() {
    const promo =
        "Offer applies only to new cloud hosting, Premium hosting, Reseller hosting and VPS hosting annual plan only. Not valid on combo hosting and domains, or any monthly plans.";

    return (
        <div className="relative w-full overflow-hidden md:pt-20 pt-4">

            {/* MAIN CONTAINER — optimized width */}
            <div className="relative mx-auto container px-4 sm:px-6 lg:px-8 max-w-7xl md:max-w-5xl xl:max-w-7xl">
                <div className="grid grid-cols-1 items-center gap-0 md:grid-cols-2">

                    {/* LEFT SIDE */}
                    <div className="flex flex-col items-center text-center md:items-start md:text-left">

                        {/* TIMER */}
                        <div className="mb-10 flex gap-3">
                            {(() => {
                                const target = new Date("2025-12-01T23:59:59+05:30").getTime();
                                const [t, setT] = React.useState({
                                    d: "00",
                                    h: "00",
                                    m: "00",
                                    s: "00",
                                    showDays: true
                                });

                                React.useEffect(() => {
                                    const update = () => {
                                        const now = Date.now(); // server-time aligned if SSR
                                        const diff = target - now;

                                        if (diff <= 0) return;

                                        const totalHours = Math.floor(diff / (1000 * 60 * 60));

                                        const showDays = totalHours > 48;

                                        const d = String(Math.floor(diff / (1000 * 60 * 60 * 24))).padStart(2, "0");
                                        const h = String(Math.floor((diff / (1000 * 60 * 60)) % 24)).padStart(2, "0");
                                        const m = String(Math.floor((diff / (1000 * 60)) % 60)).padStart(2, "0");
                                        const s = String(Math.floor((diff / 1000) % 60)).padStart(2, "0");

                                        setT({ d, h, m, s, showDays });
                                    };

                                    update();
                                    const int = setInterval(update, 1000);
                                    return () => clearInterval(int);
                                }, []);

                                const items = t.showDays
                                    ? [
                                        { label: "DAY", value: t.d },
                                        { label: "HRS", value: t.h },
                                        { label: "MIN", value: t.m },
                                        { label: "SEC", value: t.s },
                                    ]
                                    : [
                                        { label: "HRS", value: t.h },
                                        { label: "MIN", value: t.m },
                                        { label: "SEC", value: t.s },
                                    ];

                                return items.map((box, i) => (
                                    <div
                                        key={i}
                                        className="flex h-[70px] w-[70px] flex-col items-center justify-center rounded-lg 
                       border-2 border-black bg-white/80 text-black 
                       dark:border-white/20 dark:bg-[#2a3142] dark:text-white"
                                    >
                                        <span
                                            key={box.value}
                                            className="font-black text-3xl leading-none animate-in fade-in duration-200"
                                        >
                                            {box.value}
                                        </span>
                                        <span className="mt-1.5 text-[9px] font-medium uppercase tracking-[0.15em] opacity-60">
                                            {box.label}
                                        </span>
                                    </div>
                                ));
                            })()}
                        </div>

                        <span className="promo-line flex items-center justify-center text-sm text-muted-foreground md:justify-start mb-8 text-xl">
                            <GiftIcon className="mr-2 dark:text-white text-black text-xl" size={18} />
                            Use Promocode{" "}
                            <span className="promo-code font-semibold dark:text-white text-black mx-1 text-xl">
                                CW2025
                            </span>
                            <InfoPopover content={promo} />
                        </span>

                        <h1
                            className="
                            glitch-text font-black tracking-tight 
                            text-black dark:text-white
                            text-5xl sm:text-6xl md:text-[3.6rem] lg:text-[4.2rem] xl:text-[5rem]
                            leading-[1.0]"
                            data-text="CYBER MONDAY SALE"
                        >
                            CYBER <br />
                            MONDAY SALE
                        </h1>


                        {/* SUBTEXT */}
                        <p className="mt-5 max-w-md text-[0.93rem] leading-relaxed text-black/70 dark:text-white/60">
                            Get your perfect hosting this Cyber Week with{" "}
                            <span className="font-bold text-black dark:text-white">50% off*</span> and lightning-fast deals.
                        </p>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 items-center md:items-start justify-center sm:justify-start mt-8 w-full">
                            <a href="/pricing" className="w-full sm:w-auto">
                                <Button
                                    size="lg"
                                    className="
                                        relative w-full px-6 font-semibold rounded-lg overflow-hidden bg-black text:white
                                        dark:bg-gradient-to-br dark:from-white dark:to-[#f3f5f9] dark:text-black
                                        shadow-[0_20px_70px_rgba(0,0,0,0.10)]
                                    "
                                >
                                    VIEW PLANS
                                </Button>
                            </a>

                            <div className="w-full sm:w-auto">
                                <ChatButton />
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SIDE */}
                    <div className="relative flex items-center justify-center md:justify-end h-auto">

                        {/* CYBERWEEK ILLUSTRATION */}
                        <div className="relative z-10 w-full max-w-[512px] mx-auto">

                            <Image
                                src="/img/cyberweek-light.png"
                                alt="Cyber Week Illustration"
                                width={512}
                                height={412}
                                priority
                                className="w-full h-auto dark:hidden"
                            />

                            <Image
                                src="/img/cyberweek-dark.png"
                                alt="Cyber Week Illustration Dark"
                                width={512}
                                height={412}
                                priority
                                className="w-full h-auto hidden dark:block"
                            />
                        </div>
                    </div>

                </div>

                {/* Reviews */}
                <div className="mt-8 flex flex-wrap gap-3 md:gap-8 min-h-[100px] justify-center md:justify-center">
                    {[
                        { logo: "logo-google", stars: 4.5 },
                        { logo: "logo-hostadvice", stars: 4.5 },
                        { logo: "logo-trustpilot", stars: 4 },
                    ].map((r, idx) => (
                        <div key={idx} className="flex flex-col items-center">
                            <Image
                                src={`/img/${r.logo}.png`}
                                width={100}
                                height={70}
                                alt={r.logo}
                                className="dark:hidden w-auto h-auto"
                            />
                            <Image
                                src={`/img/${r.logo}-white.png`}
                                width={100}
                                height={70}
                                alt={r.logo}
                                className="hidden dark:block w-auto h-auto"
                            />
                            <div className="flex gap-1 mt-1">
                                {Array(Math.floor(r.stars))
                                    .fill(0)
                                    .map((_, i) => (
                                        <Image
                                            key={i}
                                            src="/icons/icon-star-full.svg"
                                            width={16}
                                            height={16}
                                            alt="Full star"
                                        />
                                    ))}
                                {r.stars % 1 !== 0 && (
                                    <Image
                                        src="/icons/icon-star-half.svg"
                                        width={16}
                                        height={16}
                                        alt="Half star"
                                    />
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
});

export default HeroBlackFriday;
