import type { DesignSystemTheme } from '@themes/theme.interfaces';
import type { StyleObject } from 'styletron-react';

export const styles = {
  containerStyles: (theme: DesignSystemTheme): StyleObject => ({
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: theme.spacing.spacingMd,
  }),
  textsContainerStyles: (theme: DesignSystemTheme): StyleObject => ({
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing.spacingXs,
    alignItems: 'center',
  }),
  buttonsContainerStyles: (theme: DesignSystemTheme): StyleObject => ({
    display: 'flex',
    gap: theme.spacing.spacingMd,
  }),
  linkStyles: (theme: DesignSystemTheme): StyleObject => ({
    textDecorationColor: theme.colors.brand,
  }),
};
