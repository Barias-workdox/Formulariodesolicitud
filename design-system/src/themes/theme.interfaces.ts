import type { Lighting } from './_deprecated/v1/lighting';
import type { Typography } from './_deprecated/v1/typographies';
import type { SemanticColors } from './v3/interfaces/colors.interfaces';
import type { UIColorTokens } from './v3/interfaces/ui-colors.interfaces';
import type { RemoveIndexSignature } from '../types/utils/remove-index-signature';
import type { Borders } from '@tokens/borders';
import type { Breakpoints } from '@tokens/breakpoints';
import type { Elevations } from '@tokens/elevations';
import type { Spacing } from '@tokens/spacing';
import type { ColorTokens as BaseColors, Typography as BaseTypography } from 'baseui/styles';
import type {
  Lighting as DefaultLighting,
  MediaQuery as DefaultMediaQuery,
  Theme as DefaultTheme,
  Typography as DefaultTypography,
} from 'baseui/theme';
import type { StyleObject } from 'styletron-react';

export type ThemeSpacingType = Spacing;

type StrictBaseColors = RemoveIndexSignature<BaseColors>;

type ExtendedColors = {
  divisionLine: string;
  bgBrandAI: string;
  bgBrandAIHover: string;
};

/**
 * Only common UI colors, used by design system
 */
export type AppColors = StrictBaseColors &
  Required<SemanticColors> &
  UIColorTokens &
  ExtendedColors;

export interface ThemeOverrides {
  typography: Partial<Record<keyof BaseTypography, Typography>>;
  colors: Partial<AppColors>;
  lighting: Partial<DefaultLighting & Lighting>;
  mediaQuery?: DefaultMediaQuery & {
    extralarge?: string;
  };
  spacing: ThemeSpacingType;
  borders: Borders;
  elevations: Elevations;
}

export interface ResponsiveTheme {
  breakpoints: Breakpoints;
  mediaQuery: Record<keyof Breakpoints, string>;
}

export interface DesignSystemTheme extends Omit<
  DefaultTheme,
  'colors' | 'typography' | 'breakpoints' | 'mediaQuery' | 'lighting' | 'borders'
> {
  colors: AppColors;
  typography: DefaultTypography & ThemeOverrides['typography'];
  spacing: ThemeOverrides['spacing'];
  breakpoints: ResponsiveTheme['breakpoints'];
  mediaQuery: ResponsiveTheme['mediaQuery'];
  lighting: ThemeOverrides['lighting'];
  borders: ThemeOverrides['borders'];
  elevations: ThemeOverrides['elevations'];
}

/**
 * This custom interfaces and types are an abstraction of "baseui/overrides" to make use of the custom theme props
 * in the "style" property of components overrides.
 * This will grant you access to custom theme props without an explicit type declaration of DesignSystemTheme.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type StyleOverrideProps<T = Record<string, any>> = {
  $theme: DesignSystemTheme;
} & React.PropsWithChildren<T>;

export type StyleOverrideFunction<T> = (props: StyleOverrideProps<T>) => StyleObject;

export type StyleOverride<T> = StyleObject | StyleOverrideFunction<T>;

export type ComponentOverride<T> = React.ComponentType<T> | React.ForwardRefRenderFunction<T>;

export interface OverrideObject<T = null> {
  component?: ComponentOverride<T | object>;
  props?: Partial<T | object>;
  style?: StyleOverride<T | object>;
}

export type Override<T = unknown> = OverrideObject<T> | React.ComponentType<T>;

export interface Overrides {
  [key: string]: Override;
}

export type DesignSystemColorType = keyof AppColors;
