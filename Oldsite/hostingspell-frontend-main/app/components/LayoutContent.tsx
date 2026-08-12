"use client";

import { Suspense, useState, useEffect } from "react";
import { Footer } from "./Footer";
import { PageLoadingSkeleton } from "@/components/loading/PageLoadingSkeleton";

export function LayoutContent({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Small delay to ensure content is ready
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <main className="flex-1 mt-0">
        <Suspense fallback={<PageLoadingSkeleton />}>
          <div className="mx-auto w-full">{children}</div>
        </Suspense>
      </main>
      {!isLoading && <Footer />}
    </>
  );
}
