"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export default function Hero() {
    const [ipv4, setIpv4] = useState<string>("Loading...");
    const [copied, setCopied] = useState(false);

    // Fetch IP from internal API route
    useEffect(() => {
        const fetchIP = async () => {
            try {
                const res = await fetch("/api/get-ip", { cache: "no-store" });
                if (!res.ok) {
                    throw new Error("Unable to fetch IP");
                }

                const data = (await res.json()) as { ip?: string };
                setIpv4(data.ip || "Unable to fetch IP");
            } catch (err) {
                console.error(err);
                setIpv4("Unable to fetch IP");
            }
        };
        fetchIP();
    }, []);

    const handleCopy = async () => {
        if (!ipv4 || ipv4 === "Loading..." || ipv4 === "Unable to fetch IP") {
            return;
        }

        await navigator.clipboard.writeText(ipv4);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-background px-4 py-24">
            {/* Logo Section */}
            <div className="flex flex-col items-center text-center max-w-xl w-full">
                {/* Uncomment this line to show logo */}
                {/* <Image
          src="https://manage.hostingspell.com/assets/img/whmcs.png"
          alt="HostingSpell"
          width={120}
          height={120}
          className="rounded-full shadow-lg"
        /> */}
                <h1 className="mt-6 text-3xl md:text-4xl font-bold">Get Your IPv4 Address</h1>
                <p className="mt-4 text-sm md:text-base text-muted-foreground">
                    This tool helps you get the IPv4 Address of your ISP connection even if your
                    provider uses IPv6. IPv4 is required for firewalls like CSF to block/unblock
                    network access.
                </p>
            </div>

            {/* IP Display Card */}
            <div className="mt-8 w-full max-w-md bg-card shadow-lg rounded-2xl p-6 md:p-8 text-center">
                <h2 className="text-2xl font-semibold">Your IPv4 Address</h2>
                <p className="mt-2 text-xl font-mono">{ipv4}</p>
                <Button
                    className="mt-6 w-full md:w-auto text-white dark:text-white"
                    onClick={handleCopy}
                    disabled={ipv4 === "Loading..." || ipv4 === "Unable to fetch IP"}
                >
                    {copied ? "Copied!" : "Copy It!"}
                </Button>
            </div>

            {/* Additional Info Section */}
            <div className="mt-10 max-w-xl text-center px-4 md:px-0">
                <h3 className="font-bold">Why IPv4 is Important</h3>
                <p className="mt-4 text-sm md:text-base text-muted-foreground">
                    Some services and firewalls require an IPv4 address to manage access. Knowing
                    your IPv4 allows you to configure firewall rules, troubleshoot network issues,
                    or whitelist your IP for remote access.
                </p>
            </div>
        </div>
    );
}
