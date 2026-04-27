import { getCustomScrollBarStyles } from '@themes/custom-scroll-bar';

import type { DesignSystemTheme } from '@themes/theme.interfaces';
import type { StyleObject } from 'styletron-react';

export const styles = {
  wrapperStyles: (): StyleObject => ({
    display: 'flex',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
  }),
  bodyStyles: (theme: DesignSystemTheme): StyleObject => ({
    flex: 1,
    overflowY: 'auto',
    padding: `${theme.spacing.spacingMd} ${theme.spacing.spacingMd} 0`,
    gap: theme.spacing.spacing3xl,
    display: 'flex',
    flexDirection: 'column',
    ...getCustomScrollBarStyles(theme),
  }),
};
