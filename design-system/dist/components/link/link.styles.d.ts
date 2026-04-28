import { LinkColorConfig, LinkKind, LinkSize, LinkStyleOptions, LinkTypographyConfig, StyledLinkTextColorsProps } from './link.interfaces';
import { DesignSystemTheme } from '../../themes/theme.interfaces';
import { StyleObject } from 'styletron-react';
/**
 * Get typography configuration for link based on size
 *
 * @param theme - Design system theme
 * @param size - Link size variant
 * @returns Typography configuration object
 */
export declare const getLinkTypography: (theme: DesignSystemTheme, size: LinkSize) => LinkTypographyConfig;
/** Get color configuration for link kind */
export declare const getLinkColors: (kind: LinkKind) => LinkColorConfig;
/**
 * Build complete link styles with professional configuration
 *
 * @param theme - Design system theme
 * @param options - Link styling options
 * @returns Complete style object for the link
 */
export declare const getLinkStyles: (theme: DesignSystemTheme, options: LinkStyleOptions) => StyleObject;
/**
 * Legacy styled link text colors helper
 *
 * @deprecated Use getLinkColors instead
 * Used by consumer's components to compose some components styles
 */
export declare const styledLinkTextColors: (theme: DesignSystemTheme) => StyledLinkTextColorsProps;
