// components/wordpress/blocks/table.tsx
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export function Table({ children, className }: { children: ReactNode; className?: string }) {
    return (
        <div className="w-full overflow-x-auto my-12 rounded-lg border border-muted-foreground/20">
            <table className={cn("w-full text-left border-collapse", className)}>
                {children}
            </table>
        </div>
    );
}