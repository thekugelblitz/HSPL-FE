import { ShimmerBox, ShimmerText } from "@/components/ui/shimmer";

export function PageLoadingSkeleton() {
  return (
    <div className="min-h-screen flex flex-col animate-in fade-in duration-300">
      {/* Hero Section Skeleton */}
      <div className="w-full px-4 sm:px-6 lg:px-8 py-12 space-y-6">
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Hero Title */}
          <div className="space-y-4 text-center">
            <ShimmerText className="h-12 w-3/4 mx-auto" />
            <ShimmerText className="h-12 w-2/3 mx-auto" />
            <ShimmerText className="h-6 w-1/2 mx-auto mt-4" />
          </div>

          {/* Hero CTA */}
          <div className="flex justify-center gap-4">
            <ShimmerBox className="h-12 w-32" />
            <ShimmerBox className="h-12 w-32" />
          </div>
        </div>
      </div>

      {/* Pricing Cards Skeleton */}
      <div className="w-full px-4 sm:px-6 lg:px-8 py-12 bg-muted/20">
        <div className="max-w-7xl mx-auto">
          <ShimmerText className="h-8 w-64 mx-auto mb-8" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <ShimmerBox key={i} className="h-96 bg-card" />
            ))}
          </div>
        </div>
      </div>

      {/* Features Section Skeleton */}
      <div className="w-full px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto space-y-8">
          <ShimmerText className="h-8 w-64 mx-auto" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="space-y-4">
                <ShimmerBox className="h-48 rounded-xl" />
                <ShimmerText className="h-6 w-3/4" />
                <ShimmerText className="h-4 w-full" />
                <ShimmerText className="h-4 w-4/5" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Content Blocks Skeleton */}
      <div className="w-full px-4 sm:px-6 lg:px-8 py-12 bg-muted/10">
        <div className="max-w-7xl mx-auto space-y-12">
          {[1, 2].map((i) => (
            <div key={i} className="space-y-4">
              <ShimmerText className="h-8 w-1/3" />
              <ShimmerText className="h-4 w-full" />
              <ShimmerText className="h-4 w-5/6" />
              <ShimmerBox className="h-64 w-full mt-6 rounded-xl" />
            </div>
          ))}
        </div>
      </div>

      {/* Additional spacing to prevent footer from showing */}
      <div className="py-12" />
    </div>
  );
}
