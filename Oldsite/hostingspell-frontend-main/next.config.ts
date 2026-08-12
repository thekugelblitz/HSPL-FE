import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	// Output format for Docker deployment
	output: "standalone",
	// eslint: {
	// 	// This disables ESLint errors from stopping the build
	// 	ignoreDuringBuilds: true,
	// },
	// Optimize for mobile performance
	compiler: {
		removeConsole: process.env.NODE_ENV === "production",
	},
	// Enable experimental optimizations
	experimental: {
		optimizePackageImports: ['lucide-react', 'date-fns', 'lodash-es', 'framer-motion', 'react-icons'],
	},
	// Optimize output
	poweredByHeader: false,
	compress: true,
	// Reduce JavaScript bundle size
	// Note: lucide-react is already optimized via optimizePackageImports
	// Optimize images
	images: {
		formats: ['image/avif', 'image/webp'],
		deviceSizes: [640, 750, 828, 1080, 1200, 1920],
		imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
		minimumCacheTTL: 2592000,
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'images.unsplash.com',
			},
			{
				protocol: 'https',
				hostname: 'placehold.co',
			},
			{
				protocol: 'https',
				hostname: 'hostingspell.com',
			},
			{
				protocol: 'https',
				hostname: 'manage.hostingspell.com',
			},
			{
				protocol: 'https',
				hostname: '2hs.in',
			},
			{
				protocol: 'https',
				hostname: 'blog.2hs.in',
			},
			{
				protocol: 'https',
				hostname: 'hspl.b-cdn.net',
			},

		],
	},
	async rewrites() {
		return [
			{
				source: "/ai-summary.json",
				destination: "/ai-summary",
			},
		];
	},
	async headers() {
		return [
			{
				source: '/:path*',
				headers: [
					{
						key: 'Content-Security-Policy',
						value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline' *.google-analytics.com *.googletagmanager.com *.facebook.net *.tawk.to *.posthog.com *.clarity.ms cdn.jsdelivr.net; style-src 'self' 'unsafe-inline' *.tawk.to; font-src 'self' data: https:; img-src 'self' data: https:; frame-src 'self' *.tawk.to *.facebook.com *.facebook.net; connect-src 'self' *.posthog.com *.google-analytics.com *.googletagmanager.com *.clarity.ms *.tawk.to wss://*.tawk.to ws://*.tawk.to freeipapi.com ipapi.co"
					},
				],
			},
			{
				source: '/.well-known/apple-developer-merchantid-domain-association',
				headers: [
					{
						key: 'Content-Type',
						value: 'text/plain',
					},
				],
			},
			{
				source: "/:all*(svg|jpg|jpeg|png|gif|ico|webp|avif)",
				headers: [
					{
						key: "Cache-Control",
						value: "public, max-age=2592000, immutable",
					},
				],
			},
			{
				source: "/_next/static/:path*",
				headers: [
					{
						key: "Cache-Control",
						value: "public, max-age=2592000, immutable",
					},
				],
			},
			{
				source: "/fonts/:path*",
				headers: [
					{
						key: "Cache-Control",
						value: "public, max-age=2592000, immutable",
					},
				],
			},
		];
	},
};

export default nextConfig;
