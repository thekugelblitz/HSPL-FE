"use client";

import { Button } from "@/components/ui/button";
import posthog from 'posthog-js'

export function AIChatCTA() {
    const handleClick = () => {
        posthog.capture('clicked_ai_assistant_cta', {
            label: 'CHAT WITH OUR AI',
            location: 'hero_section',
            page: window.location.pathname,
        })
    }
    return (
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-12 px-6 rounded-3xl shadow-xl relative overflow-hidden my-12 w-full">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10"></div>

            <div className="relative flex flex-col md:flex-row items-center justify-between gap-8 max-w-5xl mx-auto">
                {/* Left Text Section */}
                <div className="text-center md:text-left space-y-4">
                    <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
                        Meet Our Supercharged AI Powered Support Engineer, Sahdev!
                    </h2>
                    <p className="text-lg text-blue-100 max-w-md">
                        Built on OpenAI & Google Gemini to deliver smarter, faster solutions
                    </p>
                </div>

                {/* Right Button Section */}
                <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                    <a href="https://2hs.in/gpt" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                        <Button
                            size="lg"
                            variant="outline"
                            onClick={handleClick}
                            className="bg-transparent w-full text-white border border-white
                dark:bg-transparent dark:text-white dark:border dark:border-white 
                hover:bg-white hover:text-black dark:hover:bg-white/10 hover:scale-105 transition-transform shadow-lg rounded-sm font-bold"
                        >
                            <span className="h-2 w-2 rounded-full bg-green-500 mr-2"></span> CHAT WITH OUR AI
                        </Button>
                    </a>
                </div>
            </div>
        </div>
    );
}
