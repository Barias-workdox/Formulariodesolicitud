import { useCallback, useMemo, useState } from 'react';
import type { ReactElement } from 'react';

import { mergeOverrides } from 'baseui';
import { Checkbox as BaseWebCheckbox, LABEL_PLACEMENT } from 'baseui/checkbox';

import { DEFAULT_DATA_TEST_ID, DEFAULT_SIZE } from './checkbox.constants';
import { getCheckboxBaseOverrides } from './checkbox.overrides';
import { StyledRequiredIndicator } from './checkbox.styles';

import type { CheckboxProps } from './checkbox.interfaces';

/* eslint-disable tsdoc/syntax -- TSDoc doesn't support props with hyphens, but jsdoc/check-param-names requires them */
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
export const Checkbox = ({
  'data-testid': legacyDataTestId,
  dataTestId = legacyDataTestId ?? DEFAULT_DATA_TEST_ID,
  size = DEFAULT_SIZE,
  label,
  checked,
  indeterminate = false,
  disabled = false,
  required = false,
  error = false,
  value = 'on',
  onChange,
  overrides,
  ...rest
}: CheckboxProps): ReactElement => {
  const [isHovered, setIsHovered] = useState(false);

  /**
   * Handles mouse enter event to set hover state
   */
  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  /**
   * Handles mouse leave event to clear hover state
   */
  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
  }, []);

  /**
   * Computes base overrides for the checkbox based on current state
   * Includes styling for size, hover, checked, indeterminate, disabled, and error states
   */
  const baseOverrides = useMemo(
    () =>
      getCheckboxBaseOverrides({
        size,
        isHovered,
        checked,
        indeterminate,
        disabled,
        error,
        dataTestId,
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave,
      }),
    [
      size,
      isHovered,
      checked,
      indeterminate,
      disabled,
      error,
      dataTestId,
      handleMouseEnter,
      handleMouseLeave,
    ],
  );

  /**
   * Merges base overrides with custom overrides provided via props
   * Returns custom overrides if provided, otherwise returns base overrides
   */
  const mergedOverrides = useMemo(
    () => (overrides ? mergeOverrides(baseOverrides, overrides) : baseOverrides),
    [baseOverrides, overrides],
  );

  /**
   * Generates label content with optional required indicator
   * Returns null if no label is provided, otherwise returns label with asterisk if required
   */
  const labelContent = useMemo(() => {
    if (!label) return null;

    return required ? (
      <>
        {label}
        <StyledRequiredIndicator>*</StyledRequiredIndicator>
      </>
    ) : (
      label
    );
  }, [label, required]);

  return (
    <BaseWebCheckbox
      {...rest}
      checked={checked}
      isIndeterminate={indeterminate}
      disabled={disabled}
      error={error}
      value={value}
      onChange={onChange}
      labelPlacement={LABEL_PLACEMENT.right}
      overrides={mergedOverrides}
      aria-label={label || 'checkbox'}
      aria-required={required}
    >
      {labelContent}
    </BaseWebCheckbox>
  );
};
/* eslint-enable tsdoc/syntax */
