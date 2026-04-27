import type { ReactElement } from 'react';

import { ENHANCER_SIZE } from './button.constants';
import {
  brandFilled,
  brandGhost,
  brandOutlined,
  brandTonal,
  contrastFilled,
  contrastGhost,
  contrastOutlined,
  negativeFilled,
  neutralFilled,
  neutralGhost,
  neutralOutlined,
  neutralTonal,
  positiveFilled,
} from './styles/button.variants';

import type {
  ButtonAppearance,
  ButtonEnhancer,
  ButtonKind,
  ButtonProps,
} from './button.interfaces';
import type { ButtonVariantStyles, ThemeColors } from './styles/button.styles.interfaces';
import type { DesignSystemTheme } from '@themes/theme.interfaces';

type VariantGetter = (c: ThemeColors) => ButtonVariantStyles;

const VARIANTS: Record<ButtonKind, Record<ButtonAppearance, VariantGetter>> = {
  brand: {
    filled: brandFilled,
    tonal: brandTonal,
    outlined: brandOutlined,
    ghost: brandGhost,
  },
  neutral: {
    filled: neutralFilled,
    tonal: neutralTonal,
    outlined: neutralOutlined,
    ghost: neutralGhost,
  },
  positive: {
    filled: positiveFilled,
    tonal: positiveFilled,
    outlined: positiveFilled,
    ghost: positiveFilled,
  },
  negative: {
    filled: negativeFilled,
    tonal: negativeFilled,
    outlined: negativeFilled,
    ghost: negativeFilled,
  },
  contrast: {
    filled: contrastFilled,
    tonal: contrastFilled,
    outlined: contrastOutlined,
    ghost: contrastGhost,
  },
};

/**
 * Gets the style configuration for a specific button variant.
 * Returns StyleObject for button states, icon states, and spinner.
 */
export const getButtonStyles = (
  theme: DesignSystemTheme,
  kind: ButtonKind = 'brand',
  appearance: ButtonAppearance = 'filled',
): ButtonVariantStyles => VARIANTS[kind][appearance](theme.colors);

/**
 * Gets accessibility attributes based on button state
 */
export const getAriaProps = (
  isLoading: boolean,
  disabled: boolean,
): Record<string, boolean | string> => ({
  ...(isLoading && { 'aria-busy': true, 'aria-live': 'polite' }),
  ...(disabled && { 'aria-disabled': true }),
});

/**
 * Renders an enhancer icon with the appropriate size
 */
export const renderEnhancer = (
  Enhancer: ButtonEnhancer,
  size: ButtonProps['size'],
): ReactElement => (
  <Enhancer
    aria-hidden="true"
    size={ENHANCER_SIZE[size!]}
  />
);
