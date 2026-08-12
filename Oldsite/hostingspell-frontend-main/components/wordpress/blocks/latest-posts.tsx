// components/wordpress/blocks/latest-posts.tsx
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export function LatestPosts({ children, className }: { children: ReactNode; className?: string }) {
    return <div className={cn("my-8", className)}>{children}</div>;
}