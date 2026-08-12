'use client';
import { useEffect, useRef } from 'react';

export function BackgroundGlitch() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;

        const glitchBarCount = 25;

        const drawGlitch = () => {
            ctx.clearRect(0, 0, width, height);

            for (let i = 0; i < glitchBarCount; i++) {
                const barHeight = Math.random() * 20 + 1;
                const y = Math.random() * height;
                const x = Math.random() * width;
                const barWidth = Math.random() * (width * 0.4) + 20;

                ctx.fillStyle = `hsl(${Math.floor(Math.random() * 360)}, 100%, ${60 + Math.random() * 20}%)`;
                ctx.fillRect(x, y, barWidth, barHeight);
            }
        };

        let animationId: number;

        const loop = () => {
            drawGlitch();
            animationId = requestAnimationFrame(loop);
        };

        loop();

        const handleResize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', handleResize);

        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full z-0 pointer-events-none"
        />
    );
}
