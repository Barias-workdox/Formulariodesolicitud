import { SharedProps } from './checkbox.interfaces';
import { StyleOverrideProps } from '../../../themes/theme.interfaces';
import { StyleObject } from 'styletron-react';
/**
 * Styles for the Checkmark component
 */
export declare const getCheckmarkStyles: ({ $size, $checked, $indeterminate, $disabled, $error, $isFocused, $isHovered, $theme, }: StyleOverrideProps<SharedProps>) => StyleObject;
/**
 * Styles for the Label component
 */
export declare const getLabelStyles: ({ $size, $disabled, $error, $theme, }: StyleOverrideProps<SharedProps>) => StyleObject;
/**
 * Styles for the Root component
 */
export declare const getRootStyles: ({ $disabled }: StyleOverrideProps<SharedProps>) => StyleObject;
/**
 * Styled component for the required asterisk indicator
 */
export declare const StyledRequiredIndicator: import('styletron-react').StyletronComponent<"span", {}>;
