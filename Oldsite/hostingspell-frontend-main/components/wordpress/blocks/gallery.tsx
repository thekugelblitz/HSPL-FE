// components/wordpress/blocks/gallery.tsx
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export function Gallery({ children, className }: { children: ReactNode; className?: string }) {
    return <div className={cn("grid grid-cols-2 md:grid-cols-3 gap-4 my-8", className)}>{children}</div>;
}