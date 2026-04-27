import { DEFAULT_SIZE } from '@components/input/next/input.constants';
import { themedStyled } from '@themes/utilities';

import type { Size } from '@components/input/next/input.interfaces';
import type { DesignSystemTheme } from '@themes/theme.interfaces';
import type { StyleObject } from 'styletron-react';

/**
 * Returns styles based on the size of the input component.
 */
const getStylesBySize = ($theme: DesignSystemTheme): Record<Size, StyleObject> => ({
  sm: { gap: $theme.spacing.spacingXs, paddingLeft: $theme.spacing.spacingXs },
  md: { gap: $theme.spacing.spacingMd, paddingLeft: $theme.spacing.spacingMd },
});

export const StyledContainer = themedStyled<'div', { $size: Size; $withLeftPadding: boolean }>(
  'div',
  ({ $theme, $size, $withLeftPadding }) => {
    const stylesBySize = getStylesBySize($theme);
    const sizeStyles = stylesBySize[$size] || stylesBySize[DEFAULT_SIZE];

    return {
      ...sizeStyles,
      display: 'flex',
      alignItems: 'center',
      height: '100%',
      ...(!$withLeftPadding && { paddingLeft: 0 }),
    };
  },
);
