// components/wordpress/blocks/woocommerce-product-grid.tsx
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export function WooCommerceProductGrid({ children, className }: { children: ReactNode; className?: string }) {
    return <div className={cn("grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 my-8", className)}>{children}</div>;
}