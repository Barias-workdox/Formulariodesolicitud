import { DesignSystemTheme } from './theme.interfaces';
import { StyleObject } from 'styletron-react';
/**
 * Generates custom scrollbar styles based on the provided theme.
 *
 * @param theme - The design system theme used to style the scrollbar.
 * @returns An object containing custom scrollbar styles compatible with Styletron.
 *
 * The returned styles include:
 * - A default scrollbar with transparent colors.
 * - Custom styles for WebKit-based browsers to control the appearance of the scrollbar.
 * - A hover state where the scrollbar thumb's background color changes to the theme's subtle background color.
 */
export declare const getCustomScrollBarStyles: (theme: DesignSystemTheme) => StyleObject;
