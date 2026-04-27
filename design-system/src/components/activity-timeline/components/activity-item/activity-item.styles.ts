import type { DesignSystemTheme } from '@themes/theme.interfaces';
import type { StyleObject } from 'styletron-react';

export const styles = {
  textStyles: (): StyleObject => ({
    wordBreak: 'break-word',
  }),
  activityContentStyles: (theme: DesignSystemTheme): StyleObject => ({
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing.spacingXs,
  }),
};
