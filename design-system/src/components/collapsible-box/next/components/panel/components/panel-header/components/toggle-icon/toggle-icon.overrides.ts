import type { Overrides, StyleOverrideProps } from '@themes/theme.interfaces';

/**
 * Returns the style overrides for the IconButton component
 */
export const iconButtonOverrides = (): Overrides => ({
  BaseButton: {
    style: ({ $theme }: StyleOverrideProps) => ({
      backgroundColor: $theme.colors.bgBase,
      borderColor: $theme.colors.bgBase,
      border: `1px solid ${$theme.colors.bgBase}`,
      ':hover': {
        backgroundColor: $theme.colors.bgBase,
        borderColor: $theme.colors.bgBase,
      },
      ':active': {
        backgroundColor: $theme.colors.bgBase,
        borderColor: $theme.colors.bgBase,
      },
    }),
  },
});
