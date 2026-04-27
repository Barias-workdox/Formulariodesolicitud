import type { DesignSystemTheme } from '../../themes';
import type { ButtonOverrides } from 'baseui/button';
import type { StyleObject } from 'styletron-react';

/** Custom overrides styles to the oauth button */
export const oauthButtonStyledOverrides = (dataTestId: string): ButtonOverrides => ({
  BaseButton: {
    props: {
      ...(dataTestId && { 'data-testid': dataTestId }),
    },
    style: ({ $theme }: { $theme: DesignSystemTheme }): StyleObject => ({
      backgroundColor: $theme.colors.bgBase,
      border: `1px solid ${$theme.colors.neutralWashed}`,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: $theme.spacing.spacingMd,
      paddingBottom: $theme.spacing.spacingMd,

      ':hover': {
        backgroundColor: $theme.colors.neutralBase,
      },

      ':focus': {
        backgroundColor: $theme.colors.neutralBase,
      },
    }),
  },
});
