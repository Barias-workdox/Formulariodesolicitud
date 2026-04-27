import {
  COMMON_TRANSITION_DURATION,
  COMMON_TRANSITION_TIMING_FUNCTION,
} from '@constants/common.constants';

import type { DimensionData } from '@interfaces/resizable-element.interfaces';
import type { StyleObject } from 'styletron-react';

/**
 * Generates a CSS string representing the transition styles for a given set of CSS properties.
 * This function constructs transition styles by appending common duration and timing function values
 * to each property provided in the input array.
 *
 * @param props - An array of CSS property names for which transition styles should be generated.
 * @returns A string representing the CSS transition properties, concatenated with default duration and timing function values, formatted for inclusion in a CSS rule.
 *
 * Example:
 *   Input: ['opacity', 'transform']
 *   Output: 'opacity 200ms linear, transform 200ms linear'
 */
export const getTransitionStyles = (props: string[]): string =>
  props
    .map((prop) => `${prop} ${COMMON_TRANSITION_DURATION} ${COMMON_TRANSITION_TIMING_FUNCTION}`)
    .join(',');

/**
 * Generates a StyleObject that applies the specified styles
 * to both the ':focus' and ':active' pseudo-classes.
 */
export const getFocusAndActiveStyles = (style: StyleObject): StyleObject => ({
  ':focus': style,
  ':active': style,
});

/**
 * Applies the calculated dimensions and position to the element.
 *
 * @param element - The HTML element to which the styles will be applied.
 * @param dimensions - The calculated new dimensions and position.
 */
export const applyDimensions = (element: HTMLElement, dimensions: DimensionData): void => {
  requestAnimationFrame(() => {
    element.style.width = `${dimensions.width}px`;
    element.style.height = `${dimensions.height}px`;
    element.style.left = `${dimensions.left}px`;
    element.style.top = `${dimensions.top}px`;
  });
};

/**
 * Converts a CSS dimension string (e.g., '120px', '10vw', '5rem') to a number in pixels.
 *
 * This function works by creating a temporary, non-visible DOM element, applying the given
 * CSS value to its width, and then reading its computed width in pixels. This leverages
 * the browser's own engine to perform the conversion for any valid CSS unit.
 *
 * @param value - The CSS value to parse.
 * @param fallback - The fallback value if parsing fails.
 * @returns The parsed number value in pixels.
 */
export const convertCssUnitToPx = (value?: string | number, fallback = 0): number => {
  if (typeof value === 'number') return value;
  if (!value) return fallback;

  // For 'px' units, we can use a faster direct parsing method.
  if (value.endsWith('px')) {
    const n = parseFloat(value);

    return isNaN(n) ? fallback : n;
  }

  // For other units (vw, rem, etc.), we use the DOM to get the computed value.
  const tempElement = document.createElement('div');

  tempElement.style.position = 'absolute';
  tempElement.style.visibility = 'hidden';
  tempElement.style.width = value;

  document.body.appendChild(tempElement);

  const computedWidth = window.getComputedStyle(tempElement).width;

  document.body.removeChild(tempElement);

  const n = parseFloat(computedWidth);

  return isNaN(n) ? fallback : n;
};
