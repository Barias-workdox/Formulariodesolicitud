import { DEFAULT_SIZE } from '@components/input/next/input.constants';
import { themedStyled } from '@themes/utilities';

import type { SharedProps, Size } from '@components/input/next/input.interfaces';
import type { DesignSystemTheme } from '@themes/theme.interfaces';
import type { StyleObject } from 'styletron-react';

/**
 * Returns styles based on the size of the input component.
 */
const getStylesBySize = ($theme: DesignSystemTheme): Record<Size, StyleObject> => ({
  sm: { padding: `0 ${$theme.spacing.spacing2xs}` },
  md: { padding: `0 ${$theme.spacing.spacingXs}` },
});

export const StyledLeading = themedStyled<'span', Pick<SharedProps, '$size' | '$isReadOnly'>>(
  'span',
  ({ $theme, $size, $isReadOnly }) => {
    const stylesBySize = getStylesBySize($theme);
    const sizeStyles = stylesBySize[$size] || stylesBySize[DEFAULT_SIZE];

    return {
      ...sizeStyles,
      display: 'flex',
      alignItems: 'center',
      backgroundColor: $isReadOnly ? $theme.colors.neutralBase : $theme.colors.bgBase,
      height: '100%',
    };
  },
);
