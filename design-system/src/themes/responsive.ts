import { breakpoints } from '@tokens/breakpoints';

import type { ResponsiveTheme } from './theme.interfaces';

/** Matches baseui's getMediaQuery helper. */
const getMediaQuery = (breakpoint: number): string =>
  `@media screen and (min-width: ${breakpoint}px)`;

/**
 * Responsive variables for the theme, it generates the media queries based on the breakpoints
 * defined in the theme tokens.
 */
export const responsiveTheme: ResponsiveTheme = {
  breakpoints,
  mediaQuery: {
    extrasmall: getMediaQuery(breakpoints.extrasmall),
    small: getMediaQuery(breakpoints.small),
    medium: getMediaQuery(breakpoints.medium),
    large: getMediaQuery(breakpoints.large),
    extralarge: getMediaQuery(breakpoints.extralarge),
  },
};
