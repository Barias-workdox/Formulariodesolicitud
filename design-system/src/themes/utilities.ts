import {
  createTheme,
  createThemedStyled,
  createThemedUseStyletron,
  createThemedWithStyle,
} from 'baseui';

import { spacing } from './_deprecated/v2/tokens/spacing';
import { responsiveTheme } from './responsive';

import type { DesignSystemTheme } from './theme.interfaces';

export const themedStyled: ReturnType<typeof createThemedStyled<DesignSystemTheme>> =
  createThemedStyled<DesignSystemTheme>();

export const themedWithStyle = createThemedWithStyle<DesignSystemTheme>();

export const themedUseStyletron = createThemedUseStyletron<DesignSystemTheme>();

/** Required by apps that implements another Theme */
export function themedStyledGeneric<T>(): ReturnType<typeof createThemedStyled<T>> {
  return createThemedStyled<T>();
}

/** Required by apps that implements another Theme */
export function themedWithStyleGeneric<T>(): ReturnType<typeof createThemedWithStyle<T>> {
  return createThemedWithStyle<T>();
}

/** Required by apps that implements another Theme */
export function themedUseStyletronGeneric<T>(): ReturnType<typeof createThemedUseStyletron<T>> {
  return createThemedUseStyletron<T>();
}

/** Create a new App theme with the extra colors or override props from the Design System */
export function createAppTheme<ConsumerAppTheme>(
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/no-explicit-any
  overrides: any,
): ConsumerAppTheme {
  return {
    spacing,
    ...responsiveTheme,
    ...(createTheme(overrides) as ConsumerAppTheme),
  };
}
