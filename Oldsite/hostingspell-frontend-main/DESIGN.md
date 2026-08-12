# DESIGN.md — HostingSpell Frontend Design System

> This document is the **single source of truth** for all design decisions in the HostingSpell frontend. Follow these guidelines when building, reviewing, or editing any UI element.

---

## 🎨 Design Philosophy

HostingSpell's UI is built around **premium, modern web hosting aesthetics**:

- **Dark-first, light-ready** — the dark theme is the primary brand experience; light mode must be equally polished.
- **Spacious & focused** — generous whitespace, clear visual hierarchy, minimal clutter.
- **Alive & dynamic** — subtle animations communicate quality and responsiveness.
- **Conversion-driven** — every page has a clear CTA path; design choices serve business goals.

---

## 🅰️ Typography

### Font Families

| Role | Family | Variable |
|---|---|---|
| **Headings** | Poppins (Google Fonts) | `var(--font-headers)` / `font-headers` |
| **Body / UI** | Open Sans (Google Fonts) | `var(--font-body)` / `font-body` |

> Both fonts are loaded via `next/font/google` with `display: swap` and preloading for LCP performance.

### Type Scale (Tailwind + globals.css)

| Element | Light breakpoint | Dark breakpoint | CSS |
|---|---|---|---|
| `h1` | `text-4xl font-bold tracking-tight` | `md:text-5xl` | `lg:text-6xl` |
| `h2` | `text-3xl font-bold` | `md:text-4xl` | — |
| `h3` | `text-2xl font-semibold` | `md:text-3xl` | — |
| `p` | `text-base` | `md:text-lg` | — |

### Guidelines

- Headings always use `font-headers` (Poppins).
- Body copy always uses `font-body` (Open Sans).
- `font-bold` (700) for h1/h2, `font-semibold` (600) for h3/h4, `font-medium` (500) for labels.
- `tracking-tight` on large display headings only.
- **Never use system fonts** for main UI text.

---

## 🎨 Colour System

Colours are defined as **OKLCH CSS variables** in `app/globals.css` and referenced everywhere via Tailwind's semantic token names. Never use raw hex values in component files.

### Semantic Tokens

| Token | Light | Dark | Usage |
|---|---|---|---|
| `--background` | `oklch(0.964 0.015 249.3)` — cool light blue-grey | `oklch(0.13 0.01 270)` — near-black navy | Page background |
| `--foreground` | Dark navy | Near-white | Primary text |
| `--primary` | `oklch(0.623 0.214 259.8)` — vivid blue | `oklch(0.546 0.245 262.9)` — bright blue | CTAs, links, focus rings |
| `--primary-foreground` | Near-white | Blue-tinted dark | Text on primary buttons |
| `--card` | White | Dark navy-grey | Card surfaces |
| `--card-foreground` | Dark navy | Near-white | Text on cards |
| `--muted` | Light grey | Dark grey | Secondary surfaces, tags |
| `--muted-foreground` | Medium grey | Light grey | Placeholder, secondary text |
| `--border` | Light grey | White at 10% opacity | Dividers, card borders |
| `--destructive` | Red-orange | Bright red | Error states |
| `--ring` | Blue (matches primary) | Bright blue | Focus ring outline |

### Brand Accent Colours (used in animations & special effects)

| Name | Value | Usage |
|---|---|---|
| Premium Orange | `#FF6B35` | Premium plan glow border |
| Neon Pink (dark) | `#ff00cc` | Promo code text (dark mode) |
| Neon Cyan (dark) | `#00eaff` | Promo code underline (dark mode) |
| Royal Blue (light) | `#3a3aff` | Promo code text (light mode) |
| Glow Blue | `#3b82f6` | Ambient glow spots background effect |

### Chart Colours

For data visualisations, use `--chart-1` through `--chart-5` tokens.

---

## 📐 Spacing & Layout

### Container

- Max width: **1400px** (`2xl` breakpoint)
- Standard horizontal padding: `px-4 sm:px-6 lg:px-8`
- Centred with `mx-auto`

```tsx
<div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
```

### Section Rhythm

Sections use consistent vertical padding defined globally:

```css
section {
  @apply py-16 md:py-24;
}
```

### Grid Patterns

| Layout | Class pattern |
|---|---|
| 2-col feature grid | `grid grid-cols-1 md:grid-cols-2 gap-6` |
| 3-col plan grid | `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6` |
| 4-col feature icons | `grid grid-cols-2 md:grid-cols-4 gap-4` |

### Border Radius

| Token | Value | Usage |
|---|---|---|
| `--radius` | `0.65rem` | Default card radius |
| `rounded-sm` | `calc(var(--radius) - 4px)` | Badges, tags |
| `rounded-md` | `calc(var(--radius) - 2px)` | Inputs, small cards |
| `rounded-lg` | `var(--radius)` | Standard cards |
| `rounded-xl` | `calc(var(--radius) + 4px)` | Large feature cards, modals |
| `rounded-full` | `9999px` | Pills, avatars, glow blobs |

---

## ✨ Animation & Motion System

All animations are defined in `app/globals.css` as named `@keyframes`. Use Tailwind animation utilities or reference the class names directly.

### Global Keyframes

| Animation name | Class | Duration | Usage |
|---|---|---|---|
| `float` | `.animate-float` | 3s ease-in-out infinite | Floating elements, icons |
| `glowPulse` | applied inline on `.glow-spot` | 6s ease-in-out infinite | Ambient background glow blobs |
| `animated-border-glow` | `.animated-border-glow` | 1.5s ease-in-out infinite | Premium plan card border |
| `animated-border-glow-blue` | `.animated-border-glow-blue` | 1.5s ease-in-out infinite | Featured plan border |
| `fadeUp` | `.card-animate` | 1s ease forwards | Section entrance animation |
| `shimmer` | Used in skeleton loaders | — | Loading placeholders |
| `glitch-1` / `glitch-2` / `glitch-skew` | `.glitch-text` | 2–3s infinite | Black Friday / special event hero text |
| `neonPulseLight` / `neonPulseDark` | `.promo-code` | 3s infinite | Promo code colour cycling |
| `neonBar` | `.promo-code::after` | 4s infinite | Promo code underline pulse |
| `accordion-down` / `accordion-up` | Tailwind | 0.2s ease-out | Accordion open/close |

### Framer Motion

Use `framer-motion` for:
- Staggered list animations
- Page-transition effects
- Complex gesture-based interactions (drag, hover with spring physics)

Use **CSS keyframes** for:
- Looping background effects (glow, float, pulse)
- Simple hover states where Tailwind's `transition-*` utilities suffice

### Micro-interaction Standards

| Interaction | Standard |
|---|---|
| Card hover lift | `transition-transform duration-300 hover:scale-105` or `hover:-translate-y-1` |
| Button hover | `transition-all duration-300 hover:shadow-lg hover:-translate-y-1` |
| Link / nav item | `transition-colors duration-200` |
| Theme toggle | Framer Motion layout animation |
| Modal open | Radix UI built-in, enhanced with Tailwind `data-[state=open]:animate-in` |

---

## 🌗 Dark Mode

- Dark mode is **class-based**: the `.dark` class is applied to `<html>`.
- Managed by `next-themes` via `app/components/ThemeProvider.tsx`.
- Theme toggle is in the header (`components/ThemeToggle.tsx`).

### Rules

1. **Every component must have a `dark:` variant** for background, text, and border colours.
2. Use CSS variable tokens (e.g., `bg-background`, `text-foreground`) where possible — they switch automatically.
3. Only add explicit `dark:` overrides when using a non-token colour.
4. Glow spots, background animations, and special effects have separate light/dark implementations.

### `@custom-variant` usage

```css
@custom-variant dark (&:is(.dark *));
```

This enables dark mode inside CSS using `&:is(.dark *)` selector matching.

---

## 🧩 Component Design Patterns

### Cards

All content cards follow this baseline:

```tsx
<div className="rounded-lg border border-border bg-card text-card-foreground shadow-sm p-6 transition-transform duration-300 hover:scale-105">
```

For elevated / featured cards, add:
- `animated-border-glow` (orange) or `animated-border-glow-blue` (blue) class
- `shadow-lg` → `shadow-xl` on hover

### Buttons

Use the `<Button>` component from `components/ui/button.tsx`.

| Variant | Usage |
|---|---|
| `default` | Primary CTA (filled, `--primary` colour) |
| `outline` | Secondary actions |
| `ghost` | Navigation links, icon buttons |
| `destructive` | Danger / delete actions |

```tsx
<Button variant="default" size="lg">Get Started</Button>
```

Never create ad-hoc button styles — extend variants in `components/ui/button.tsx` if needed.

### Badges & Labels

Use `<Badge>` from `components/ui/badge.tsx` for plan tags (e.g., "Most Popular", "New").

### Pricing Cards

Pricing UI is centralised in `components/pricing/`. Key components:

| Component | Route(s) used |
|---|---|
| `HostingPlanGrid.tsx` | Shared hosting plans |
| `PremiumHostingPlanGrid.tsx` | Premium plans |
| `ResellerHostingPlanGrid.tsx` | Reseller plans |
| `VpsHostingPlanGrid.tsx` | VPS plans |
| `DomainCardGrid.tsx` | Domain registration pricing |
| `HostingPlanComparisonTable.tsx` | Side-by-side plan comparison |

Data **always** flows from `lib/constants*.ts` → pricing component → rendered UI.

### FAQ

Use `<FAQ>` from `components/shared/FAQ.tsx` for all FAQ sections. It uses the `<Accordion>` primitive internally.

### Background Effects

Page backgrounds use pluggable canvas/animation components from `components/hero/` and `components/background/`. The active hero background is controlled by `HeroBackground.tsx`.

Available backgrounds:

| Component | Effect |
|---|---|
| `BackgroundAurora.tsx` | Aurora borealis gradient waves |
| `BackgroundStarfield.tsx` | Animated star field |
| `BackgroundBinaryRain.tsx` | Matrix-style binary rain |
| `BackgroundTronGrid.tsx` | Neon Tron-style grid |
| `BackgroundInkFlow.tsx` | Ink diffusion effect |
| `BackgroundGlitch.tsx` | Glitch distortion |
| `BackgroundParticlesSwirl.tsx` | Particle swirl |
| `SnowflakeBackground.tsx` | Snowfall (seasonal) |
| `HeroBlackFriday.jsx` | Black Friday promo hero |
| `HeroDiwali.tsx` | Diwali themed hero |
| `ThemeIndependenceDay.tsx` | Independence Day themed |

### Glow Spots

The ambient radial glow blobs (`GlowSpotsClient.tsx` → `GlowSpots.tsx`) are fixed-position, rendered behind all content via `z-index`. They use:

```css
.glow-spot {
  position: absolute;
  border-radius: 9999px;
  background: radial-gradient(circle, #3b82f6 0%, transparent 70%);
  opacity: 0.45;
  filter: blur(120px);
  animation: glowPulse 6s ease-in-out infinite;
}
```

---

## 🖼️ Images & Media

- **All images** must use `<Image>` from `next/image`.
- Always specify explicit `width` and `height` to prevent layout shift (CLS).
- Use `loading="lazy"` for below-the-fold images.
- Critical above-the-fold images are `<link rel="preload">` in `app/layout.tsx`.
- Image assets live in `public/img/`.
- Open Graph image: `public/img/opengraph.jpg` (used site-wide).

---

## 📱 Responsive Design

### Breakpoints (Tailwind defaults)

| Breakpoint | Min-width | Usage |
|---|---|---|
| _(base)_ | 0px | Mobile-first default |
| `sm` | 640px | Large mobile / small tablet |
| `md` | 768px | Tablet portrait |
| `lg` | 1024px | Tablet landscape / small desktop |
| `xl` | 1280px | Desktop |
| `2xl` | 1400px | Wide desktop (container max) |

### Mobile-First Rules

1. Always design mobile layout first, enhance upward.
2. Stack columns on mobile, split on `md`/`lg`.
3. Reduce font sizes on mobile (base), scale up on `md`/`lg`.
4. Touch targets must be ≥ 44×44px.
5. Navigation collapses to `MobileNav.tsx` on `md` and below.

---

## 🔗 Navigation & Header

The site header is `app/components/Header.tsx`. It contains:
- Logo (`HeaderLogo.tsx`)
- Main nav links (desktop)
- `ThemeToggle.tsx` — light/dark toggle
- `CurrencyToggle.tsx` — INR/USD switcher
- `MobileNav.tsx` — slide-out drawer for mobile

Nav items with dropdown menus use `NavItem.tsx` with Radix `DropdownMenu`.

---

## 🌐 SEO & Metadata

- All page metadata is in `config/seoConfig.ts`.
- Pages import metadata via `lib/seoHelper.ts` → `getPageMetadata(pageKey)`.
- `app/layout.tsx` sets root-level metadata via `export const metadata`.
- Each route's `page.tsx` overrides with its own metadata object.
- OG/Twitter images default to `/img/opengraph.jpg`.
- Canonical URLs are per-page.
- Structured data (JSON-LD) is recommended for pricing pages.

See `docs/SEO_OPTIMIZATION_GUIDE.md` for complete guidance.

---

## ♿ Accessibility (a11y)

- All interactive elements must be keyboard-navigable.
- Radix UI primitives handle ARIA roles/attributes automatically — don't override without reason.
- Images must have descriptive `alt` text. Decorative images use `alt=""`.
- Colour contrast must meet WCAG AA (4.5:1 for normal text, 3:1 for large text).
- Focus rings use `--ring` colour token via `outline-ring/50` applied globally.
- Never remove `outline` styles from focused elements.

---

## 🧪 Design QA Checklist

Before merging any UI change, verify:

- [ ] Light mode looks correct
- [ ] Dark mode looks correct
- [ ] Mobile (≤768px) layout is usable and unbroken
- [ ] Tablet (768–1024px) layout flows naturally
- [ ] Desktop (≥1280px) layout fills the container properly
- [ ] Hover / focus states are visible
- [ ] Animations do not cause layout shift (CLS)
- [ ] No hardcoded colours (use CSS tokens)
- [ ] Typography uses Poppins (headings) and Open Sans (body)
- [ ] Images use `<Image>` with `alt`, `width`, `height`
- [ ] Pricing data sourced from `lib/constants*.ts`

---

## 📋 Global CSS Class Reference

| Class | Effect |
|---|---|
| `.card` | `hover:scale-105` lift on hover |
| `.btn-hover` | Shadow + vertical lift on hover |
| `.gradient-bg` | Blue → Purple diagonal gradient background |
| `.text-gradient` | Blue → Purple gradient text fill |
| `.shadow-custom` | Shadow with hover transition |
| `.animate-float` | Vertical floating loop |
| `.glow-spot` | Radial glow blob for ambient backgrounds |
| `.glow-wrapper` | Full-screen fixed container for glow spots |
| `.animated-border-glow` | Orange pulsing box-shadow (premium cards) |
| `.animated-border-glow-blue` | Blue pulsing box-shadow (featured cards) |
| `.card-animate` | Fade-up entrance animation |
| `.glitch-text` | Glitch effect (Black Friday hero) |
| `.promo-code` | Neon-cycling promo code text |
| `.promo-line` | Wrapper for promo text line |

---

## 📚 References

- [Tailwind CSS v4 Docs](https://tailwindcss.com/docs)
- [shadcn/ui Component Library](https://ui.shadcn.com)
- [Radix UI Primitives](https://www.radix-ui.com/primitives)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Next.js Image Optimization](https://nextjs.org/docs/app/api-reference/components/image)
- [WCAG 2.1 Contrast Guidelines](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html)
- [docs/PERFORMANCE_OPTIMIZATIONS.md](./docs/PERFORMANCE_OPTIMIZATIONS.md)
- [docs/SEO_OPTIMIZATION_GUIDE.md](./docs/SEO_OPTIMIZATION_GUIDE.md)
