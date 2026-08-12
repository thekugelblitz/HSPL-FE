// seoConfig.ts
// Central SEO & Meta Configuration for All Pages
// Use this file to manage all titles, descriptions, and social meta data in one place.

export type SEOPage = {
    title: string;
    description: string;
    keywords?: string;
    url: string;
    type?: "website" | "article";
    author?: string;
    siteName?: string;
    robots?: string;
    themeColor?: string;
    twitterCard?: "summary" | "summary_large_image" | "app" | "player";
    twitterSite?: string;
    twitterCreator?: string;
    canonical?: string;
    locale?: string;
    dctermsSubject?: string;
    dctermsType?: string;
    dctermsLanguage?: string;
    contentLanguage?: string;
    msApplicationConfig?: string;
};

export type SEOConfigType = {
    [key: string]: SEOPage;
};

// ===================
// SITE-WIDE CONSTANTS
// ===================
const SITE_NAME = "HostignSpell";
const BASE_URL = "https://hostingspell.com";
const AUTHOR = "HostingSpell Team";
const DEFAULT_THEME_COLOR = "#ffffff";
const DEFAULT_LOCALE = "en_US";
const DEFAULT_TWITTER_SITE = "@hostingspell";
const DEFAULT_TWITTER_CREATOR = "@hostingspell";

const DEFAULT_DCTERMS_SUBJECT =
    "Cheap Hosting, Cheap Web Hosting, Cheap Web Hosting India, Low Price Hosting, Affordable Hosting, Cheapest Hosting, Best Web Hosting India, Top Web Hosting Companies, Lowest Price Hosting";
const DEFAULT_DCTERMS_TYPE = "Service";
const DEFAULT_DCTERMS_LANGUAGE = "en-us";
const DEFAULT_CONTENT_LANGUAGE = "en-us";
const DEFAULT_MS_APPLICATION_CONFIG = "none";


// ====================
// PAGE SEO DEFINITIONS
// ====================
const SEO_CONFIG: SEOConfigType = {
    // Home Page
    "home": {
        title: `Best Cheap Web Hosting India | Starts From Rs.399/Year | Cheap Hosting India`,
        description:
            "We have 7+ years of expertise in Web Hosting & IT Infrastructure. Enjoy reliable, fast and cheap hosting solutions—better than GoDaddy or Endurance, at remarkably reduced prices.",
        keywords: "cheap web hosting, web hosting India, affordable hosting, domain, premium hosting, web hosting reseller",
        url: `${BASE_URL}/`,
        type: "website",
        author: AUTHOR,
        siteName: SITE_NAME,
        robots: "index, follow",
        themeColor: DEFAULT_THEME_COLOR,
        twitterCard: "summary_large_image",
        twitterSite: DEFAULT_TWITTER_SITE,
        twitterCreator: DEFAULT_TWITTER_CREATOR,
        canonical: `${BASE_URL}/`,
        locale: DEFAULT_LOCALE,
        dctermsSubject: DEFAULT_DCTERMS_SUBJECT,
        dctermsType: DEFAULT_DCTERMS_TYPE,
        dctermsLanguage: DEFAULT_DCTERMS_LANGUAGE,
        contentLanguage: DEFAULT_CONTENT_LANGUAGE,
        msApplicationConfig: DEFAULT_MS_APPLICATION_CONFIG,
    },

    // Cloud Hosting
    "cloud-hosting": {
        title: `Cloud Hosting - Powerful yet Affordable Unlimited Shared Hosting - HostingSpell India`,
        description:
            "Experience affordable unlimited cloud hosting with hassle-free migration, powerful resources, and 24x7 support tailored for modern websites.",
        keywords: "cloud hosting, unlimited shared hosting, affordable hosting, managed migration, cPanel migration",
        url: `${BASE_URL}/cloud-hosting`,
        type: "website",
        author: AUTHOR,
        siteName: SITE_NAME,
        robots: "index, follow",
        themeColor: DEFAULT_THEME_COLOR,
        twitterCard: "summary_large_image",
        twitterSite: DEFAULT_TWITTER_SITE,
        twitterCreator: DEFAULT_TWITTER_CREATOR,
        canonical: `${BASE_URL}/cloud-hosting`,
        locale: DEFAULT_LOCALE,
        dctermsSubject: "cloud hosting, cheap hosting, powerful vps hosting",
        dctermsType: DEFAULT_DCTERMS_TYPE,
        dctermsLanguage: DEFAULT_DCTERMS_LANGUAGE,
        contentLanguage: DEFAULT_CONTENT_LANGUAGE,
        msApplicationConfig: DEFAULT_MS_APPLICATION_CONFIG,
    },

    // Combo Hosting
    "combo-hosting": {
        title: `Combo Hosting | ${SITE_NAME}`,
        description:
            "Affordable combo hosting plans that combine the best features for personal and business websites.",
        keywords: "combo hosting, affordable hosting, business hosting",
        url: `${BASE_URL}/combo-hosting`,
        type: "website",
        author: AUTHOR,
        siteName: SITE_NAME,
        robots: "index, follow",
        themeColor: DEFAULT_THEME_COLOR,
        twitterCard: "summary_large_image",
        twitterSite: DEFAULT_TWITTER_SITE,
        twitterCreator: DEFAULT_TWITTER_CREATOR,
        canonical: `${BASE_URL}/combo-hosting`,
        locale: DEFAULT_LOCALE,
        dctermsSubject: "combo hosting, cheap hosting, free domain, cpanel hosting",
        dctermsType: DEFAULT_DCTERMS_TYPE,
        dctermsLanguage: DEFAULT_DCTERMS_LANGUAGE,
        contentLanguage: DEFAULT_CONTENT_LANGUAGE,
        msApplicationConfig: DEFAULT_MS_APPLICATION_CONFIG,
    },

    // Premium Hosting
    "premium-hosting": {
        title: `Premium Hosting - High Performance, Secure Web Hosting | HostingSpell`,
        description:
            "Top-tier premium hosting plans with blazing-fast performance, robust security, and 24/7 support for demanding business websites.",
        keywords: "premium hosting, high performance hosting, secure hosting, business hosting, reliable hosting",
        url: `${BASE_URL}/premium-hosting`,
        type: "website",
        author: AUTHOR,
        siteName: SITE_NAME,
        robots: "index, follow",
        themeColor: DEFAULT_THEME_COLOR,
        twitterCard: "summary_large_image",
        twitterSite: DEFAULT_TWITTER_SITE,
        twitterCreator: DEFAULT_TWITTER_CREATOR,
        canonical: `${BASE_URL}/premium-hosting`,
        locale: DEFAULT_LOCALE,
        dctermsSubject: "premium hosting, cheap hosting, linode, digitalocean",
        dctermsType: DEFAULT_DCTERMS_TYPE,
        dctermsLanguage: DEFAULT_DCTERMS_LANGUAGE,
        contentLanguage: DEFAULT_CONTENT_LANGUAGE,
        msApplicationConfig: DEFAULT_MS_APPLICATION_CONFIG,
    },
    // VPS Hosting
    "vps": {
        title: `VPS Hosting - Powerful yet Affordable VPS Hosting - HostingSpell India`,
        description:
            "Enjoy isolated, high-performance VPS hosting solutions with dedicated resources ideal for websites and apps needing reliable control and scalability.",
        keywords: "vps hosting, virtual private server, dedicated resources, scalable hosting, affordable vps",
        url: `${BASE_URL}/vps`,
        type: "website",
        author: AUTHOR,
        siteName: SITE_NAME,
        robots: "index, follow",
        themeColor: DEFAULT_THEME_COLOR,
        twitterCard: "summary_large_image",
        twitterSite: DEFAULT_TWITTER_SITE,
        twitterCreator: DEFAULT_TWITTER_CREATOR,
        canonical: `${BASE_URL}/vps`,
        locale: DEFAULT_LOCALE,
        dctermsSubject: "vps hosting, cheap hosting, powerful vps hosting",
        dctermsType: DEFAULT_DCTERMS_TYPE,
        dctermsLanguage: DEFAULT_DCTERMS_LANGUAGE,
        contentLanguage: DEFAULT_CONTENT_LANGUAGE,
        msApplicationConfig: DEFAULT_MS_APPLICATION_CONFIG,
    },

    // India VPS Hosting
    "vps-india": {
        title: `India VPS Hosting | NVMe VPS Server in India from ₹899/mo - HostingSpell`,
        description:
            "Deploy high-performance India VPS hosting with NVMe SSD storage, AMD EPYC hardware, and low latency across Mumbai, Delhi, Bangalore & more. Affordable managed VPS in INR for businesses, developers, and enterprises.",
        keywords:
            "India VPS hosting, Indian VPS server, VPS hosting India, NVMe VPS India, affordable India VPS, managed VPS India, KVM VPS India, low latency VPS India, VPS server Mumbai, VPS hosting Delhi, Indian cloud VPS",
        url: `${BASE_URL}/vps/india`,
        type: "website",
        author: AUTHOR,
        siteName: SITE_NAME,
        robots: "index, follow",
        themeColor: DEFAULT_THEME_COLOR,
        twitterCard: "summary_large_image",
        twitterSite: DEFAULT_TWITTER_SITE,
        twitterCreator: DEFAULT_TWITTER_CREATOR,
        canonical: `${BASE_URL}/vps/india`,
        locale: DEFAULT_LOCALE,
        dctermsSubject:
            "India VPS hosting, NVMe VPS India, managed VPS India, affordable VPS hosting India, Indian VPS server",
        dctermsType: DEFAULT_DCTERMS_TYPE,
        dctermsLanguage: DEFAULT_DCTERMS_LANGUAGE,
        contentLanguage: DEFAULT_CONTENT_LANGUAGE,
        msApplicationConfig: DEFAULT_MS_APPLICATION_CONFIG,
    },

    // Reseller Hosting
    "reseller": {
        title: `Best Reseller Hosting Plans | Cheap Reseller Hosting - HostingSpell`,
        description:
            "Launch your hosting business with affordable reseller packages offering unlimited resources, easy management, and scalable solutions.",
        keywords: "reseller hosting, cheap reseller, hosting business, cPanel reseller, scalable hosting",
        url: `${BASE_URL}/reseller`,
        type: "website",
        author: AUTHOR,
        siteName: SITE_NAME,
        robots: "index, follow",
        themeColor: DEFAULT_THEME_COLOR,
        twitterCard: "summary_large_image",
        twitterSite: DEFAULT_TWITTER_SITE,
        twitterCreator: DEFAULT_TWITTER_CREATOR,
        canonical: `${BASE_URL}/reseller`,
        locale: DEFAULT_LOCALE,
        dctermsSubject: "Reseller hosting, reseller cpanel hosting, cpanel reseller hosting, best reseller hosting, cheap reseller hosting",
        dctermsType: DEFAULT_DCTERMS_TYPE,
        dctermsLanguage: DEFAULT_DCTERMS_LANGUAGE,
        contentLanguage: DEFAULT_CONTENT_LANGUAGE,
        msApplicationConfig: DEFAULT_MS_APPLICATION_CONFIG,
    },

    // Domains
    "domain": {
        title: `Domain Registration - Buy Cheap Domain Name | HostingSpell`,
        description:
            "Find and register your perfect domain name with HostingSpell.Easily find, register, and manage your perfect domain name with HostingSpell. Affordable domain registration with reliable support for your online identity.",
        keywords: "domain registration, buy domain, cheap domains, domain transfer, manage domains",
        url: `${BASE_URL}/domain`,
        type: "website",
        author: AUTHOR,
        siteName: SITE_NAME,
        robots: "index, follow",
        themeColor: DEFAULT_THEME_COLOR,
        twitterCard: "summary_large_image",
        twitterSite: DEFAULT_TWITTER_SITE,
        twitterCreator: DEFAULT_TWITTER_CREATOR,
        canonical: `${BASE_URL}/domain`,
        locale: DEFAULT_LOCALE,
        dctermsSubject: "Domain names, domain name registration, domain name offers",
        dctermsType: DEFAULT_DCTERMS_TYPE,
        dctermsLanguage: DEFAULT_DCTERMS_LANGUAGE,
        contentLanguage: DEFAULT_CONTENT_LANGUAGE,
        msApplicationConfig: DEFAULT_MS_APPLICATION_CONFIG,
    },

    // Blog
    "blog": {
        title: `Blog | ${SITE_NAME}`,
        description:
            "Read expert tips, news, and tutorials on web hosting, domains, and online business.",
        keywords: "hosting blog, web tips, online business",
        url: `${BASE_URL}/blog`, type: "article",
        author: AUTHOR,
        siteName: SITE_NAME,
        robots: "index, follow",
        themeColor: DEFAULT_THEME_COLOR,
        twitterCard: "summary_large_image",
        twitterSite: DEFAULT_TWITTER_SITE,
        twitterCreator: DEFAULT_TWITTER_CREATOR,
        canonical: `${BASE_URL}/blog`,
        locale: DEFAULT_LOCALE,
    },

    // Pricing
    "pricing": {
        title: `Pricing Plans | ${SITE_NAME}`,
        description:
            "Choose from affordable hosting plans that suit your needs, from beginners to enterprises.",
        keywords: "hosting pricing, web hosting cost, hosting plans",
        url: `${BASE_URL}/pricing`,
        type: "website",
        author: AUTHOR,
        siteName: SITE_NAME,
        robots: "index, follow",
        themeColor: DEFAULT_THEME_COLOR,
        twitterCard: "summary_large_image",
        twitterSite: DEFAULT_TWITTER_SITE,
        twitterCreator: DEFAULT_TWITTER_CREATOR,
        canonical: `${BASE_URL}/pricing`,
        locale: DEFAULT_LOCALE,
        dctermsSubject: "cloud hosting, premium hosting, combo hosting, free doamin, vps hostign, reseller hostign, domain name",
        dctermsType: DEFAULT_DCTERMS_TYPE,
        dctermsLanguage: DEFAULT_DCTERMS_LANGUAGE,
        contentLanguage: DEFAULT_CONTENT_LANGUAGE,
        msApplicationConfig: DEFAULT_MS_APPLICATION_CONFIG,
    },

    // About Us
    "about": {
        title: `About Us - HostingSpell | Trusted & Affordable Web Hosting Provider`,
        description:
            "Discover HostingSpell's story, our passionate team, and our mission to offer affordable, high-quality web hosting to individuals and businesses across the globe.",
        keywords: "about hosting company, hosting team, web hosting mission, web hosting india",
        url: `${BASE_URL}/about`,
        type: "website",
        author: AUTHOR,
        siteName: SITE_NAME,
        robots: "index, follow",
        themeColor: DEFAULT_THEME_COLOR,
        twitterCard: "summary_large_image",
        twitterSite: DEFAULT_TWITTER_SITE,
        twitterCreator: DEFAULT_TWITTER_CREATOR,
        canonical: `${BASE_URL}/about`,
        locale: DEFAULT_LOCALE,
        dctermsSubject: "About HostingSpell",
        dctermsType: DEFAULT_DCTERMS_TYPE,
        dctermsLanguage: DEFAULT_DCTERMS_LANGUAGE,
        contentLanguage: DEFAULT_CONTENT_LANGUAGE,
        msApplicationConfig: DEFAULT_MS_APPLICATION_CONFIG,
    },

    // Contact
    "contact": {
        title: `Contact Us - Get Hosting Support | HostingSpell`,
        description: "Contact HostingSpell's team for support, sales questions, partnership opportunities, and more. Fast, friendly responses for every need.",
        keywords: "contact hosting, hosting support, web hosting help, get support, customer service",
        url: `${BASE_URL}/contact`,
        type: "website",
        author: AUTHOR,
        siteName: SITE_NAME,
        robots: "index, follow",
        themeColor: DEFAULT_THEME_COLOR,
        twitterCard: "summary_large_image",
        twitterSite: DEFAULT_TWITTER_SITE,
        twitterCreator: DEFAULT_TWITTER_CREATOR,
        canonical: `${BASE_URL}/contact`,
        locale: DEFAULT_LOCALE,
        dctermsSubject: "Contact HostingSpell",
        dctermsType: DEFAULT_DCTERMS_TYPE,
        dctermsLanguage: DEFAULT_DCTERMS_LANGUAGE,
        contentLanguage: DEFAULT_CONTENT_LANGUAGE,
        msApplicationConfig: DEFAULT_MS_APPLICATION_CONFIG,
    },

    // Legal Main
    "legal": {
        title: `Legal | ${SITE_NAME}`,
        description: "Read our legal information, terms, and policies.",
        keywords: "hosting legal, hosting policies, terms and conditions",
        url: `${BASE_URL}/legal`,
        type: "website",
        author: AUTHOR,
        siteName: SITE_NAME,
        robots: "noindex, follow",
        themeColor: DEFAULT_THEME_COLOR,
        twitterCard: "summary_large_image",
        twitterSite: DEFAULT_TWITTER_SITE,
        twitterCreator: DEFAULT_TWITTER_CREATOR,
        canonical: `${BASE_URL}/legal`,
        locale: DEFAULT_LOCALE,
        dctermsSubject: "Legal HostingSpell",
        dctermsType: DEFAULT_DCTERMS_TYPE,
        dctermsLanguage: DEFAULT_DCTERMS_LANGUAGE,
        contentLanguage: DEFAULT_CONTENT_LANGUAGE,
        msApplicationConfig: DEFAULT_MS_APPLICATION_CONFIG,
    },

    // Privacy Policy
    "legal-privacy-policy": {
        title: `Privacy Policy | ${SITE_NAME}`,
        description:
            "Read our privacy policy to understand how we handle your personal data.",
        keywords: "privacy policy, data protection, hosting privacy",
        url: `${BASE_URL}/legal/privacy-policy`,
        type: "article",
        author: AUTHOR,
        siteName: SITE_NAME,
        robots: "noindex, follow",
        themeColor: DEFAULT_THEME_COLOR,
        twitterCard: "summary_large_image",
        twitterSite: DEFAULT_TWITTER_SITE,
        twitterCreator: DEFAULT_TWITTER_CREATOR,
        canonical: `${BASE_URL}/legal/privacy-policy`,
        locale: DEFAULT_LOCALE,
        dctermsSubject: "Privacy Policy HostingSpell",
        dctermsType: DEFAULT_DCTERMS_TYPE,
        dctermsLanguage: DEFAULT_DCTERMS_LANGUAGE,
        contentLanguage: DEFAULT_CONTENT_LANGUAGE,
        msApplicationConfig: DEFAULT_MS_APPLICATION_CONFIG,
    },

    // Terms of Service
    "legal-terms-of-service": {
        title: `Terms of Service | ${SITE_NAME}`,
        description:
            "Read our terms of service to understand the rules and guidelines for using our services.",
        keywords: "terms of service, hosting rules, hosting agreement",
        url: `${BASE_URL}/legal/terms-of-service`,
        type: "article",
        author: AUTHOR,
        siteName: SITE_NAME,
        robots: "noindex, follow",
        themeColor: DEFAULT_THEME_COLOR,
        twitterCard: "summary_large_image",
        twitterSite: DEFAULT_TWITTER_SITE,
        twitterCreator: DEFAULT_TWITTER_CREATOR,
        canonical: `${BASE_URL}/legal/terms-of-service`,
        locale: DEFAULT_LOCALE,
        dctermsSubject: "Terms Of Service HostingSpell",
        dctermsType: DEFAULT_DCTERMS_TYPE,
        dctermsLanguage: DEFAULT_DCTERMS_LANGUAGE,
        contentLanguage: DEFAULT_CONTENT_LANGUAGE,
        msApplicationConfig: DEFAULT_MS_APPLICATION_CONFIG,
    },

    // Refund Policy
    "legal-refund-policy": {
        title: `Refund Policy | ${SITE_NAME}`,
        description:
            "Read our refund policy to learn how we handle service cancellations and refunds.",
        keywords: "refund policy, hosting refund, cancellation policy",
        url: `${BASE_URL}/legal/refund-policy`,
        type: "article",
        author: AUTHOR,
        siteName: SITE_NAME,
        robots: "noindex, follow",
        themeColor: DEFAULT_THEME_COLOR,
        twitterCard: "summary_large_image",
        twitterSite: DEFAULT_TWITTER_SITE,
        twitterCreator: DEFAULT_TWITTER_CREATOR,
        canonical: `${BASE_URL}/legal/refund-policy`,
        locale: DEFAULT_LOCALE,
        dctermsSubject: "Refund Policy HostingSpell",
        dctermsType: DEFAULT_DCTERMS_TYPE,
        dctermsLanguage: DEFAULT_DCTERMS_LANGUAGE,
        contentLanguage: DEFAULT_CONTENT_LANGUAGE,
        msApplicationConfig: DEFAULT_MS_APPLICATION_CONFIG,
    },

    // Get IP Tool
    "tools-getip": {
        title: `Get your IP Address | ${SITE_NAME}`,
        description:
            "Here at HostingSpell using this tool you can get your IP Address which can be helpful sometimes.",
        keywords: "Cheap Hosting, Cheap Web Hosting, Cheap Web Hosting India, Low Price Hosting, Affordable Hosting, Cheapest Hosting, Best Web Hosting India, Top Web Hosting Companies, Lowest Price Hosting",
        url: `${BASE_URL}/tools/get-ip`,
        type: "website",
        author: AUTHOR,
        siteName: SITE_NAME,
        robots: "index, follow",
        themeColor: DEFAULT_THEME_COLOR,
        twitterCard: "summary_large_image",
        twitterSite: DEFAULT_TWITTER_SITE,
        twitterCreator: DEFAULT_TWITTER_CREATOR,
        canonical: `${BASE_URL}/tools/getip`,
        locale: DEFAULT_LOCALE,
        dctermsSubject: "my ip address, ip info, website hosting",
        dctermsType: DEFAULT_DCTERMS_TYPE,
        dctermsLanguage: DEFAULT_DCTERMS_LANGUAGE,
        contentLanguage: DEFAULT_CONTENT_LANGUAGE,
        msApplicationConfig: DEFAULT_MS_APPLICATION_CONFIG,
    },
    // NS Tool
    "tools-ns": {
        title: `Find Your Domain Nameservers | ${SITE_NAME}`,
        description:
            "This page will be used to find your nameservers if you forgot it. It's an automated process that finds your domain nameservers easily.",
        keywords: "Find Nameservers",
        url: `${BASE_URL}/tools/ns`,
        type: "website",
        author: AUTHOR,
        siteName: SITE_NAME,
        robots: "index, follow",
        themeColor: DEFAULT_THEME_COLOR,
        twitterCard: "summary_large_image",
        twitterSite: DEFAULT_TWITTER_SITE,
        twitterCreator: DEFAULT_TWITTER_CREATOR,
        canonical: `${BASE_URL}/tools/ns`,
        locale: DEFAULT_LOCALE,
        dctermsSubject: "domain nameserver, website hosting",
        dctermsType: DEFAULT_DCTERMS_TYPE,
        dctermsLanguage: DEFAULT_DCTERMS_LANGUAGE,
        contentLanguage: DEFAULT_CONTENT_LANGUAGE,
        msApplicationConfig: DEFAULT_MS_APPLICATION_CONFIG,
    },
    // DNS
    "tools-dns": {
        title: `DNS Propagation Checker | ${SITE_NAME}`,
        description:
            "Check DNS propagation instantly across multiple global locations. Verify A, AAAA, CNAME, MX, NS, and TXT records in real time.",
        keywords: "DNS propagation, DNS checker, global DNS lookup, DNS records, A record, AAAA record, CNAME record, MX record, NS record, TXT record",
        url: `${BASE_URL}/tools/dns`,
        type: "website",
        author: AUTHOR,
        siteName: SITE_NAME,
        robots: "index, follow",
        themeColor: DEFAULT_THEME_COLOR,
        twitterCard: "summary_large_image",
        twitterSite: DEFAULT_TWITTER_SITE,
        twitterCreator: DEFAULT_TWITTER_CREATOR,
        canonical: `${BASE_URL}/tools/dns`,
        locale: DEFAULT_LOCALE,
        dctermsSubject: "domain nameserver propagation checker, website hosting",
        dctermsType: DEFAULT_DCTERMS_TYPE,
        dctermsLanguage: DEFAULT_DCTERMS_LANGUAGE,
        contentLanguage: DEFAULT_CONTENT_LANGUAGE,
        msApplicationConfig: DEFAULT_MS_APPLICATION_CONFIG,
    },
    // SEO
    "seo": {
        title: `SEO Services | ${SITE_NAME}`,
        description:
            "Boost your online visibility with expert SEO services. Improve search rankings, drive organic traffic, and optimize your website for maximum performance.",
        keywords: "SEO services, search engine optimization, website ranking, organic traffic, keyword research, on-page SEO, off-page SEO, technical SEO",
        url: `${BASE_URL}/seo`,
        type: "website",
        author: AUTHOR,
        siteName: SITE_NAME,
        robots: "index, follow",
        themeColor: DEFAULT_THEME_COLOR,
        twitterCard: "summary_large_image",
        twitterSite: DEFAULT_TWITTER_SITE,
        twitterCreator: DEFAULT_TWITTER_CREATOR,
        canonical: `${BASE_URL}/seo`,
        locale: DEFAULT_LOCALE,
        dctermsSubject: "SEO optimization services, digital marketing",
        dctermsType: DEFAULT_DCTERMS_TYPE,
        dctermsLanguage: DEFAULT_DCTERMS_LANGUAGE,
        contentLanguage: DEFAULT_CONTENT_LANGUAGE,
        msApplicationConfig: DEFAULT_MS_APPLICATION_CONFIG,
    },
    "graphics-design": {
        title: `Graphic Design & Creative Services | ${SITE_NAME}`,
        description:
            "Professional graphic design, branding, and game design services. From logos and brand identity to social media graphics and immersive game visuals, we help your business stand out.",
        keywords: "graphic design, logo design, branding, brand identity, creative design, social media graphics, marketing design, business identity, professional design services, game design, game graphics, game art, interactive design",
        url: `${BASE_URL}/graphics-design`,
        type: "website",
        author: AUTHOR,
        siteName: SITE_NAME,
        robots: "index, follow",
        themeColor: DEFAULT_THEME_COLOR,
        twitterCard: "summary_large_image",
        twitterSite: DEFAULT_TWITTER_SITE,
        twitterCreator: DEFAULT_TWITTER_CREATOR,
        canonical: `${BASE_URL}/graphics-design`,
        locale: DEFAULT_LOCALE,
        dctermsSubject: "graphic design, branding, game design, creative services",
        dctermsType: DEFAULT_DCTERMS_TYPE,
        dctermsLanguage: DEFAULT_DCTERMS_LANGUAGE,
        contentLanguage: DEFAULT_CONTENT_LANGUAGE,
        msApplicationConfig: DEFAULT_MS_APPLICATION_CONFIG,
    },
    "website-development": {
        title: `Website Development Services | ${SITE_NAME}`,
        description:
            "Professional website development services to build fast, secure, and scalable websites. From custom solutions to CMS platforms, we make your vision a reality.",
        keywords: "web development, website design, custom websites, responsive design, CMS development, frontend, backend, full-stack development",
        url: `${BASE_URL}/web-development`,
        type: "website",
        author: AUTHOR,
        siteName: SITE_NAME,
        robots: "index, follow",
        themeColor: DEFAULT_THEME_COLOR,
        twitterCard: "summary_large_image",
        twitterSite: DEFAULT_TWITTER_SITE,
        twitterCreator: DEFAULT_TWITTER_CREATOR,
        canonical: `${BASE_URL}/website-development`,
        locale: DEFAULT_LOCALE,
        dctermsSubject: "website development services, website design, coding",
        dctermsType: DEFAULT_DCTERMS_TYPE,
        dctermsLanguage: DEFAULT_DCTERMS_LANGUAGE,
        contentLanguage: DEFAULT_CONTENT_LANGUAGE,
        msApplicationConfig: DEFAULT_MS_APPLICATION_CONFIG,
    },
    "digital-marketing": {
        title: `Digital Marketing Services | ${SITE_NAME}`,
        description:
            "Grow your business with our digital marketing services. We specialize in SEO, PPC, social media, and content marketing to maximize your online presence.",
        keywords: "digital marketing, SEO, social media marketing, PPC, content marketing, online advertising, internet marketing, brand awareness",
        url: `${BASE_URL}/digital-marketing`,
        type: "website",
        author: AUTHOR,
        siteName: SITE_NAME,
        robots: "index, follow",
        themeColor: DEFAULT_THEME_COLOR,
        twitterCard: "summary_large_image",
        twitterSite: DEFAULT_TWITTER_SITE,
        twitterCreator: DEFAULT_TWITTER_CREATOR,
        canonical: `${BASE_URL}/digital-marketing`,
        locale: DEFAULT_LOCALE,
        dctermsSubject: "digital marketing services, online advertising",
        dctermsType: DEFAULT_DCTERMS_TYPE,
        dctermsLanguage: DEFAULT_DCTERMS_LANGUAGE,
        contentLanguage: DEFAULT_CONTENT_LANGUAGE,
        msApplicationConfig: DEFAULT_MS_APPLICATION_CONFIG,
    },
    "offers": {
        title: `Special Offers & Deals | ${SITE_NAME}`,
        description:
            "Discover exclusive discounts and special promotions on our hosting services. Limited time offers on domains, hosting plans, VPS, and more.",
        keywords: "website hosting offers, discount on domain, .com offer",
        url: `${BASE_URL}/offers`,
        type: "website",
        author: AUTHOR,
        siteName: SITE_NAME,
        robots: "index, follow",
        themeColor: DEFAULT_THEME_COLOR,
        twitterCard: "summary_large_image",
        twitterSite: DEFAULT_TWITTER_SITE,
        twitterCreator: DEFAULT_TWITTER_CREATOR,
        canonical: `${BASE_URL}/offers`,
        locale: DEFAULT_LOCALE,
        dctermsSubject: "website hosting offers",
        dctermsType: DEFAULT_DCTERMS_TYPE,
        dctermsLanguage: DEFAULT_DCTERMS_LANGUAGE,
        contentLanguage: DEFAULT_CONTENT_LANGUAGE,
        msApplicationConfig: DEFAULT_MS_APPLICATION_CONFIG,
    },
    // TLD Pages
    "com-domains": {
        title: `.COM Domain Registration | Register .COM Domain Names - ${SITE_NAME}`,
        description:
            "Register your .COM domain name at the best price. Get exclusive deals on .COM domains with reliable DNS management and free add-ons.",
        keywords: ".com domain, .com registration, buy .com domain, cheap .com domain, domain registration",
        url: `${BASE_URL}/tld/com`,
        type: "website",
        author: AUTHOR,
        siteName: SITE_NAME,
        robots: "index, follow",
        themeColor: DEFAULT_THEME_COLOR,
        twitterCard: "summary_large_image",
        twitterSite: DEFAULT_TWITTER_SITE,
        twitterCreator: DEFAULT_TWITTER_CREATOR,
        canonical: `${BASE_URL}/tld/com`,
        locale: DEFAULT_LOCALE,
        dctermsSubject: ".com domain registration, domain names, website domains",
        dctermsType: DEFAULT_DCTERMS_TYPE,
        dctermsLanguage: DEFAULT_DCTERMS_LANGUAGE,
        contentLanguage: DEFAULT_CONTENT_LANGUAGE,
        msApplicationConfig: DEFAULT_MS_APPLICATION_CONFIG,
    },
    "in-domains": {
        title: `.IN Domain Registration | Register .IN Domain Names - ${SITE_NAME}`,
        description:
            "Register your .IN domain name for your Indian business or website. Best prices on .IN domains with instant registration and free features.",
        keywords: ".in domain, .in registration, buy .in domain, cheap .in domain, indian domain registration",
        url: `${BASE_URL}/tld/in`,
        type: "website",
        author: AUTHOR,
        siteName: SITE_NAME,
        robots: "index, follow",
        themeColor: DEFAULT_THEME_COLOR,
        twitterCard: "summary_large_image",
        twitterSite: DEFAULT_TWITTER_SITE,
        twitterCreator: DEFAULT_TWITTER_CREATOR,
        canonical: `${BASE_URL}/tld/in`,
        locale: DEFAULT_LOCALE,
        dctermsSubject: ".in domain registration, indian domains, website domains",
        dctermsType: DEFAULT_DCTERMS_TYPE,
        dctermsLanguage: DEFAULT_DCTERMS_LANGUAGE,
        contentLanguage: DEFAULT_CONTENT_LANGUAGE,
        msApplicationConfig: DEFAULT_MS_APPLICATION_CONFIG,
    },
    // WordPress Hosting
    "wordpress-hosting": {
        title: `WordPress Hosting - Fast, Secure & Managed WordPress Hosting | HostingSpell`,
        description:
            "Supercharge your WordPress site with HostingSpell's managed WordPress hosting. LiteSpeed cache, one-click installs, daily backups, free SSL, and expert 24/7 support.",
        keywords: "wordpress hosting, managed wordpress, wordpress speed, wordpress security, wp hosting India, litespeed wordpress, woocommerce hosting",
        url: `${BASE_URL}/wordpress-hosting`,
        type: "website",
        author: AUTHOR,
        siteName: SITE_NAME,
        robots: "index, follow",
        themeColor: DEFAULT_THEME_COLOR,
        twitterCard: "summary_large_image",
        twitterSite: DEFAULT_TWITTER_SITE,
        twitterCreator: DEFAULT_TWITTER_CREATOR,
        canonical: `${BASE_URL}/wordpress-hosting`,
        locale: DEFAULT_LOCALE,
        dctermsSubject: "wordpress hosting, managed wordpress, cheap wordpress hosting india",
        dctermsType: DEFAULT_DCTERMS_TYPE,
        dctermsLanguage: DEFAULT_DCTERMS_LANGUAGE,
        contentLanguage: DEFAULT_CONTENT_LANGUAGE,
        msApplicationConfig: DEFAULT_MS_APPLICATION_CONFIG,
    },

    // Node.js Hosting
    "nodejs-hosting": {
        title: `Node.js Hosting - Deploy Node.js Apps via cPanel | HostingSpell`,
        description:
            "Host Node.js applications with ease on HostingSpell's cPanel hosting. Powered by Phusion Passenger, Node.js Manager, npm support, and scalable VPS upgrade paths.",
        keywords: "nodejs hosting, node.js hosting india, nodejs cpanel, passenger nodejs, npm hosting, express hosting, nodejs app hosting",
        url: `${BASE_URL}/nodejs-hosting`,
        type: "website",
        author: AUTHOR,
        siteName: SITE_NAME,
        robots: "index, follow",
        themeColor: DEFAULT_THEME_COLOR,
        twitterCard: "summary_large_image",
        twitterSite: DEFAULT_TWITTER_SITE,
        twitterCreator: DEFAULT_TWITTER_CREATOR,
        canonical: `${BASE_URL}/nodejs-hosting`,
        locale: DEFAULT_LOCALE,
        dctermsSubject: "nodejs hosting, node.js cpanel hosting, passenger application server",
        dctermsType: DEFAULT_DCTERMS_TYPE,
        dctermsLanguage: DEFAULT_DCTERMS_LANGUAGE,
        contentLanguage: DEFAULT_CONTENT_LANGUAGE,
        msApplicationConfig: DEFAULT_MS_APPLICATION_CONFIG,
    },

    // Python Hosting
    "python-hosting": {
        title: `Python Hosting - Django, Flask & FastAPI Hosting via cPanel | HostingSpell`,
        description:
            "Deploy Python applications including Django, Flask, and FastAPI on HostingSpell cPanel hosting. Powered by Phusion Passenger WSGI, Python Manager, virtualenv support, and easy VPS scaling.",
        keywords: "python hosting, django hosting, flask hosting, fastapi hosting, python cpanel, passenger wsgi, python india hosting, virtualenv hosting",
        url: `${BASE_URL}/python-hosting`,
        type: "website",
        author: AUTHOR,
        siteName: SITE_NAME,
        robots: "index, follow",
        themeColor: DEFAULT_THEME_COLOR,
        twitterCard: "summary_large_image",
        twitterSite: DEFAULT_TWITTER_SITE,
        twitterCreator: DEFAULT_TWITTER_CREATOR,
        canonical: `${BASE_URL}/python-hosting`,
        locale: DEFAULT_LOCALE,
        dctermsSubject: "python hosting, django hosting, flask hosting, passenger wsgi, cpanel python",
        dctermsType: DEFAULT_DCTERMS_TYPE,
        dctermsLanguage: DEFAULT_DCTERMS_LANGUAGE,
        contentLanguage: DEFAULT_CONTENT_LANGUAGE,
        msApplicationConfig: DEFAULT_MS_APPLICATION_CONFIG,
    },

    "net-domains": {
        title: `.NET Domain Registration | Register .NET Domain Names - ${SITE_NAME}`,
        description:
            "Secure your .NET domain name at competitive prices. Perfect for tech companies and networks with professional DNS management included.",
        keywords: ".net domain, .net registration, buy .net domain, cheap .net domain, domain registration",
        url: `${BASE_URL}/tld/net`,
        type: "website",
        author: AUTHOR,
        siteName: SITE_NAME,
        robots: "index, follow",
        themeColor: DEFAULT_THEME_COLOR,
        twitterCard: "summary_large_image",
        twitterSite: DEFAULT_TWITTER_SITE,
        twitterCreator: DEFAULT_TWITTER_CREATOR,
        canonical: `${BASE_URL}/tld/net`,
        locale: DEFAULT_LOCALE,
        dctermsSubject: ".net domain registration, domain names, website domains",
        dctermsType: DEFAULT_DCTERMS_TYPE,
        dctermsLanguage: DEFAULT_DCTERMS_LANGUAGE,
        contentLanguage: DEFAULT_CONTENT_LANGUAGE,
        msApplicationConfig: DEFAULT_MS_APPLICATION_CONFIG,
    },

    // Showcase / Portfolio
    "showcase": {
        title: `Client Showcase & Success Stories | HostingSpell`,
        description:
            "Explore HostingSpell's portfolio of successful client projects, real customer reviews, and live hosted websites. See how 110,000+ businesses trust us for reliable web hosting.",
        keywords: "hosting showcase, client portfolio, web hosting success stories, customer reviews, hosted websites, case studies, hosting testimonials",
        url: `${BASE_URL}/showcase`,
        type: "website",
        author: AUTHOR,
        siteName: SITE_NAME,
        robots: "noindex, nofollow",
        themeColor: DEFAULT_THEME_COLOR,
        twitterCard: "summary_large_image",
        twitterSite: DEFAULT_TWITTER_SITE,
        twitterCreator: DEFAULT_TWITTER_CREATOR,
        canonical: `${BASE_URL}/showcase`,
        locale: DEFAULT_LOCALE,
        dctermsSubject: "client showcase, hosting portfolio, web hosting success stories, customer testimonials",
        dctermsType: DEFAULT_DCTERMS_TYPE,
        dctermsLanguage: DEFAULT_DCTERMS_LANGUAGE,
        contentLanguage: DEFAULT_CONTENT_LANGUAGE,
        msApplicationConfig: DEFAULT_MS_APPLICATION_CONFIG,
    },
};

export default SEO_CONFIG;
