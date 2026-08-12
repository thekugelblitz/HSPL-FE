"use client";
import React, { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";

const ElectricSparksCanvas: React.FC = () => {
    const { theme } = useTheme();
    const canvasRef = useRef<HTMLCanvasElement>(null!);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Detect mobile device
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctxMaybe = canvas.getContext("2d", { 
            alpha: true,
            desynchronized: true, // Better performance
            willReadFrequently: false
        });
        if (!ctxMaybe) return;
        const ctx: CanvasRenderingContext2D = ctxMaybe;

        let animationId = 0;
        let running = true;
        const electricArcs: ElectricArc[] = [];
        
        // Performance settings based on device
        const MAX_ARCS = isMobile ? 15 : 50; // Reduced from 50 to 15 on mobile
        const SPAWN_RATE = isMobile ? 0.04 : 0.12; // Reduced spawn rate on mobile
        const ARC_DISTANCE = isMobile ? 200 : 400; // Shorter arcs on mobile
        const SEGMENTS = isMobile ? 6 : 10; // Fewer segments on mobile
        const CLICK_ARCS = isMobile ? 2 : 5; // Fewer arcs on click for mobile

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener("resize", resize);

        // Corner positions with offset from edges
        const getCorners = () => [
            { x: 50, y: 50 }, // top-left
            { x: canvas.width - 50, y: 50 }, // top-right
            { x: 50, y: canvas.height - 50 }, // bottom-left
            { x: canvas.width - 50, y: canvas.height - 50 }, // bottom-right
        ];

        class ElectricArc {
            private ctx: CanvasRenderingContext2D;
            segments: { x: number; y: number }[];
            alpha: number;
            color: string;
            width: number;

            constructor(ctx: CanvasRenderingContext2D, startX: number, startY: number) {
                this.ctx = ctx;
                this.segments = [];
                this.alpha = 1;
                this.width = Math.random() * 1.5 + 0.5;

                // Electric colors - cyan, blue, purple, yellow
                const colors = [
                    "#00D9FF", // electric cyan
                    "#0080FF", // electric blue
                    "#9D00FF", // purple
                    "#FFD700", // gold
                    "#00FFFF", // cyan
                    "#FF00FF", // magenta
                ];
                this.color = colors[Math.floor(Math.random() * colors.length)];

                // Generate jagged electric arc path
                let x = startX;
                let y = startY;
                
                // Random direction from corner
                const angle = Math.random() * Math.PI * 2;
                const distance = Math.random() * ARC_DISTANCE + (ARC_DISTANCE * 0.75);
                const endX = x + Math.cos(angle) * distance;
                const endY = y + Math.sin(angle) * distance;

                const segments = Math.floor(Math.random() * SEGMENTS + (SEGMENTS * 0.8));
                this.segments.push({ x, y });

                for (let i = 1; i <= segments; i++) {
                    const progress = i / segments;
                    x = startX + (endX - startX) * progress;
                    y = startY + (endY - startY) * progress;
                    
                    // Add jagged offset (reduced on mobile)
                    const jitter = isMobile ? 40 : 60;
                    x += (Math.random() - 0.5) * jitter;
                    y += (Math.random() - 0.5) * jitter;
                    
                    this.segments.push({ x, y });
                }
            }

            update() {
                this.alpha -= isMobile ? 0.06 : 0.04; // Faster fade on mobile
            }

            draw() {
                if (this.segments.length < 2) return;

                const c = this.ctx;
                c.save();
                c.globalAlpha = this.alpha;

                // Simplified drawing for mobile (2 layers instead of 3)
                if (isMobile) {
                    // Draw glow layer
                    c.shadowBlur = 15;
                    c.shadowColor = this.color;
                    c.strokeStyle = this.color;
                    c.lineWidth = this.width * 2.5;
                    c.lineCap = "round";
                    c.lineJoin = "round";

                    c.beginPath();
                    c.moveTo(this.segments[0].x, this.segments[0].y);
                    for (let i = 1; i < this.segments.length; i++) {
                        c.lineTo(this.segments[i].x, this.segments[i].y);
                    }
                    c.stroke();

                    // Draw bright core
                    c.shadowBlur = 5;
                    c.strokeStyle = "#FFFFFF";
                    c.lineWidth = this.width;
                    c.beginPath();
                    c.moveTo(this.segments[0].x, this.segments[0].y);
                    for (let i = 1; i < this.segments.length; i++) {
                        c.lineTo(this.segments[i].x, this.segments[i].y);
                    }
                    c.stroke();
                } else {
                    // Full quality for desktop (3 layers)
                    // Draw outer glow
                    c.shadowBlur = 25;
                    c.shadowColor = this.color;
                    c.strokeStyle = this.color;
                    c.lineWidth = this.width * 4;
                    c.lineCap = "round";
                    c.lineJoin = "round";

                    c.beginPath();
                    c.moveTo(this.segments[0].x, this.segments[0].y);
                    for (let i = 1; i < this.segments.length; i++) {
                        c.lineTo(this.segments[i].x, this.segments[i].y);
                    }
                    c.stroke();

                    // Draw middle layer
                    c.shadowBlur = 15;
                    c.strokeStyle = this.color;
                    c.lineWidth = this.width * 2;
                    c.beginPath();
                    c.moveTo(this.segments[0].x, this.segments[0].y);
                    for (let i = 1; i < this.segments.length; i++) {
                        c.lineTo(this.segments[i].x, this.segments[i].y);
                    }
                    c.stroke();

                    // Draw bright core
                    c.shadowBlur = 8;
                    c.strokeStyle = "#FFFFFF";
                    c.lineWidth = this.width;
                    c.beginPath();
                    c.moveTo(this.segments[0].x, this.segments[0].y);
                    for (let i = 1; i < this.segments.length; i++) {
                        c.lineTo(this.segments[i].x, this.segments[i].y);
                    }
                    c.stroke();

                    // Draw branch sparks occasionally (desktop only)
                    if (Math.random() < 0.3 && this.segments.length > 2) {
                        const branchIndex = Math.floor(Math.random() * (this.segments.length - 1)) + 1;
                        const branch = this.segments[branchIndex];
                        const branchAngle = Math.random() * Math.PI * 2;
                        const branchLength = Math.random() * 60 + 40;
                        const branchEndX = branch.x + Math.cos(branchAngle) * branchLength;
                        const branchEndY = branch.y + Math.sin(branchAngle) * branchLength;

                        c.shadowBlur = 10;
                        c.strokeStyle = this.color;
                        c.lineWidth = this.width * 0.5;
                        c.beginPath();
                        c.moveTo(branch.x, branch.y);
                        c.lineTo(branchEndX, branchEndY);
                        c.stroke();
                    }
                }

                c.restore();
            }
        }

        function spawnElectricArc(cornerIndex?: number, x?: number, y?: number) {
            let startX: number, startY: number;
            
            if (x !== undefined && y !== undefined) {
                startX = x;
                startY = y;
            } else {
                const corners = getCorners();
                const corner = cornerIndex !== undefined 
                    ? corners[cornerIndex] 
                    : corners[Math.floor(Math.random() * 4)];
                startX = corner.x;
                startY = corner.y;
            }

            const count = isMobile ? 1 : Math.floor(Math.random() * 2 + 1);
            for (let i = 0; i < count; i++) {
                electricArcs.push(new ElectricArc(ctx, startX, startY));
            }

            if (electricArcs.length > MAX_ARCS) {
                electricArcs.splice(0, electricArcs.length - MAX_ARCS);
            }
        }

        function animate() {
            if (!running) return;

            // Clear canvas
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Update and draw electric arcs
            for (let i = electricArcs.length - 1; i >= 0; i--) {
                const arc = electricArcs[i];
                arc.update();
                if (arc.alpha <= 0) {
                    electricArcs.splice(i, 1);
                    continue;
                }
                arc.draw();
            }

            // Spawn electric arcs from random corners
            if (Math.random() < SPAWN_RATE) {
                spawnElectricArc();
            }

            animationId = requestAnimationFrame(animate);
        }

        const onClick = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            const x = (e.clientX - rect.left) * (canvas.width / rect.width);
            const y = (e.clientY - rect.top) * (canvas.height / rect.height);
            
            // Spawn arcs from click point
            for (let i = 0; i < CLICK_ARCS; i++) {
                spawnElectricArc(undefined, x, y);
            }
        };
        canvas.addEventListener("click", onClick);

        // Initial burst from corners (fewer on mobile)
        const initialBurst = isMobile ? 2 : 4;
        for (let i = 0; i < initialBurst; i++) {
            spawnElectricArc(i);
        }

        requestAnimationFrame(animate);

        return () => {
            running = false;
            cancelAnimationFrame(animationId);
            window.removeEventListener("resize", resize);
            canvas.removeEventListener("click", onClick);
        };
    }, [theme, isMobile]);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 -z-1000 pointer-events-none"
            style={{ backgroundColor: "transparent" }}
        />
    );
};

export default ElectricSparksCanvas;
