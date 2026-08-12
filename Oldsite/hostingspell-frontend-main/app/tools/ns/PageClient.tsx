"use client";

import Hero from "./Hero";
import { FAQ } from "@/components/shared/FAQ";
import { AIChatCTA } from "@/components/shared/AIChatCTA";
import { Testimonials } from "../../components/Testimonials";

export const faqs = [
    {
        question: "Which domains can I check nameservers for?",
        answer: "This tool only works for domains hosted on our servers. Domains hosted elsewhere will not return valid nameserver information."
    },
    {
        question: "How do I find my domain's nameservers?",
        answer: "Simply enter your domain name in the search box above and click 'Search'. If your domain is hosted on our servers, the tool will return the active nameservers."
    },
    {
        question: "What information will I get from this tool?",
        answer: "The tool returns the server name, hostname, main IP address, and all configured nameservers for your domain hosted on our servers."
    },
    {
        question: "Why can't I find my domain?",
        answer: "If the tool shows an error or cannot find your domain, it may not be hosted on our servers. Only domains managed in our system are supported."
    },
    {
        question: "Can I use these nameservers to configure DNS?",
        answer: "Yes. You can use the nameservers returned by this tool to configure your domain's DNS or update them with your registrar."
    },
    {
        question: "Is this tool safe to use?",
        answer: "Absolutely. This tool only retrieves nameserver information for domains hosted on our servers and does not collect personal information."
    },
    {
        question: "How often are nameservers updated?",
        answer: "Nameserver information is updated in real-time on our servers, so the tool will always show the current configuration for domains hosted with us."
    },
    {
        question: "What should I do if the nameservers are incorrect?",
        answer: "If you notice incorrect nameservers, contact our support team. Only domains hosted on our servers can have their nameservers managed through this tool."
    }
];

const faqIntro = `A nameserver record (NS record) tells the internet which DNS servers are responsible for your domain. 
With our Nameserver Check Tool, you can instantly verify the active NS records for domains hosted on HostingSpell, 
helping you confirm your domain is correctly connected to our system.`


export default function PageClient() {
    return (
        <main className="flex min-h-screen flex-col">
            <Hero />
            <div className="container mx-auto px-4">
                <AIChatCTA />
            </div>
            <Testimonials />
            <FAQ faqs={faqs} introText={faqIntro} />
        </main>
    );
}
