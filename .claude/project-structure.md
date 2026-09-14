# Project Structure

Astro (v7, minimal template) + Tailwind v4 (`@tailwindcss/vite`, CSS-based theme — no `tailwind.config.mjs`, theme customization lives in `src/styles/global.css` via `@theme`).

```
src/
  layouts/                  # empty — Layout.astro (head, Header/Footer wrapper) added when Header/Footer are built
  components/               # empty — Header.astro, Footer.astro, Hero.astro, etc. added section by section
  data/                     # empty — reserved for content files (e.g. siteData.ts) as sections need real copy
  pages/
    index.astro              # home page — only page in scope for now
  styles/
    global.css               # Tailwind import, @theme (colors, font), Signa @font-face rules
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
