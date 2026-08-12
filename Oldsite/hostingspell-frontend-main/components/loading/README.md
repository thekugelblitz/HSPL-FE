# Loading Components

This directory contains shimmer loading skeletons used throughout the application to provide a better user experience during page loads.

## Components

### PageLoadingSkeleton
A comprehensive loading skeleton that displays shimmer effects for:
- Hero sections
- Pricing cards
- Feature sections
- Content blocks

This prevents the footer from showing alone while page content is loading.

## Usage

Loading skeletons are automatically used by Next.js when placed in a `loading.tsx` file within any route segment.

```tsx
import { PageLoadingSkeleton } from "@/components/loading/PageLoadingSkeleton";

export default function Loading() {
  return <PageLoadingSkeleton />;
}
```

## Shimmer Components

Base shimmer components are available in `components/ui/shimmer.tsx`:
- `Shimmer` - Base shimmer effect
- `ShimmerBox` - Rounded box with shimmer
- `ShimmerText` - Text line with shimmer
- `ShimmerCircle` - Circular shimmer

These can be used to create custom loading states for specific components.
