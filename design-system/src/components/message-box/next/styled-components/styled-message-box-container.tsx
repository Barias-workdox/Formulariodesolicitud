import { themedStyled } from '@themes/utilities';

import { DEFAULT_BORDER_WIDTH, FOCUS_BORDER_WIDTH } from '../message-box.constants';

import type { SharedProps } from '../message-box.interfaces';
import type { DesignSystemTheme } from '@themes/theme.interfaces';
import type { StyleObject } from 'styletron-react';

/**
 * Get the outline width for the Root component
 */
export const getOutlineWidth = ({
  $isFocused,
  $disabled,
}: Partial<SharedProps>): StyleObject['outlineWidth'] => {
  if ($isFocused && !$disabled) {
    return FOCUS_BORDER_WIDTH;
  }

  return DEFAULT_BORDER_WIDTH;
};

/**
 * Get the outline color for the Root component
 */
export const getOutlineColor = ({
  $isFocused,
  $isHovered,
  $theme,
}: Partial<SharedProps> & { $theme: DesignSystemTheme }): string => {
  if ($isFocused || $isHovered) {
    return $theme.colors.neutralStrong;
  }

  return $theme.colors.neutralSubtle;
};

export const StyledMessageBoxContainer = themedStyled<'div', SharedProps>(
  'div',
  ({ $theme, $isHovered, $isFocused, $disabled, $variant = 'default' }) => ({
    backgroundColor: $disabled ? $theme.colors.neutralWashed : $theme.colors.bgBase,
    border: 'none',
    borderRadius: $theme.spacing.spacingXs,
    cursor: $disabled ? 'not-allowed' : 'text',
    display: 'flex',
    flexDirection: 'column',
    outline: $disabled ? 'none' : 'solid',
    outlineColor: getOutlineColor({ $isFocused, $disabled, $theme, $isHovered }),
    outlineWidth: getOutlineWidth({ $isFocused, $disabled }),
    overflowY: 'hidden',
    position: 'relative',
    width: '100%',
    ...($variant === 'compact' && {
      flexDirection: 'row',
    }),
  }),
);
