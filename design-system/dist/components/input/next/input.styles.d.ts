import { SharedProps, Size } from './input.interfaces';
import { DesignSystemTheme, StyleOverrideProps } from '../../../themes/theme.interfaces';
import { StyleObject } from 'styletron-standard';
export declare const inputTransitionStyles: StyleObject;
/**
 * Get the size properties for the input and root components based on the provided size and theme.
 */
export declare const getSizeProperties: (size: Size, theme: DesignSystemTheme) => {
    input: StyleObject;
    root: StyleObject;
};
/**
 * Get the bottom border color for the Root component
 */
export declare const getBorderWidth: ({ $isFocused, $error, $disabled, }: Partial<SharedProps>) => StyleObject["borderWidth"];
/**
 * Get the bottom border color for the Root component
 */
export declare const getBorderColor: ({ $isFocused, $isHovered, $kind, $positive, $error, $disabled, $theme, }: Partial<SharedProps> & {
    $theme: DesignSystemTheme;
}) => string;
/**
 * Get the background color for the Root component
 */
export declare const getKindBackgroundColor: ({ $theme, $kind, $isFocused, $isReadOnly, $disabled, }: Partial<SharedProps> & {
    $theme: DesignSystemTheme;
}) => string;
/**
 * Styles for the Root overrides
 */
export declare const getInputRootStyles: ({ $isFocused, $error, $positive, $disabled, $theme, $kind, $size, $isHovered, $withStartEnhancer, $width, $isReadOnly, }: StyleOverrideProps<SharedProps>) => StyleObject;
/**
 * Get the styles for the input component overrides
 */
export declare const getInputStyle: ({ $theme, $size, $isReadOnly, $disabled, }: StyleOverrideProps<SharedProps>) => StyleObject;
