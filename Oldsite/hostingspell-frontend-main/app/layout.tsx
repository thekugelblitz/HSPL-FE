import type { Metadata } from "next";
import { Poppins, Open_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Suspense } from "react";

import { Header } from "./components/Header";
import { Providers } from "./components/Providers";
import { CurrencyProvider } from "@/context/CurrencyContext";
import { LocationProvider } from "@/context/LocationContext";
import { LayoutContent } from "./components/LayoutContent";
import { CriticalStyles } from "./components/CriticalStyles";
import GlowSpotsClient from "./components/GlowSpotsClient";
import { ButtonTracker } from "./components/ButtonTracker";

import { getPageMetadata } from "../lib/seoHelper";
export const metadata: Metadata = getPageMetadata("home");

// Viewport configuration for optimal mobile rendering
export const viewport = {
	width: 'device-width',
	initialScale: 1,
	maximumScale: 5,
	userScalable: true,
	themeColor: [
		{ media: '(prefers-color-scheme: light)', color: '#ffffff' },
		{ media: '(prefers-color-scheme: dark)', color: '#0a0a0a' }
	],
};

// TEMPORARILY DISABLED - PostHog tracking
// import { PostHogProvider } from './providers'

// Poppins → headers
const poppins = Poppins({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
	variable: "--font-headers",
	display: "swap",
	preload: true,
	fallback: ["system-ui", "sans-serif"],
	adjustFontFallback: true,
});

// Open Sans → body
const openSans = Open_Sans({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
	variable: "--font-body",
	display: "swap",
	preload: true,
	fallback: ["system-ui", "sans-serif"],
	adjustFontFallback: true,
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			className={`scroll-smooth overflow-y-scroll ${poppins.variable} ${openSans.variable}`}
		>
			<head>
				{/* Inline critical CSS to prevent render blocking */}
				<CriticalStyles />
				
				{/* Preload critical hero images for faster LCP */}
				<link rel="preload" as="image" href="/img/cyberweek-light.png" />
				<link rel="preload" as="image" href="/img/cyberweek-dark.png" />
				
				{/* Preconnect to external domains for faster loading - only critical ones */}
				<link rel="dns-prefetch" href="https://www.googletagmanager.com" />
				<link rel="dns-prefetch" href="https://connect.facebook.net" />
				<link rel="dns-prefetch" href="https://embed.tawk.to" />
				{/* TEMPORARILY DISABLED - PostHog DNS prefetch */}
				{/* <link rel="dns-prefetch" href="https://posthog.2hs.in" /> */}

				<link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
				<link rel="manifest" href="/favicon/site.webmanifest" crossOrigin="use-credentials" />
				<link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5" />
				<link rel="shortcut icon" href="/favicon/favicon.ico" />

				<link rel="canonical" href="https://hostingspell.com" />
				<link rel="alternate" type="application/sitemap" href="/sitemap.xml" />
				<link rel="publisher" href="https://plus.google.com/+hostingspell" />

				<meta name="msapplication-TileColor" content="#da532c" />
				<meta name="msapplication-config" content="/favicon/browserconfig.xml" />
				<meta name="theme-color" content="#ffffff" />

				<meta property="og:image" content="/img/opengraph.jpg" />
				<meta name="twitter:image" content="/img/opengraph.jpg" />

				<meta name="google-site-verification" content="92tc1ZvCSp8bsFriwoL-fA_NEe4p_Qa_J25ffTOIfYA" />
				<meta name="yandex-verification" content="d02c15df14ddff8f" />
				<meta name="msvalidate.01" content="" />
				<meta name="baidu-site-verification" content="" />

				{/* Google Analytics - Deferred for performance */}
				<Script 
					src="https://www.googletagmanager.com/gtag/js?id=G-1M3YNB1P5B"
				/>
				<Script id="google-analytics" >
					{`
						window.dataLayer = window.dataLayer || [];
						function gtag(){dataLayer.push(arguments);}
						gtag('js', new Date());
						gtag('config', 'G-1M3YNB1P5B', {
						page_path: window.location.pathname,
						});
					`}
				</Script>

				{/* Microsoft Clarity Tracking */}
				<Script id="microsoft-clarity">
					{`
						(function(c,l,a,r,i,t,y){
							c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
							t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
							y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
						})(window, document, "clarity", "script", "wsyzv293ua");
					`}
				</Script>
			</head>
			<body
				className={`antialiased min-h-screen flex flex-col overflow-x-hidden`}
			>
				<Suspense fallback={null}>
					<Providers>
						{/* <PostHogProvider> */}
							<LocationProvider>
								<CurrencyProvider>
									<GlowSpotsClient />
									<ButtonTracker />
									<Header />
									<LayoutContent>{children}</LayoutContent>
								</CurrencyProvider>
							</LocationProvider>
						{/* </PostHogProvider> */}
					</Providers>
				</Suspense>

				{/* Tawk.to script - Next.js Script with afterInteractive to prevent React hydration errors */}
				<Script id="tawk-to" strategy="afterInteractive">
					{`
						var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
						(function(){
						var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
						s1.async=true;
						s1.src='https://embed.tawk.to/5d87b5199f6b7a4457e2fe82/default';
						s1.charset='UTF-8';
						s1.setAttribute('crossorigin','*');
						s0.parentNode.insertBefore(s1,s0);
						})();
					`}
				</Script>

				{/* Meta Pixel tracking - Deferred for performance */}
				<Script id="meta-pixel">
					{`
						!function(f,b,e,v,n,t,s)
						{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
						n.callMethod.apply(n,arguments):n.queue.push(arguments)};
						if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
						n.queue=[];t=b.createElement(e);t.async=!0;
						t.src=v;s=b.getElementsByTagName(e)[0];
						s.parentNode.insertBefore(t,s)}(window, document,'script',
						'https://connect.facebook.net/en_US/fbevents.js');
						fbq('init', '753128125984837');
						fbq('track', 'PageView');
					`}
				</Script>

				<noscript>
					<img
						height="1"
						width="1"
						style={{ display: "none" }}
						src="https://www.facebook.com/tr?id=753128125984837&ev=PageView&noscript=1"
					/>
				</noscript>

			</body>
		</html>
	);
}
