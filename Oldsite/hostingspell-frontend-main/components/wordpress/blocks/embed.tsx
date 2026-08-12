// components/wordpress/blocks/embed.tsx
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export function Embed({ children, className }: { children: ReactNode; className?: string }) {
    return <div className={cn("my-8 aspect-video", className)}>{children}</div>;
}