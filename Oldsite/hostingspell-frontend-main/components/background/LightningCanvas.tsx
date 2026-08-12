"use client";
import React, { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

const LightningCanvas: React.FC = () => {
    const { theme } = useTheme();
    const canvasRef = useRef<HTMLCanvasElement>(null!);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctxMaybe = canvas.getContext("2d");
        if (!ctxMaybe) return;
        const ctx: CanvasRenderingContext2D = ctxMaybe;

        let animationId = 0;
        let running = true;
        const lightningBolts: LightningBolt[] = [];
        const glowParticles: GlowParticle[] = [];

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener("resize", resize);

        class LightningBolt {
            private ctx: CanvasRenderingContext2D;
            segments: { x: number; y: number }[];
            alpha: number;
            width: number;
            color: string;
            glowIntensity: number;

            constructor(ctx: CanvasRenderingContext2D, startX: number, startY: number) {
                this.ctx = ctx;
                this.segments = [];
                this.alpha = 1;
                this.width = Math.random() * 2 + 1;
                this.glowIntensity = Math.random() * 0.5 + 0.5;
                
                // Cyber week yellow/electric colors
                const colors = ["#FFD700", "#FFED4E", "#FFC700", "#FFAA00"];
                this.color = colors[Math.floor(Math.random() * colors.length)];

                // Generate lightning path
                let x = startX;
                let y = startY;
                const endY = canvas.height;
                const segments = Math.floor(Math.random() * 8 + 6);

                this.segments.push({ x, y });

                for (let i = 0; i < segments; i++) {
                    const progress = i / segments;
                    y = startY + (endY - startY) * progress;
                    x += (Math.random() - 0.5) * 80;
                    
                    // Keep within bounds
                    x = Math.max(50, Math.min(canvas.width - 50, x));
                    
                    this.segments.push({ x, y });
                }
            }

            update() {
                this.alpha -= 0.03;
            }

            draw() {
                if (this.segments.length < 2) return;

                const c = this.ctx;
                c.save();
                c.globalAlpha = this.alpha;

                // Draw glow
                c.shadowBlur = 20 * this.glowIntensity;
                c.shadowColor = this.color;
                c.strokeStyle = this.color;
                c.lineWidth = this.width * 3;
                c.lineCap = "round";
                c.lineJoin = "round";

                c.beginPath();
                c.moveTo(this.segments[0].x, this.segments[0].y);
                for (let i = 1; i < this.segments.length; i++) {
                    c.lineTo(this.segments[i].x, this.segments[i].y);
                }
                c.stroke();

                // Draw core bolt
                c.shadowBlur = 10;
                c.strokeStyle = "#FFFFFF";
                c.lineWidth = this.width;
                c.beginPath();
                c.moveTo(this.segments[0].x, this.segments[0].y);
                for (let i = 1; i < this.segments.length; i++) {
                    c.lineTo(this.segments[i].x, this.segments[i].y);
                }
                c.stroke();

                c.restore();
            }
        }

        class GlowParticle {
            private ctx: CanvasRenderingContext2D;
            x: number;
            y: number;
            vx: number;
            vy: number;
            alpha: number;
            size: number;
            color: string;

            constructor(ctx: CanvasRenderingContext2D, x: number, y: number) {
                this.ctx = ctx;
                this.x = x;
                this.y = y;
                this.vx = (Math.random() - 0.5) * 2;
                this.vy = (Math.random() - 0.5) * 2;
                this.alpha = 1;
                this.size = Math.random() * 3 + 1;
                
                const colors = ["#FFD700", "#FFED4E", "#FFC700"];
                this.color = colors[Math.floor(Math.random() * colors.length)];
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;
                this.alpha -= 0.02;
            }

            draw() {
                const c = this.ctx;
                c.save();
                c.globalAlpha = this.alpha;
                c.shadowBlur = 15;
                c.shadowColor = this.color;
                c.fillStyle = this.color;
                c.beginPath();
                c.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                c.fill();
                c.restore();
            }
        }

        function spawnLightning(x?: number, y?: number) {
            const startX = x ?? Math.random() * canvas.width;
            const startY = y ?? Math.random() * canvas.height * 0.3;
            
            const bolt = new LightningBolt(ctx, startX, startY);
            lightningBolts.push(bolt);

            // Spawn glow particles along the bolt
            for (let i = 0; i < bolt.segments.length; i++) {
                const seg = bolt.segments[i];
                for (let j = 0; j < 5; j++) {
                    glowParticles.push(new GlowParticle(ctx, seg.x, seg.y));
                }
            }

            // Limit arrays
            if (lightningBolts.length > 20) lightningBolts.splice(0, lightningBolts.length - 20);
            if (glowParticles.length > 500) glowParticles.splice(0, glowParticles.length - 500);
        }

        function animate() {
            if (!running) return;

            // Clear with slight fade
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Update and draw lightning bolts
            for (let i = lightningBolts.length - 1; i >= 0; i--) {
                const bolt = lightningBolts[i];
                bolt.update();
                if (bolt.alpha <= 0) {
                    lightningBolts.splice(i, 1);
                    continue;
                }
                bolt.draw();
            }

            // Update and draw glow particles
            for (let i = glowParticles.length - 1; i >= 0; i--) {
                const p = glowParticles[i];
                p.update();
                if (p.alpha <= 0) {
                    glowParticles.splice(i, 1);
                    continue;
                }
                p.draw();
            }

            // Spawn lightning occasionally
            if (Math.random() < 0.02) spawnLightning();

            animationId = requestAnimationFrame(animate);
        }

        const onClick = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            const x = (e.clientX - rect.left) * (canvas.width / rect.width);
            const y = (e.clientY - rect.top) * (canvas.height / rect.height);
            spawnLightning(x, y);
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

export default LightningCanvas;
