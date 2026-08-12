"use client";

import React, { useEffect, useRef } from "react";
import Matter, {
    Engine,
    Render,
    Runner,
    Bodies,
    World,
    Body,
    Mouse,
    MouseConstraint,
    Composite,
} from "matter-js";

export type IconSpec = {
    id: string;
    src: string;
    onClick?: (id: string) => void;
};

export type GravityCanvasProps = {
    icons?: IconSpec[];
    playHeight?: number;
    className?: string;
};

const GravityCanvas: React.FC<GravityCanvasProps> = ({
    icons,
    playHeight = 400,
    className,
}) => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    const defaultIcons: IconSpec[] = [
        { id: "notion", src: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/notion.svg" },
        { id: "google-drive", src: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/googledrive.svg" },
        { id: "slack", src: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/slack.svg" },
        { id: "markdown", src: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/markdown.svg" },
        { id: "google-docs", src: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/googledocs.svg" },
        { id: "jira", src: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/jira.svg" },
    ];

    useEffect(() => {
        const el = containerRef.current;
        const canvas = canvasRef.current;
        if (!el || !canvas) return;

        const width = el.clientWidth;
        const height = playHeight;

        const engine = Engine.create();
        engine.gravity.y = 1.1;

        const render = Render.create({
            element: el,
            canvas,
            engine,
            options: {
                width,
                height,
                background: "transparent",
                wireframes: false,
                pixelRatio: window.devicePixelRatio || 1,
            },
        });
        Render.run(render);

        const runner = Runner.create();
        Runner.run(runner, engine);

        // Walls
        const wallThickness = 10; // thinner walls so less gap
        const walls = [
            // bottom wall placed exactly at playHeight
            Bodies.rectangle(width / 2, height, width, wallThickness, { isStatic: true }),
            Bodies.rectangle(0, height / 2, wallThickness, height, { isStatic: true }), // left
            Bodies.rectangle(width, height / 2, wallThickness, height, { isStatic: true }), // right
        ];
        World.add(engine.world, walls);

        // Create Icons
        const makeIcon = (spec: IconSpec) => {
            const displaySize = 36; // how big you want icons on screen (uniform box)
            const x = Math.random() * width;
            const y = -Math.random() * 100;

            // Create an image to measure dimensions
            const img = new Image();
            img.src = spec.src;

            // Default scale until image loads
            let scaleX = 1;
            let scaleY = 1;

            if (img.width && img.height) {
                scaleX = displaySize / img.width;
                scaleY = displaySize / img.height;
            }

            return Bodies.rectangle(x, y, displaySize, displaySize, {
                restitution: 0.5,
                friction: 0.2,
                density: 0.004,
                label: `icon-${spec.id}`,
                render: {
                    sprite: {
                        texture: spec.src,
                        xScale: scaleX,
                        yScale: scaleY,
                    },
                },
            });
        };



        const iconSpecs = (icons && icons.length ? icons : defaultIcons).slice(0, 12);
        const iconBodies = iconSpecs.map(makeIcon);
        World.add(engine.world, iconBodies);

        // Mouse drag + throw
        const mouse = Mouse.create(canvas);
        mouse.pixelRatio = window.devicePixelRatio || 1;
        const mouseConstraint = MouseConstraint.create(engine, {
            mouse,
            constraint: { stiffness: 0.2, render: { visible: false } },
        });
        World.add(engine.world, mouseConstraint);

        // Click detection
        canvas.addEventListener("mouseup", () => {
            const clicked = Composite.allBodies(engine.world).find(
                (b) => Matter.Bounds.contains(b.bounds, mouse.position) && b.label.startsWith("icon-")
            );
            if (clicked) {
                const id = clicked.label.replace("icon-", "");
                const spec = iconSpecs.find((s) => s.id === id);
                spec?.onClick?.(id);
            }
        });

        // Resize handling
        const ro = new ResizeObserver(() => {
            const w = el.clientWidth;
            const h = playHeight;
            render.options.width = w;
            render.options.height = h;
            render.canvas.width = w * (window.devicePixelRatio || 1);
            render.canvas.height = h * (window.devicePixelRatio || 1);

            Body.setPosition(walls[0], { x: w / 2, y: h + wallThickness / 2 });
            Body.setPosition(walls[1], { x: -wallThickness / 2, y: h / 2 });
            Body.setPosition(walls[2], { x: w + wallThickness / 2, y: h / 2 });
        });
        ro.observe(el);

        return () => {
            ro.disconnect();
            Render.stop(render);
            Runner.stop(runner);
            World.clear(engine.world, false);
            Engine.clear(engine);
            render.canvas.remove();
        };
    }, [icons, playHeight]);

    return (
        <div ref={containerRef} className={`relative w-full h-[${playHeight}px] ${className ?? ""}`}>
            <canvas ref={canvasRef} className="absolute inset-0" />
        </div>
    );
};

export default GravityCanvas;
