'use client';

import { useEffect, useRef } from 'react';
import { useTheme } from 'next-themes';

export function BackgroundParticlesSwirl() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const { resolvedTheme } = useTheme(); // Get current theme

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;

        let particles: {
            x: number;
            y: number;
            angle: number;
            radius: number;
            speed: number;
            size: number;
            hue: number;
        }[] = [];

        const particleCount = 300;

        for (let i = 0; i < particleCount; i++) {
            const radius = Math.random() * Math.sqrt(width * width + height * height) * 0.5;
            const angle = Math.random() * Math.PI * 2;
            particles.push({
                x: width / 2,
                y: height / 2,
                angle,
                radius,
                speed: 0.002 + Math.random() * 0.005,
                size: 1 + Math.random() * 2,
                hue: Math.floor(Math.random() * 360),
            });
        }

        const draw = () => {
            // Adjust background transparency based on theme
            const bgColor =
                resolvedTheme === 'dark'
                    ? 'rgba(0, 0, 0, 0.07)'   // dark mode
                    : 'rgba(255, 255, 255, 0.07)'; // light mode

            ctx.fillStyle = bgColor;
            ctx.fillRect(0, 0, width, height);

            particles.forEach((p) => {
                p.angle += p.speed;
                const x = width / 2 + Math.cos(p.angle) * p.radius;
                const y = height / 2 + Math.sin(p.angle) * p.radius;

                ctx.beginPath();
                ctx.fillStyle = `hsl(${p.hue}, 100%, 70%)`;
                ctx.arc(x, y, p.size, 0, Math.PI * 2);
                ctx.fill();
            });
        };

        let animationId: number;
        const animate = () => {
            draw();
            animationId = requestAnimationFrame(animate);
        };

        animate();

        const handleResize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', handleResize);
        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener('resize', handleResize);
        };
    }, [resolvedTheme]); // Redraw if theme changes

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full z-0 pointer-events-none"
        />
    );
}
