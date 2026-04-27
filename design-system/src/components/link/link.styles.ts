import { getFontSize } from '@themes';
import { DEFAULT_FONT } from '@tokens';

import type {
  LinkColorConfig,
  LinkKind,
  LinkSize,
  LinkStyleOptions,
  LinkTypographyConfig,
  LinkFocusConfig,
  LinkColorStates,
  StyledLinkTextColorsProps,
} from './link.interfaces';
import type { DesignSystemTheme } from '@themes/theme.interfaces';
import type { StyleObject } from 'styletron-react';

/**
 * Get typography configuration for link based on size
 *
 * @param theme - Design system theme
 * @param size - Link size variant
 * @returns Typography configuration object
 */
export const getLinkTypography = (
  theme: DesignSystemTheme,
  size: LinkSize,
): LinkTypographyConfig => ({
  fontFamily: DEFAULT_FONT.fontFamily,
  fontSize: size === 'medium' ? getFontSize('body') : getFontSize('body-small-mono'),
  lineHeight: '150%',
  fontWeight: theme.typography.ParagraphMedium.fontWeight,
});

/** Color configurations for each link kind */
const LINK_COLOR_CONFIGS: Record<LinkKind, LinkColorConfig> = {
  default: {
    default: 'brand',
    hover: 'brandMedium',
    active: 'brandMedium',
    visited: 'neutralStrong',
    disabled: 'neutralDepressed',
  },
  contrast: {
    default: 'textBase',
    hover: 'textBase',
    active: 'textBase',
    visited: 'neutralDepressed',
    disabled: 'neutral',
  },
};

/** Get color configuration for link kind */
export const getLinkColors = (kind: LinkKind): LinkColorConfig => LINK_COLOR_CONFIGS[kind];

/**
 * Get focus configuration for link based on state and kind
 *
 * @param disabled - Whether the link is disabled
 * @param kind - Link visual variant
 * @param theme - Design system theme
 * @returns Focus configuration object
 */
const getLinkFocusConfig = (
  disabled: boolean,
  kind: LinkKind,
  theme: DesignSystemTheme,
): LinkFocusConfig => {
  const outline = disabled
    ? 'none'
    : `2px solid ${theme.colors[kind === 'contrast' ? 'borderBase' : 'neutral']}`;

  return {
    outline,
    outlineOffset: '2px',
    borderRadius: '2px',
  };
};

/**
 * Get color states for link based on kind and disabled state
 *
 * @param colors - Color configuration for the link kind
 * @param disabled - Whether the link is disabled
 * @param theme - Design system theme
 * @returns Color states object
 */
const getLinkColorStates = (
  colors: LinkColorConfig,
  disabled: boolean,
  theme: DesignSystemTheme,
): LinkColorStates => {
  /**
   * Helper function to get color based on state
   */
  const getColor = (state: keyof LinkColorConfig): string =>
    disabled ? theme.colors[colors.disabled] : theme.colors[colors[state]];

  return {
    default: getColor('default'),
    hover: getColor('hover'),
    active: getColor('active'),
    visited: getColor('visited'),
    disabled: getColor('disabled'),
  };
};

/**
 * Build complete link styles with professional configuration
 *
 * @param theme - Design system theme
 * @param options - Link styling options
 * @returns Complete style object for the link
 */
export const getLinkStyles = (theme: DesignSystemTheme, options: LinkStyleOptions): StyleObject => {
  const { disabled, underlined, kind, size, fontWeight } = options;
  const colors = getLinkColors(kind);
  const typography = getLinkTypography(theme, size);
  const focusConfig = getLinkFocusConfig(disabled, kind, theme);
  const colorStates = getLinkColorStates(colors, disabled, theme);

  return {
    // Typography
    ...typography,
    ...(fontWeight && { fontWeight }),

    // Layout
    display: 'inline',
    padding: 0,

    // Colors and text decoration
    color: colorStates.default,
    textDecoration: underlined ? 'underline' : 'none',
    textUnderlineOffset: '2px',
    cursor: disabled ? 'not-allowed' : 'pointer',

    // Interactive states
    ':hover': {
      color: colorStates.hover,
    },
    ':active': {
      color: colorStates.active,
    },
    ':visited': {
      color: colorStates.visited,
    },

    // Focus states
    ':focus': {
      outline: focusConfig.outline,
      outlineOffset: focusConfig.outlineOffset,
      borderRadius: focusConfig.borderRadius,
    },
    ':focus-visible': {
      outline: focusConfig.outline,
      outlineOffset: focusConfig.outlineOffset,
      borderRadius: focusConfig.borderRadius,
    },
  };
};

/**
 * Legacy styled link text colors helper
 *
 * @deprecated Use getLinkColors instead
 * Used by consumer's components to compose some components styles
 */
export const styledLinkTextColors = (theme: DesignSystemTheme): StyledLinkTextColorsProps => ({
  color: `${theme.colors.neutralSubdued}!important`,
  hover: `${theme.colors.neutral}!important`,
  active: `${theme.colors.neutralSubdued}!important`,
});
