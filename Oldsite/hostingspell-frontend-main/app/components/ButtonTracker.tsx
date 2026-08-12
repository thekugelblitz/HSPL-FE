'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

const TRACKED_PATHS = [
    '/landing',
    '/getstarted',
    '/wordpress-hosting',
    '/nodejs-hosting',
    '/python-hosting'
];

export function ButtonTracker() {
    const pathname = usePathname();

    useEffect(() => {
        if (!pathname || !TRACKED_PATHS.includes(pathname)) return;

        const handleGlobalClick = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            
            // Find the closest interactive element (button or link)
            const interactiveEl = target.closest('button, a[href], [role="button"]');
            
            if (interactiveEl) {
                // Try to get meaningful text, falling back to id or aria-label
                let elementText = interactiveEl.textContent?.trim() || 
                                interactiveEl.getAttribute('aria-label') || 
                                interactiveEl.id || 
                                'icon_or_empty_button';
                                
                // Truncate if too long
                if (elementText.length > 50) elementText = elementText.substring(0, 50) + '...';

                // Send to Google Analytics (gtag)
                if (typeof window !== 'undefined' && (window as any).gtag) {
                    (window as any).gtag('event', 'button_click', {
                        event_category: 'engagement',
                        event_label: elementText,
                        page_path: pathname,
                    });
                }

                // Send to Meta Pixel (fbq)
                if (typeof window !== 'undefined' && (window as any).fbq) {
                    (window as any).fbq('trackCustom', 'ButtonClick', {
                        button_text: elementText,
                        page_path: pathname,
                    });
                }
            }
        };

        // Use capture phase to ensure we catch the click before any stopPropagation
        document.addEventListener('click', handleGlobalClick, { capture: true });
        
        return () => {
            document.removeEventListener('click', handleGlobalClick, { capture: true });
        };
    }, [pathname]);

    return null;
}
