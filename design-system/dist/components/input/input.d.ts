import { ReactElement } from 'react';
import { InputStyleParams } from './input.styles';
import { DesignSystemTheme } from '../../themes';
import { CommonInputKind } from '../../interfaces/common.interfaces';
import { InputProps as BaseInputProps } from 'baseui/input';
import { StyleObject } from 'styletron-standard';
export type InputKind = CommonInputKind;
export type InputProps = BaseInputProps & {
    'data-testid'?: string;
    kind?: InputKind;
    isBorderless?: boolean;
};
interface InputKindProps {
    $theme: DesignSystemTheme;
    $kind: InputKind;
    $isBorderless?: boolean;
    $readOnly?: boolean;
    $isFocused?: boolean;
}
/**
 * Get the background color for the Root component
 */
export declare const getKindBackgroundColor: (kind: InputKind, theme: DesignSystemTheme, $isFocused?: boolean) => string;
/**
 * Styles for the Root overrides
 */
export declare const getRootStyles: ({ $isFocused, $error, $positive, $disabled, $theme, $kind, $isBorderless, $adjoined, }: InputStyleParams) => StyleObject;
/**
 * Get the styles for the input component overrides
 */
export declare const getInputStyle: ({ $theme, $kind, $isBorderless, $readOnly, $isFocused, }: InputKindProps) => StyleObject;
/**
 * Input override component styled with the theme based on the kind of the input
 */
export declare const StyledInput: import('styletron-react').StyletronComponent<"input", InputKindProps & import('baseui/input').SharedProps>;
/**
 * Root override component styled with the theme based on the kind of the input
 */
export declare const StyledRoot: import('styletron-react').StyletronComponent<"div", import('baseui/input').SharedProps>;
/**
 * Input field component for forms.
 * Can be customized by the "kind" property. Possible kinds are "white" and "gray", "gray" is the default value.
 * Also, can be used with no borders by setting the prop `isBorderless`.
 * Its styled components; StyledRoot and StyledInput are used to construct other components as "Select", "Textarea" and "DatePicker".
 */
export declare const Input: ({ "data-testid": dataTestId, kind, id, name, endEnhancer, positive, error, type, overrides, isBorderless, onClear, ...rest }: InputProps) => ReactElement;
export {};
