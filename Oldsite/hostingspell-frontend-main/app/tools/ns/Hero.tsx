"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ServerInfo {
    name: string;
    hostname: string;
    ipaddress: string;
    nameservers: string[];
}

export default function NSLookupPage() {
    const searchParams = useSearchParams();
    const domainParam = searchParams.get("domain") || "";

    const [domain, setDomain] = useState(domainParam);
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState<ServerInfo | null>(null);
    const [error, setError] = useState("");
    const [copied, setCopied] = useState(false);

    const handleSearch = async (searchDomain?: string) => {
        const cleanDomain = (searchDomain || domain).trim();
        if (!cleanDomain) return;

        setLoading(true);
        setError("");
        setResult(null);
        setCopied(false);

        try {
            const res = await fetch("/api/ns-lookup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ domain: cleanDomain }),
            });

            const data = await res.json();

            if (data.result === "success" && data.server) {
                setResult(data.server);
            } else {
                setError(data.message || "Domain not found or not linked to any server");
            }
        } catch (err) {
            setError("Failed to reach server");
        } finally {
            setLoading(false);
        }
    };

    const handleCopyIP = async () => {
        if (result?.ipaddress) {
            await navigator.clipboard.writeText(result.ipaddress);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    // Auto-execute search if ?domain= is present
    useEffect(() => {
        if (domainParam) {
            handleSearch(domainParam);
        }
    }, [domainParam]);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-background px-4 py-24">
            {/* Header */}
            <div className="max-w-xl text-center">
                <h1 className="text-3xl md:text-4xl font-bold">
                    Find Your Domain Nameservers
                </h1>
                <p className="mt-4 text-sm md:text-base text-muted-foreground">
                    Forgot your nameservers? Enter your domain below and quickly check
                    the nameserver records.
                </p>
            </div>

            {/* Input + Button */}
            <div className="mt-8 w-full max-w-md flex flex-col md:flex-row gap-2">
                <Input
                    placeholder="Enter your domain (example.com)"
                    value={domain}
                    onChange={(e) => setDomain(e.target.value)}
                    className="w-full"
                />
                <Button
                    onClick={() => handleSearch()}
                    disabled={!domain.trim() || loading}
                    className="w-full md:w-auto text-white dark:text-white"
                >
                    {loading ? "Searching..." : "Search"}
                </Button>
            </div>

            {/* Results */}
            <div className="mt-10 w-full max-w-xl">
                {error && (
                    <p className="text-red-500 text-center font-medium">{error}</p>
                )}

                {result && (
                    <Card className="mt-4">
                        <CardHeader>
                            <CardTitle>Results for {domain}</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2 text-sm">
                            <p>
                                <strong>Server Name:</strong> {result.name}
                            </p>
                            <p>
                                <strong>Hostname:</strong> {result.hostname}
                            </p>
                            <p className="flex items-center gap-2">
                                <strong>Main IP:</strong> {result.ipaddress}
                                <Button
                                    size="sm"
                                    onClick={handleCopyIP}
                                    className="ml-2"
                                >
                                    {copied ? "Copied!" : "Copy"}
                                </Button>
                            </p>
                            {result.nameservers.map((ns, i) => (
                                <p key={i}>
                                    <strong>Nameserver {i + 1}:</strong> {ns}
                                </p>
                            ))}
                        </CardContent>
                    </Card>
                )}
            </div>

            {/* Note */}
            <div className="mt-10 max-w-xl text-center text-muted-foreground text-sm">
                <p>
                    <strong>Note:</strong> You can also contact your domain registrar to
                    add or update nameservers if required.
                </p>
            </div>
        </div>
    );
}
