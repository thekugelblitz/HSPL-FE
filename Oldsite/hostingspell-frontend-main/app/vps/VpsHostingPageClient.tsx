"use client";

import { Hero } from "./Hero";
import { Pricing } from "./Pricing";
import { FAQ } from "@/components/shared/FAQ";
import { Benefits } from "./Benefits";
import { Testimonials } from "../components/Testimonials";
import { AIChatCTA } from "@/components/shared/AIChatCTA";

const sharedHostingFaqs = [
    { question: "Would you be able to help me move my website over?", answer: "Yeah, if you have cPanel® at old provider then we can do it for free. If you have any other Web Hosting Panel then we will charge you a little fee :)" },
    { question: "How can disk space be unlimited?", answer: "Because we run our platform on top-notch servers, we can keep adding space to servers. As long as your disk space is used for websites, we won't limit your usage." },
    { question: "What billing cycles do you offer?", answer: "We provide Annual billing for Shared Hosting & Monthly and Annual based billing on Dedicated Hosting :)" },
    { question: "Do you offer 24/7 support?", answer: "We offer 24/7 technical support. You can reach us on live chat, phone or ticket at any particular time :)" },
    { question: "Any discounts for NGOs, Universities & Students?", answer: "Yes, Please check following page for more information: https://hostingspell.com/blog/free-web-hosting-for-ngos-universities" },
    { question: "Do you offer a money-back guarantee?", answer: "We want our users to feel safe, for any reason you do not wish to proceed with our cPanel Hosting package you are entitled to a 7 day money back guarantee, Go Ahead :)" },
];

export default function VpsHostingPageClient() {
    return (
        <main className="flex min-h-screen flex-col">
            <Hero />
            <Pricing />
            <Benefits />
            <Testimonials />
            <div className="container mx-auto px-4">
                <AIChatCTA />
            </div>
            <FAQ faqs={sharedHostingFaqs} />
        </main>
    );
}
