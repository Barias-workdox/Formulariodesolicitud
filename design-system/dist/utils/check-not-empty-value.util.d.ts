/**
 * Utility used to allow TypeScript strict mode to remove `undefined` items
 * with a filter in the source array.
 *
 * @param value - the item from the source array
 */
export declare function checkNotEmptyValue<TValue>(value: TValue | null | undefined): value is TValue;
