const root = document.documentElement;
const themeButton = document.querySelector<HTMLButtonElement>(".theme-toggle");
const orbit = document.querySelector<HTMLElement>(".sun-moon-orbit");
const celestials = document.querySelectorAll<HTMLElement>(".celestial");

const currentTheme = () => (root.getAttribute("data-theme") === "light" ? "light" : "dark");

if (themeButton) {
  // Moon rests at 0deg, sun at -180deg. Every real theme change subtracts
  // another 180deg so the orbit always spins the same way (left), never back.
  let spin = currentTheme() === "light" ? -180 : 0;

  if (orbit) {
    // The CSS default is --spin:0deg. On a page that loads straight into light
    // theme, setting --spin here would otherwise be treated as a style change
    // after first paint and animate in over the full 1.6s transition — so the
    // orbit briefly looks "wrong" on every reload. Apply the resting value with
    // transitions off, then restore them for actual toggle clicks.
    const affected = [orbit, ...Array.from(celestials)];
    affected.forEach((el) => { el.style.transition = "none"; });
    orbit.style.setProperty("--spin", spin + "deg");
    void orbit.offsetHeight;
    affected.forEach((el) => { el.style.transition = ""; });
  }

  themeButton.addEventListener("click", () => {
    const next = currentTheme() === "light" ? "dark" : "light";
    root.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
    spin -= 180;
    orbit?.style.setProperty("--spin", spin + "deg");
  });
}
