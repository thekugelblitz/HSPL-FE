// components/wordpress/blocks/button.tsx
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export function Button({ children, className }: { children: ReactNode; className?: string }) {
    return (
        <div className={cn("my-8", className)}>
            <a className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-md font-semibold hover:bg-primary/90 transition-colors">
                {children}
            </a>
        </div>
    );
}