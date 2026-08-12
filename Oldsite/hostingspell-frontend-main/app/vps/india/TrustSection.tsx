import { Star, ShieldCheck, Headphones, Clock } from "lucide-react";
import { INDIA_VPS_TRUST_STATS } from "@/lib/constants-vps-india";
import Link from "next/link";

export function TrustSection() {
    return (
        <section className="py-16 md:py-20 bg-background dark:bg-background">
            <div className="container mx-auto max-w-6xl px-4 sm:px-6">
                <div className="text-center mb-12">
                    <p className="text-primary font-bold mb-2 text-sm uppercase tracking-wide">
                        Trusted Hosting Partner
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Why 110,000+ Websites Choose{" "}
                        <span className="text-blue-600">HostingSpell</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Over a decade of hosting expertise, a India-ready support team, and infrastructure
                        built for reliability — so you can focus on growing your business, not fixing servers.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                    {INDIA_VPS_TRUST_STATS.map((stat) => (
                        <div
                            key={stat.label}
                            className="text-center bg-card dark:bg-card border border-border rounded-xl p-6"
                        >
                            <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-1">
                                {stat.value}
                            </div>
                            <div className="text-sm text-muted-foreground">{stat.label}</div>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                    <div className="flex flex-col items-center text-center p-6">
                        <ShieldCheck className="h-10 w-10 text-green-500 mb-3" />
                        <h3 className="font-bold mb-2">Enterprise Security</h3>
                        <p className="text-sm text-muted-foreground">
                            KVM isolation, configurable firewalls, DDoS protection, and free SSL on every plan.
                        </p>
                    </div>
                    <div className="flex flex-col items-center text-center p-6">
                        <Headphones className="h-10 w-10 text-blue-500 mb-3" />
                        <h3 className="font-bold mb-2">24/7 Engineer Support</h3>
                        <p className="text-sm text-muted-foreground">
                            Live chat, tickets, and phone support from a team that understands Indian hosting needs.
                        </p>
                    </div>
                    <div className="flex flex-col items-center text-center p-6">
                        <Clock className="h-10 w-10 text-orange-500 mb-3" />
                        <h3 className="font-bold mb-2">99.9% Uptime SLA</h3>
                        <p className="text-sm text-muted-foreground">
                            Redundant networking and proactive monitoring keep your India VPS online around the clock.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
                    <div className="flex items-center gap-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                            <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                        ))}
                    </div>
                    <p className="text-sm text-muted-foreground">
                        Rated excellent on{" "}
                        <Link
                            href="https://www.trustpilot.com/review/hostingspell.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline font-medium"
                        >
                            Trustpilot
                        </Link>{" "}
                        by real Indian customers
                    </p>
                </div>
            </div>
        </section>
    );
}
