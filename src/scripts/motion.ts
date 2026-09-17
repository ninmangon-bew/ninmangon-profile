import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

let lenis: Lenis | undefined;

// Anchor destinations should meet the bottom of the compact header exactly.
// Measure again when fonts, viewport width or orientation change its height.
function setupHeaderScrollOffset(): void {
  const header = document.querySelector<HTMLElement>(".site-header");
  if (!header) return;
  const syncHeight = () => {
    document.documentElement.style.setProperty("--header-height", `${header.getBoundingClientRect().height}px`);
  };
  syncHeight();
  new ResizeObserver(syncHeight).observe(header);
}

// A plain top-level navigation to a URL with a #hash (e.g. the language
// switch landing on the same section on the other-language page) makes the
// browser jump to that element natively, before any of our JS runs. Lenis
// then constructs with its own internal scroll target, which several Lenis
// versions initialize to 0 rather than reading the browser's already-jumped
// position — so on the very next frame it snaps the page back to the top,
// undoing the native jump. Force the correct native scroll position first
// (synchronously, before Lenis exists) so Lenis has nothing to fight.
function restoreHashScroll(): void {
  if (!window.location.hash) return;
  const target = document.querySelector<HTMLElement>(window.location.hash);
  if (!target) return;
  // Match native anchor spacing when the compact header occupies two rows.
  const scrollPadding = parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) || 0;
  const y = target.getBoundingClientRect().top + window.scrollY - scrollPadding;
  window.scrollTo({ top: y, left: 0, behavior: "instant" });
}

function setupLenis(): void {
  if (reduceMotion) return;

  lenis = new Lenis({
    duration: 1.1,
    smoothWheel: true,
  });

  lenis.on("scroll", ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis!.raf(time * 1000);
  });
  gsap.ticker.lagSmoothing(0);
}

function setupParallax(): void {
  if (reduceMotion) return;

  const heroVisual = document.getElementById("heroVisual");

  if (heroVisual) {
    gsap.to(heroVisual, {
      yPercent: 16,
      ease: "none",
      scrollTrigger: {
        trigger: "#home",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  }
}

// shared by setupReveal's own batches and setupIconIntroSections (which drives
// a few of these groups from its own timeline instead, see below)
function fadeInEls(batch: Element[]): void {
  gsap.to(batch, {
    opacity: 1,
    y: 0,
    duration: 0.9,
    ease: "power3.out",
    stagger: 0.12,
    overwrite: true,
  });
}
function fadeOutEls(batch: Element[]): void {
  gsap.set(batch, { opacity: 0, y: 28 });
}

// groups whose entrance is instead orchestrated by setupIconIntroSections, so
// they shouldn't also get an independent ScrollTrigger.batch here
const ICON_INTRO_GROUPS = new Set(["passion", "hard-skill", "soft-skill", "experience-head"]);

function setupReveal(): void {
  const groups = new Map<string, Element[]>();
  document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => {
    const group = el.dataset.reveal || "default";
    if (!groups.has(group)) groups.set(group, []);
    groups.get(group)!.push(el);
  });

  groups.forEach((els, group) => {
    if (reduceMotion) {
      gsap.set(els, { opacity: 1, y: 0 });
      return;
    }
    if (ICON_INTRO_GROUPS.has(group)) return;

    // no `once`, plus onEnterBack/onLeaveBack — this section fades in every time it's
    // scrolled into view, whichever direction you came from, not just the first time
    ScrollTrigger.batch(els, {
      start: "top 88%",
      end: "bottom 12%",
      onEnter: fadeInEls,
      onEnterBack: fadeInEls,
      onLeave: fadeOutEls,
      onLeaveBack: fadeOutEls,
    });
  });
}

function setupEmbers(): void {
  if (reduceMotion) return;

  const scene = document.querySelector<HTMLElement>(".fire-scene");
  const embersEl = document.querySelector<HTMLElement>(".embers");
  if (!scene || !embersEl) return;

  const EMBER_COUNT = 12;
  const tweens: gsap.core.Tween[] = [];

  for (let i = 0; i < EMBER_COUNT; i++) {
    const ember = document.createElement("div");
    ember.className = "ember";
    embersEl.appendChild(ember);

    // spawn band + travel distance scaled to match the fire art's new position/size
    // (left:15% top:80% width:70%, was left:24% top:74% width:42%)
    gsap.set(ember, { left: `${8 + Math.random() * 24}%`, top: "86%" });

    // fromTo (not a bare .to() plus onStart/onRepeat side-effects) — opacity is one of the
    // animated properties here, so a gsap.set() callback fighting it every frame would just
    // get overwritten by the tween's own interpolation and never actually become visible
    tweens.push(
      gsap.fromTo(
        ember,
        { y: 0, x: 0, opacity: 0.9, scale: 1 },
        {
          y: () => -200 - Math.random() * 150,
          x: () => (Math.random() - 0.5) * 100,
          opacity: 0,
          scale: 0.3,
          duration: 2.2 + Math.random() * 1.4,
          delay: Math.random() * 3,
          repeat: -1,
          ease: "power1.out",
        },
      ),
    );
  }

  // pause the whole ember group while the fire section is off-screen
  const observer = new IntersectionObserver(
    ([entry]) => {
      tweens.forEach((tween) => (entry.isIntersecting ? tween.resume() : tween.pause()));
    },
    { threshold: 0.1 },
  );
  observer.observe(scene);
}

function setupHeader(): void {
  const header = document.querySelector(".site-header");
  if (!header) return;
  ScrollTrigger.create({
    start: "top -80",
    end: 99999,
    toggleClass: { className: "is-scrolled", targets: header },
  });
}

function setupActiveNavigation(): void {
  const header = document.querySelector<HTMLElement>(".site-header");
  const nav = header?.querySelector<HTMLElement>(".nav");
  if (!header || !nav) return;
  const entries = Array.from(nav.querySelectorAll<HTMLAnchorElement>('a[href^="#"]'))
    .flatMap((link) => {
      const section = document.getElementById(link.hash.slice(1));
      return section ? [{ link, section }] : [];
    });
  let active: HTMLAnchorElement | null = null;
  let frame: number | undefined;
  let checkVisibility = true;

  const update = () => {
    frame = undefined;
    const headerBottom = header.getBoundingClientRect().bottom;
    const readingLine = headerBottom + Math.max(0, window.innerHeight - headerBottom) * 0.25;
    let next: HTMLAnchorElement | null = null;
    for (const { link, section } of entries) {
      if (section.getBoundingClientRect().top <= readingLine) next = link;
    }
    // A short final section may never reach the reading line before scroll ends.
    const pageHeight = document.documentElement.scrollHeight;
    if (pageHeight > window.innerHeight && window.scrollY + window.innerHeight >= pageHeight - 2) {
      next = entries.at(-1)?.link ?? null;
    }
    const changed = next !== active;
    if (changed) {
      active?.removeAttribute("aria-current");
      next?.setAttribute("aria-current", "location");
      active = next;
    }
    if (active && (changed || checkVisibility) && nav.scrollWidth > nav.clientWidth) {
      const box = nav.getBoundingClientRect();
      const item = active.getBoundingClientRect();
      if (item.left < box.left + 12 || item.right > box.right - 12) {
        // Scroll only the menu horizontally; never move the document or focus.
        nav.scrollTo({
          left: nav.scrollLeft + item.left - box.left - (nav.clientWidth - item.width) / 2,
          behavior: "instant",
        });
      }
    }
    checkVisibility = false;
  };
  const schedule = () => {
    if (frame === undefined) frame = requestAnimationFrame(update);
  };
  window.addEventListener("scroll", schedule, { passive: true });
  window.addEventListener("resize", () => {
    checkVisibility = true;
    schedule();
  });
  const observer = new ResizeObserver(() => {
    checkVisibility = true;
    schedule();
  });
  observer.observe(header);
  const root = document.getElementById("root");
  if (root) observer.observe(root);
  update();
}

// Prototype: tints the fixed paper backdrop with each section's own accent
// color while it's the one in view, so crossing into a new chapter reads as
// a mood/color shift rather than an identical fade every time. Pure CSS
// custom-property + transition, no scroll-hijacking, so it stays native-
// scroll and mobile-safe.
function setupSectionTint(): void {
  const root = document.documentElement;
  const sections: Record<string, string> = {
    passion: "--fire",
    "hard-skill": "--earth",
    "soft-skill": "--water",
    experience: "--wind",
  };

  Object.entries(sections).forEach(([id, cssVar]) => {
    const el = document.getElementById(id);
    if (!el) return;
    ScrollTrigger.create({
      trigger: el,
      start: "top 60%",
      end: "bottom 40%",
      onToggle: (self) => {
        if (self.isActive) {
          root.style.setProperty("--section-accent", `var(${cssVar})`);
        }
      },
    });
  });

  // back to neutral once above the first pillar section or past the last one
  ScrollTrigger.create({
    trigger: "#home",
    start: "top top",
    end: "bottom 60%",
    onToggle: (self) => {
      if (self.isActive) root.style.setProperty("--section-accent", "transparent");
    },
  });
  ScrollTrigger.create({
    trigger: "#contact",
    start: "top 40%",
    end: "bottom bottom",
    onToggle: (self) => {
      if (self.isActive) root.style.setProperty("--section-accent", "transparent");
    },
  });
}

// Pins the fire scorch texture to the viewport (like .paper-backdrop) instead
// of scrolling with the section content, and toggles it on/off as a class so
// it fades in only while the fire section itself is in view.
function setupFireBurnOverlay(): void {
  const overlay = document.querySelector<HTMLElement>(".paper-burn-overlay");
  const fireSection = document.getElementById("passion");
  if (!overlay || !fireSection) return;

  ScrollTrigger.create({
    trigger: fireSection,
    start: "top 60%",
    end: "bottom 40%",
    toggleClass: { className: "is-visible", targets: overlay },
  });
}

// Same idea as setupFireBurnOverlay, for the earth/hard-skill section's mud texture.
function setupEarthMudOverlay(): void {
  const overlay = document.querySelector<HTMLElement>(".paper-mud-overlay");
  const earthSection = document.getElementById("hard-skill");
  if (!overlay || !earthSection) return;

  ScrollTrigger.create({
    trigger: earthSection,
    start: "top 60%",
    end: "bottom 40%",
    toggleClass: { className: "is-visible", targets: overlay },
  });
}

// Same idea again, for the water/soft-skill section's wet-paper texture.
function setupWaterWetOverlay(): void {
  const overlay = document.querySelector<HTMLElement>(".paper-wet-overlay");
  const waterSection = document.getElementById("soft-skill");
  if (!overlay || !waterSection) return;

  ScrollTrigger.create({
    trigger: waterSection,
    start: "top 60%",
    end: "bottom 40%",
    toggleClass: { className: "is-visible", targets: overlay },
  });
}

// The floating stone cluster in the earth section, plus the hard-skill pill
// groups (pulled out of the generic reveal group below so they can be timed
// against the stone instead of the rest of the section's content): both stay
// hidden until a short beat after the dragon has appeared, then both float
// up into place from below together. The stone then keeps drifting gently
// up/down forever once in place.
function setupEarthStone(): void {
  if (reduceMotion) return;

  const stone = document.querySelector<HTMLElement>(".stone-img");
  const earthSection = document.getElementById("hard-skill");
  const pillGroups = document.querySelector<HTMLElement>(".element-section-item-groups");
  const pillItems = pillGroups
    ? Array.from(pillGroups.querySelectorAll<HTMLElement>(".item-group-label, .item-pill"))
    : [];
  if (!stone || !earthSection) return;

  gsap.set(stone, { opacity: 0, y: 160 });
  if (pillItems.length) gsap.set(pillItems, { opacity: 0, y: 30 });

  const floatIn = () => {
    gsap.to(stone, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out",
      onComplete: () => {
        gsap.to(stone, {
          y: -28,
          duration: 2.2,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        });
      },
    });
    // each label/pill floats up on its own instead of the group moving as one
    // block — stagger tuned so the last one still lands within ~1.5s total
    if (pillItems.length) {
      gsap.to(pillItems, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power2.out",
        stagger: 0.05,
      });
    }
  };

  // same reasoning as setupIconIntroSections above: a hard refresh already
  // past this section would otherwise fire onEnter immediately — just show
  // everything in place with no float-up/fade in that case.
  if (earthSection.getBoundingClientRect().top < window.innerHeight * 0.6) {
    gsap.set(stone, { opacity: 1, y: 0 });
    if (pillItems.length) gsap.set(pillItems, { opacity: 1, y: 0 });
    gsap.to(stone, { y: -28, duration: 2.2, ease: "sine.inOut", yoyo: true, repeat: -1 });
    return;
  }

  ScrollTrigger.create({
    trigger: earthSection,
    start: "top 60%",
    once: true,
    onEnter: () => gsap.delayedCall(1.2, floatIn),
  });
}

// Before each pillar section's own content fades in *the first time you visit
// it*, its element symbol (+ eyebrow/kicker label underneath) briefly appears
// large and centered on the viewport (~200x200), then both shrink/move
// together into their real spots (icon + kicker) at the same moment the rest
// of the section's [data-reveal] group fades in.
// Plays once only (ScrollTrigger `once: true`) — once revealed, the content
// just stays visible on later visits, it doesn't fade out/replay. The paper
// tint/burn backdrop are untouched by this and keep showing immediately on
// entering the section every time (see setupSectionTint / setupFireBurnOverlay
// above).
function setupIconIntroSections(): void {
  if (reduceMotion) return;

  const sections: Record<string, string> = {
    passion: "passion",
    "hard-skill": "hard-skill",
    "soft-skill": "soft-skill",
    experience: "experience-head",
  };

  // clicking a nav link straight to e.g. "Experience" scrolls (smoothly, over
  // ~1s) past every earlier section too, genuinely crossing each one's own
  // trigger point along the way — so each would otherwise play its own intro
  // for a moment before you ever arrive. See the click listener at the bottom
  // of this function, which reveals anything on that path instantly instead.
  const controllers: Record<string, { reveal: () => void; trigger: ScrollTrigger }> = {};

  Object.entries(sections).forEach(([sectionId, groupId]) => {
    const section = document.getElementById(sectionId);
    const intro = section?.querySelector<HTMLElement>(".icon-intro");
    const label = section?.querySelector<HTMLElement>(".icon-intro-label");
    const real = section?.querySelector<HTMLElement>(".section-symbol");
    const kicker = section?.querySelector<HTMLElement>(".kicker");
    const groupEls = Array.from(document.querySelectorAll<HTMLElement>(`[data-reveal="${groupId}"]`));
    if (!section || !intro || !label || !real || !kicker || groupEls.length === 0) return;

    gsap.set([real, kicker], { opacity: 0 });

    let tl: gsap.core.Timeline | undefined;

    const showInstantly = () => {
      tl?.kill();
      gsap.set(intro, { opacity: 0 });
      gsap.set(label, { opacity: 0 });
      gsap.set([intro, label], { clearProps: "willChange" });
      gsap.set(real, { opacity: 1 });
      gsap.set(kicker, { opacity: 1 });
      gsap.set(groupEls, { opacity: 1, y: 0 });
    };

    const play = () => {
      tl?.kill();

      // starting point: centered on the viewport (.icon-intro is position:fixed),
      // not the section box — tall sections (e.g. experience, longer than 100vh)
      // would otherwise center the icon somewhere below the fold on first entry.
      // the eyebrow label starts just under the icon's bottom edge (100px radius + gap).
      const startX = window.innerWidth / 2;
      const startY = window.innerHeight / 2;
      const labelStartY = startY + 100 + 24;

      const realRect = real.getBoundingClientRect();
      const realStyle = getComputedStyle(real);
      const kickerStyle = getComputedStyle(kicker);
      const expandedScale = 200 / realRect.width;
      const labelStartScale = 20 / parseFloat(kickerStyle.fontSize);

      // Match the destination's geometry and typography before animating.
      // Scaling these copies down now produces the exact final appearance.
      gsap.set(intro, {
        opacity: 0, left: 0, top: 0, x: startX, y: startY, scale: 1,
        borderWidth: parseFloat(realStyle.borderTopWidth) * expandedScale,
        padding: parseFloat(realStyle.paddingTop) * expandedScale,
        transformOrigin: "50% 50%", willChange: "transform, opacity",
      });
      gsap.set(label, {
        opacity: 0, left: 0, top: 0, x: startX, y: labelStartY,
        xPercent: -50, yPercent: -50, scale: labelStartScale,
        fontFamily: kickerStyle.fontFamily, fontSize: kickerStyle.fontSize,
        fontWeight: kickerStyle.fontWeight, lineHeight: kickerStyle.lineHeight,
        letterSpacing: kickerStyle.letterSpacing, textTransform: kickerStyle.textTransform,
        transformOrigin: "50% 50%", willChange: "transform, opacity",
      });
      gsap.set(real, { opacity: 0 });
      gsap.set(kicker, { opacity: 0 });
      gsap.set(groupEls, { opacity: 0, y: 28 });

      // Lenis keeps easing the scroll for a bit after this trigger fires, so the
      // real icon/kicker's on-screen positions keep shifting during the move —
      // re-measure them every frame instead of aiming at a target computed once
      // up front, otherwise the clones land wherever the real elements *used to* be.
      const state = { p: 0 };
      tl = gsap.timeline();
      tl.to([intro, label], { opacity: 1, duration: 0.16, ease: "power2.out" })
      .to(state, {
        p: 1,
        duration: 0.72,
        ease: "power2.inOut",
        onUpdate: () => {
          // Read both destinations before writing transforms; no layout
          // properties change per frame, even while Lenis is still scrolling.
          const r = real.getBoundingClientRect();
          const kr = kicker.getBoundingClientRect();
          const targetX = r.left + r.width / 2;
          const targetY = r.top + r.height / 2;
          const targetScale = r.width / 200;
          gsap.set(intro, {
            x: startX + (targetX - startX) * state.p,
            y: startY + (targetY - startY) * state.p,
            scale: 1 + (targetScale - 1) * state.p,
          });

          const kTargetX = kr.left + kr.width / 2;
          const kTargetY = kr.top + kr.height / 2;
          gsap.set(label, {
            x: startX + (kTargetX - startX) * state.p,
            y: labelStartY + (kTargetY - labelStartY) * state.p,
            scale: labelStartScale + (1 - labelStartScale) * state.p,
          });
        },
      }, 0.18)
        // Hand off only once both copies have landed. Crossfading before
        // arrival exposes two different positions and looks like a snap.
        .call(() => {
          gsap.set([real, kicker], { opacity: 1 });
          gsap.set([intro, label], { opacity: 0, clearProps: "willChange" });
        })
        .add(() => fadeInEls(groupEls), 0.72);
    };

    // a hard refresh while already scrolled past (or into) this section lands
    // here with the trigger's start point already behind the current scroll
    // position — ScrollTrigger would otherwise fire onEnter for it (and every
    // other already-passed section) all at once on load. Just show it as-is
    // instead of animating an intro nobody asked to see again.
    if (section.getBoundingClientRect().top < window.innerHeight * 0.6) {
      showInstantly();
      return;
    }

    const trigger = ScrollTrigger.create({
      trigger: section,
      start: "top 60%",
      once: true,
      onEnter: play,
    });

    controllers[sectionId] = { reveal: showInstantly, trigger };
  });

  document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", () => {
      const targetId = link.getAttribute("href")?.slice(1);
      const targetEl = targetId ? document.getElementById(targetId) : null;
      if (!targetEl) return;

      const fromY = window.scrollY;
      const toY = targetEl.getBoundingClientRect().top + window.scrollY;
      const [lo, hi] = fromY < toY ? [fromY, toY] : [toY, fromY];

      // only reveal sections that actually sit on the path between here and
      // the target — ones further along (not yet reached) are left alone so
      // their own intro still plays properly when the user later scrolls to them
      Object.entries(controllers).forEach(([id, ctrl]) => {
        if (id === targetId) return;
        const el = document.getElementById(id);
        if (!el) return;
        const elY = el.getBoundingClientRect().top + window.scrollY;
        if (elY > lo && elY < hi) {
          ctrl.trigger.kill();
          ctrl.reveal();
        }
      });
    });
  });
}

// Switching language is a real navigation to a separate static page (no SPA
// router), so a plain click would hard-cut to a blank page and reset scroll
// to the top. Instead: fade the current page out, and send the browser to
// the same section on the other-language page (both pages share the same
// section ids) instead of that page's very top, then let the destination's
// own page-fade-in animation (see body's keyframe above) complete the
// crossfade feel.
function setupLangSwitch(): void {
  const link = document.querySelector<HTMLAnchorElement>(".lang-switch");
  if (!link) return;

  const sectionIds = ["home", "passion", "hard-skill", "soft-skill", "experience", "contact"];

  link.addEventListener("click", (e) => {
    e.preventDefault();

    let current = sectionIds[0];
    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el && el.getBoundingClientRect().top <= 120) current = id;
    }

    const base = link.getAttribute("href")!.split("#")[0];
    const target = current === "home" ? base : `${base}#${current}`;

    // body's own page-fade-in keyframe (see global.css) is still holding opacity:1
    // via animation-fill-mode at this point — clear it and force a reflow first,
    // otherwise the transition below gets skipped and opacity jumps straight to 0
    document.body.style.animation = "none";
    void document.body.offsetHeight;
    document.body.classList.add("is-leaving");

    window.setTimeout(() => {
      window.location.href = target;
    }, 200);
  });
}

// Each of the 5 principle items in the water/soft-skill section slides in
// from the right instead of just fading in with the rest of the copy block.
function setupWaterPrinciples(): void {
  if (reduceMotion) return;

  const waterSection = document.getElementById("soft-skill");
  const principles = waterSection ? Array.from(waterSection.querySelectorAll<HTMLElement>(".principle")) : [];
  if (!waterSection || principles.length === 0) return;

  gsap.set(principles, { opacity: 0, x: 60 });

  const playIn = () => {
    gsap.to(principles, {
      opacity: 1,
      x: 0,
      duration: 0.7,
      ease: "power2.out",
      stagger: 0.12,
    });
  };

  // same reasoning as setupIconIntroSections/setupEarthStone above: a hard
  // refresh already past this section would otherwise fire onEnter
  // immediately — just show them in place with no slide in that case.
  if (waterSection.getBoundingClientRect().top < window.innerHeight * 0.6) {
    gsap.set(principles, { opacity: 1, x: 0 });
    return;
  }

  ScrollTrigger.create({
    trigger: waterSection,
    start: "top 60%",
    once: true,
    onEnter: playIn,
  });
}

setupHeaderScrollOffset();
restoreHashScroll();
setupLenis();
setupParallax();
setupReveal();
setupEmbers();
setupHeader();
setupActiveNavigation();
setupSectionTint();
setupFireBurnOverlay();
setupEarthMudOverlay();
setupWaterWetOverlay();
setupIconIntroSections();
setupWaterPrinciples();
setupEarthStone();
setupLangSwitch();
