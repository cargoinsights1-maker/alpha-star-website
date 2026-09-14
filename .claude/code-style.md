# Code Style

## Astro + TypeScript
- Type component props via `interface Props` in the frontmatter, destructure from `Astro.props`.
- No unused props, imports, or variables.
- Keep frontmatter logic minimal — data/content that grows complex belongs in a `src/data/*.ts` file, not inline in the component.

## Tailwind
- Utility-first: no inline `style=` attributes.
- Prefer the project's custom theme colors (`navy`, `brand-blue`, `brand-red`) over raw hex codes or arbitrary values (`bg-[#152056]`).
- If the same group of utility classes repeats across markup, extract it into a component rather than copy-pasting the class string.

## Formatting
- 2-space indentation.
- Otherwise defer to whatever Prettier config ships with `astro add` — no manual bikeshedding on semicolons/quotes.

## Copy / on-site text
- No em dashes (—) in any user-facing copy (headlines, subtext, button labels, etc.). Code comments are fine.
- No Oxford commas in lists within copy (e.g. "air, sea and land", not "air, sea, and land").

## Comments
- Default to no comments. Well-named components/variables/functions should make the "what" obvious.
- Only add a comment when the *why* isn't obvious from the code itself (a workaround, a non-obvious constraint, a deliberate deviation from the norm).
- Never leave comments describing what was changed, removed, or which task/fix prompted the code.
