// components/wordpress/blocks/fallback-block.tsx
import { cn } from "@/lib/utils";
import React from "react";
import { ReactNode, JSX } from "react";

export function FallbackBlock({ children, className, tagName }: { children: ReactNode; className?: string; tagName: keyof JSX.IntrinsicElements }) {
    return React.createElement(
        tagName,
        { className: cn("my-6", className) },
        children
    );
}