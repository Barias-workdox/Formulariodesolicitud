import { InputKind, InputProps } from './input';
import { DesignSystemTheme } from '../../themes';
import { InputOverrides, SharedProps } from 'baseui/input';
export interface InputStyleParams {
    $isFocused: boolean;
    $error: boolean;
    $disabled: boolean;
    $positive: boolean;
    $theme: DesignSystemTheme;
    $kind?: InputKind;
    $hasIconTrailing?: boolean;
    $isBorderless?: boolean;
    $adjoined?: SharedProps['$adjoined'];
}
/**
 * Get the bottom border color for the Root component
 */
export declare const getBottomBorderColor: ({ $isFocused, $positive, $error, $disabled, $theme, $isBorderless, }: InputStyleParams) => string;
/**
 * Get the input base styles overrides by its "type" and "kind"
 */
export declare const getInputBaseOverrides: (type: InputProps["type"], kind: InputProps["kind"], $isBorderless: boolean, dataTestId?: string) => InputOverrides;
