import { Terminal, PackageOpen, Settings, Play, Cpu, ArrowUpRight } from "lucide-react"

const features = [
    {
        icon: <Terminal className="h-7 w-7 text-green-500" />,
        title: "cPanel Node.js Manager",
        description:
            "Create, configure, and manage your Node.js applications visually inside cPanel. Set your application root, startup file, environment, and run npm install — all from your browser.",
    },
    {
        icon: <Cpu className="h-7 w-7 text-blue-500" />,
        title: "Phusion Passenger",
        description:
            "Your Node.js app is served by Phusion Passenger — the same battle-tested application server trusted by GitHub, Apple, and Basecamp. It auto-restarts crashed processes and manages worker threads for you.",
    },
    {
        icon: <PackageOpen className="h-7 w-7 text-yellow-500" />,
        title: "npm & yarn Support",
        description:
            "Install any npm or yarn package from the cPanel terminal. Run build scripts, manage package-lock.json, and use any framework — Express, Fastify, NestJS, Next.js, or your own custom server.",
    },
    {
        icon: <Settings className="h-7 w-7 text-purple-500" />,
        title: "Per-App Environment Variables",
        description:
            "Define custom environment variables (.env) for each Node.js application independently through the cPanel interface — no manual file editing or server-level config required.",
    },
    {
        icon: <Play className="h-7 w-7 text-pink-500" />,
        title: "Multi-Version Node.js",
        description:
            "Choose from Node.js 14, 16, 18, 20, or 22 per application. Run legacy projects and the latest LTS versions simultaneously on the same hosting account without conflicts.",
    },
    {
        icon: <ArrowUpRight className="h-7 w-7 text-orange-500" />,
        title: "Instant Scale to VPS",
        description:
            "Start on Premium Hosting and move to a VPS when your Node.js app outgrows shared resources. Full root access, custom nginx/PM2 configs, and dedicated CPU & RAM await on our VPS plans.",
    },
]

export function NodeJsFeatures() {
    return (
        <section className="py-16 md:py-24 bg-background dark:bg-background">
            <div className="container mx-auto max-w-6xl px-4 sm:px-6">
                <div className="text-center mb-14">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Everything You Need to Run{" "}
                        <span className="text-green-600">Node.js in Production</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        From simple REST APIs to full-stack Next.js applications, our cPanel Node.js hosting gives you the tools to deploy with confidence.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature) => (
                        <div
                            key={feature.title}
                            className="bg-card dark:bg-card border border-border rounded-xl p-7 flex flex-col gap-4 hover:shadow-lg transition-shadow duration-300"
                        >
                            <div className="h-12 w-12 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
                                {feature.icon}
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
