import type { StyleObject } from 'styletron-react';

/**
 * Validates whether the computed styles of a given HTML element
 * match the expected styles provided.
 *
 * This utility is useful for testing dynamically styled components,
 * particularly when styles are applied using CSS-in-JS solutions like Styletron.
 *
 * @param element - The HTML element to validate.
 * @param expectedStyles - An object representing the expected CSS properties and their values.
 * @returns `true` if all expected styles match the computed styles, `false` otherwise.
 *
 * @example
 * ```tsx
 * const element = screen.getByTestId('my-element');
 * const isValid = validateClassStyle(element, {
 *   opacity: '0',
 *   transform: 'scale(0.8)',
 *   transition: 'all 300ms ease-in-out',
 * });
 *
 * expect(isValid).toBe(true);
 * ```
 */
export const validateStyledComponent = (
  element: HTMLElement,
  expectedStyles: StyleObject,
): boolean => {
  const htmlString = element.outerHTML;
  const styleMatch = htmlString.match(/style=\{([^}]+)\}/);

  if (!styleMatch) {
    return false; // No style attribute found
  }

  // Clean up the matched style string (remove extra spaces, newlines, etc.)
  const styleContent = styleMatch[1]
    .replace(/[\n\r]/g, '') // Remove newlines
    .replace(/\s{2,}/g, ' ') // Collapse multiple spaces
    .trim();

  // Parse the styles into an object
  const inlineStyles = styleContent
    .split(',')
    .map((s) => s.trim().split(':'))
    .reduce<Record<string, string>>((acc, [key, value]) => {
      if (key && value) {
        acc[key.trim()] = value.trim().replace(/['"]/g, ''); // Remove quotes if present
      }

      return acc;
    }, {});

  // Compare the inline styles with the expected styles
  return Object.entries(expectedStyles).every(([key, value]) => {
    const expectedValue = typeof value === 'number' ? value.toString() : value;

    return inlineStyles[key] === expectedValue;
  });
};
