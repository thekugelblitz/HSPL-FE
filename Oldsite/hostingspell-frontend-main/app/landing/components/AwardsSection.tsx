"use client";

import Image from "next/image";

export function AwardsSection() {
    return (
        <section className="py-12 bg-transparent">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-8">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-gray-200">
                        Award-Winning Hosting Provider
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                        Recognized by industry leaders for outstanding speed, reliability, and support.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-8 md:gap-12">
                    <a
                        href="https://hostadvice.com/hosting-company/hostingspell-reviews/"
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                        className="transition-transform duration-300 transform hover:scale-105 inline-block"
                    >
                        <img
                            style={{ width: "100%", maxWidth: "150px", height: "auto" }}
                            src="https://hostadvice.com/awards/2021-top-10-resellers-hosting.png"
                            alt="Top 10 Reseller Hosting 2021"
                            loading="lazy"
                        />
                    </a>

                    <a
                        href="https://hostadvice.com/hosting-company/hostingspell-reviews/"
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                        className="transition-transform duration-300 transform hover:scale-105 inline-block"
                    >
                        <img
                            style={{ width: "100%", maxWidth: "150px", height: "auto" }}
                            src="https://hostadvice.com/awards/2026-top-25-reseller-hosting.png"
                            alt="Top 25 Reseller Hosting 2026"
                            loading="lazy"
                        />
                    </a>
                </div>
            </div>
        </section>
    );
}
