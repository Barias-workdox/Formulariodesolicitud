import type { DesignSystemTheme } from '@themes/theme.interfaces';
import type { StyleObject } from 'styletron-react';

export const styles = {
  textStyles: (): StyleObject => ({
    wordBreak: 'break-word',
  }),
  contentStyles: (theme: DesignSystemTheme): StyleObject => ({
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing.spacing2xs,
  }),
};
