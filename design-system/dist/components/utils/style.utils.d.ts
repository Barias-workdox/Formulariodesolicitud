/**
 * Retrieves the translateX value of the specified element from its computed styles.
 *
 * @example
 * ```
 * // HTML: <div id="myElement" style="transform: translateX(100px);"></div>
 * const element = document.getElementById('myElement');
 * const translateX = getTranslateX(element);
 * console.log(translateX); // Output: 100
 * ```
 */
export declare function getTranslateX(element: Element): number;
