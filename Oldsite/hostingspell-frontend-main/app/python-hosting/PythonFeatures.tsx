import { Terminal, Layers, PackageOpen, Play, Code2, ArrowUpRight, Cpu } from "lucide-react"


const features = [
    {
        icon: <Terminal className="h-7 w-7 text-yellow-500" />,
        title: "cPanel Python Manager",
        description:
            "Create and manage Python applications directly from cPanel. Set the application root, choose your Python version, point to your startup file, and run pip install — entirely through a clean browser UI.",
    },
    {
        icon: <Cpu className="h-7 w-7 text-blue-500" />,
        title: "Phusion Passenger (WSGI)",
        description:
            "Your Python app is served via Phusion Passenger's WSGI interface — the same technology trusted by production environments worldwide. It handles process management, graceful restarts, and concurrency automatically.",
    },
    {
        icon: <Layers className="h-7 w-7 text-green-500" />,
        title: "virtualenv / venv Isolation",
        description:
            "Each Python application gets its own isolated virtual environment. Install different package versions per project with zero conflicts — no system-level Python changes, no dependency hell.",
    },
    {
        icon: <Play className="h-7 w-7 text-purple-500" />,
        title: "Python 3.8 – 3.12 Support",
        description:
            "Select from Python 3.8, 3.9, 3.10, 3.11, or 3.12 per application. Run a legacy Django 3.x project alongside a modern FastAPI app on the same hosting account without any conflicts.",
    },
    {
        icon: <Code2 className="h-7 w-7 text-pink-500" />,
        title: "Django, Flask & FastAPI Ready",
        description:
            "Deploy any WSGI-compatible Python framework. Django, Flask, FastAPI, Bottle, Pyramid, and more all work out of the box — just point cPanel to your WSGI startup file and Passenger handles the rest.",
    },
    {
        icon: <ArrowUpRight className="h-7 w-7 text-orange-500" />,
        title: "Scale to VPS When Ready",
        description:
            "Start on Premium Hosting, upgrade to a VPS when you need more power. Full root access, custom gunicorn/uvicorn/nginx configurations, and dedicated CPU & RAM make our VPS the natural next step for serious Python apps.",
    },
]


export function PythonFeatures() {
    return (
        <section className="py-16 md:py-24 bg-background dark:bg-background">
            <div className="container mx-auto max-w-6xl px-4 sm:px-6">
                <div className="text-center mb-14">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Everything You Need to Run{" "}
                        <span className="text-yellow-600 dark:text-yellow-400">Python in Production</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        From Django web apps to FastAPI microservices, our cPanel Python hosting is built to deploy your apps reliably without DevOps complexity.
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
