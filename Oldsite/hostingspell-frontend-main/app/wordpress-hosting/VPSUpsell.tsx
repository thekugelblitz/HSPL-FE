import Link from "next/link"
import { ArrowRight, Server } from "lucide-react"

interface VPSUpsellProps {
    variant?: "wordpress" | "nodejs" | "python"
}

const content = {
    wordpress: {
        title: "Hosting a High-Traffic WordPress Site?",
        description:
            "When your WordPress store or blog grows beyond shared resources, our VPS plans give you dedicated CPU, RAM, and full root access — with zero noisy-neighbour performance issues.",
        bullets: [
            "Dedicated resources — no sharing with other users",
            "Full root SSH access for custom WP configurations",
            "Custom nginx / Apache / LiteSpeed setups",
            "Scale RAM and CPU independently as you grow",
        ],
        accent: "blue",
        cta: "Explore VPS Plans →",
    },
    nodejs: {
        title: "Need Full Server Control for Your Node.js App?",
        description:
            "When cPanel hosting isn't enough — run PM2, custom nginx reverse proxies, WebSockets, and unlimited Node.js processes on a VPS with full root access.",
        bullets: [
            "Run PM2 process manager for maximum reliability",
            "Custom nginx with WebSocket support",
            "No Passenger limits — unlimited worker processes",
            "Dedicated RAM for memory-hungry Node.js apps",
        ],
        accent: "green",
        cta: "Explore VPS Plans →",
    },
    python: {
        title: "Need More Power for Your Python Application?",
        description:
            "Move to a VPS for full gunicorn/uvicorn control, custom nginx configurations, and dedicated resources tailored to demanding Django or FastAPI applications.",
        bullets: [
            "Run gunicorn or uvicorn with custom worker counts",
            "Custom nginx upstream proxy configuration",
            "Celery task queues & Redis in the same environment",
            "Dedicated RAM for ML / data-heavy Python workloads",
        ],
        accent: "yellow",
        cta: "Explore VPS Plans →",
    },
}

export function VPSUpsell({ variant = "wordpress" }: VPSUpsellProps) {
    const c = content[variant]
    const accentMap = {
        blue: "from-blue-600 to-indigo-600",
        green: "from-green-600 to-emerald-600",
        yellow: "from-yellow-500 to-orange-500",
    }
    const gradient = accentMap[c.accent as keyof typeof accentMap]

    return (
        <section className="py-16 md:py-20 bg-background dark:bg-background">
            <div className="container mx-auto max-w-6xl px-4 sm:px-6">
                <div className={`bg-gradient-to-br ${gradient} rounded-2xl p-8 md:p-12 text-white relative overflow-hidden`}>
                    {/* Background decoration */}
                    <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-white/5 translate-y-1/2 -translate-x-1/2" />

                    <div className="relative flex flex-col lg:flex-row gap-10 items-center">
                        {/* Icon */}
                        <div className="flex-shrink-0 h-20 w-20 bg-white/20 rounded-2xl flex items-center justify-center">
                            <Server className="h-10 w-10 text-white" />
                        </div>

                        {/* Text */}
                        <div className="flex-1">
                            <h2 className="text-2xl md:text-3xl font-bold mb-3">{c.title}</h2>
                            <p className="text-white/80 mb-6 max-w-2xl">{c.description}</p>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                                {c.bullets.map((b) => (
                                    <li key={b} className="flex items-start gap-2 text-sm text-white/90">
                                        <span className="mt-1 h-4 w-4 rounded-full bg-white/30 flex-shrink-0 flex items-center justify-center text-xs font-bold">✓</span>
                                        {b}
                                    </li>
                                ))}
                            </ul>
                            <Link
                                href="/vps"
                                id={`vps-upsell-${variant}`}
                                className="inline-flex items-center gap-2 bg-white text-gray-900 font-bold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
                            >
                                {c.cta}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
