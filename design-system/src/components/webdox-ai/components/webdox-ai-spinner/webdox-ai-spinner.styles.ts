import { COMMON_ICON_SIZE_12 } from '@constants/common.constants';

import type { DesignSystemTheme } from '@themes/theme.interfaces';
import type { StyleObject } from 'styletron-react';

export const styles = {
  iconStyles: (theme: DesignSystemTheme): StyleObject => ({
    width: COMMON_ICON_SIZE_12,
    height: COMMON_ICON_SIZE_12,
    position: 'absolute',
    color: theme.colors.brand,
  }),
  spinnerStyles: {
    animationName: {
      '0%': {
        transform: `rotate(0deg)`,
      },
      '100%': {
        transform: `rotate(360deg)`,
      },
    },
    animationDuration: '1s',
    animationTimingFunction: 'linear',
    animationIterationCount: 'infinite',
    transformOrigin: `${COMMON_ICON_SIZE_12} ${COMMON_ICON_SIZE_12}`,
  },
};
