import type { DesignSystemTheme } from '@themes/theme.interfaces';
import type { StyleObject } from 'styletron-react';

export const styles = {
  containerStyles: (theme: DesignSystemTheme): StyleObject => ({
    width: '100%',
    border: `1px solid ${theme.colors.neutralSubtle}`,
    backgroundColor: theme.colors.bgBase,
  }),
  layoutHeaderContainerStyles: (theme: DesignSystemTheme): StyleObject => ({
    display: 'flex',
    justifyContent: 'space-between',
    padding: theme.spacing.spacingSm,
    borderBottom: `1px solid ${theme.colors.neutralSubtle}`,
  }),
  layoutHeaderTitleContainerStyles: (): StyleObject => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  }),
  layoutHeaderActionContainerStyles: (): StyleObject => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }),
  layoutBodyStyles: (theme: DesignSystemTheme): StyleObject => ({
    padding: theme.spacing.spacingSm,
    display: 'flex',
    flexDirection: 'column',
    rowGap: theme.spacing.spacingSm,
  }),
};
