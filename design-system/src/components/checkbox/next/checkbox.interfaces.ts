import type { WithTestId } from '@interfaces/common.interfaces';
import type { DesignSystemTheme } from '@themes/theme.interfaces';
import type { CheckboxProps as BaseWebCheckboxProps } from 'baseui/checkbox';

/**
 * Checkbox size variants
 */
export type CheckboxSize = 'small' | 'medium';

/**
 * Shared props for checkbox style overrides
 */
export interface SharedProps {
  $size: CheckboxSize;
  $isHovered?: boolean;
  $error: boolean;
  $disabled: boolean;
  $checked: boolean;
  $indeterminate: boolean;
  $isFocused: boolean;
}

/**
 * Props for the Checkbox component
 */
export interface CheckboxProps
  extends
    WithTestId,
    Omit<
      BaseWebCheckboxProps,
      'size' | 'checked' | 'indeterminate' | 'disabled' | 'error' | 'onChange' | 'value'
    > {
  /**
   * Size of the checkbox
   */
  size?: CheckboxSize;

  /**
   * Text label visible next to the checkbox
   */
  label?: string;

  /**
   * Controls if the checkbox is checked
   */
  checked: boolean;

  /**
   * Partial/mixed state (visual only)
   */
  indeterminate?: boolean;

  /**
   * Disables interaction and applies disabled styles
   */
  disabled?: boolean;

  /**
   * Marks the field as required
   */
  required?: boolean;

  /**
   * Applies error style and aria-invalid="true"
   */
  error?: boolean;

  /**
   * Value sent when checkbox is checked
   */
  value?: string;

  /**
   * Custom overrides for baseui checkbox
   */
  overrides?: BaseWebCheckboxProps['overrides'];

  /**
   * Callback fired when checkbox state changes
   * Does not fire if checkbox is disabled
   */
  onChange?(e: React.ChangeEvent<HTMLInputElement>): void;
}

/**
 * Props for checkbox style functions
 */
export type CheckboxStyleProps = {
  $theme: DesignSystemTheme;
} & SharedProps;

/**
 * Props for getCheckboxBaseOverrides function
 */
export type GetCheckboxBaseOverridesProps = {
  size?: CheckboxSize;
  isHovered: boolean;
  checked: boolean;
  indeterminate?: boolean;
  disabled?: boolean;
  error?: boolean;
  dataTestId?: string;
  onMouseEnter?(): void;
  onMouseLeave?(): void;
};
