"use client";
import React from "react";
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { BackgroundBeams } from "@/components/ui/background-beams";
import ChatButton from "@/components/shared/ChatButton"
import { useCurrency } from "@/context/CurrencyContext"
import MarqueeBanner from "./MarqueeBanner"
import { GiftIcon, Info } from "lucide-react"
import InfoPopover from "@/components/shared/InfoPopover"

export function HeroBeam() {
    return (
        <div className="h-[40rem] md:h-[30rem] w-full rounded-md relative flex flex-col items-center md:item-start justify-center md:justify-start antialiased mt-36 md:mt-16 my-32">
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-center md:items-start md:text-start max-w-6xl mx-auto px-4 md:my-16">
                <div className="md:py-12">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 mt-16 md:mt-0">
                        Affordable Hosting<br />
                        That Grows With You.
                    </h1>
                    <p className="text-muted-foreground mb-6">
                        Fast, secure, and easy hosting for everyone.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start justify-center sm:justify-start">
                        <a href="/pricing?utm_campaign=welcome_offer" className="w-full sm:w-auto">
                            <Button
                                size="lg"
                                className="w-full px-6 text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors duration-200"
                            >
                                CLAIM WELCOME OFFER &nbsp; <GiftIcon className="w-4 h-4" />
                            </Button>
                        </a>
                        <div className="w-full sm:w-auto">
                            <ChatButton />
                        </div>
                    </div>

                    <div className="mt-8 flex items-center justify-center gap-6 md:gap-8 min-h-[100px]">
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
                                <Image src="/icons/icon-star-full.svg" width={16} height={16} alt="Full star" />
                                <Image src="/icons/icon-star-full.svg" width={16} height={16} alt="Full star" />
                                <Image src="/icons/icon-star-full.svg" width={16} height={16} alt="Full star" />
                                <Image src="/icons/icon-star-full.svg" width={16} height={16} alt="Full star" />
                                <Image src="/icons/icon-star-half.svg" width={16} height={16} alt="Half star" />
                            </div>
                        </div>

                        <div className="flex flex-col items-center">
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
                                <Image src="/icons/icon-star-full.svg" width={16} height={16} alt="Full star" />
                                <Image src="/icons/icon-star-full.svg" width={16} height={16} alt="Full star" />
                                <Image src="/icons/icon-star-full.svg" width={16} height={16} alt="Full star" />
                                <Image src="/icons/icon-star-full.svg" width={16} height={16} alt="Full star" />
                                <Image src="/icons/icon-star-half.svg" width={16} height={16} alt="Half star" />
                            </div>
                        </div>
                    </div>


                </div>
                <div className="z-0 relative w-full max-w-[512px] mx-auto">
                    <img
                        src="/img/hosting-illustration-light.png"
                        alt="Hero illustration"
                        width={512}
                        height={412}
                        decoding="async"
                        loading="eager"
                        fetchPriority="high"
                        className="w-full h-auto dark:hidden"
                    />
                    <img
                        src="/img/hosting-illustration-dark.png"
                        alt="Hero illustration dark mode"
                        width={512}
                        height={412}
                        decoding="async"
                        loading="eager"
                        fetchPriority="high"
                        className="w-full h-auto hidden dark:block"
                    />
                </div>

            </div>

            <div className="absolute inset-0 z-0">
                <BackgroundBeams />
            </div>
        </div>
    );
}
