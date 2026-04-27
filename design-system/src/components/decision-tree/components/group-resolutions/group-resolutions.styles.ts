import { themedStyled } from '@themes/utilities';

import type { DesignSystemTheme } from '@themes/theme.interfaces';
import type { StyleObject } from 'styletron-react';

/**
 * Common line styles for the lines above and below the group resolutions box.
 */
const getCommonLineStyles = (theme: DesignSystemTheme, contrast?: boolean): StyleObject => ({
  content: '""',
  position: 'absolute',
  left: '50%',
  transform: 'translateX(-1px)',
  height: '16px',
  width: '1px',
  backgroundColor: contrast ? theme.colors.brandDepressed : theme.colors.neutralSubtle,
});

/**
 * Styles for the guide lines above and below the group resolutions box.
 */
export const getGuideLinesStyles = (theme: DesignSystemTheme, contrast?: boolean): StyleObject => ({
  '::before': {
    bottom: '100%',
    left: '50%',
    ...getCommonLineStyles(theme, contrast),
  },

  '::after': {
    top: '100%',
    left: '50%',
    ...getCommonLineStyles(theme, contrast),
  },
});

export const StyledContainer = themedStyled(
  'div',
  ({ $theme }): StyleObject => ({
    position: 'relative',
    margin: `${$theme.spacing.spacingMd} 0`,
    width: 'fit-content',

    ...getGuideLinesStyles($theme),
  }),
);

export const StyledInner = themedStyled('div', ({ $theme }) => ({
  border: `1px solid ${$theme.colors.neutralSubtle}`,
  padding: `${$theme.spacing.spacingXs} ${$theme.spacing.spacingMd}`,
  borderRadius: $theme.spacing.spacing2xs,
  backgroundColor: $theme.colors.bgBase,
  overflow: 'hidden',
}));
