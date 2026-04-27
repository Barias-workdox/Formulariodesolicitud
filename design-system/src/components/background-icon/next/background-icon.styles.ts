import { themedStyled } from '@themes/utilities';

import type { StyledIconProps, StyledRootProps } from './background-icon.interfaces';

/**
 * Styled root container for the BackgroundIcon component.
 * Handles size, shape, background color, and disabled states.
 */
export const StyledRoot = themedStyled<'div', StyledRootProps>(
  'div',
  ({ $backgroundColor, $disabled, $shape, $size, $theme }) => ({
    position: 'relative',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    width: $size,
    height: $size,
    backgroundColor: $disabled
      ? $theme.colors.neutralSubtle
      : $theme.colors[$backgroundColor as keyof typeof $theme.colors],
    borderRadius: $shape === 'round' ? $theme.borders.borderCircle : $theme.borders.borderSm,
    boxSizing: 'border-box',
    minWidth: $size,
    minHeight: $size,
  }),
);

/**
 * Styled wrapper for the icon element.
 * Handles icon color and disabled states.
 */
export const StyledIconWrapper = themedStyled<'span', StyledIconProps>(
  'span',
  ({ $iconColor, $disabled, $theme }) => ({
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: $disabled
      ? $theme.colors.neutralSubdued
      : $theme.colors[$iconColor as keyof typeof $theme.colors],
  }),
);
