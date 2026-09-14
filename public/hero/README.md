# Hero media

Drop the hero background files here, named:

- `video.mp4` — the looping background video (muted autoplay, so keep it visually interesting without audio)
- `poster.jpg` — a still frame/fallback image, shown before the video loads and on browsers/devices that don't autoplay video

`src/components/Hero.astro` already references `/hero/video.mp4` and `/hero/poster.jpg`. Until real files are added, the brand gradient behind the video carries the section on its own — no broken UI, no code changes needed once the real footage lands.
