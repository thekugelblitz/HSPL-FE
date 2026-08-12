// components/wordpress/blocks/list-item.tsx
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export function ListItem({ children, className }: { children: ReactNode; className?: string }) {
    return (
        <li className={cn(
            "leading-relaxed", // Line height
            "pl-2", // Add some padding after the bullet/number
            className
        )}>
            {children}
        </li>
    );
}