import type { DesignSystemTheme } from '@themes/theme.interfaces';
import type { StyleObject } from 'styletron-react';

export const styles = {
  containerStyles: (): StyleObject => ({
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'start',
  }),
  conditionContainerStyles: (theme: DesignSystemTheme): StyleObject => ({
    display: 'flex',
    alignItems: 'center',
    paddingRight: theme.spacing.spacingSm,
  }),
};
