# AGENTS.md — AI Agent Guidelines for HostingSpell Frontend

> This file provides essential context, conventions, and rules for any AI coding agent (Copilot, Claude, Gemini, Cursor, etc.) working on this repository. Read this fully before making any changes.

---

## 🏗️ Project Overview

**HostingSpell Frontend** is a **Next.js 16 (App Router)** landing site for a web-hosting brand. It is written in **TypeScript + React 19**, styled with **Tailwind CSS v4** and **shadcn/ui (Radix UI primitives)**, and animated with **Framer Motion**.

- **Live site**: [https://hostingspell.com](https://hostingspell.com)

---

## 🗂️ Repository Structure

```
hostingspell-frontend/
├── app/                          # Next.js App Router (routes + page-level components)
│   ├── layout.tsx                # Root layout — fonts, metadata, analytics scripts
│   ├── page.tsx                  # Home page (/)
│   ├── globals.css               # Global CSS, Tailwind theme tokens, keyframes
│   ├── metadata.ts               # Shared metadata helpers
│   ├── providers.tsx             # Client-side providers (theme, etc.)
│   │
│   ├── components/               # Components scoped to the app/ layer (shared across routes)
│   │   ├── Header/               # Site-wide header & navigation
│   │   ├── Footer.tsx
│   │   ├── Benefits.tsx
│   │   ├── FAQ.tsx
│   │   ├── PricingSection.tsx
│   │   ├── ComparisonSection.jsx
│   │   ├── HostingTabs.tsx
│   │   ├── WhyHostingSpell.tsx
│   │   ├── ContinentalConnectivity.tsx
│   │   └── ...
│   │
│   ├── getstarted/               # /getstarted route — primary "Get Started" funnel
│   ├── landing/                  # /landing route — campaign landing page
│   ├── pricing/                  # /pricing route
│   ├── domain/                   # /domain route
│   ├── cloud-hosting/            # /cloud-hosting route
│   ├── vps/                      # /vps route
│   ├── premium-hosting/          # /premium-hosting route
│   ├── reseller/                 # /reseller route
│   ├── combo-hosting/            # /combo-hosting route
│   ├── offers/                   # /offers route
│   ├── tools/                    # /tools route
│   ├── about/                    # /about route
│   ├── contact/                  # /contact route
│   ├── legal/                    # /legal route
│   └── ai-summary/               # /ai-summary route (AI-generated content feature)
│
├── components/                   # Truly reusable, route-agnostic UI components
│   ├── ui/                       # shadcn/ui primitives (button, card, dialog, etc.)
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── accordion.tsx
│   │   └── ...                   # All Radix-based primitives live here
│   ├── hero/                     # Seasonal / themed hero backgrounds
│   │   ├── HeroBackground.tsx    # Active background switcher
│   │   ├── BackgroundAurora.tsx
│   │   ├── BackgroundStarfield.tsx
│   │   └── ...
│   ├── background/               # Canvas-based animated backgrounds
│   ├── pricing/                  # Pricing grid & comparison table components
│   │   ├── HostingPlanGrid.tsx
│   │   ├── PremiumHostingSection.tsx
│   │   ├── DomainCardGrid.tsx
│   │   └── ...
│   ├── shared/                   # Cross-cutting shared components
│   │   ├── FAQ.tsx
│   │   ├── FeatureList.tsx
│   │   ├── AIChatCTA.tsx
│   │   └── cards/
│   ├── blog/                     # Blog post rendering components
│   ├── games/                    # Interactive game components (SpaceShooter, etc.)
│   ├── icons/                    # Custom SVG icon components
│   ├── loading/                  # Loading skeletons and spinners
│   ├── HeaderLogo.tsx
│   ├── ThemeToggle.tsx
│   └── CurrencyToggle.tsx
│
├── config/
│   ├── seoConfig.ts              # All per-page SEO metadata (title, description, OG)
│   └── pricingConfig.ts          # Pricing display configuration
│
├── context/
│   ├── CurrencyContext.tsx       # Global currency selection (INR / USD)
│   └── LocationContext.tsx       # User geo-location context
│
├── hooks/
│   └── useUserLocation.tsx       # Custom hook — detects user country/currency
│
├── lib/
│   ├── constants.ts              # Shared hosting plan data (the source of truth)
│   ├── constants-premium.ts      # Premium hosting plan data
│   ├── constants-reseller.ts     # Reseller hosting plan data
│   ├── constants-vps.ts          # VPS hosting plan data
│   ├── constants-apps.ts         # App hosting plan data
│   ├── seoHelper.ts              # Helper that maps page key → SEO config
│   ├── utils.ts                  # cn() utility (clsx + tailwind-merge)
│   ├── parseContent.tsx          # HTML content parsing helpers
│   └── redis.ts                  # Redis client (rate limiting)
│
├── data/                         # Static JSON / data files
├── types/                        # TypeScript type definitions
├── scripts/                      # Build / utility scripts
├── public/                       # Static assets (images, favicons, manifests)
│   └── img/                      # Site images
│
├── docs/                         # Extended developer documentation
│   ├── PERFORMANCE_OPTIMIZATIONS.md
│   ├── MOBILE_PERFORMANCE_OPTIMIZATIONS.md
│   └── SEO_OPTIMIZATION_GUIDE.md
│
├── next.config.ts                # Next.js configuration
├── tailwind.config.js            # Tailwind v4 theme extensions
├── tsconfig.json
└── nginx.conf                    # Production nginx reverse-proxy config
```

---

## ⚙️ Tech Stack at a Glance

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router, Turbopack dev) |
| Language | TypeScript 5, React 19 |
| Styling | Tailwind CSS v4 + `tw-animate-css` |
| UI Primitives | shadcn/ui (Radix UI) |
| Animation | Framer Motion v12, custom CSS keyframes |
| 3D / Canvas | Three.js, `@react-three/fiber`, `@react-three/postprocessing` |
| Icons | `lucide-react`, `react-icons` |
| State / Context | React Context API (CurrencyContext, LocationContext) |
| Fonts | Poppins (headings) + Open Sans (body) via `next/font/google` |
| Analytics | Google Analytics (GA4), Microsoft Clarity, Meta Pixel |
| Live Chat | Tawk.to |
| CMS | WordPress REST API (blog) |
| Caching | Redis (via `ioredis`) + rate limiting |
| Deployment | PM2 + nginx (production), Vercel (preview/staging) |

---

## 🛠️ Developer Commands

```bash
npm run dev        # Start dev server with Turbopack (http://localhost:3000)
npm run build      # Build production bundle
npm run start      # Start production server
npm run lint       # ESLint check
```

### Environment Variables

Copy `environment.example` to `.env.local` and fill in:

```env
NEXT_PUBLIC_WORDPRESS_API_URL=https://blog.2hs.in/wp-json/wp/v2
HOSTINGSPELL_API_TOKEN=your-token-here
```

> ⚠️ `NEXT_PUBLIC_*` variables are exposed to the browser. Non-prefixed vars are server-only.

---

## 🤖 Agent Rules & Conventions

### 1. Data Changes — Use `lib/constants*.ts`

**All pricing, plan features, and product data live in `lib/`.**
- **Never hard-code** plan names, prices, or features inside components.
- Shared hosting → `lib/constants.ts`
- Premium hosting → `lib/constants-premium.ts`
- Reseller hosting → `lib/constants-reseller.ts`
- VPS hosting → `lib/constants-vps.ts`
- App hosting → `lib/constants-apps.ts`

### 2. SEO Changes — Use `config/seoConfig.ts`

All per-page `<title>`, `<meta description>`, and Open Graph tags are managed in `config/seoConfig.ts`. Reference `lib/seoHelper.ts` to see how pages consume this config. **Do not write inline metadata in page files.**

### 3. Component Placement Rules

| Type | Location |
|---|---|
| Route-specific component (used only in one page) | `app/<route>/components/` |
| Cross-route app-layer component | `app/components/` |
| Truly reusable, domain-agnostic component | `components/` |
| shadcn/Radix primitive | `components/ui/` |
| Pricing grids / comparison tables | `components/pricing/` |
| Themed hero / background animations | `components/hero/` |

### 4. Styling Conventions

- Use **Tailwind utility classes** exclusively for layout, spacing, and typography.
- Use **CSS variables** (`--primary`, `--background`, etc.) for colour tokens — never hard-code hex values in component files.
- Shared CSS animations belong in `app/globals.css` with named `@keyframes`.
- Dark mode is class-based (`.dark`). Use `dark:` Tailwind variants.
- Custom global utility classes (`.card`, `.btn-hover`, `.text-gradient`, `.glow-spot`, etc.) are defined in `globals.css`.

### 5. Performance Guidelines

- **Lazy-load** heavy sections with `React.lazy()` + `<Suspense>`.
- Use `<Image>` from `next/image` for all images. **Never use `<img>` directly.**
- Third-party scripts go in `app/layout.tsx` using `next/script`. Use `strategy="afterInteractive"` for non-critical scripts.
- Avoid large synchronous imports in page entry points.
- See `docs/PERFORMANCE_OPTIMIZATIONS.md` for detailed patterns.

### 6. TypeScript

- Strict mode is enabled. **Do not use `any`** unless unavoidable.
- Use the `cn()` utility from `lib/utils.ts` (clsx + tailwind-merge) for conditional classNames.
- Type definitions shared across the project belong in `types/`.

### 7. Currency & Location

- Currency switching (INR ↔ USD) is managed by `context/CurrencyContext.tsx`.
- Location detection is via `context/LocationContext.tsx` + `hooks/useUserLocation.tsx`.
- All pricing components must consume `useCurrency()` to display localised prices.

### 8. "use client" Directive

- Pages using interactivity, hooks, or browser APIs must begin with `"use client"`.
- Keep server components where possible for better SSR/SEO.
- The `HomePageClient.tsx` pattern (server `page.tsx` → imports client `HomePageClient.tsx`) is the established convention.

### 9. Do NOT Modify

- `app/layout.tsx` analytics scripts without discussion.
- `nginx.conf` without a security/ops review.
- `lib/redis.ts` rate-limiting logic without security review.
- Any file under `docs/security/`.

---

## 🚫 Common Pitfalls to Avoid

1. **Don't hard-code prices** — always read from `lib/constants*.ts`.
2. **Don't use `<img>`** — use `next/image` with explicit `width`/`height`.
3. **Don't import heavy libraries at the top level** of a page file — lazy-load them.
4. **Don't place route-specific components in `components/`** — use `app/<route>/components/`.
5. **Don't skip `dark:` variants** — every new UI element must support dark mode.
6. **Don't bypass `cn()`** — always merge conditional classes through it to avoid conflicts.
7. **Don't add new fonts** — Poppins (headers) and Open Sans (body) are the only approved typefaces.

---

## ✅ Checklist Before Submitting Changes

- [ ] New components support both light and dark modes
- [ ] Images use `next/image` with `alt` text and explicit dimensions
- [ ] Pricing data comes from `lib/constants*.ts`, not inline strings
- [ ] SEO metadata is in `config/seoConfig.ts`
- [ ] Heavy components are lazy-loaded with `React.lazy` + `<Suspense>`
- [ ] No TypeScript `any` types introduced
- [ ] `cn()` used for conditional class merging
- [ ] No new global CSS animations added without a descriptive `@keyframes` name in `globals.css`
- [ ] Mobile responsive layout verified (breakpoints: `sm:640px`, `md:768px`, `lg:1024px`, `xl:1280px`, `2xl:1400px`)

---

## 📚 Further Reading

- [docs/PERFORMANCE_OPTIMIZATIONS.md](./docs/PERFORMANCE_OPTIMIZATIONS.md)
- [docs/MOBILE_PERFORMANCE_OPTIMIZATIONS.md](./docs/MOBILE_PERFORMANCE_OPTIMIZATIONS.md)
- [docs/SEO_OPTIMIZATION_GUIDE.md](./docs/SEO_OPTIMIZATION_GUIDE.md)
- [Next.js App Router docs](https://nextjs.org/docs/app)
- [Tailwind CSS v4 docs](https://tailwindcss.com/docs)
- [shadcn/ui docs](https://ui.shadcn.com)
