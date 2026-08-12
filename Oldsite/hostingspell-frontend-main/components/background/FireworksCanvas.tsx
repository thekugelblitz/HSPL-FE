"use client";
import React, { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

const FireworksCanvas: React.FC = () => {
    const { theme } = useTheme();
    const canvasRef = useRef<HTMLCanvasElement>(null!);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctxMaybe = canvas.getContext("2d");
        if (!ctxMaybe) return;
        const ctx: CanvasRenderingContext2D = ctxMaybe;

        let animationId = 0;
        let running = true;
        const particles: Particle[] = [];
        let lastFireworkTime = 0;
        let fadeOutAlpha = 0;
        let fading = false;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener("resize", resize);

        class Particle {
            private ctx: CanvasRenderingContext2D;
            x: number;
            y: number;
            vx: number;
            vy: number;
            alpha: number;
            color: string;
            size: number;

            constructor(ctx: CanvasRenderingContext2D, x: number, y: number, color: string) {
                this.ctx = ctx;
                this.x = x;
                this.y = y;
                this.vx = (Math.random() - 0.5) * 6;
                this.vy = (Math.random() - 0.7) * 6;
                this.alpha = 1;
                this.size = Math.random() * 2 + 1.2;
                this.color = color;
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;
                this.vy += 0.08;
                this.alpha -= 0.018;
            }

            draw() {
                const c = this.ctx;
                c.globalAlpha = this.alpha;
                c.fillStyle = this.color;
                c.beginPath();
                c.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                c.fill();
            }
        }

        const colors = [
            "#ff007f",
            "#ff4d00",
            "#ffd700",
            "#00eaff",
            "#00ff66",
            "#b300ff",
        ];

        function spawnFirework(x?: number, y?: number) {
            const fx = x ?? Math.random() * canvas.width;
            const fy = y ?? Math.random() * canvas.height * 0.6;
            const color = colors[Math.floor(Math.random() * colors.length)];
            for (let i = 0; i < 30; i++) {
                particles.push(new Particle(ctx, fx, fy, color));
            }
            lastFireworkTime = performance.now();
            fading = false;
            fadeOutAlpha = 0;
            if (particles.length > 800) particles.splice(0, particles.length - 800);
        }

        function animate(time: number) {
            if (!running) return;

            // Instead of filling background with any color, clear the canvas slightly (transparent trail)
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // update/draw particles
            for (let i = particles.length - 1; i >= 0; i--) {
                const p = particles[i];
                p.update();
                if (p.alpha <= 0) {
                    particles.splice(i, 1);
                    continue;
                }
                p.draw();
            }

            // smooth fade out when finished — no solid overlay, fully transparent
            if (particles.length === 0 && !fading) {
                fading = true;
                fadeOutAlpha = 0;
            }

            if (fading) {
                fadeOutAlpha += 0.02;
                if (fadeOutAlpha >= 1) {
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    fadeOutAlpha = 0;
                    fading = false;
                }
            }

            // spawn fireworks occasionally
            if (Math.random() < 0.015) spawnFirework();

            animationId = requestAnimationFrame(animate);
        }

        const onClick = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            const x = (e.clientX - rect.left) * (canvas.width / rect.width);
            const y = (e.clientY - rect.top) * (canvas.height / rect.height);
            spawnFirework(x, y);
        };
        canvas.addEventListener("click", onClick);

        requestAnimationFrame(animate);

        return () => {
            running = false;
            cancelAnimationFrame(animationId);
            window.removeEventListener("resize", resize);
            canvas.removeEventListener("click", onClick);
        };
    }, [theme]);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 -z-1000 pointer-events-none"
            style={{ backgroundColor: "transparent" }}
        />
    );
};

export default FireworksCanvas;
