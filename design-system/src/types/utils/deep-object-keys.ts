/* eslint-disable tsdoc/syntax */

type Join<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}${'' extends P ? '' : '.'}${P}`
    : never
  : never;

/**
 * Utility type to get the path keys of on object
 *
 * @example
 *
 * const myObject = {
 *   a: 'foo',
 *   b: 'bar',
 *   nest: {
 *     c: 'baz',
 *   },
 *   otherNest: {
 *     c: 'qux',
 *   },
 * };
 *
 * type NestedObjectPaths = Paths<typeof myObject>;
 * // type NestedObjectPaths = "a" | "b" | "nest" | "otherNest" | "nest.c" | "otherNest.c"
 */
export type Paths<T> = T extends object
  ? {
      [K in keyof T]-?: K extends string | number ? `${K}` | Join<K, Paths<T[K]>> : never;
    }[keyof T]
  : '';

/**
 * Utility type to get the leave keys of on object
 *
 * @example
 *
 * const myObject = {
 *   a: 'foo',
 *   b: 'bar',
 *   nest: {
 *     c: 'baz',
 *   },
 *   otherNest: {
 *     c: 'qux',
 *   },
 * };
 *
 * type NestedObjectLeaves = Leaves<typeof myObject>;
 * // type NestedObjectLeaves = "a" | "b" | "nest.c" | "otherNest.c"
 */
export type Leaves<T> = T extends object
  ? { [K in keyof T]-?: Join<K, Leaves<T[K]>> }[keyof T]
  : '';
