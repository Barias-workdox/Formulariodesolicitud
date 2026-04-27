import type { DesignSystemTheme } from '@themes/theme.interfaces';
import type { StyleObject } from 'styletron-react';

export const styles = {
  containerStyles: (theme: DesignSystemTheme): StyleObject => ({
    borderLeft: `3px solid ${theme.colors.neutralSubtle}`,
    paddingLeft: theme.spacing.spacingMd,
    marginBottom: theme.spacing.spacingXs,
    ':last-child': {
      marginBottom: 0,
    },
  }),
  textStyles: (): StyleObject => ({
    // FIXME: Update to the new spacing system
    paddingLeft: '12px',
  }),
};
