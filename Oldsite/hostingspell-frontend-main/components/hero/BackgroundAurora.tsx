'use client';

import { useEffect, useRef } from 'react';

export function BackgroundAurora() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width = (canvas.width = window.innerWidth);
        let height = (canvas.height = window.innerHeight);

        const getGradient = () => {
            const isDark = document.documentElement.classList.contains('dark');
            const gradient = ctx.createLinearGradient(0, 0, width, height);

            if (isDark) {
                // 🌌 High-energy aurora tones for dark mode
                gradient.addColorStop(0, '#1400c6');     // deep electric blue
                gradient.addColorStop(0.3, '#7f00ff');   // vibrant violet
                gradient.addColorStop(0.6, '#00f0ff');   // neon cyan
                gradient.addColorStop(1, '#39ff14');     // electric green
            } else {
                // ☀️ Light mode bright aurora tones
                gradient.addColorStop(0, '#ff00cc');     // hot pink
                gradient.addColorStop(0.3, '#3333ff');   // electric blue
                gradient.addColorStop(0.6, '#00ffe0');   // bright aqua
                gradient.addColorStop(1, '#ccff00');     // neon yellow-green
            }

            return gradient;
        };


        let gradient = getGradient();

        const draw = () => {
            ctx.fillStyle = gradient;
            ctx.globalAlpha = 0.08; // stronger glow
            ctx.fillRect(0, 0, width, height);
            ctx.globalAlpha = 1;
        };

        const interval = setInterval(draw, 80);

        const handleResize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
            gradient = getGradient();
        };

        const handleThemeChange = () => {
            gradient = getGradient();
        };

        window.addEventListener('resize', handleResize);
        const observer = new MutationObserver(handleThemeChange);
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

        return () => {
            clearInterval(interval);
            window.removeEventListener('resize', handleResize);
            observer.disconnect();
        };
    }, []);

    return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0" />;
}
