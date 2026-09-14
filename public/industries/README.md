# Industry tile photos

Drop each industry's photo here, named to match its tile:

- `dangerous-goods.webp`
- `pharma.webp`
- `ship-spares.webp`
- `automobiles.webp`
- `perishables.webp`
- `heavy-perishables.webp`
- `oil-gas.webp`
- `project-cargo.webp`

`src/components/Industries.astro` already references these paths as a CSS background image layered over a brand-color gradient. Until a photo is added, the gradient alone carries that tile (no broken-image icon, no code changes needed) — dropping a file in with the exact name above makes it appear immediately.
