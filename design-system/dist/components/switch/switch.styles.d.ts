import { DesignSystemTheme } from '../../themes';
import { CheckboxOverrides } from 'baseui/checkbox';
import { StyleObject } from 'styletron-react';
/**
 * Generates the style overrides for a checkbox component based on the
 * provided theme and checked status.
 */
export declare const checkboxOverridesStyles: (theme: DesignSystemTheme, checked: boolean, disabled: boolean) => CheckboxOverrides;
export declare const styles: {
    containerStyles: StyleObject;
};
