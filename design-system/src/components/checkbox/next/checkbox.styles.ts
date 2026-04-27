import { themedStyled } from '@themes/utilities';
import { DEFAULT_FONT } from '@tokens';

import type { CheckboxStyleProps, SharedProps } from './checkbox.interfaces';
import type { StyleOverrideProps } from '@themes/theme.interfaces';
import type { StyleObject } from 'styletron-react';

/**
 * Get the background color for the checkbox based on its state
 */
const getCheckboxBackgroundColor = ({
  $checked,
  $indeterminate,
  $disabled,
  $isHovered,
  $theme,
}: CheckboxStyleProps): string => {
  if ($disabled) {
    return $checked || $indeterminate ? $theme.colors.neutralWashed : $theme.colors.bgBase;
  }

  if ($checked || $indeterminate) {
    return $theme.colors.brand;
  }

  if ($isHovered) {
    return $theme.colors.neutralBase;
  }

  return $theme.colors.bgBase;
};

/**
 * Get the border color for the checkbox based on its state
 */
const getCheckboxBorderColor = ({
  $checked,
  $indeterminate,
  $disabled,
  $theme,
}: CheckboxStyleProps): string => {
  if ($disabled) {
    return $theme.colors.neutralSubtle;
  }

  if ($checked || $indeterminate) {
    return $theme.colors.brand;
  }

  return $theme.colors.neutral;
};

/**
 * Get the label text color
 */
const getLabelColor = ({ $disabled, $theme }: CheckboxStyleProps): string => {
  if ($disabled) {
    return $theme.colors.neutralDepressed;
  }

  return $theme.colors.neutral;
};

const OUTLINE_WIDTH = '3px';
const OUTLINE_OFFSET = '2px';

/**
 * Build outline styles for focus/error rings with shared metrics
 */
const buildOutlineStyles = (color: string): StyleObject => ({
  outline: `${OUTLINE_WIDTH} solid ${color}`,
  outlineOffset: OUTLINE_OFFSET,
});

/**
 * Get error outline styles (permanent when error is true)
 */
const getErrorOutlineStyles = ({ $error, $disabled, $theme }: CheckboxStyleProps): StyleObject => {
  if (!$error || $disabled) {
    return {};
  }

  return buildOutlineStyles($theme.colors.negative);
};

/**
 * Get focus ring styles
 */
const getFocusRingStyles = ({
  $isFocused,
  $disabled,
  $error,
  $theme,
}: CheckboxStyleProps): StyleObject => {
  if (!$isFocused || $disabled || $error) {
    return {};
  }

  return buildOutlineStyles($theme.colors.neutral);
};

/**
 * Get box shadow for hover state
 */
const getCheckboxBoxShadow = ({
  $checked,
  $indeterminate,
  $disabled,
  $isHovered,
  $theme,
}: CheckboxStyleProps): string | undefined => {
  if (!$isHovered || $disabled) {
    return;
  }

  if ($checked || $indeterminate) {
    return `0 0 0 2px ${$theme.colors.brandWashed}`;
  }

  return `0 0 0 2px ${$theme.colors.neutralBase}`;
};

/**
 * Styles for the Checkmark component
 */
export const getCheckmarkStyles = ({
  $size,
  $checked,
  $indeterminate,
  $disabled,
  $error,
  $isFocused,
  $isHovered,
  $theme,
}: StyleOverrideProps<SharedProps>): StyleObject => {
  const checkboxSize = '12px';

  const boxShadow = getCheckboxBoxShadow({
    $size,
    $checked,
    $indeterminate,
    $disabled,
    $error,
    $isFocused,
    $isHovered,
    $theme,
  });

  return {
    width: checkboxSize,
    height: checkboxSize,
    borderWidth: '1px',
    borderColor: getCheckboxBorderColor({
      $size,
      $checked,
      $indeterminate,
      $disabled,
      $error,
      $isFocused,
      $theme,
    }),
    backgroundColor: getCheckboxBackgroundColor({
      $size,
      $checked,
      $indeterminate,
      $disabled,
      $error,
      $isFocused,
      $isHovered,
      $theme,
    }),
    borderRadius: $theme.borders.borderSm,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: $disabled ? 'not-allowed' : 'pointer',
    ...(boxShadow && { boxShadow }),
    ...getErrorOutlineStyles({
      $size,
      $checked,
      $indeterminate,
      $disabled,
      $error,
      $isFocused,
      $isHovered,
      $theme,
    }),
    ...getFocusRingStyles({
      $size,
      $checked,
      $indeterminate,
      $disabled,
      $error,
      $isFocused,
      $isHovered,
      $theme,
    }),
  };
};

/**
 * Styles for the Label component
 */
export const getLabelStyles = ({
  $size = 'medium',
  $disabled,
  $error,
  $theme,
}: StyleOverrideProps<SharedProps>): StyleObject => {
  const typography =
    $size === 'small' ? $theme.typography.ParagraphSmall : $theme.typography.ParagraphMedium;

  return {
    ...typography,
    ...DEFAULT_FONT,
    color: getLabelColor({
      $size,
      $checked: false,
      $indeterminate: false,
      $disabled,
      $error,
      $isFocused: false,
      $isHovered: false,
      $theme,
    }),
    paddingLeft: $theme.spacing.spacing2xs,
    margin: 0,
    cursor: $disabled ? 'not-allowed' : 'pointer',
    userSelect: 'none',
    wordBreak: 'break-word',
  };
};

/**
 * Styles for the Root component
 */
export const getRootStyles = ({ $disabled }: StyleOverrideProps<SharedProps>): StyleObject => ({
  display: 'flex',
  alignItems: 'center',
  cursor: $disabled ? 'not-allowed' : 'pointer',
  outline: 'none',
});

/**
 * Styled component for the required asterisk indicator
 */
export const StyledRequiredIndicator = themedStyled('span', ({ $theme }) => ({
  marginLeft: $theme.spacing.spacing2xs,
  color: 'inherit',
}));
