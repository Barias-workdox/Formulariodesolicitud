import { ReactElement } from 'react';
import { CheckboxProps } from './checkbox.interfaces';
/**
 * Checkbox component with custom styling and states
 *
 * Supports:
 * - Size variants: small, medium
 * - States: default, hover, focus, checked, indeterminate, disabled, error
 * - Accessibility: proper ARIA attributes
 *
 * @param props - Checkbox component props
 * @param props.'data-testid' - Legacy test ID prop (deprecated, prefer dataTestId)
 * @param props.dataTestId - Test ID for the checkbox component
 * @param props.size - Size of the checkbox
 * @param props.label - Text label visible next to the checkbox
 * @param props.checked - Controls if the checkbox is checked
 * @param props.indeterminate - Partial/mixed state (visual only)
 * @param props.disabled - Disables interaction and applies disabled styles
 * @param props.required - Marks the field as required
 * @param props.error - Applies error style and aria-invalid="true"
 * @param props.value - Value sent when checkbox is checked
 * @param props.onChange - Callback fired when checkbox state changes
 * @param props.overrides - Custom overrides for baseui checkbox
 * @returns The rendered checkbox component
 */
export declare const Checkbox: ({ "data-testid": legacyDataTestId, dataTestId, size, label, checked, indeterminate, disabled, required, error, value, onChange, overrides, ...rest }: CheckboxProps) => ReactElement;
