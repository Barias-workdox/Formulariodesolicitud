import { heightMap } from '@components/button/button.styles';

import type { ButtonOverrides } from 'baseui/button';
import type { StyleObject } from 'styletron-react';

/**
 * Computes the override styles for icon buttons based on their properties.
 */
export const iconButtonOverrides: ButtonOverrides = {
  BaseButton: {
    style: ({ $size, $theme }): StyleObject => ({
      padding: 0,
      width: heightMap[$size] || heightMap.default,
      flexShrink: 0,
      [$theme.mediaQuery.small]: {
        padding: 0,
      },
    }),
  },
};
