import { MapPin, Zap } from "lucide-react";
import { INDIA_VPS_LATENCY_CITIES } from "@/lib/constants-vps-india";

export function LatencySection() {
    return (
        <section className="py-16 md:py-20 bg-muted/40 dark:bg-muted/10">
            <div className="container mx-auto max-w-6xl px-4 sm:px-6">
                <div className="text-center mb-12">
                    <p className="text-primary font-bold mb-2 text-sm uppercase tracking-wide">
                        Low Latency Nationwide
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Fast Response Times Across{" "}
                        <span className="text-blue-600">Indian Cities</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Your users expect instant page loads and real-time interactions. Our India VPS
                        is connected to major domestic networks so your applications feel local — everywhere.
                    </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
                    {INDIA_VPS_LATENCY_CITIES.map((entry) => (
                        <div
                            key={entry.city}
                            className="bg-card dark:bg-card border border-border rounded-xl p-4 text-center hover:border-blue-500/50 transition-colors"
                        >
                            <div className="flex items-center justify-center gap-1.5 mb-2">
                                <MapPin className="h-4 w-4 text-blue-500" />
                                <span className="font-semibold text-sm">{entry.city}</span>
                            </div>
                            <div className="flex items-center justify-center gap-1 text-green-600 dark:text-green-400">
                                <Zap className="h-3.5 w-3.5" />
                                <span className="text-lg font-bold">{entry.latency}</span>
                            </div>
                            <p className="text-xs text-muted-foreground mt-1">{entry.region}</p>
                        </div>
                    ))}
                </div>

                <p className="text-center text-xs text-muted-foreground mt-8 max-w-xl mx-auto">
                    Latency figures are typical network round-trip estimates from our India data center.
                    Actual results depend on ISP routing and end-user connection quality.
                </p>
            </div>
        </section>
    );
}
