import { cn } from "@/lib/utils";

export function Shimmer({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "animate-pulse bg-gradient-to-r from-muted via-muted/50 to-muted bg-[length:200%_100%]",
        className
      )}
      style={{
        animation: "shimmer 2s infinite linear",
      }}
    />
  );
}

export function ShimmerBox({ className }: { className?: string }) {
  return <Shimmer className={cn("rounded-lg", className)} />;
}

export function ShimmerText({ className }: { className?: string }) {
  return <Shimmer className={cn("h-4 rounded", className)} />;
}

export function ShimmerCircle({ className }: { className?: string }) {
  return <Shimmer className={cn("rounded-full", className)} />;
}
