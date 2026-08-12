'use client';

import { useEffect, useRef } from 'react';

export function BackgroundTronGrid() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;

        const lineSpacing = 40;
        let offset = 0;

        const draw = () => {
            ctx.clearRect(0, 0, width, height);

            const isDark = document.documentElement.classList.contains('dark');
            const gridColor = isDark ? '#00fff7' : '#007bff'; // Neon cyan for dark, bright blue for light
            const bgColor = isDark ? '#000' : '#fff';

            ctx.fillStyle = bgColor;
            ctx.fillRect(0, 0, width, height);

            ctx.strokeStyle = gridColor;
            ctx.lineWidth = 1;
            ctx.shadowColor = gridColor;
            ctx.shadowBlur = 10;

            // Horizontal lines
            for (let y = offset % lineSpacing; y < height; y += lineSpacing) {
                ctx.beginPath();
                ctx.moveTo(0, y);
                ctx.lineTo(width, y);
                ctx.stroke();
            }

            // Vertical lines
            for (let x = offset % lineSpacing; x < width; x += lineSpacing) {
                ctx.beginPath();
                ctx.moveTo(x, 0);
                ctx.lineTo(x, height);
                ctx.stroke();
            }

            offset += 0.5; // animate slowly
            requestAnimationFrame(draw);
        };

        draw();

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
            className="absolute inset-0 w-full h-full z-0 pointer-events-none"
        />
    );
}
