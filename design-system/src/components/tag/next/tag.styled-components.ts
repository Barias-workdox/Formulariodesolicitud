import { Text } from '@components/text';
import { themedStyled } from '@themes/utilities';

import {
  ELLIPSIS_THRESHOLD,
  MAP_BORDER,
  MAP_COLORS,
  MAP_ICON_COLOR,
  MAP_SHAPE,
  MAP_SIZE,
} from './tag.constants';

import type { SharedTagProps, TagKind, TagVariant } from './tag.interfaces';
import type { DesignSystemTheme } from '@themes/theme.interfaces';
import type { StyleObject } from 'styletron-react';

/**
 * Return background style using background or backgroundColor depending on the token value.
 */
const backgroundFromToken = (
  $theme: DesignSystemTheme,
  token: keyof DesignSystemTheme['colors'],
): StyleObject => {
  const value = $theme.colors[token];
  if (!value) return {};

  return value.includes('gradient') ? { background: value } : { backgroundColor: value };
};

/**
 * Check if kind and variant are both defined
 * Returns a tuple with narrowed types when both are defined
 */
const hasKindAndVariant = (
  $kind: TagKind | undefined,
  $variant: TagVariant | undefined,
): $kind is TagKind => typeof $kind !== 'undefined' && typeof $variant !== 'undefined';

/**
 * Get disabled state styles
 */
const getDisabledStyles = (
  $theme: DesignSystemTheme,
  $variant: TagVariant | undefined,
): StyleObject => {
  if ($variant === 'outlined') {
    return {
      backgroundColor: $theme.colors.bgBase,
      color: $theme.colors.neutralDepressed,
      borderColor: $theme.colors.neutralSubtle,
    };
  }

  return {
    backgroundColor: $theme.colors.neutralSubtle,
    color: $theme.colors.neutralDepressed,
  };
};

/**
 * Get default color attributes for enabled state
 */
const getDefaultColors = (
  $theme: DesignSystemTheme,
  $kind: TagKind,
  $variant: TagVariant,
): StyleObject => ({
  ...backgroundFromToken($theme, MAP_COLORS[$kind][$variant].default.backgroundColor),
  color: $theme.colors[MAP_COLORS[$kind][$variant].default.color],
  borderColor: $theme.colors[MAP_COLORS[$kind][$variant].default.borderColor],
});

/**
 * Get the color attributes based on the kind and variant
 */
const getAttributes = (
  $theme: DesignSystemTheme,
  { $kind, $variant, $size, $shape, $disabled }: SharedTagProps,
): StyleObject => {
  const hasValidKindAndVariant =
    hasKindAndVariant($kind, $variant) && typeof $variant !== 'undefined';

  return {
    ...($size ? MAP_SIZE[$size] : {}),
    ...($shape && $size ? MAP_SHAPE[$shape][$size] : {}),
    ...($variant ? MAP_BORDER[$variant] : {}),
    ...($disabled
      ? getDisabledStyles($theme, $variant)
      : hasValidKindAndVariant && $kind && $variant
        ? getDefaultColors($theme, $kind, $variant)
        : {}),
  };
};

/**
 * Get hover state styles
 */
const getHoverStyles = (
  $theme: DesignSystemTheme,
  $kind: TagKind | undefined,
  $variant: TagVariant | undefined,
): StyleObject => {
  if (!hasKindAndVariant($kind, $variant) || !$variant) {
    return {};
  }

  return {
    ...backgroundFromToken($theme, MAP_COLORS[$kind][$variant].hover.backgroundColor),
    borderColor: $theme.colors[MAP_COLORS[$kind][$variant].hover.borderColor],
  };
};

/**
 * Get focus state styles
 */
const getFocusStyles = (
  $theme: DesignSystemTheme,
  $kind: TagKind | undefined,
  $variant: TagVariant | undefined,
): StyleObject => {
  if (!hasKindAndVariant($kind, $variant) || !$variant) {
    return { outline: 'none' };
  }

  const borderColor = $theme.colors[MAP_COLORS[$kind][$variant].focus.borderColor];

  return {
    ...backgroundFromToken($theme, MAP_COLORS[$kind][$variant].focus.backgroundColor),
    borderColor,
    boxShadow: `0 0 0 2px ${borderColor}`,
    outline: 'none',
  };
};

export const StyledTag = themedStyled<'div', SharedTagProps>('div', ({ $theme, ...props }) => ({
  ...getAttributes($theme, props),
  width: 'max-content',
  maxWidth: '100%',
  display: 'inline-flex',
  alignItems: 'center',
  padding: `0 ${$theme.spacing.spacingXs}`,
  boxSizing: 'border-box',
  ...(props.$clickable && !props.$disabled ? { cursor: 'pointer' } : {}),
  // Interactive states (only when not disabled and clickable)
  ...(props.$disabled || !props.$clickable
    ? {}
    : {
        ':hover': getHoverStyles($theme, props.$kind, props.$variant),
        ':focus-visible': getFocusStyles($theme, props.$kind, props.$variant),
      }),
}));

/**
 * Get icon color based on kind
 */
const getIconColor = ($theme: DesignSystemTheme, $kind: TagKind | undefined): string | undefined =>
  $kind ? $theme.colors[MAP_ICON_COLOR[$kind]] : undefined;

export const StyledIconWrapper = themedStyled<'div', SharedTagProps>(
  'div',
  ({ $theme, $kind, $disabled }) => {
    const iconColor = getIconColor($theme, $kind);

    return {
      display: 'flex',
      alignItems: 'center',
      ...($disabled
        ? { color: $theme.colors.neutralDepressed }
        : {
            ...(iconColor ? { color: iconColor } : {}),
            cursor: 'pointer',
            ':hover': iconColor ? { color: iconColor } : {},
            ':focus-visible': {
              outline: 'none',
              ...(iconColor ? { color: iconColor } : {}),
            },
          }),
    };
  },
);

export const StyledTagEllipsisText = themedStyled(Text, {
  maxWidth: `${ELLIPSIS_THRESHOLD}px`,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  display: 'inline-block',
});

export const StyledActionButton = themedStyled<'button', SharedTagProps>(
  'button',
  ({ $theme, $kind, $variant }) => {
    const iconColor = getIconColor($theme, $kind);
    const hasValidKindAndVariant =
      hasKindAndVariant($kind, $variant) && typeof $variant !== 'undefined';

    return {
      display: 'flex',
      alignItems: 'center',
      backgroundColor: 'transparent',
      border: 'none',
      padding: 0,
      ...(iconColor ? { color: iconColor } : {}),
      cursor: 'pointer',
      ':hover': iconColor ? { color: iconColor } : {},
      ':focus-visible': {
        outline: 'none',
        borderRadius: $theme.borders.borderMd,
        ...(hasValidKindAndVariant && $kind && $variant
          ? {
              color: iconColor,
              boxShadow: `0 0 0 2px ${$theme.colors[MAP_COLORS[$kind][$variant].focus.borderColor]}`,
            }
          : {}),
      },
      ':disabled': {
        color: $theme.colors.neutralDepressed,
        cursor: 'not-allowed',
      },
    };
  },
);
