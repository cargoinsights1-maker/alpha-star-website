# Service card photos

Drop each service's photo here, named to match its card:

- `air-freight.webp`
- `sea-freight.webp`
- `road-freight.webp`
- `warehousing.webp`
- `multimodal.webp`
- `customs-clearance.webp`

(Card list was realigned to match the header nav's Services mega-menu — `land-freight.webp` and `value-added-services.webp` from the old list are no longer referenced; `road-freight.webp` and `multimodal.webp` are the new ones needed.)

`src/components/Services.astro` already references these paths as a CSS background image layered over a brand-color gradient. Until a photo is added, the gradient alone carries that card (no broken-image icon, no code changes needed) — dropping a file in with the exact name above makes it appear immediately, layered under the same dark scrim used for the label text.
