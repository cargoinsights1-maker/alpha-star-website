# Client logos

`src/components/TrustedBy.astro` currently shows placeholder marks (no real
client names/logos, to avoid implying client relationships that aren't
confirmed). When real logos are ready:

1. Drop each one here as `client-01.webp` … `client-NN.webp` (transparent or white background, reasonable width e.g. ~400px).
2. In `TrustedBy.astro`, replace the placeholder `<svg>` in each grid tile with an `<img src={`/clients/client-${i + 1}.webp`} alt="Client name" class="h-8 w-auto object-contain sm:h-10" />` (swap in real company names for the `alt` text).

No other changes needed — the grid, spacing and card styling already fit real logos.
