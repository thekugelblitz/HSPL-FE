"use client";
import { useRef } from "react";
import { motion } from "framer-motion";

interface Point {
    lat: number;
    lng: number;
    label?: string;
    icon?: string;
}

interface MapProps {
    dots?: Array<{ start: Point; end: Point }>;
    points?: Point[];
    lineColor?: string;
}

export function WorldMap({ dots = [], points = [], lineColor = "#0ea5e9" }: MapProps) {
    const svgRef = useRef<SVGSVGElement>(null);

    // Project lat/lng to SVG coordinates (800x400)
    const projectPoint = (lat: number, lng: number) => {
        const x = (lng + 180) * (800 / 360);
        const y = (90 - lat) * (400 / 180);
        return { x, y };
    };

    // Create a curved path between two points
    const createCurvedPath = (start: { x: number; y: number }, end: { x: number; y: number }) => {
        const midX = (start.x + end.x) / 2;
        const midY = Math.min(start.y, end.y) - 50;
        return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
    };

    return (
        <div className="w-full aspect-[2/1] dark:bg-black bg-white rounded-lg relative font-sans">
            <svg
                ref={svgRef}
                viewBox="0 0 800 400"
                className="w-full h-full absolute inset-0 pointer-events-none select-none"
            >
                {/* Dotted world map background (simplified for demo) */}
                <g stroke="#b3c2d1" strokeWidth="1" strokeDasharray="2 6">
                    <ellipse cx="400" cy="200" rx="370" ry="170" fill="none" />
                    <ellipse cx="400" cy="200" rx="320" ry="120" fill="none" />
                </g>
                {/* Animated lines */}
                {dots.map((dot, i) => {
                    const startPoint = projectPoint(dot.start.lat, dot.start.lng);
                    const endPoint = projectPoint(dot.end.lat, dot.end.lng);
                    return (
                        <g key={`path-group-${i}`}>
                            <motion.path
                                d={createCurvedPath(startPoint, endPoint)}
                                fill="none"
                                stroke={lineColor}
                                strokeWidth="2"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 1, delay: 0.5 * i, ease: "easeOut" }}
                            />
                        </g>
                    );
                })}
                {/* Dots/markers */}
                {points.map((point, i) => {
                    const { x, y } = projectPoint(point.lat, point.lng);
                    return (
                        <g key={`point-${i}`}>
                            <circle cx={x} cy={y} r="10" fill={lineColor} stroke="#fff" strokeWidth="3" />
                            {point.icon && (
                                <text
                                    x={x}
                                    y={y + 6}
                                    textAnchor="middle"
                                    fontSize="18"
                                    style={{ userSelect: 'none' }}
                                >
                                    {point.icon}
                                </text>
                            )}
                            {point.label && (
                                <title>{point.label}</title>
                            )}
                        </g>
                    );
                })}
            </svg>
        </div>
    );
}
