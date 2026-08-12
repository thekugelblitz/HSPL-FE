// components/wordpress/blocks/cover.tsx
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export function Cover({ children, className, style }: { children: ReactNode; className?: string; style?: React.CSSProperties }) {
    return (
        <div className={cn("relative my-8 p-12 text-white bg-cover bg-center rounded-lg overflow-hidden", className)} style={style}>
            <div className="absolute inset-0 bg-black/50" />
            <div className="relative z-10">{children}</div>
        </div>
    );
}