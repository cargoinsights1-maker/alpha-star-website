// Subscribes to scroll updates whether or not Lenis (src/components/SmoothScroll.astro)
// is active. Lenis intentionally suppresses the native `scroll` event in some
// cases, so anything that needs to react to scroll must go through its own
// `scroll` event when present, falling back to the native listener otherwise.
// window.scrollY itself stays accurate either way — only the event firing is affected.
interface LenisLike {
  on(event: "scroll", callback: () => void): void;
}

export function onScroll(callback: () => void): void {
  const lenis = (window as unknown as { __lenis?: LenisLike }).__lenis;
  if (lenis) {
    lenis.on("scroll", callback);
  } else {
    window.addEventListener("scroll", callback, { passive: true });
  }
}
