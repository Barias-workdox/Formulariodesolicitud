/**
 * Reorders an item in an array from one position to another.
 *
 * @param list - The array of elements to reorder.
 * @param startIndex - The index of the element to be moved.
 * @param endIndex - The index where the element should be moved to.
 *
 * @example
 *   const arr = [1, 2, 3, 4, 5];
 *   const result = reorder(arr, 0, 3);
 *   console.log(result); // Output: [2, 3, 4, 1, 5]
 */
export declare const reorder: <T>(list: T[], startIndex: number, endIndex: number) => T[];
