import { themedStyled } from '../../../../themes';

import type { DesignSystemTheme } from '../../../../themes';
import type { StyleObject } from 'styletron-react';

/**
 * Styled wrapper component for the close icon with proper styling
 */
export const CloseIconWrapper = themedStyled(
  'div',
  ({ $theme }: { $theme: DesignSystemTheme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    cursor: 'pointer',
    paddingLeft: $theme.spacing.spacingXs,
    borderRadius: $theme.borders.borderSm,
  }),
);

/**
 * Enhanced focus styles for the close button in toast context
 */
export const closeButtonFocusOverrides = {
  BaseButton: {
    style: ({ $theme }: { $theme: DesignSystemTheme }): StyleObject => ({
      ':focus': {
        border: `2px solid ${$theme.colors.borderBase}`,
        outline: 'none',
        borderRadius: $theme.borders.borderSm,
      },
      ':focus-visible': {
        border: `2px solid ${$theme.colors.borderBase}`,
        outline: 'none',
        borderRadius: $theme.borders.borderSm,
      },
    }),
  },
};
