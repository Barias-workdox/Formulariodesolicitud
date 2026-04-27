import { BASE_INPUT_HEIGHTS } from '@constants/common.constants';
import { DEFAULT_FONT } from '@tokens';

import { DEFAULT_INPUT_WIDTH, DEFAULT_KIND, DEFAULT_SIZE } from './input.constants';

import type { SharedProps, Size } from './input.interfaces';
import type { DesignSystemTheme, StyleOverrideProps } from '@themes/theme.interfaces';
import type { StyleObject } from 'styletron-standard';

export const inputTransitionStyles: StyleObject = {
  transition: 'background-color .1s ease-in-out',
};

/**
 * Get the cursor style based on the input state.
 */
const getCursorStyle = ({
  $disabled,
  $isReadOnly,
}: Partial<SharedProps>): StyleObject['cursor'] => {
  if ($disabled) {
    return 'not-allowed';
  }

  if ($isReadOnly) {
    return 'default';
  }

  return 'text';
};

/**
 * Get the size properties for the input and root components based on the provided size and theme.
 */
export const getSizeProperties = (
  size: Size,
  theme: DesignSystemTheme,
): { input: StyleObject; root: StyleObject } => {
  const rootSm: StyleObject = {
    paddingLeft: theme.spacing?.spacingXs,
    paddingRight: theme.spacing?.spacingXs,
  };

  const rootMd: StyleObject = {
    paddingLeft: theme.spacing?.spacingMd,
    paddingRight: theme.spacing?.spacingMd,
  };

  const inputSm: StyleObject = {
    ...theme.typography.ParagraphSmall,
    minHeight: BASE_INPUT_HEIGHTS.sm,
    height: 'auto',
    paddingTop: theme.spacing.spacing2xs,
    paddingBottom: theme.spacing.spacing2xs,
  };

  const inputMd: StyleObject = {
    ...theme.typography.ParagraphMedium,
    minHeight: BASE_INPUT_HEIGHTS.md,
    height: 'auto',
    paddingTop: theme.spacing.spacingXs,
    paddingBottom: theme.spacing.spacingXs,
  };

  const rootStylesBySize: Record<Size, StyleObject> = {
    sm: rootSm,
    md: rootMd,
  };

  const inputStylesBySize: Record<Size, StyleObject> = {
    sm: inputSm,
    md: inputMd,
  };

  return {
    root: rootStylesBySize[size] ?? rootMd,
    input: inputStylesBySize[size] ?? inputMd,
  };
};

/**
 * Get the bottom border color for the Root component
 */
export const getBorderWidth = ({
  $isFocused,
  $error,
  $disabled,
}: Partial<SharedProps>): StyleObject['borderWidth'] => {
  if (($isFocused || $error) && !$disabled) {
    return '2px';
  }

  return '1px';
};

/**
 * Get the bottom border color for the Root component
 */
export const getBorderColor = ({
  $isFocused,
  $isHovered,
  $kind,
  $positive,
  $error,
  $disabled,
  $theme,
}: Partial<SharedProps> & { $theme: DesignSystemTheme }): string => {
  if ($disabled) {
    return $theme.colors.neutralSubtle;
  }

  if ($error) {
    return $theme.colors.negativeSubdued;
  }

  if ($positive) {
    return $theme.colors.positiveSubdued;
  }

  if ($isFocused) {
    return $theme.colors.neutralStrong;
  }

  if ($isHovered) {
    return $theme.colors.neutralStrong;
  }

  if ($kind === 'white') {
    return $theme.colors.neutralSubtle;
  }

  return $theme.colors.neutralSubtle;
};

/**
 * Get the background color for the Root component
 */
export const getKindBackgroundColor = ({
  $theme,
  $kind,
  $isFocused,
  $isReadOnly,
  $disabled,
}: Partial<SharedProps> & {
  $theme: DesignSystemTheme;
}): string => {
  if ($disabled) {
    return $theme.colors.neutralWashed;
  }

  if ($isReadOnly) {
    return $theme.colors.neutralBase;
  }

  if ($kind === 'white' || $isFocused) {
    return $theme.colors.bgBase;
  }

  return $theme.colors.neutralBase;
};

/**
 * Styles for the Root overrides
 */
export const getInputRootStyles = ({
  $isFocused = false,
  $error = false,
  $positive = false,
  $disabled = false,
  $theme,
  $kind = DEFAULT_KIND,
  $size = DEFAULT_SIZE,
  $isHovered,
  $withStartEnhancer,
  $width = DEFAULT_INPUT_WIDTH,
  $isReadOnly,
}: StyleOverrideProps<SharedProps>): StyleObject => ({
  ...getSizeProperties($size, $theme).root,
  ...($withStartEnhancer && { paddingLeft: 0 }),
  ...(!$isFocused && inputTransitionStyles),
  borderRadius: $theme.borders.borderSm,
  backgroundColor: getKindBackgroundColor({ $kind, $theme, $isFocused, $isReadOnly, $disabled }),
  border: 'none',
  position: 'relative',
  outline: $isReadOnly ? 'none' : 'solid',
  outlineWidth: `${getBorderWidth({ $isFocused, $error, $disabled })} !important`,
  outlineColor: getBorderColor({
    $isFocused,
    $isHovered,
    $error,
    $kind,
    $positive,
    $disabled,
    $theme,
    $isReadOnly,
  }),
  gap: $theme.spacing.spacingXs,
  width: $width,
  cursor: getCursorStyle({ $disabled, $isReadOnly }),
});

/**
 * Get the styles for the input component overrides
 */
export const getInputStyle = ({
  $theme,
  $size,
  $isReadOnly,
  $disabled,
}: StyleOverrideProps<SharedProps>): StyleObject => ({
  ...getSizeProperties($size, $theme).input,
  width: '100%',
  color: $theme.colors.neutralStrong,
  ...DEFAULT_FONT,
  cursor: getCursorStyle({ $disabled, $isReadOnly }),
  pointerEvents: $isReadOnly ? 'none' : 'auto',
  lineHeight: 1,
  ':disabled': {
    backgroundColor: 'transparent',
    color: $theme.colors.neutralDepressed,
  },
  '::placeholder': {
    color: $theme.colors.neutralSubdued,
  },
});
