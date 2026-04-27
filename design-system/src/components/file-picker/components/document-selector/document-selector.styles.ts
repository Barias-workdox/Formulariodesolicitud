import type { DesignSystemTheme } from '@themes/theme.interfaces';
import type { StyleObject } from 'styletron-react';

export const styles = {
  containerStyles: (theme: DesignSystemTheme): StyleObject => ({
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    gap: theme.spacing.spacingSm,
  }),
  leftAreaContainerStyles: (theme: DesignSystemTheme): StyleObject => ({
    display: 'flex',
    overflow: 'hidden',
    gap: theme.spacing.spacingSm,
  }),
  uploadButtonContainerStyles: {
    flexShrink: 0,
  } as StyleObject,
  filenameContainerStyles: (): StyleObject => ({
    display: 'flex',
    alignItems: 'center',
    overflow: 'hidden',
  }),
  rightAreaContainerStyles: (theme: DesignSystemTheme): StyleObject => ({
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing.spacingSm,
  }),
  progressCircleContainerStyles: (): StyleObject => ({
    display: 'flex',
    alignItems: 'center',
  }),
};
