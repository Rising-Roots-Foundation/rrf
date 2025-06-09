/**
 * Combines class names into a single string, filtering out falsy values.
 * @param classes - List of class names or falsy values
 * @returns A single string of valid class names separated by spaces
 */
export function cn(...classes: (string | false | null | undefined)[]): string {
  return classes.filter(Boolean).join(' ');
}
