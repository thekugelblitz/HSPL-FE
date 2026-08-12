import { notFound } from "next/navigation";
import { getVpsAppBySlug, getAllVpsApps } from "@/lib/data-apps";
import { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Github, Globe, FileText } from "lucide-react";
import AppDeploySidebar from "./AppDeploySidebar";
import { AppIcon } from "../AppIcon";
import { Card } from "@/components/ui/card";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const app = getVpsAppBySlug(slug);

    if (!app) {
        return {
            title: "App Not Found | HostingSpell",
        };
    }

    const categoryLabel = app.category.charAt(0).toUpperCase() + app.category.slice(1);
    const minRam = app.minRam || 2;
    const ramPlan = minRam <= 2 ? "2GB VPS" : minRam <= 4 ? "4GB VPS" : minRam <= 8 ? "8GB VPS" : "16GB+ VPS";

    // Use custom SEO from JSON if available, otherwise generate fallback
    const seo = app.seo;
    const title = seo?.title || `${app.name} VPS Hosting | HostingSpell`;
    const description = seo?.description || `${app.shortDescription} Deploy ${app.name} on HostingSpell's high-performance VPS.`;
    const keywords = seo?.keywords || [
        `${app.name} VPS`,
        `${app.name} hosting`,
        `${app.name} deployment`,
        `${app.name} self-hosted`,
        `${categoryLabel} apps`,
        `VPS deployment`,
        `managed ${app.name}`,
    ];

    return {
        title: title,
        description: description,
        keywords: keywords,
        openGraph: {
            type: "website",
            locale: "en_US",
            siteName: "HostingSpell",
            title: title,
            description: description,
            url: `https://hostingspell.com/vps/apps/${app.slug}`,
            images: [
                {
                    url: `https://hostingspell.com${app.icon}`,
                    width: 1200,
                    height: 630,
                    alt: `${app.name} VPS Hosting`,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: title,
            description: description,
            images: [`https://hostingspell.com${app.icon}`],
        },
    };
}

export function generateStaticParams() {
    return getAllVpsApps().map((app) => ({
        slug: app.slug,
    }));
}

export default async function VpsAppPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const app = getVpsAppBySlug(slug);

    if (!app) {
        notFound();
    }

    const sameCategoryApps = getAllVpsApps()
        .filter((a) => a.category === app.category && a.id !== app.id)
        .slice(0, 3);

    return (
        <div className="bg-background py-4">
            <div className="container mx-auto px-4 max-w-6xl">
                {/* Breadcrumbs */}
                <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
                    <ol className="flex items-center space-x-2">
                        <li>
                            <Link href="/" className="hover:text-blue-500 transition-colors">
                                Home
                            </Link>
                        </li>
                        <li><ChevronRight className="w-4 h-4" /></li>
                        <li>
                            <Link href="/vps" className="hover:text-blue-500 transition-colors">
                                VPS
                            </Link>
                        </li>
                        <li><ChevronRight className="w-4 h-4" /></li>
                        <li>
                            <Link href="/vps/apps" className="hover:text-blue-500 transition-colors">
                                Apps
                            </Link>
                        </li>
                        <li><ChevronRight className="w-4 h-4" /></li>
                        <li className="text-gray-900 dark:text-white font-medium">
                            {app.name}
                        </li>
                    </ol>
                </nav>

                <div className="flex flex-col lg:grid lg:grid-cols-3 gap-8 lg:items-start">
                    {/* Header */}
                    <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 flex items-start gap-4 order-1 w-full">
                        <div className="w-20 h-20 bg-gray-100 dark:bg-gray-800 rounded-2xl flex items-center justify-center flex-shrink-0 border dark:border-gray-800">
                            <AppIcon src={app.icon} alt={app.name} className="w-12 h-12 object-contain" />
                        </div>

                        <div className="space-y-1">
                            <h1 className="text-3xl md:text-4xl font-bold">
                                {app.name}
                            </h1>
                            <p className="text-gray-600 dark:text-gray-400 leading-7">
                                {app.shortDescription}
                            </p>
                            <div className="flex items-center gap-4 pt-2 text-gray-500 dark:text-gray-400">
                                {app.github && (
                                    <a href={app.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-gray-900 dark:hover:text-white transition-colors" aria-label="GitHub Repository">
                                        <Github className="w-4 h-4" /> <span className="text-sm font-medium">GitHub</span>
                                    </a>
                                )}
                                {app.website && (
                                    <a href={app.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-gray-900 dark:hover:text-white transition-colors" aria-label="Official Website">
                                        <Globe className="w-4 h-4" /> <span className="text-sm font-medium">Website</span>
                                    </a>
                                )}
                                {app.docs && (
                                    <a href={app.docs} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-gray-900 dark:hover:text-white transition-colors" aria-label="Documentation">
                                        <FileText className="w-4 h-4" /> <span className="text-sm font-medium">Docs</span>
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1 lg:col-start-3 lg:row-start-1 lg:row-span-2 order-2 w-full">
                        <AppDeploySidebar app={app} />
                    </div>

                    {/* LEFT CONTENT */}
                    <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 space-y-6 order-3 w-full">

                        {/* About */}
                        <div className="space-y-3">
                            <h2 className="text-2xl font-bold">
                                About {app.name}
                            </h2>
                            <p className="text-gray-600 dark:text-gray-300 leading-7">
                                {app.about}
                            </p>
                        </div>

                        {/* Why Deploy */}
                        {app.whyDeploy && app.whyDeploy.length > 0 && (
                            <div className="space-y-4">
                                <h2 className="text-2xl font-bold">
                                    Why deploy {app.name} on HostingSpell
                                </h2>

                                <div className="space-y-4">
                                    {app.whyDeploy.map((reason, idx) => (
                                        <div key={idx} className="space-y-1">
                                            <h3 className="text-lg font-semibold">
                                                {reason.title}
                                            </h3>
                                            <p className="text-gray-600 dark:text-gray-300 leading-7">
                                                {reason.description}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Features */}
                        <div className="space-y-3">
                            <h2 className="text-2xl font-bold">
                                Key Features
                            </h2>

                            <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-300">
                                {app.features.map((feature, idx) => (
                                    <li key={idx}>
                                        <span className="font-semibold text-gray-900 dark:text-white">
                                            {feature.label}
                                        </span>
                                        {feature.description && (
                                            <span className="ml-1">
                                                – {feature.description}
                                            </span>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Use Cases */}
                        <div className="space-y-3">
                            <h2 className="text-2xl font-bold">
                                Common Use Cases
                            </h2>
                            <p className="text-gray-600 dark:text-gray-300 leading-7">
                                {app.useCases}
                            </p>
                        </div>

                        {/* Important Notes & Disclaimer */}
                        {(app.disclaimer || app.minRam >= 16) && (
                            <div className="border border-yellow-200 dark:border-yellow-900/30 bg-yellow-50 dark:bg-yellow-950/20 rounded-xl p-5 space-y-3">
                                <h2 className="text-xl font-bold text-yellow-800 dark:text-yellow-500">
                                    Important Notes & Disclaimer
                                </h2>
                                <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                                    {app.disclaimer && (
                                        <p className="leading-6">{app.disclaimer}</p>
                                    )}
                                    {app.minRam >= 16 && (
                                        <p className="font-semibold">Hardware Requirements:</p>
                                    )}
                                    {app.minRam >= 16 && (
                                        <ul className="list-disc pl-5 space-y-1">
                                            <li>Minimum {app.minRam}GB RAM required for optimal performance</li>
                                            <li>GPU acceleration recommended for AI/LLM workloads</li>
                                            <li>CPU-only inference on high RAM may be significantly slower</li>
                                        </ul>
                                    )}
                                </div>
                            </div>
                        )}

                        {/* Related Apps */}
                        {sameCategoryApps.length > 0 && (
                            <div className="border-t dark:border-gray-800 pt-6 space-y-4 py-4">
                                <h2 className="text-2xl font-bold">
                                    Explore other apps in this category
                                </h2>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                                    {sameCategoryApps.map((relatedApp) => (
                                        <Link
                                            href={`/vps/apps/${relatedApp.slug}`}
                                            key={relatedApp.id}
                                            className="group"
                                        >
                                            <Card className="p-4 h-full flex flex-col hover:border-blue-500 transition-colors dark:bg-[#0A0E17]">
                                                <div className="flex items-center gap-3 mb-2">
                                                    <div className="w-10 h-10 bg-white dark:bg-gray-800 rounded-lg flex items-center justify-center p-2 flex-shrink-0">
                                                        <AppIcon src={relatedApp.icon} alt={relatedApp.name} className="w-6 h-6 object-contain" />
                                                    </div>
                                                    <h3 className="text-base font-semibold text-gray-900 dark:text-white truncate group-hover:text-blue-500 transition-colors">
                                                        {relatedApp.name}
                                                    </h3>
                                                </div>

                                                <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-3">
                                                    {relatedApp.shortDescription}
                                                </p>

                                                <div className="mt-3 text-xs border w-fit px-3 py-1 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800 font-medium transition-colors">
                                                    Deploy
                                                </div>
                                            </Card>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Structured Data for SEO */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "SoftwareApplication",
                        name: app.name,
                        description: app.shortDescription,
                        applicationCategory: "DeveloperApplication",
                        operatingSystem: "Linux",
                        offers: {
                            "@type": "Offer",
                            price: "0",
                            priceCurrency: "USD",
                            availability: "https://schema.org/InStock",
                        },
                        featureList: app.features.map((f) => f.label).join(", "),
                        softwareVersion: "1.0",
                        url: `https://hostingspell.com/vps/apps/${app.slug}`,
                        image: `https://hostingspell.com${app.icon}`,
                        author: {
                            "@type": "Organization",
                            name: app.github ? "Docker" : "HostingSpell",
                        },
                        softwareRequirements: `${app.minRam}GB RAM recommended`,
                        useCategory: app.useCases,
                        whyDeploy: app.whyDeploy.map((d) => d.description).join(" "),
                    }).replace(/</g, '\\u003c'),
                }}
            />
        </div>
    );
}