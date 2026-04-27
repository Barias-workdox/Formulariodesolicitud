import type { DesignSystemTheme } from '../../../../../../themes';
import type { StyleObject } from 'styletron-standard';

export const styles = {
  contentContainerStyles: (theme: DesignSystemTheme): StyleObject => ({
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    gap: theme.spacing.spacingMd,
  }),
  textContainerStyles: {
    flexGrow: 1,
  } as StyleObject,
  iconContainerStyles: {
    alignItems: 'center',
    display: 'flex',
  } as StyleObject,
};
