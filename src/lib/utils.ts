/**
 * Format a Date object as a human-readable string.
 *
 * @example formatDate(new Date("2026-03-18")) // "March 18, 2026"
 * @example formatDate(new Date("2026-03-18"), "tr") // "18 Mart 2026"
 */
export function formatDate(date: Date, locale: string = "en-US"): string {
  return date.toLocaleDateString(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/**
 * Merge class names, filtering out falsy values.
 *
 * @example cn("px-4", isActive && "bg-blue-500", undefined) // "px-4 bg-blue-500"
 */
export function cn(
  ...classes: (string | undefined | false | null)[]
): string {
  return classes.filter(Boolean).join(" ");
}
