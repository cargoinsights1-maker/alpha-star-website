# Signa font files

Drop the Signa font files here, named:

- `Signa-Regular.woff2`
- `Signa-Bold.woff2`

`src/styles/global.css` already declares `@font-face` rules referencing `/fonts/Signa-Regular.woff2` and `/fonts/Signa-Bold.woff2` (public-relative paths). Files here are served as-is and aren't processed by the build, so until they're added the browser just falls back to the system font stack — no build errors, no code changes needed once they land. Add more `@font-face` blocks for extra weights (Light/Medium/Black) if supplied.
