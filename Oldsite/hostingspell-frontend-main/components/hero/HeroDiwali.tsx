"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { GiftIcon } from "lucide-react";
import ChatButton from "@/components/shared/ChatButton";
import InfoPopover from "@/components/shared/InfoPopover";

export function HeroDiwali() {
    const promo =
        "Applicable on all shared & cloud hosting plans except combo hosting or domain-only purchases.";

    return (
        <div className="relative flex flex-col items-center justify-center md:items-start md:justify-start h-[40rem] md:h-[30rem] w-full rounded-md antialiased mt-48 md:mt-16 my-32">
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-center md:text-start max-w-6xl mx-auto px-4 md:my-16">
                {/* Left Content */}
                <div className="md:py-2">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 mt-16 md:mt-0 text-center md:text-left">
                        <span className="text-6xl md:text-7xl font-extrabold text-[#ff4d7e] drop-shadow-[0_0_25px_rgba(255,0,120,0.6)]">
                            50% OFF
                        </span>{" "}
                        <span className="bg-gradient-to-r from-[#ff005e] via-[#d100c9] to-[#ff3c00] bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(255,0,120,0.5)]">
                            Light Up Your Website This Diwali
                        </span>
                    </h1>

                    <p className="text-muted-foreground mb-6 text-base leading-relaxed text-center md:text-left">
                    Celebrate the festival of lights with blazing-fast hosting at{" "}
                    <span className="font-semibold text-[#ff4d7e] dark:text-[#ff66c4]">50% OFF</span>!  
                    Power up your website and make it shine this Diwali.
                    </p>


                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 items-center md:items-start justify-center sm:justify-start">
                        <a href="/pricing" className="w-full sm:w-auto">
                            <Button
                                size="lg"
                                className="
                                    relative w-full px-6 text-white font-semibold
                                    bg-gradient-to-r from-[#b300ff] via-[#ff005e] to-[#ff3c00]
                                    bg-[length:200%_200%]
                                    transition-all duration-500 ease-out
                                    shadow-[0_0_25px_rgba(255,0,120,0.4)]
                                    hover:shadow-[0_0_40px_rgba(255,60,0,0.8)]
                                    hover:scale-105
                                    hover:animate-gradient-move
                                    rounded-lg
                                    overflow-hidden
                                    "
                            >
                                VIEW PLANS
                            </Button>
                        </a>

                        <div className="w-full sm:w-auto">
                            <ChatButton />
                        </div>
                    </div>

                    <span className="flex items-center justify-center text-sm text-muted-foreground mt-4 md:justify-start">
                        <GiftIcon className="mr-2 text-[#ff4d7e]" size={18} />
                        Use Promocode{" "}
                        <span className="font-semibold text-[#ff4d7e] mx-1">DIWALI2025</span>
                        <InfoPopover content={promo} />
                    </span>


                    {/* Reviews */}
                    <div className="mt-8 flex flex-wrap gap-3 md:gap-8 min-h-[100px] justify-center md:justify-start">
                        {[
                            {
                                logo: "logo-google",
                                stars: 4.5,
                            },
                            {
                                logo: "logo-hostadvice",
                                stars: 4.5,
                            },
                            {
                                logo: "logo-trustpilot",
                                stars: 4,
                            },
                        ].map((r, idx) => (
                            <div key={idx} className="flex flex-col items-center">
                                <Image
                                    src={`/img/${r.logo}.png`}
                                    width={100}
                                    height={70}
                                    alt={r.logo}
                                    className="dark:hidden"
                                />
                                <Image
                                    src={`/img/${r.logo}-white.png`}
                                    width={100}
                                    height={70}
                                    alt={r.logo}
                                    className="hidden dark:block"
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

                {/* Right Side – Festive Animation */}
                <div className="z-0 relative w-full max-w-[400px] mx-auto">
                    <Image
                        src="/img/diwali-kids.png"
                        alt="Diwali illustration"
                        width={400}
                        height={400}
                        priority
                        className="w-full h-auto block"
                    />
                </div>

            </div>
        </div>
    );
}
