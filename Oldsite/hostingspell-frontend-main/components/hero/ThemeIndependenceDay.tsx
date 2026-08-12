"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { BackgroundBeams } from "@/components/ui/background-beams";

export function ThemeIndependenceDay() {
    return (
        <div className="h-[40rem] md:h-[30rem] w-full rounded-md relative flex flex-col items-center md:items-start justify-center md:justify-start antialiased mt-36 md:mt-16 my-16">
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-center md:items-start md:text-start max-w-6xl mx-auto px-4 md:my-16">
                {/* Left content */}
                <div className="md:py-12">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 mt-16 md:mt-0">
                        <span className="
                            bg-gradient-to-r 
                            from-orange-500 to-green-500 
                            dark:from-orange-500 dark:via-white dark:to-green-500
                            bg-clip-text text-transparent
                        ">
                            Freedom Sale
                        </span>

                        <br />
                        Celebrate Independence with Big Savings!
                    </h1>
                    <p className="text-muted-foreground mb-6">
                        This 15th August, unlock the power of freedom — enjoy up to{" "}
                        <span className="font-semibold text-orange-500 dark:text-orange-400">
                            75% OFF
                        </span>{" "}
                        on hosting plans & make your next project soar.
                    </p>

                    {/* Buttons */}
                    <div className="flex gap-4 items-center justify-center md:items-start md:justify-start flex-wrap">
                        <Button
                            size="lg"
                            className="px-6 text-white bg-orange-500 hover:bg-orange-600 dark:bg-orange-400 dark:hover:bg-orange-500 transition-colors duration-200"
                        >
                            View Plans
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            className="text-gray-800 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 border border-gray-300 dark:border-gray-600"
                        >
                            Chat with Us
                        </Button>
                    </div>

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

                {/* Right image (placeholder for your illustration) */}
                <div className="z-0 relative w-full max-w-[512px] mx-auto md:mt-16">
                    <img
                        src="/img/independence-illustration-text.png"
                        alt="Independence Day illustration"
                        width={512}
                        height={512}
                        decoding="async"
                        loading="eager"
                        fetchPriority="high"
                        className="w-full h-auto dark:hidden"
                    />
                    <img
                        src="/img/independence-illustration-text.png"
                        alt="Independence Day illustration dark mode"
                        width={512}
                        height={512}
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
