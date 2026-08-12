'use client';

import { useEffect, useState } from 'react';

interface CountryPoint {
    lat: number;
    lng: number;
    label: string;
    flag: string;
    available: boolean;
}

interface MapProps {
    points?: CountryPoint[];
}

const mapWidth = 2000;
const mapHeight = 1001;

export default function CustomWorldMap({ points = [] }: MapProps) {
    const [viewBox, setViewBox] = useState(`0 0 ${mapWidth} ${mapHeight}`);

    useEffect(() => {
        const updateViewBox = () => {
            const isMobile = window.innerWidth < 768;
            if (isMobile) {
                // Centered portion of the map for mobile — show ~60% width centered horizontally
                const visibleWidth = 1200;
                const startX = (mapWidth - visibleWidth) / 2;
                setViewBox(`${startX} 0 ${visibleWidth} ${mapHeight}`);
            } else {
                // Full viewBox for desktop
                setViewBox(`0 0 ${mapWidth} ${mapHeight}`);
            }
        };

        updateViewBox();
        window.addEventListener('resize', updateViewBox);
        return () => window.removeEventListener('resize', updateViewBox);
    }, []);

    const projectPoint = (lat: number, lng: number) => {
        const x = ((lng + 180) / 360) * mapWidth;
        const y = ((90 - lat) / 180) * mapHeight;
        return { x, y };
    };

    return (
        <div className="relative w-full aspect-[2/1] overflow-hidden rounded-lg">
            <svg
                viewBox={viewBox}
                className="w-full h-full"
                preserveAspectRatio="xMidYMid meet"
            >
                {/* Map image */}
                <image
                    href="/illustration/worldmap.svg"
                    width={mapWidth}
                    height={mapHeight}
                />

                {/* Country points */}
                {points.map((point, i) => {
                    const { x, y } = projectPoint(point.lat, point.lng);
                    const isClosest = point.label.toLowerCase().includes("closest");

                    const bubbleY = -110;
                    const bubbleWidth = 160;
                    const bubbleHeight = 50;
                    const cornerRadius = 20;

                    return (
                        <g key={i} transform={`translate(${x}, ${y})`}>
                            {isClosest && (
                                <>
                                    {/* Curved line */}
                                    <path
                                        d={`M 0 ${bubbleY + bubbleHeight} C 10 ${bubbleY + bubbleHeight + 15}, 10 -35, 0 -22`}
                                        fill="none"
                                        stroke="#2563eb"
                                        strokeWidth="5"
                                        strokeLinecap="round"
                                    />
                                    {/* Bubble */}
                                    <rect
                                        x={-bubbleWidth / 2}
                                        y={bubbleY}
                                        rx={cornerRadius}
                                        ry={cornerRadius}
                                        width={bubbleWidth}
                                        height={bubbleHeight}
                                        fill="#2563eb"
                                    />
                                    <text
                                        x="0"
                                        y={bubbleY + 30}
                                        textAnchor="middle"
                                        fontSize="14"
                                        fill="white"
                                        fontFamily="sans-serif"
                                        fontWeight="bold"
                                    >
                                        CLOSEST TO YOU
                                    </text>
                                </>
                            )}

                            {/* Flag circle */}
                            <circle cx="0" cy="0" r="22" fill="white" />
                            <circle cx="0" cy="0" r="20" fill="none" stroke="#2563eb" strokeWidth={point.available ? 4 : 0} />

                            <clipPath id={`clip-${i}`}>
                                <circle cx="0" cy="0" r="18" />
                            </clipPath>

                            <image
                                href={point.flag}
                                x={-18}
                                y={-18}
                                width="36"
                                height="36"
                                clipPath={`url(#clip-${i})`}
                                opacity={point.available ? 1 : 0.5}
                            />

                        </g>
                    );
                })}
            </svg>
        </div>
    );
}
