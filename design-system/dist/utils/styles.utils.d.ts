import { DimensionData } from '../interfaces/resizable-element.interfaces';
import { StyleObject } from 'styletron-react';
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
export declare const getTransitionStyles: (props: string[]) => string;
/**
 * Generates a StyleObject that applies the specified styles
 * to both the ':focus' and ':active' pseudo-classes.
 */
export declare const getFocusAndActiveStyles: (style: StyleObject) => StyleObject;
/**
 * Applies the calculated dimensions and position to the element.
 *
 * @param element - The HTML element to which the styles will be applied.
 * @param dimensions - The calculated new dimensions and position.
 */
export declare const applyDimensions: (element: HTMLElement, dimensions: DimensionData) => void;
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
export declare const convertCssUnitToPx: (value?: string | number, fallback?: number) => number;
