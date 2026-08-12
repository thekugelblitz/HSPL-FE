"use client";

import Hero from "./Hero";
import { FAQ } from "@/components/shared/FAQ";
import { AIChatCTA } from "@/components/shared/AIChatCTA";
import { Testimonials } from "../../components/Testimonials";

const faqs = [
    {
        question: "How can I find my IPv4 address?",
        answer: "You can use this tool to quickly find your IPv4 address, even if your ISP primarily assigns an IPv6 address. IPv4 is required for firewall rules, remote access, and other network configurations."
    },
    {
        question: "Why is my IPv4 different from my public IP?",
        answer: "Sometimes your network uses NAT or IPv6 internally, so the IPv4 shown here is your public IP that external services see. Firewalls and services usually require this IPv4."
    },
    {
        question: "Why do some websites require IPv4?",
        answer: "Many legacy systems, firewalls, and applications are built to use IPv4 addresses only. Knowing your IPv4 allows you to configure these systems properly."
    },
    {
        question: "Can I use this IPv4 for remote access or firewall configuration?",
        answer: "Yes. The IPv4 displayed by this tool can be used for whitelisting in firewalls, remote desktop access, or other network setups that require an IPv4 address."
    },
    {
        question: "Is this tool safe to use?",
        answer: "Absolutely. This tool only fetches your public IPv4 address and does not collect any personal information or store data. Your privacy is fully respected."
    },
    {
        question: "Can my IPv4 change over time?",
        answer: "Yes, depending on your ISP, your IPv4 can be dynamic. Some ISPs assign a new IP on every connection, while others provide a static IP that stays the same."
    },
    {
        question: "What is the difference between IPv4 and IPv6?",
        answer: "IPv4 uses a 32-bit address format (e.g., 192.168.1.1), while IPv6 uses 128-bit (e.g., 2001:0db8::1). IPv4 is still widely used for compatibility with older systems."
    },
    {
        question: "Why is knowing my IPv4 important?",
        answer: "Knowing your IPv4 helps in configuring firewalls, VPNs, remote access, troubleshooting network issues, and ensuring compatibility with services that require IPv4."
    }
];

const faqIntro = `Your IPv4 address is the public identifier of your device on the internet. 
This tool instantly detects and shows your current IPv4 address, which you can use for whitelisting, 
server access, or security configurations.`


export default function GetIpPageClient() {
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
