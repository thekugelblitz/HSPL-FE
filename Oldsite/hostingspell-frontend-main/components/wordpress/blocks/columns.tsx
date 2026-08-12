// components/wordpress/blocks/columns.tsx
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export function Columns({ children, className }: { children: ReactNode; className?: string }) {
    return <div className={cn("flex flex-col md:flex-row gap-8 my-8", className)}>{children}</div>;
}