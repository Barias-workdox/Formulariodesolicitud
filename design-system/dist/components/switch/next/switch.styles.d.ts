import { SwitchOverridesParams } from './switch.interface';
import { CheckboxOverrides } from 'baseui/checkbox';
/**
 * Generates the overrides for a switch component based on the
 * provided checked status and accessibility props.
 */
export declare const switchOverrides: ({ checked, disabled, handleToggle, dataTestId, ariaDescribedBy, ariaLabelledBy, ariaLabel, labelPlacement, }: SwitchOverridesParams) => CheckboxOverrides;
