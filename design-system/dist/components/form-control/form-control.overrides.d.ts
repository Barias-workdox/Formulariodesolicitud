import { FormControlProps } from './form-control';
import { FormControlOverrides } from 'baseui/form-control';
type GetFormControlBaseOverridesParams = Pick<FormControlProps, 'currentCharactersQuantity' | 'infoTooltip' | 'labelWithHorizontalPadding' | 'maxLength' | 'showCharacterCounter' | 'customOverrides' | 'zIndex' | 'required'>;
/**
 * Returns overrides for the `FormControl` component to customize its appearance and behavior.
 */
export declare const getFormControlBaseOverrides: ({ currentCharactersQuantity, infoTooltip, labelWithHorizontalPadding, maxLength, showCharacterCounter, customOverrides, zIndex, required, }: GetFormControlBaseOverridesParams) => FormControlOverrides;
/**
 * Removes margins from parts of the `FormControl` component to achieve a more compact appearance.
 * This is particularly useful in layouts where space is at a premium or when a denser UI is desired.
 */
export declare const noExternalMarginOverrides: FormControlOverrides;
export {};
