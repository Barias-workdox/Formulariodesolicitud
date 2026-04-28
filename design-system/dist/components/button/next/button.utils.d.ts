import { ReactElement } from 'react';
import { ButtonAppearance, ButtonEnhancer, ButtonKind, ButtonProps } from './button.interfaces';
import { ButtonVariantStyles } from './styles/button.styles.interfaces';
import { DesignSystemTheme } from '../../../themes/theme.interfaces';
/**
 * Gets the style configuration for a specific button variant.
 * Returns StyleObject for button states, icon states, and spinner.
 */
export declare const getButtonStyles: (theme: DesignSystemTheme, kind?: ButtonKind, appearance?: ButtonAppearance) => ButtonVariantStyles;
/**
 * Gets accessibility attributes based on button state
 */
export declare const getAriaProps: (isLoading: boolean, disabled: boolean) => Record<string, boolean | string>;
/**
 * Renders an enhancer icon with the appropriate size
 */
export declare const renderEnhancer: (Enhancer: ButtonEnhancer, size: ButtonProps["size"]) => ReactElement;
