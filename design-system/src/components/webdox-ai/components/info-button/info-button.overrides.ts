import type { InfoButtonProps } from './info-button.interfaces';
import type { DesignSystemTheme } from '@themes/theme.interfaces';

/**
 * Get base brain button styles overrides
 */
export const getBaseOverrides = ($theme: DesignSystemTheme): InfoButtonProps['overrides'] => ({
  Tooltip: {
    Body: {
      style: {
        maxWidth: `calc(${$theme.spacing.spacing2xs8} * 4)`,
      },
    },
  },
});
