import { CheckCircle, XCircle } from "lucide-react"

const comparisons = [
    { feature: "LiteSpeed Web Server", hs: true, shared: false },
    { feature: "LiteSpeed Cache (LSCache) for WordPress", hs: true, shared: false },
    { feature: "Imunify360 AI Malware Scanning", hs: true, shared: false },
    { feature: "Dedicated CPU & RAM resources per plan", hs: true, shared: false },
    { feature: "Daily Automated Backups (JetBackup)", hs: true, shared: false },
    { feature: "Free SSL (auto-renewal)", hs: true, shared: true },
    { feature: "WordPress Manager in cPanel", hs: true, shared: false },
    { feature: "Staging Environment Support", hs: true, shared: false },
    { feature: "DDoS Protection & Firewall", hs: true, shared: false },
    { feature: "24/7 Expert Human Support", hs: true, shared: false },
]

const stats = [
    { value: "99.9%", label: "Uptime Guarantee" },
    { value: "10×", label: "Faster Than Apache" },
    { value: "7 Days", label: "Money-Back Guarantee" },
    { value: "24/7", label: "Expert Support" },
]

export function WordPressBenefits() {
    return (
        <section className="py-16 md:py-24 bg-background dark:bg-background">
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Stats Row */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
                    {stats.map((stat) => (
                        <div
                            key={stat.label}
                            className="bg-card dark:bg-card shadow-lg rounded-2xl border border-border p-6 text-center hover:-translate-y-1 transition-transform duration-300"
                        >
                            <div className="text-3xl md:text-4xl font-extrabold text-blue-600 dark:text-blue-400 mb-2">
                                {stat.value}
                            </div>
                            <div className="text-sm text-foreground font-semibold uppercase tracking-wider">{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* Comparison Section */}
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Why Choose HostingSpell for{" "}
                        <span className="text-blue-600">WordPress?</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Not all hosting is equal. Here's what separates HostingSpell from generic shared hosting providers.
                    </p>
                </div>

                <div className="bg-card dark:bg-card rounded-3xl shadow-2xl border border-border overflow-hidden max-w-5xl mx-auto">
                    <div className="grid grid-cols-3 bg-gradient-to-r from-blue-600/10 to-red-500/5 dark:from-blue-900/40 dark:to-red-900/20 border-b border-border p-5 sm:p-6">
                        <div className="font-bold text-foreground text-sm sm:text-base">Feature</div>
                        <div className="text-center font-extrabold text-blue-600 dark:text-blue-400 text-sm sm:text-base">HostingSpell</div>
                        <div className="text-center font-bold text-muted-foreground text-sm sm:text-base">Generic Shared</div>
                    </div>
                    <div className="flex flex-col">
                        {comparisons.map((row, idx) => (
                            <div
                                key={row.feature}
                                className={`grid grid-cols-3 items-center p-5 sm:p-6 transition-colors hover:bg-muted/10 ${idx !== comparisons.length - 1 ? "border-b border-border/50" : ""}`}
                            >
                                <div className="font-medium text-sm sm:text-base text-foreground">{row.feature}</div>
                                <div className="flex justify-center">
                                    {row.hs ? (
                                        <CheckCircle className="h-6 w-6 text-green-500" />
                                    ) : (
                                        <XCircle className="h-6 w-6 text-red-500" />
                                    )}
                                </div>
                                <div className="flex justify-center">
                                    {row.shared ? (
                                        <CheckCircle className="h-6 w-6 text-green-500" />
                                    ) : (
                                        <XCircle className="h-6 w-6 text-red-400/50" />
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
