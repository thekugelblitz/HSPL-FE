import type { Metadata } from "next";
import SEO_CONFIG from "../config/seoConfig";

// images: [{ url: seo.image }],

export function getPageMetadata(pageKey: keyof typeof SEO_CONFIG): Metadata {
    const seo = SEO_CONFIG[pageKey];

    return {
        title: seo.title,
        description: seo.description,
        keywords: seo.keywords ? seo.keywords.split(",").map(k => k.trim()) : undefined,
        authors: seo.author ? [{ name: seo.author }] : undefined,
        creator: seo.author,
        publisher: seo.siteName,
        robots: seo.robots,
        themeColor: seo.themeColor,
        alternates: seo.canonical ? { canonical: seo.canonical } : undefined,
        openGraph: {
            title: seo.title,
            description: seo.description,
            url: seo.url,
            siteName: seo.siteName,
            type: seo.type || "website",
            locale: seo.locale || "en_US",
        },
        twitter: {
            card: seo.twitterCard || "summary_large_image",
            site: seo.twitterSite,
            creator: seo.twitterCreator,
            title: seo.title,
            description: seo.description
        },
        icons: {
            icon: "/favicon.ico",
        },
    };
}
