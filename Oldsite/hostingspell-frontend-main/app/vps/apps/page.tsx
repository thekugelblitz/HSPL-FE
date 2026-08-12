import { Metadata } from "next";
import { VPS_APPS_CATEGORIES } from "@/lib/constants-apps";
import { getAllVpsApps } from "@/lib/data-apps";
import Link from "next/link";
import { AppIcon } from "./AppIcon";
import { Card } from "@/components/ui/card";
import { ChevronRight, Github, Globe, FileText } from "lucide-react";

export const metadata: Metadata = {
    title: "VPS Apps & 1-Click Installs | HostingSpell",
    description: "Deploy popular apps like Dokploy, AdGuard Home, and more on your HostingSpell VPS with easy configurations. 1-click installation with full Docker integration.",
    keywords: [
        "VPS apps",
        "1-click VPS apps",
        "VPS app installer",
        "Docker apps VPS",
        "VPS software",
        "HostingSpell VPS",
        "self-hosted apps",
        "managed VPS apps",
    ],
    openGraph: {
        type: "website",
        locale: "en_US",
        siteName: "HostingSpell",
        title: "VPS Apps & 1-Click Installs | HostingSpell",
        description: "Deploy popular apps like Dokploy, AdGuard Home, and more on your HostingSpell VPS with easy configurations. 1-click installation with full Docker integration.",
        url: "https://hostingspell.com/vps/apps",
    },
    twitter: {
        card: "summary_large_image",
        title: "VPS Apps & 1-Click Installs | HostingSpell",
        description: "Deploy popular apps like Dokploy, AdGuard Home, and more on your HostingSpell VPS with easy configurations. 1-click installation with full Docker integration.",
    },
};

export default function VpsAppsPage() {
    const apps = getAllVpsApps();

    return (
        <main className="flex min-h-screen flex-col bg-background dark:bg-background pt-24 pb-12">
            <div className="container mx-auto px-4">
                <div className="mb-12 text-center max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">VPS Apps</h1>
                    <p className="text-lg text-gray-600 dark:text-gray-400">
                        Deploy your favorite tools, databases, and AI tools instantly on powerful NVMe VPS infrastructure.
                    </p>
                </div>

                <div className="space-y-16">
                    {VPS_APPS_CATEGORIES.map(category => {
                        const appsInCategory = apps.filter(app => app.category === category.id);

                        if (appsInCategory.length === 0) return null;

                        return (
                            <div key={category.id}>
                                <h2 className="text-2xl font-bold mb-6 pb-2 border-b">{category.label}</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                    {appsInCategory.map(app => (
                                        <div key={app.id} className="group h-full">
                                            <Card className="p-6 h-full flex flex-col hover:border-blue-500 transition-colors duration-200 dark:bg-[#060A17] relative">
                                                <Link href={`/vps/apps/${app.slug}`} className="absolute inset-0 z-10" aria-label={`Deploy ${app.name}`}>
                                                    <span className="sr-only">Deploy {app.name}</span>
                                                </Link>
                                                <div className="flex items-center gap-4 mb-4">
                                                    <div className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center overflow-hidden flex-shrink-0">
                                                        <AppIcon src={app.icon} alt={app.name} className="w-8 h-8 object-contain" />
                                                    </div>
                                                    <h3 className="text-lg font-bold group-hover:text-blue-500 transition-colors">{app.name}</h3>
                                                </div>
                                                <p className="text-sm text-gray-600 dark:text-gray-400 flex-grow mb-6">
                                                    {app.shortDescription}
                                                </p>
                                                <div className="flex items-center justify-between mt-auto">
                                                    <div className="flex items-center gap-3 text-gray-400 relative z-20">
                                                        {app.github && (
                                                            <a href={app.github} target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 dark:hover:text-white transition-colors" aria-label="GitHub Repository">
                                                                <Github className="w-4 h-4" />
                                                            </a>
                                                        )}
                                                        {app.website && (
                                                            <a href={app.website} target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 dark:hover:text-white transition-colors" aria-label="Official Website">
                                                                <Globe className="w-4 h-4" />
                                                            </a>
                                                        )}
                                                        {app.docs && (
                                                            <a href={app.docs} target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 dark:hover:text-white transition-colors" aria-label="Documentation">
                                                                <FileText className="w-4 h-4" />
                                                            </a>
                                                        )}
                                                    </div>
                                                    <div className="flex items-center text-sm font-semibold text-blue-600 dark:text-blue-400">
                                                        Deploy Now <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                                                    </div>
                                                </div>
                                            </Card>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </main>
    );
}
{/* Structured Data for SEO */}
<script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
        __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "VPS Apps Directory",
            description: "Deploy popular apps on HostingSpell VPS with easy configurations",
            applicationCategory: "ApplicationDirectory",
            offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
                availability: "https://schema.org/InStock",
            },
            url: "https://hostingspell.com/vps/apps",
        }),
    }}
/>
