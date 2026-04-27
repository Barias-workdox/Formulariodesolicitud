import type { DesignSystemTheme } from '../../../themes';
import type { StyleObject } from 'styletron-standard';

export const styles = {
  messageOptionStyles: (theme: DesignSystemTheme): StyleObject => ({
    display: 'grid',
    gridAutoFlow: 'column',
    gap: theme.spacing.spacingXs,
    alignItems: 'center',
    justifyContent: 'flex-start',
  }),
};
