"use client";

import { useState } from "react";

interface AppIconProps {
    src?: string;
    alt: string;
    className?: string;
}

export function AppIcon({ src, alt, className = "w-8 h-8 object-contain" }: AppIconProps) {
    const [error, setError] = useState(false);

    if (!src || error) {
        // Fallback to initial character 
        const initial = alt ? alt.charAt(0).toUpperCase() : "A";
        return (
            <div className={`flex items-center justify-center bg-blue-500 rounded-full text-white font-bold ${className.replace("object-contain", "")}`} style={{ width: '100%', height: '100%' }}>
                {initial}
            </div>
        );
    }

    return (
        <img
            src={src}
            alt={alt}
            className={className}
            onError={() => setError(true)}
        />
    );
}
