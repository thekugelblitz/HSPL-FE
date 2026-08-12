'use client';

import { useEffect, useRef } from 'react';

export function SnowflakeBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width = (canvas.width = window.innerWidth);
        let height = (canvas.height = window.innerHeight);

        const snowflakes = Array.from({ length: 150 }, () => ({
            x: Math.random() * width,
            y: Math.random() * height,
            r: Math.random() * 4 + 1,
            d: Math.random() * 1 + 0.5,
        }));

        const draw = () => {
            const isDark = document.documentElement.classList.contains('dark');
            ctx.clearRect(0, 0, width, height);
            ctx.fillStyle = isDark ? '#fff' : '#444';

            snowflakes.forEach((flake) => {
                ctx.beginPath();
                ctx.arc(flake.x, flake.y, flake.r, 0, Math.PI * 2);
                ctx.fill();
            });

            update();
        };

        const update = () => {
            snowflakes.forEach((flake) => {
                flake.y += flake.d;
                if (flake.y > height) {
                    flake.y = -flake.r;
                    flake.x = Math.random() * width;
                }
            });
        };

        const animate = () => {
            draw();
            requestAnimationFrame(animate);
        };

        animate();

        const handleResize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full z-0"
        />
    );
}
