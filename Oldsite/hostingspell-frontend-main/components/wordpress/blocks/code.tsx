// components/wordpress/blocks/code.tsx
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export function Code({ children, className }: { children: ReactNode; className?: string }) {
    return (
        <pre className={cn("bg-muted/50 p-6 rounded-lg overflow-x-auto text-sm text-foreground/90 font-mono my-12 shadow-inner border border-muted-foreground/10", className)}>
            <code className="block">{children}</code>
        </pre>
    );
}