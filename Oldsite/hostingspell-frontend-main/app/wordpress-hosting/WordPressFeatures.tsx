import { Zap, Shield, RotateCcw, LayoutDashboard, ShoppingCart, Settings2 } from "lucide-react"

const features = [
    {
        icon: <Zap className="h-7 w-7 text-blue-500" />,
        title: "One-Click WordPress Install",
        description:
            "Install WordPress in seconds via Softaculous inside cPanel. Choose your theme, set your admin credentials, and you're live — no manual file uploads or database setup needed.",
    },
    {
        icon: <Zap className="h-7 w-7 text-yellow-500" />,
        title: "LiteSpeed Cache (LSCache)",
        description:
            "Our servers run LiteSpeed Web Server with the LSCache plugin for WordPress, delivering up to 10× faster page loads compared to Apache without any extra configuration.",
    },
    {
        icon: <RotateCcw className="h-7 w-7 text-green-500" />,
        title: "Free Daily Backups",
        description:
            "Every plan includes automated daily backups with one-click restore via JetBackup. Your WordPress database, files, and email are all covered — sleep easy.",
    },
    {
        icon: <LayoutDashboard className="h-7 w-7 text-purple-500" />,
        title: "WordPress Manager in cPanel",
        description:
            "Manage all your WordPress installations from a single dashboard. Update core, themes, and plugins, manage users, and toggle maintenance mode without touching the WP admin.",
    },
    {
        icon: <ShoppingCart className="h-7 w-7 text-pink-500" />,
        title: "WooCommerce Ready",
        description:
            "All plans are fully optimised for WooCommerce. Benefit from Redis object caching, unlimited MySQL databases, and resources that scale with your store traffic.",
    },
    {
        icon: <Shield className="h-7 w-7 text-red-500" />,
        title: "Imunify360 + Free SSL",
        description:
            "Every WordPress site is protected by Imunify360 AI malware scanning, Web Application Firewall, and a free Let's Encrypt SSL — automatically issued and auto-renewed.",
    },
]

export function WordPressFeatures() {
    return (
        <section className="py-16 md:py-24 bg-background dark:bg-background">
            <div className="container mx-auto max-w-6xl px-4 sm:px-6">
                <div className="text-center mb-14">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Everything Your{" "}
                        <span className="text-blue-600">WordPress Site Needs</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        From blazing-fast servers to rock-solid security, our hosting stack is purpose-built to make WordPress fly.
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
