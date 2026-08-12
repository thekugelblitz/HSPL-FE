"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { BackgroundBeams } from "@/components/ui/background-beams";
// import GravityCard from "@/components/games/GravityCard";
import GaneshChaturthiGame from "@/components/games/GaneshChaturthiGame";
import { GiftIcon, Info } from "lucide-react"
import ChatButton from "@/components/shared/ChatButton"
import InfoPopover from "@/components/shared/InfoPopover"

export function HeroGaneshChaturthi() {

    const promo = "Applicable: All website hosting plans, except combo hosting or domain-only purchases."

    return (
        <div className="h-[40rem] md:h-[30rem] w-full rounded-md relative flex flex-col items-center md:items-start justify-center md:justify-start antialiased mt-48 md:mt-16 my-32">
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-center md:items-start md:text-start max-w-6xl mx-auto px-4 md:my-16">
                {/* Left content */}
                <div className="md:py-12">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 mt-16 md:mt-0">
                        <span className="bg-gradient-to-r from-orange-600 via-yellow-400 to-red-600 bg-clip-text text-transparent">
                            Ganesh Chaturthi Festive Sale
                        </span>
                    </h1>
                    <p className="text-muted-foreground mb-6">
                        Celebrate the arrival of Lord Ganesha with{" "}
                        <span className="font-semibold text-orange-500 dark:text-orange-400">
                            up to 50% OFF
                        </span>{" "}
                        on hosting plans — let wisdom and prosperity guide your growth.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start justify-center sm:justify-start">
                        <a href="/pricing" className="w-full sm:w-auto">
                            <Button
                                size="lg"
                                className="w-full px-6 text-white bg-orange-600 hover:bg-orange-700 dark:bg-orange-500 dark:hover:bg-orange-600 transition-colors duration-200"
                            >
                                VIEW PLANS
                            </Button>
                        </a>
                        <div className="w-full sm:w-auto">
                            <ChatButton />
                        </div>
                    </div>


                    <span className="flex items-center text-sm text-muted-foreground mt-4">
                        <GiftIcon className="mr-2" size={18} />
                        Use Promocode GC2025 <InfoPopover content={promo} />
                    </span>

                    {/* Reviews */}
                    <div className="mt-8 flex flex-wrap gap-3 md:gap-8 min-h-[100px] justify-center md:justify-start">
                        <div className="flex flex-col items-center">
                            <Image
                                src="/img/logo-google.png"
                                width={100}
                                height={70}
                                alt="Google"
                                className="dark:hidden"
                            />
                            <Image
                                src="/img/logo-google-white.png"
                                width={100}
                                height={70}
                                alt="Google"
                                className="hidden dark:block"
                            />
                            <div className="flex gap-1 mt-1">
                                {Array(4).fill(0).map((_, i) => (
                                    <Image key={i} src="/icons/icon-star-full.svg" width={16} height={16} alt="Full star" />
                                ))}
                                <Image src="/icons/icon-star-half.svg" width={16} height={16} alt="Half star" />
                            </div>
                        </div>

                        <div className="flex flex-col items-center min-h-[100px]">
                            <Image
                                src="/img/logo-hostadvice.png"
                                width={100}
                                height={70}
                                alt="HostAdvice"
                                className="dark:hidden"
                            />
                            <Image
                                src="/img/logo-hostadvice-white.png"
                                width={100}
                                height={70}
                                alt="HostAdvice"
                                className="hidden dark:block"
                            />
                            <div className="flex gap-1 mt-1">
                                {Array(4).fill(0).map((_, i) => (
                                    <Image key={i} src="/icons/icon-star-full.svg" width={16} height={16} alt="Full star" />
                                ))}
                                <Image src="/icons/icon-star-half.svg" width={16} height={16} alt="Half star" />
                            </div>
                        </div>

                        <div className="flex flex-col items-center min-h-[100px]">
                            <Image
                                src="/img/logo-trustpilot-black.png"
                                width={100}
                                height={70}
                                alt="Trustpilot"
                                className="dark:hidden"
                            />
                            <Image
                                src="/img/logo-trustpilot-white.png"
                                width={100}
                                height={70}
                                alt="Trustpilot"
                                className="hidden dark:block"
                            />
                            <div className="flex gap-1 mt-1">
                                {Array(4).fill(0).map((_, i) => (
                                    <Image key={i} src="/icons/icon-star-full.svg" width={16} height={16} alt="Full star" />
                                ))}
                                <Image src="/icons/icon-star-empty.svg" width={16} height={16} alt="Empty star" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right image (placeholder for Ganesh illustration) */}
                {/* <div className="z-0 relative w-full max-w-[400px] mx-auto md:mt-4">
                    <img
                        src="/img/ganesh-illustration.webp"
                        alt="Ganesh Chaturthi illustration"
                        width={300}
                        height={300}
                        decoding="async"
                        loading="lazy"
                        fetchPriority="high"
                        className="w-full h-auto block"
                    />
                </div> */}

                {/* <div className="flex justify-center">
                    <GravityCard className="w-auto" />
                </div> */}
                <GaneshChaturthiGame
                    className="w-full max-w-2xl mx-auto"
                />
            </div>
            <div className="absolute inset-0 z-0">
                <BackgroundBeams />
            </div>
        </div>
    );
}
