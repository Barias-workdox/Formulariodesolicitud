import { DEFAULT_DATA_TEST_ID, DEFAULT_SIZE } from './checkbox.constants';
import { getCheckmarkStyles, getLabelStyles, getRootStyles } from './checkbox.styles';

import type { GetCheckboxBaseOverridesProps } from './checkbox.interfaces';
import type { CheckboxOverrides } from 'baseui/checkbox';
import type { StyleObject } from 'styletron-react';

/**
 * Get the base overrides for the checkbox component
 */
export const getCheckboxBaseOverrides = ({
  size = DEFAULT_SIZE,
  isHovered,
  checked,
  indeterminate = false,
  disabled = false,
  error = false,
  dataTestId = DEFAULT_DATA_TEST_ID,
  onMouseEnter,
  onMouseLeave,
}: GetCheckboxBaseOverridesProps): CheckboxOverrides => ({
  Root: {
    style: (props): StyleObject => {
      const rootStyles = getRootStyles({
        ...props,
        $isHovered: isHovered,
        $checked: checked,
        $indeterminate: indeterminate,
        $disabled: disabled,
        $error: error,
        $isFocused: props.$isFocused || false,
      });

      return rootStyles;
    },
    props: {
      'data-testid': dataTestId,
      onMouseEnter,
      onMouseLeave,
    },
  },
  Checkmark: {
    style: (props): StyleObject => {
      return getCheckmarkStyles({
        ...props,
        $size: size,
        $isHovered: isHovered,
        $checked: checked,
        $indeterminate: indeterminate,
        $disabled: disabled,
        $error: error,
        $isFocused: props.$isFocused || false,
      });
    },
    props: {
      'data-testid': `${dataTestId}--checkmark`,
    },
  },
  Label: {
    style: (props): StyleObject => {
      return getLabelStyles({
        ...props,
        $size: size,
        $isHovered: isHovered,
        $checked: checked,
        $indeterminate: indeterminate,
        $disabled: disabled,
        $error: error,
        $isFocused: props.$isFocused || false,
      });
    },
  },
  Input: {
    props: {
      'data-testid': `${dataTestId}--input`,
      'aria-invalid': error ? 'true' : undefined,
      'aria-required': undefined,
    },
  },
});
