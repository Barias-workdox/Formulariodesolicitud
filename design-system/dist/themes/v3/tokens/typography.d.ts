import { Typography, TypographyCssIdentifier, TypographyKeys } from '../interfaces';
/** Base font family for all Typographies fonts */
export declare const DEFAULT_FONT: {
    readonly fontFamily: "\"Albert Sans\", sans-serif";
};
/** Typography weight tokens */
export declare const TYPOGRAPHY_WEIGHTS: {
    regular: number;
    medium: number;
    bold: number;
};
/** Typography line height tokens (unitless) */
export declare const TYPOGRAPHY_LINE_HEIGHTS: {
    tight: number;
    normal: number;
};
/** Font family used to create file type icon components. */
export declare const FILE_ICON_FONT: {
    readonly fontFamily: "Helvetica";
};
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
export declare const MINIMUM_FONT_SIZE: "12px";
/**
 * Gets the font size for a given CSS identifier.
 * Enforces a minimum font size for accessibility compliance (WCAG 2.1).
 */
export declare const getFontSize: (scale: TypographyCssIdentifier) => string;
export declare const typographies: Record<TypographyKeys, Typography>;
