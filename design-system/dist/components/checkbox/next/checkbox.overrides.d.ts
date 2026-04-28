import { GetCheckboxBaseOverridesProps } from './checkbox.interfaces';
import { CheckboxOverrides } from 'baseui/checkbox';
/**
 * Get the base overrides for the checkbox component
 */
export declare const getCheckboxBaseOverrides: ({ size, isHovered, checked, indeterminate, disabled, error, dataTestId, onMouseEnter, onMouseLeave, }: GetCheckboxBaseOverridesProps) => CheckboxOverrides;
