/**
 * Extract only the keys from T whose values are `string`.
 */
type StringKeysOf<T> = {
    [K in keyof T]: T[K] extends string ? K : never;
}[keyof T];
/**
 * Creates a comparison function for sorting an array of objects alphabetically based on a specified string property.
 */
export declare function sortAlphabetically<T>(key: StringKeysOf<T>, order?: 'asc' | 'desc'): (a: T, b: T) => number;
export {};
