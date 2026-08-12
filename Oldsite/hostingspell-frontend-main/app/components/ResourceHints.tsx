/**
 * Dynamic resource hints for optimal loading
 * Helps reduce render-blocking by prioritizing critical resources
 */
export function ResourceHints() {
    return (
        <>
            {/* Preload critical assets */}
            <link
                rel="preload"
                href="/fonts/inter-var.woff2"
                as="font"
                type="font/woff2"
                crossOrigin="anonymous"
            />

            {/* Module preload for critical JS */}
            <link rel="modulepreload" href="/_next/static/chunks/main.js" />

            {/* Prefetch for likely navigation */}
            <link rel="prefetch" href="/pricing" />
            <link rel="prefetch" href="/cloud-hosting" />
            <link rel="prefetch" href="/domain" />
        </>
    );
}
