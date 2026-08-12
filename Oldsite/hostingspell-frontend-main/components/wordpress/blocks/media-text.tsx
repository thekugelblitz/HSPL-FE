// components/wordpress/blocks/media-text.tsx
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export function MediaText({ children, className }: { children: ReactNode; className?: string }) {
    return <div className={cn("flex flex-col md:flex-row items-center gap-8 my-8", className)}>{children}</div>;
}