export default function ShowcaseLoading() {
  return (
    <div className="min-h-screen animate-pulse">
      {/* Hero skeleton */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="h-6 w-40 bg-muted rounded-full mx-auto" />
            <div className="h-14 w-3/4 bg-muted rounded-xl mx-auto" />
            <div className="h-14 w-1/2 bg-muted rounded-xl mx-auto" />
            <div className="h-6 w-2/3 bg-muted rounded-lg mx-auto" />
            <div className="flex justify-center gap-4 pt-4">
              <div className="h-12 w-40 bg-muted rounded-lg" />
              <div className="h-12 w-40 bg-muted rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Metrics skeleton */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="text-center space-y-2">
                <div className="h-10 w-24 bg-muted rounded-lg mx-auto" />
                <div className="h-4 w-20 bg-muted rounded mx-auto" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cards skeleton */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="h-8 w-64 bg-muted rounded-lg mx-auto mb-4" />
            <div className="h-5 w-96 bg-muted rounded mx-auto mb-12" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="h-48 bg-muted rounded-xl" />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
