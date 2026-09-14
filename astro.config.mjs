// @ts-check
import { defineConfig } from 'astro/config';

// Tailwind v4 plugs in via Vite directly (no @astrojs/tailwind integration
// needed) — theme config lives in src/styles/global.css instead of here.
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    // Pre-bundle lenis up front instead of letting Vite discover it lazily
    // on first request — lazy discovery mid-request was re-optimizing deps
    // and serving a stale shared-chunk hash, which aborted the import and
    // silently prevented SmoothScroll.astro's script from ever running.
    optimizeDeps: {
      include: ['lenis']
    }
  }
});