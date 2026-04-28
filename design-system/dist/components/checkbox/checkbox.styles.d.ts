import { StyleOverrideProps } from '../../themes';
import { CheckboxOverrides } from 'baseui/checkbox';
import { StyleObject } from 'styletron-react';
/**
 * Custom overrides styles for the checkbox component
 */
export declare const checkmarkStyleOverrides: ({ $isFocused, $isHovered, $theme, }: StyleOverrideProps) => StyleObject;
/** Custom overrides styles for the checkbox component  */
export declare const checkboxOverridesStyles: ({ dataTestId, labelAsFormControl, overrides, }: {
    dataTestId: string;
    labelAsFormControl: boolean;
    overrides: CheckboxOverrides;
}) => CheckboxOverrides;
