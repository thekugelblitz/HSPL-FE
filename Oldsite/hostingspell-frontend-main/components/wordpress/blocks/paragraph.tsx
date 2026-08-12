// components/wordpress/blocks/paragraph.tsx
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export function Paragraph({ children, className }: { children: ReactNode; className?: string }) {
    return <p className={cn("mb-6 leading-relaxed text-lg text-foreground/90", className)}>{children}</p>;
}