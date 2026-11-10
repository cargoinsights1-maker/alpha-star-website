# Project Structure

Astro (v7, minimal template) + Tailwind v4 (`@tailwindcss/vite`, CSS-based theme — no `tailwind.config.mjs`, theme customization lives in `src/styles/global.css` via `@theme`).

```
src/
  layouts/
    Layout.astro              # shared shell for inner pages: head/meta/OG, SmoothScroll, Header (no revealOnScroll), <slot />, Footer, ScrollAnimations
  components/                 # Header.astro, Footer.astro, Hero.astro, section components, plus reusable inner-page pieces (ServiceHero.astro, ServiceDifferentiators.astro, ServiceSubItems.astro)
  data/
    nav.ts                     # header nav structure + every service's #anchor sub-items (source of truth for inner-page anchor ids)
    services.ts                 # one ServicePageContent entry per service page; sub-item id/label derived from nav.ts, not retyped
  pages/
    index.astro                 # home page
    services/
      air-freight.astro          # first inner service page (more to follow the same pattern)
  styles/
    global.css                 # Tailwind import, @theme (colors, font) — Outfit (display) + Poppins (sans), loaded via Google Fonts <link> in Layout.astro/index.astro, no self-hosted files
  assets/
    logos/
      main-logo.png           # full wordmark, navy text — use on light backgrounds (header)
      white-logo.png           # full wordmark, white text — use on dark backgrounds (footer)
      star-logo.png             # icon mark only — favicon source
public/
  favicon.ico / favicon-16.png / favicon-32.png / apple-touch-icon.png   # real brand mark (star + alpha swoosh, cropped from main-logo.png)
```

## Notes
- Logos live in `src/assets/logos/` so Astro's image optimization (`astro:assets`, the `<Image />` component) can process them — import them in components rather than referencing by raw path.
- Fonts (Outfit for headings/display, Poppins for body) are loaded from Google Fonts via `<link>` tags in `Layout.astro` and `index.astro` — no self-hosted font files, and font choice is intentionally independent of the logo (chosen after the rebrand, not tied to it).
- Custom Tailwind theme colors (`navy`, `brand-blue`, `brand-blue-light`, `brand-red`) and the `font-sans`/`font-display` overrides are defined in `src/styles/global.css`'s `@theme` block — see `.claude/naming-conventions.md` for the exact key names. A global `h1`–`h6` rule applies `font-display` (Outfit) automatically; `font-sans` (Poppins) is the `body` default for everything else.
