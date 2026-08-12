import { CheckCircle, XCircle } from "lucide-react"

const comparisons = [
    { feature: "cPanel Node.js Manager UI", hs: true, vps: true },
    { feature: "Phusion Passenger process management", hs: true, vps: true },
    { feature: "npm / yarn package installation", hs: true, vps: true },
    { feature: "Node.js version selection per app", hs: true, vps: true },
    { feature: "Custom environment variables (.env)", hs: true, vps: true },
    { feature: "Root SSH access & custom server config", hs: false, vps: true },
    { feature: "Dedicated CPU cores & RAM", hs: false, vps: true },
    { feature: "Custom PM2 / systemd configs", hs: false, vps: true },
    { feature: "Free SSL & daily backups", hs: true, vps: true },
    { feature: "24/7 Expert Support", hs: true, vps: true },
]

const steps = [
    {
        number: "01",
        title: "Choose a Premium Hosting Plan",
        description:
            "Pick any Premium Hosting plan on HostingSpell. All plans include cPanel with the Node.js Manager — no extra setup fee or addon required.",
    },
    {
        number: "02",
        title: "Open Node.js Manager in cPanel",
        description:
            "Log into cPanel and navigate to the Node.js Manager section under Software. Click Create Application to start configuring your app.",
    },
    {
        number: "03",
        title: "Configure Your App",
        description:
            'Set the Node.js version (14–22), application root directory, Application URL, and startup file (e.g. app.js or server.js). Click "npm install" to install your dependencies.',
    },
    {
        number: "04",
        title: "Go Live via Passenger",
        description:
            "Start the application. Phusion Passenger automatically serves your Node.js process on your domain — no manual port binding, no reverse proxy configuration needed.",
    },
]

export function NodeJsBenefits() {
    return (
        <section className="py-16 md:py-24 bg-background dark:bg-background">
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* How It Works */}
                <div className="text-center mb-14">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Deploy Node.js in{" "}
                        <span className="text-green-600">4 Simple Steps</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        No DevOps knowledge needed. From plan purchase to live Node.js app in minutes.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                    {steps.map((step) => (
                        <div
                            key={step.number}
                            className="bg-card dark:bg-card border border-border shadow-lg rounded-2xl p-7 flex gap-5 hover:-translate-y-1 transition-transform duration-300"
                        >
                            <div className="text-4xl font-black text-green-600/20 dark:text-green-400/20 leading-none select-none flex-shrink-0 w-12">
                                {step.number}
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold mb-2 text-foreground">{step.title}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Comparison Section */}
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold mb-4">
                        Premium Hosting vs <span className="text-green-600 dark:text-green-400">VPS</span> — Which is Right for You?
                    </h2>
                    <p className="text-muted-foreground max-w-xl mx-auto">
                        Both options support Node.js via Passenger. The difference is in control and scale.
                    </p>
                </div>

                <div className="bg-card dark:bg-card rounded-3xl shadow-2xl border border-border overflow-hidden max-w-5xl mx-auto">
                    <div className="grid grid-cols-3 bg-gradient-to-r from-blue-600/10 to-green-500/10 dark:from-blue-900/40 dark:to-green-900/40 border-b border-border p-5 sm:p-6">
                        <div className="font-bold text-foreground text-sm sm:text-base">Feature</div>
                        <div className="text-center font-extrabold text-blue-600 dark:text-blue-400 text-sm sm:text-base">Premium Hosting</div>
                        <div className="text-center font-bold text-green-600 dark:text-green-400 text-sm sm:text-base">VPS</div>
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
                                    {row.vps ? (
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
