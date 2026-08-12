// components/wordpress/blocks/separator.tsx
import { cn } from "@/lib/utils";

export function Separator({ className }: { className?: string }) {
    return <hr className={cn("my-12 border-t-2 border-muted-foreground/30", className)} />;
}