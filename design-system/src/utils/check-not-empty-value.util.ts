/**
 * Utility used to allow TypeScript strict mode to remove `undefined` items
 * with a filter in the source array.
 *
 * @param value - the item from the source array
 */
export function checkNotEmptyValue<TValue>(value: TValue | null | undefined): value is TValue {
  return value !== null && value !== undefined;
}
