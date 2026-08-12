// components/wordpress/blocks/list.tsx
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export function List({ children, className, ordered }: { children: ReactNode; className?: string; ordered?: boolean }) {
    const Tag = ordered ? "ol" : "ul";
    const listStyle = ordered ? "list-decimal" : "list-disc";
    return (
        <Tag className={cn(
            "pl-8 my-8", // Base spacing
            "space-y-3", // Space between list items
            "text-foreground/90 text-lg", // Text styling
            "marker:text-primary/70", // Bullet/number color
            listStyle, // List style (decimal or disc)
            ordered ? "list-outside" : "list-inside", // Different alignment for ol/ul
            className
        )}>
            {children}
        </Tag>
    );
}