# Naming Conventions

## Components (`.astro` files)
PascalCase — standard Astro convention.
- `Header.astro`, `Footer.astro`, `Hero.astro`, `ServiceCard.astro`, `StatsBar.astro`

## Variables & functions (TS/JS)
camelCase.
- `isMenuOpen`, `activeSection`, `getServiceList()`, `formatPhoneNumber()`

## Types & interfaces (TS)
PascalCase.
- `interface ServiceItem`, `type NavLink`

## Non-component files (utils, config, data)
camelCase.
- `siteData.ts`, `fontConfig.ts`, `navLinks.ts`

## Routes/pages
lowercase, kebab-case if multi-word.
- `index.astro`, `about.astro`, `track-shipment.astro`

## Tailwind / CSS
Tailwind class names can't be camelCase, so custom theme keys and any custom classes stay kebab-case/lowercase to match Tailwind's own convention.
- Custom theme colors: `brand-blue`, `brand-red`, `navy` (not `brandBlue`)
- Usage: `bg-brand-red`, `text-navy`

## Assets
kebab-case, lowercase.
- `main-logo.png`, `white-logo.png`, `star-logo.png`
