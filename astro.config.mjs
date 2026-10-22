// @ts-check
import { defineConfig } from 'astro/config';

// Tailwind v4 plugs in via Vite directly (no @astrojs/tailwind integration
// needed) — theme config lives in src/styles/global.css instead of here.
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    // Pre-bundle lenis and cobe up front instead of letting Vite discover
    // them lazily on first request — lazy discovery mid-request re-optimizes
    // deps and serves a stale shared-chunk hash, which aborts the import
    // silently. Confirmed the same failure mode twice now: first it broke
    // SmoothScroll's lenis import, then (during a long dev session with many
    // new pages added) it left Globe.astro's `createGlobe` import silently
    // failing — the canvas just sat at its default 300x150 size since the
    // library never actually drew to it.
    optimizeDeps: {
      include: ['lenis', 'cobe']
    }
  }
});