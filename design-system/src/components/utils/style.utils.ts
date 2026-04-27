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
export function getTranslateX(element: Element): number {
  // Required for tests environment
  if (element === undefined) {
    return 0;
  }

  const style = window.getComputedStyle(element);
  const matrix = new DOMMatrix(style.transform);

  return matrix.m41;
}
