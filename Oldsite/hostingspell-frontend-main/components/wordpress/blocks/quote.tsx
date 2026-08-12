// components/wordpress/blocks/quote.tsx
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export function Quote({ children, className }: { children: ReactNode; className?: string }) {
    return (
        <blockquote className={cn("border-l-4 border-primary pl-8 py-4 my-12 text-muted-foreground italic bg-accent/20 rounded-r-lg text-lg", className)}>
            {children}
        </blockquote>
    );
}