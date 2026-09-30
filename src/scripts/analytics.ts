// One delegated listener sends a GA4 event for any element marked with
// data-track. gtag only exists when PUBLIC_GA_MEASUREMENT_ID is set at build
// time (see Layout.astro), so this is a no-op everywhere else.
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

document.addEventListener("click", (event) => {
  const el = (event.target as Element | null)?.closest<HTMLElement>("[data-track]");
  if (!el || typeof window.gtag !== "function") return;

  window.gtag("event", "click_cta", {
    track_id: el.dataset.track,
    track_item: el.dataset.trackItem,
    page_language: document.documentElement.lang,
    page_path: location.pathname,
  });
});

export {};
