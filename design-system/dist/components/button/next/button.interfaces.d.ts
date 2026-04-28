import { AriaAttributes, FunctionComponent } from 'react';
import { WithTestId } from '../../../interfaces/common.interfaces';
import { ButtonProps as BaseButtonProps } from 'baseui/button';
export type ButtonKind = 'brand' | 'neutral' | 'positive' | 'negative' | 'contrast';
export type ButtonAppearance = 'filled' | 'tonal' | 'outlined' | 'ghost';
export type ButtonSize = '44px' | '32px';
export type ButtonEnhancer = FunctionComponent<{
    size?: string | number;
}>;
export interface ButtonProps extends Omit<BaseButtonProps, 'kind' | 'size' | 'startEnhancer' | 'endEnhancer' | 'shape' | 'colors' | 'onClick'>, WithTestId, AriaAttributes {
    /** Shows loading state */
    isLoading?: boolean;
    /** Disables the button */
    disabled?: boolean;
    /** Expands the button to the full width of its container */
    fullWidth?: boolean;
    /** Defines the visual and semantic intention of the button */
    kind?: ButtonKind;
    /** Defines the visual treatment according to emphasis level */
    appearance?: ButtonAppearance;
    /** Size of the button */
    size?: ButtonSize;
    /** Node to display on the left side of the text */
    startEnhancer?: ButtonEnhancer;
    /** Node to display on the right side of the text */
    endEnhancer?: ButtonEnhancer;
    onClick?(event: React.SyntheticEvent<HTMLButtonElement>): void;
    onFocus?(event: React.FocusEvent<HTMLButtonElement>): void;
    onBlur?(event: React.FocusEvent<HTMLButtonElement>): void;
    onKeyDown?(event: React.KeyboardEvent<HTMLButtonElement>): void;
}
