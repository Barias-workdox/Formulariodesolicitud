import type { DesignSystemTheme } from '@themes/theme.interfaces';
import type { ButtonOverrides } from 'baseui/button';
import type { StyleObject } from 'styletron-react';

export const buttonOverrides: ButtonOverrides = {
  BaseButton: {
    style: ({ $theme }): StyleObject => ({
      justifyContent: 'left',
      color: $theme.colors.neutralSubdued,
    }),
  },
};

export const styles = {
  containerStyles: {
    display: 'flex',
  } as StyleObject,
  deleteButtonContainerStyles: (theme: DesignSystemTheme): StyleObject => ({
    marginLeft: theme.spacing.spacingXs,
  }),
};
