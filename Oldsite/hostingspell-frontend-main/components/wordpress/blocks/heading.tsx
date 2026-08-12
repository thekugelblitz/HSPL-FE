// components/wordpress/blocks/heading.tsx
import { cn } from "@/lib/utils";
import React from "react";
import { ReactNode, JSX } from "react";

export function Heading({ children, className, level }: { children: ReactNode; className?: string; level: 1 | 2 | 3 | 4 | 5 | 6 }) {
    const Tag = `h${level}` as keyof JSX.IntrinsicElements;
    const classes: Record<1 | 2 | 3 | 4 | 5 | 6, string> = {
        1: "text-4xl sm:text-5xl font-extrabold mt-12 mb-8 leading-tight text-foreground",
        2: "text-3xl sm:text-4xl font-bold mt-10 mb-6 leading-snug text-foreground",
        3: "text-2xl sm:text-3xl font-semibold mt-8 mb-5 leading-normal text-foreground",
        4: "text-xl sm:text-2xl font-semibold mt-6 mb-4 text-foreground",
        5: "text-lg sm:text-xl font-semibold mt-5 mb-3 text-foreground",
        6: "text-base sm:text-lg font-semibold mt-4 mb-2 text-foreground",
    };
    return React.createElement(
        Tag,
        { className: cn(classes[level], className) },
        children
    );
}