"use client";

import { Button } from "@/components/ui/button";
import ChatButton from "@/components/shared/ChatButton";
import Link from "next/link";

export function CTABanner() {
    return (
        <section className="py-16 md:py-20">
            <div className="container mx-auto max-w-5xl px-4 sm:px-6">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-3xl px-8 py-14 text-center shadow-2xl relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,_white_0%,_transparent_60%)]" />

                    <div className="relative max-w-2xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
                            Ready to Launch Your India VPS Server?
                        </h2>
                        <p className="text-blue-100 mb-8 text-base md:text-lg">
                            Join thousands of Indian businesses, developers, and agencies running on
                            HostingSpell&apos;s locally hosted NVMe infrastructure. Deploy in hours, scale in minutes.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Button
                                size="lg"
                                variant="outline"
                                className="w-full sm:w-auto bg-white text-white border-white hover:bg-blue-50 font-bold"
                                onClick={() => {
                                    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
                                }}
                            >
                                CHOOSE YOUR PLAN →
                            </Button>
                            <ChatButton />
                        </div>

                        <p className="text-sm text-blue-200 mt-6">
                            Need a custom configuration?{" "}
                            <Link href="/contact" className="underline hover:text-white font-medium">
                                Talk to our sales team
                            </Link>{" "}
                            or explore{" "}
                            <Link href="/vps/apps" className="underline hover:text-white font-medium">
                                40+ VPS apps
                            </Link>{" "}
                            for one-click deployments.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
