import type { DrawerOverrides } from 'baseui/drawer';

export const summaryDrawerOverrides: DrawerOverrides = {
  DrawerContainer: {
    style: ({ $theme }) => ({
      borderTopLeftRadius: $theme.spacing.spacingXl,
      borderTopRightRadius: $theme.spacing.spacingXl,
      padding: `${$theme.spacing.spacingMd} 0`,
    }),
  },
};
