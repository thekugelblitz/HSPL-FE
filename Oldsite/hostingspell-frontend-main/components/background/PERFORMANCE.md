# ElectricSparksCanvas Performance Optimizations

## Mobile vs Desktop Settings

### Mobile (< 768px)
- **Max Arcs**: 15 (reduced from 50) - 70% reduction
- **Spawn Rate**: 0.04 (reduced from 0.12) - 67% reduction
- **Arc Distance**: 200px (reduced from 400px) - 50% reduction
- **Segments**: 6 (reduced from 10) - 40% reduction
- **Click Arcs**: 2 (reduced from 5) - 60% reduction
- **Drawing Layers**: 2 (reduced from 3) - 33% reduction
- **Branch Sparks**: Disabled on mobile
- **Fade Speed**: 0.06 (faster than 0.04) - 50% faster
- **Initial Burst**: 2 corners (reduced from 4) - 50% reduction
- **Arc Count per Spawn**: 1 (reduced from 1-2 random)

### Desktop (≥ 768px)
- **Max Arcs**: 50
- **Spawn Rate**: 0.12
- **Arc Distance**: 400px
- **Segments**: 10
- **Click Arcs**: 5
- **Drawing Layers**: 3 (full quality with glow effects)
- **Branch Sparks**: Enabled
- **Fade Speed**: 0.04
- **Initial Burst**: 4 corners
- **Arc Count per Spawn**: 1-2 random

## Additional Optimizations

1. **Canvas Context Options**:
   - `desynchronized: true` - Better performance by allowing async rendering
   - `willReadFrequently: false` - Optimizes for write-only operations

2. **Reduced Complexity**:
   - Mobile uses simplified 2-layer rendering (glow + core)
   - Desktop uses full 3-layer rendering (outer glow + middle + core)
   - Branch sparks only on desktop

3. **Memory Management**:
   - Dynamic MAX_ARCS limit based on device
   - Faster fade on mobile to clear arcs quicker

## Expected Performance Impact

- **Mobile**: ~70-80% reduction in CPU usage
- **Desktop**: ~10-20% reduction in CPU usage
- **Overall**: Smoother animations and better battery life on mobile devices
