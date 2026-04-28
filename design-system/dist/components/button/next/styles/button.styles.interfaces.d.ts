import { ButtonProps } from '../button.interfaces';
import { SpinnerProps } from '../../../spinner/next';
import { DesignSystemTheme } from '../../../../themes/theme.interfaces';
import { StyleObject } from 'styletron-react';
/** Style configuration for button states */
export interface ButtonStateStyles {
    default: StyleObject;
    hover: StyleObject;
    active: StyleObject;
}
export type ButtonState = keyof ButtonStateStyles;
/** Complete style configuration for a button variant */
export interface ButtonVariantStyles {
    button: ButtonStateStyles;
    spinner: Omit<SpinnerProps, 'size'>;
}
export type GetOverridesProps = Required<Pick<ButtonProps, 'dataTestId' | 'isLoading' | 'disabled' | 'kind' | 'appearance' | 'size' | 'fullWidth'>>;
export type ThemeColors = DesignSystemTheme['colors'];
