/**
 * Typography system tokens
 *
 * This file contains the core typography tokens used across the application.
 * It defines font families, weights, line heights, and scale ratios.
 * All typography styles should reference these tokens to maintain consistency.
 */

import type { Typography, TypographyCssIdentifier, TypographyKeys } from '../interfaces';
import type { Font } from 'baseui/themes';

/** Base font family for all Typographies fonts */
export const DEFAULT_FONT = {
  fontFamily: '"Albert Sans", sans-serif',
} as const satisfies Partial<Font>;

/** Typography weight tokens */
export const TYPOGRAPHY_WEIGHTS = {
  regular: 400,
  medium: 500,
  bold: 700,
};

/** Typography line height tokens (unitless) */
export const TYPOGRAPHY_LINE_HEIGHTS = {
  tight: 1,
  normal: 1.5,
};

/** Font family used to create file type icon components. */
export const FILE_ICON_FONT = {
  fontFamily: 'Helvetica',
} as const satisfies Partial<Font>;

/**
 * Minimum font size for accessibility compliance
 *
 * WCAG 2.1 does not mandate a specific minimum font size. However, it requires that text
 * can be resized up to 200% without loss of content or functionality (WCAG 2.1 Level AA,
 * Success Criterion 1.4.4).
 *
 * While various organizations recommend minimum font sizes (typically 12pt/16px for body text),
 * this design system enforces a 12px minimum for all typography variants to ensure baseline
 * readability, especially for smaller text elements like microcopy and upper details that are
 * commonly used throughout the application.
 *
 * Note: This is a design system decision rather than a strict WCAG requirement. The primary
 * accessibility requirement is that users can resize text up to 200% using browser zoom or
 * text size settings.
 *
 * @see https://www.w3.org/WAI/WCAG21/Understanding/resize-text.html
 */
export const MINIMUM_FONT_SIZE = '12px' as const;

/**
 * Gets the font size for a given CSS identifier.
 * Enforces a minimum font size for accessibility compliance (WCAG 2.1).
 */
export const getFontSize = (scale: TypographyCssIdentifier): string => {
  return `max(calc(var(--font-base-size) * var(--font-scale-${scale})), ${MINIMUM_FONT_SIZE})`;
};

export const typographies: Record<TypographyKeys, Typography> = {
  h1: {
    ...DEFAULT_FONT,
    fontSize: getFontSize('h1'),
    lineHeight: TYPOGRAPHY_LINE_HEIGHTS.normal,
  },
  h2: {
    ...DEFAULT_FONT,
    fontSize: getFontSize('h2'),
    lineHeight: TYPOGRAPHY_LINE_HEIGHTS.normal,
  },
  body: {
    ...DEFAULT_FONT,
    fontSize: getFontSize('body'),
    lineHeight: TYPOGRAPHY_LINE_HEIGHTS.normal,
  },
  bodySmall: {
    ...DEFAULT_FONT,
    fontSize: getFontSize('body-small-mono'),
    lineHeight: TYPOGRAPHY_LINE_HEIGHTS.normal,
  },
  microCopy: {
    ...DEFAULT_FONT,
    fontSize: getFontSize('microcopy'),
    lineHeight: TYPOGRAPHY_LINE_HEIGHTS.normal,
  },
  upperDetails: {
    ...DEFAULT_FONT,
    fontSize: getFontSize('upper-details'),
    lineHeight: TYPOGRAPHY_LINE_HEIGHTS.normal,
  },
};
