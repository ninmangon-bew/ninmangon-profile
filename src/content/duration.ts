import type { Lang } from "./copy";

// "YYYY-MM" -> a calendar month index, so subtracting two gives whole months
// elapsed without needing Date/timezone math.
function monthIndex(ym: string): number {
  const [y, m] = ym.split("-").map(Number);
  return y * 12 + (m - 1);
}

function formatSpan(months: number, lang: Lang): string {
  const years = Math.floor(months / 12);
  const rem = months % 12;

  if (lang === "th") {
    const parts: string[] = [];
    if (years > 0) parts.push(`${years} ปี`);
    if (rem > 0 || years === 0) parts.push(`${rem} เดือน`);
    return parts.join(" ");
  }

  const parts: string[] = [];
  if (years > 0) parts.push(`${years} yr${years > 1 ? "s" : ""}`);
  if (rem > 0 || years === 0) parts.push(`${rem} mo`);
  return parts.join(" ");
}

// Renders the timeline's left-hand marker as two pieces — e.g. range
// "2024 — Present" and duration "(1 yr 8 mo)" — kept separate (instead of one
// string) so the template can force the duration onto its own line rather
// than wrapping wherever it happens to overflow. Duration is always computed
// from start/end, never typed by hand.
export function formatJourneyDate(start: string, end: string | null, lang: Lang): { range: string; duration: string } {
  const now = new Date();
  const endYm = end ?? `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}`;
  const months = Math.max(0, monthIndex(endYm) - monthIndex(start) + 1);

  const startYear = start.split("-")[0];
  const endLabel = end ? end.split("-")[0] : lang === "th" ? "ปัจจุบัน" : "Present";
  const range = startYear === endLabel ? startYear : `${startYear} — ${endLabel}`;

  return { range, duration: `(${formatSpan(months, lang)})` };
}
