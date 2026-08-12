'use client';

import { useEffect, useRef } from 'react';

export function BackgroundInkFlow() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const dpr = window.devicePixelRatio || 1;
        let width = window.innerWidth;
        let height = window.innerHeight;

        canvas.width = width * dpr;
        canvas.height = height * dpr;
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;
        ctx.scale(dpr, dpr);

        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

        // Solid base color (set once)
        ctx.fillStyle = prefersDark ? '#000000' : '#ffffff';
        ctx.fillRect(0, 0, width, height);

        // Trail fade color (semi-transparent)
        const trailFade = prefersDark ? 'rgba(0, 0, 0, 0.1)' : 'rgba(255, 255, 255, 0.1)';
        const particleColor = '#6600ff';

        const handleResize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width * dpr;
            canvas.height = height * dpr;
            canvas.style.width = `${width}px`;
            canvas.style.height = `${height}px`;
            ctx.scale(dpr, dpr);

            // Refill background after resize
            ctx.fillStyle = prefersDark ? '#000000' : '#ffffff';
            ctx.fillRect(0, 0, width, height);
        };
        window.addEventListener('resize', handleResize);

        const particles = Array.from({ length: 160 }, () => ({
            x: Math.random() * width,
            y: Math.random() * height,
            vx: (Math.random() - 0.5) * 0.3,
            vy: (Math.random() - 0.5) * 0.3,
            radius: 1 + Math.random() * 2,
        }));

        const animate = () => {
            // Apply trail effect (light transparent overlay)
            ctx.fillStyle = trailFade;
            ctx.fillRect(0, 0, width, height);

            for (const p of particles) {
                p.x += p.vx;
                p.y += p.vy;

                const angle = Math.sin(p.y * 0.003) * Math.PI;
                p.vx += Math.cos(angle) * 0.004;
                p.vy += Math.sin(angle) * 0.004;

                ctx.beginPath();
                ctx.fillStyle = particleColor;
                ctx.shadowColor = particleColor;
                ctx.shadowBlur = 2;
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fill();

                if (p.x < 0) p.x = width;
                if (p.x > width) p.x = 0;
                if (p.y < 0) p.y = height;
                if (p.y > height) p.y = 0;
            }

            requestAnimationFrame(animate);
        };

        animate();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full z-0 pointer-events-none"
        />
    );
}
