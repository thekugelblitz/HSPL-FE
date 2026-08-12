import { CheckCircle, XCircle } from "lucide-react"

const comparisons = [
    { feature: "cPanel Python Manager UI", hs: true, vps: true },
    { feature: "Phusion Passenger WSGI server", hs: true, vps: true },
    { feature: "virtualenv / venv isolation per app", hs: true, vps: true },
    { feature: "Python 3.8–3.12 version selection", hs: true, vps: true },
    { feature: "pip install via cPanel terminal", hs: true, vps: true },
    { feature: "Root SSH access & custom server config", hs: false, vps: true },
    { feature: "Dedicated CPU cores & RAM", hs: false, vps: true },
    { feature: "Custom gunicorn/uvicorn/nginx setup", hs: false, vps: true },
    { feature: "Free SSL & daily backups", hs: true, vps: true },
    { feature: "24/7 Expert Support", hs: true, vps: true },
]

const steps = [
    {
        number: "01",
        title: "Choose a Premium Hosting Plan",
        description:
            "All HostingSpell Premium plans include cPanel with the Python Manager. No extra addon or upgrade is required — just pick the plan that fits your traffic and storage needs.",
    },
    {
        number: "02",
        title: "Open Python Manager in cPanel",
        description:
            "Inside cPanel, navigate to Software → Setup Python App. Click Create Application and select your desired Python version (3.8 through 3.12).",
    },
    {
        number: "03",
        title: "Configure & Install Dependencies",
        description:
            "Set the application root, application URL, and startup file (e.g. passenger_wsgi.py or wsgi.py). Use the built-in pip installer to install your requirements.txt packages inside an isolated virtualenv.",
    },
    {
        number: "04",
        title: "Go Live via Passenger WSGI",
        description:
            "Start the application. Phusion Passenger picks up your WSGI entry point and serves Django, Flask, or FastAPI on your domain — fully production-ready with automatic process management.",
    },
]

export function PythonBenefits() {
    return (
        <section className="py-16 md:py-24 bg-background dark:bg-background">
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* How It Works */}
                <div className="text-center mb-14">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Deploy Python in{" "}
                        <span className="text-yellow-600 dark:text-yellow-400">4 Simple Steps</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        No server administration knowledge needed. From plan purchase to live Python app in minutes.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                    {steps.map((step) => (
                        <div
                            key={step.number}
                            className="bg-card dark:bg-card border border-border rounded-2xl shadow-lg p-7 flex gap-5 hover:-translate-y-1 transition-transform duration-300"
                        >
                            <div className="text-4xl font-black text-yellow-500/20 dark:text-yellow-400/20 leading-none select-none flex-shrink-0 w-12">
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
                        Premium Hosting vs{" "}
                        <span className="text-yellow-600 dark:text-yellow-400">VPS</span> — Which Python Plan is Right?
                    </h2>
                    <p className="text-muted-foreground max-w-xl mx-auto">
                        Both run Python via Passenger. The difference is control, dedicated resources, and customisation depth.
                    </p>
                </div>

                <div className="bg-card dark:bg-card rounded-3xl shadow-2xl border border-border overflow-hidden max-w-5xl mx-auto">
                    <div className="grid grid-cols-3 bg-gradient-to-r from-blue-600/10 to-yellow-500/10 dark:from-blue-900/40 dark:to-yellow-900/40 border-b border-border p-5 sm:p-6">
                        <div className="font-bold text-foreground text-sm sm:text-base">Feature</div>
                        <div className="text-center font-extrabold text-blue-600 dark:text-blue-400 text-sm sm:text-base">Premium Hosting</div>
                        <div className="text-center font-bold text-yellow-600 dark:text-yellow-400 text-sm sm:text-base">VPS</div>
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
