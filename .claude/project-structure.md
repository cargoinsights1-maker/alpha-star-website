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
    global.css                 # Tailwind import, @theme (colors, font), Signa @font-face rules
  assets/
    logos/
      main-logo.png           # full wordmark, navy text — use on light backgrounds (header)
      white-logo.png           # full wordmark, white text — use on dark backgrounds (footer)
      star-logo.png             # icon mark only — favicon source
public/
  favicon.ico / favicon.svg    # still Astro defaults — swap for a star-logo-derived favicon when Header is built
  fonts/
    README.md                  # instructions for dropping in Signa-Regular.woff2 / Signa-Bold.woff2
```

## Notes
- Logos live in `src/assets/logos/` so Astro's image optimization (`astro:assets`, the `<Image />` component) can process them — import them in components rather than referencing by raw path.
- Signa font files go in `public/fonts/` (not `src/assets/fonts/`) deliberately: files referenced from CSS via a public-relative `url("/fonts/...")` path are served as-is and never fail the Vite build even while the files don't exist yet. `global.css` already has `@font-face` rules pointing at `/fonts/Signa-Regular.woff2` and `/fonts/Signa-Bold.woff2` — dropping files in with those exact names is all that's needed, no code changes.
- Custom Tailwind theme colors (`navy`, `brand-blue`, `brand-blue-light`, `brand-red`) and the `font-sans` override are defined in `src/styles/global.css`'s `@theme` block — see `.claude/naming-conventions.md` for the exact key names.
