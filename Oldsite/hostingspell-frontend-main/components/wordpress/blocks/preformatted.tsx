// components/wordpress/blocks/preformatted.tsx
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export function Preformatted({ children, className }: { children: ReactNode; className?: string }) {
    return (
        <pre className={cn("bg-muted p-4 rounded-lg overflow-x-auto text-sm text-muted-foreground font-mono my-8 shadow-inner", className)}>
            {children}
        </pre>
    );
}