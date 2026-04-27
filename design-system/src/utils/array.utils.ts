/**
 * Extract only the keys from T whose values are `string`.
 */
type StringKeysOf<T> = {
  [K in keyof T]: T[K] extends string ? K : never;
}[keyof T];

/**
 * Creates a comparison function for sorting an array of objects alphabetically based on a specified string property.
 */
export function sortAlphabetically<T>(key: StringKeysOf<T>, order: 'asc' | 'desc' = 'asc') {
  return (a: T, b: T): number => {
    // optional safety check — but now TS knows a[key] and b[key] are strings
    if (typeof a[key] !== 'string' || typeof b[key] !== 'string') {
      return 0;
    }

    return order === 'asc' ? a[key].localeCompare(b[key]) : b[key].localeCompare(a[key]);
  };
}
