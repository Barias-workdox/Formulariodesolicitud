import { createDarkTheme, createTheme } from 'baseui';

import { responsiveTheme } from '@themes/responsive';

import { baseOverrides } from '../theme-base';

import type { AppColors } from '@themes/theme.interfaces';

interface CreateDesignSystemThemeOptions {
  colors: Partial<AppColors>;
  dark?: boolean;
}

/**
 * Creates a design system theme by merging BaseUI's base theme with v3 overrides,
 * optional color customizations, and responsive breakpoints.
 *
 * @returns A fully composed, read-only theme object.
 */
export const createDesignSystemTheme = (
  { colors = {}, dark = false }: CreateDesignSystemThemeOptions = { colors: {} },
) =>
  ({
    ...(dark ? createDarkTheme : createTheme)({
      ...baseOverrides,
      colors,
    }),
    ...responsiveTheme,
  }) as const;
