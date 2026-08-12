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
    Events,
} from "matter-js";

type AnimatedSprite = {
    body: Body;
    currentFrame: number;
    animationSpeed: number;
    lastFrameChange: number;
    isFinished: boolean;
};

export type IconSpec = {
    id: string;
    src: string;
    onClick?: (id: string) => void;
};

export type GaneshFestiveCanvasProps = {
    icons?: IconSpec[];
    className?: string;
    backgroundImageSrc?: string;
};

const SPARKLE_FRAMES = [
    "https://i.imgur.com/2yLmMh2.png", // Frame 0
    "https://i.imgur.com/k2Fw9MT.png", // Frame 1
    "https://i.imgur.com/T0bC4s9.png", // Frame 2
    "https://i.imgur.com/4oSAx5a.png", // Frame 3
    "https://i.imgur.com/hGq0mH6.png", // Frame 4
];
const SPARKLE_ANIMATION_SPEED = 75;

const GaneshFestiveCanvas: React.FC<GaneshFestiveCanvasProps> = ({
    icons,
    className,
    backgroundImageSrc = "/img/ganesh-illustration.webp",
}) => {
    // --- THIS IS THE CORRECTED LINE ---
    const containerRef = useRef<HTMLDivElement | null>(null);
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const engineRef = useRef<Engine | null>(null);
    const animatedSpritesRef = useRef<AnimatedSprite[]>([]);
    const playHeight = 400;

    const festiveIcons: IconSpec[] = [
        { id: "flower-1", src: "/img/flower1.webp" },
        { id: "flower-2", src: "/img/flower2.webp" },
        { id: "flower-3", src: "/img/flower3.webp" },
        { id: "flower-4", src: "/img/flower4.webp" },
        { id: "flower-5", src: "/img/flower5.webp" },
        { id: "flower-6", src: "/img/flower1.webp" },
        { id: "flower-7", src: "/img/flower2.webp" },
        { id: "flower-8", src: "/img/flower3.webp" },
    ];

    useEffect(() => {
        const el = containerRef.current;
        const canvas = canvasRef.current;
        if (!el || !canvas) return;

        const width = el.clientWidth;
        const height = playHeight;

        const engine = Engine.create();
        engineRef.current = engine;
        engine.gravity.y = 0.8;
        engine.timing.timeScale = 1.1;

        // const render = Render.create({
        //     element: el,
        //     canvas,
        //     engine,
        //     options: {
        //         width,
        //         height,
        //         background: "transparent",
        //         wireframes: false,
        //         pixelRatio: window.devicePixelRatio || 1,
        //     },
        // });

        const render = Render.create({
            canvas,   // ✅ use your own <canvas>
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

        const wallThickness = 50;
        const walls = [
            Bodies.rectangle(width / 2, height + wallThickness / 2, width, wallThickness, { isStatic: true, render: { visible: false } }),
            Bodies.rectangle(0, height / 2, 1, height, { isStatic: true, render: { visible: false } }),
            Bodies.rectangle(width, height / 2, 1, height, { isStatic: true, render: { visible: false } }),
        ];
        World.add(engine.world, walls);

        const makeIcon = (spec: IconSpec) => {
            const hitboxRadius = 22;
            const spriteRadius = 25;
            const x = Math.random() * (width - hitboxRadius * 2) + hitboxRadius;
            const y = -Math.random() * 150;

            return Bodies.circle(x, y, hitboxRadius, {
                label: `icon-${spec.id}`,
                restitution: 0.6,
                frictionAir: 0.01,
                density: 0.0005,
                render: {
                    sprite: {
                        texture: spec.src,
                        xScale: (spriteRadius * 2) / 128,
                        yScale: (spriteRadius * 2) / 128,
                    },
                },
            });
        };

        const iconSpecs = (icons && icons.length ? icons : festiveIcons);
        const iconBodies = iconSpecs.map(makeIcon);
        World.add(engine.world, iconBodies);

        const mouse = Mouse.create(canvas);
        mouse.pixelRatio = window.devicePixelRatio || 1;
        const mouseConstraint = MouseConstraint.create(engine, {
            mouse,
            constraint: { stiffness: 0.9, render: { visible: false } },
        });
        World.add(engine.world, mouseConstraint);

        // const createSparkle = (x: number, y: number) => {
        //     const sparkleBody = Bodies.circle(x, y, 20, {
        //         isStatic: true,
        //         isSensor: true,
        //         render: {
        //             sprite: {
        //                 texture: SPARKLE_FRAMES[0],
        //                 xScale: 0.5,
        //                 yScale: 0.5,
        //             },
        //             opacity: 0.9,
        //         },
        //     });
        //     World.add(engine.world, sparkleBody);

        //     animatedSpritesRef.current.push({
        //         body: sparkleBody,
        //         currentFrame: 0,
        //         animationSpeed: SPARKLE_ANIMATION_SPEED,
        //         lastFrameChange: Date.now(),
        //         isFinished: false,
        //     });
        // };

        let mouseDownBody: Body | null = null;
        Events.on(mouseConstraint, "mousedown", () => { mouseDownBody = mouseConstraint.body; });
        Events.on(mouseConstraint, "mouseup", () => {
            if (mouseDownBody && mouseConstraint.body === mouseDownBody) {
                const spec = iconSpecs.find((s) => `icon-${s.id}` === mouseDownBody?.label);
                if (spec) {
                    spec.onClick?.(spec.id);
                }
            } else if (!mouseDownBody) {
                Composite.allBodies(engine.world).forEach(body => {
                    if (!body.isStatic && body.label.startsWith("icon-")) {
                        const forceMagnitude = 0.03 * body.mass;
                        Body.applyForce(body, body.position, {
                            x: (Math.random() - 0.5) * forceMagnitude * 2,
                            y: -Math.random() * forceMagnitude,
                        });
                    }
                });
                // createSparkle(mouse.position.x, mouse.position.y);
            }
            mouseDownBody = null;
        });

        const animationHandler = () => {
            const now = Date.now();
            for (const sprite of animatedSpritesRef.current) {
                if (sprite.isFinished) continue;

                if (now - sprite.lastFrameChange > sprite.animationSpeed) {
                    sprite.currentFrame++;
                    sprite.lastFrameChange = now;

                    if (sprite.currentFrame >= SPARKLE_FRAMES.length) {
                        sprite.isFinished = true;
                        World.remove(engine.world, sprite.body);
                    } else {
                        sprite.body.render.sprite!.texture = SPARKLE_FRAMES[sprite.currentFrame];
                        sprite.body.render.opacity = 1 - (sprite.currentFrame / SPARKLE_FRAMES.length);
                    }
                }
            }
            animatedSpritesRef.current = animatedSpritesRef.current.filter(s => !s.isFinished);
        };
        Events.on(engine, "beforeUpdate", animationHandler);

        const ro = new ResizeObserver(() => {
            const w = el.clientWidth;
            const h = playHeight;
            render.options.width = w;
            render.options.height = h;
            render.canvas.width = w * (window.devicePixelRatio || 1);
            render.canvas.height = h * (window.devicePixelRatio || 1);
            Body.setPosition(walls[0], { x: w / 2, y: h + wallThickness / 2 });
            Body.setPosition(walls[1], { x: 0, y: h / 2 });
            Body.setPosition(walls[2], { x: w, y: h / 2 });
        });
        ro.observe(el);

        return () => {
            ro.disconnect();
            Events.off(engine, "beforeUpdate", animationHandler);
            Render.stop(render);
            Runner.stop(runner);
            World.clear(engine.world, false);
            Engine.clear(engine);
            render.canvas.remove();
        };
    }, [icons]);

    return (
        <div
            ref={containerRef}
            className={`relative w-full ${className ?? ""}`}
            style={{
                maxWidth: "400px",
                height: "400px",
                backgroundImage: `url('${backgroundImageSrc}')`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center 80%",
            }}
        >
            <canvas ref={canvasRef} className="absolute inset-0" />
        </div>
    );
};

export default GaneshFestiveCanvas;