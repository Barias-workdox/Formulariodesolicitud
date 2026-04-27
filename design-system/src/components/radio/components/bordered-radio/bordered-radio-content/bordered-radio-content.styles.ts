import type { DesignSystemTheme } from '../../../../../themes';
import type { StyleObject } from 'styletron-standard';

export const styles = {
  containerStyles: (theme: DesignSystemTheme): StyleObject => ({
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    gap: theme.spacing.spacing2xs,
  }),
};
