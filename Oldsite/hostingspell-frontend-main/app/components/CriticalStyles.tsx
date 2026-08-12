/**
 * Critical inline styles for above-the-fold content
 * This prevents render-blocking by inlining essential CSS
 */
export function CriticalStyles() {
    return (
        <style
            dangerouslySetInnerHTML={{
                __html: `
          /* Critical above-the-fold styles */
          body {
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }
          
          /* Prevent layout shift */
          html {
            scroll-behavior: smooth;
            scrollbar-gutter: stable;
          }
          
          /* Minimal header styles to prevent CLS */
          header {
            position: relative;
            z-index: 50;
          }
          
          /* Prevent FOUC */
          .hero-section {
            min-height: 60vh;
          }
        `,
            }}
        />
    );
}
