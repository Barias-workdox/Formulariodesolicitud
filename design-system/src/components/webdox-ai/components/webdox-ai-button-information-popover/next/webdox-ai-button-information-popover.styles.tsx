import type { DesignSystemTheme } from '@themes/theme.interfaces';
import type { StyleObject } from 'styletron-react';

export const styles = {
  boldTextStyles: (theme: DesignSystemTheme): StyleObject => ({
    fontWeight: '500',
    color: theme.colors.neutral,
  }),
};
