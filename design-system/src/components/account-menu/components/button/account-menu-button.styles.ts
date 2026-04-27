import { themedStyled } from '@themes/utilities';

import type { StyleObject } from 'styletron-react';

type StyledButtonProps = {
  $isActive: boolean;
  $isHovered: boolean;
  $isDisabled: boolean;
  $isTriggerButton: boolean;
};

/**
 * Styled components for the AccountMenuButton component
 */
export const StyledAccountMenuButton = themedStyled<'button', StyledButtonProps>(
  'button',
  ({ $theme, $isActive, $isHovered, $isDisabled, $isTriggerButton }): StyleObject => ({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: '32px',
    textDecoration: 'none',
    border: 'none',
    background: 'none',
    cursor: 'pointer',
    padding: $isTriggerButton
      ? `0px ${$theme.spacing.spacingXs} 0px 0px`
      : `0px ${$theme.spacing.spacingXs}`,
    color: $theme.colors.neutral,
    backgroundColor: $theme.colors.transparent,
    transition: `background-color 0.15s ease-out, color 0.15s ease-out`,
    width: '100%',
    borderRadius: $isTriggerButton ? $theme.borders.borderSm : '0px',
    ...(($isHovered || $isActive) && {
      backgroundColor: $theme.colors.neutralBase,
      color: $theme.colors.neutralMedium,
      fontWeight: 500,
    }),
    ...($isDisabled && {
      opacity: 0.5,
      pointerEvents: 'auto',
      cursor: 'not-allowed',
    }),
    ':focus-within': {
      outlineOffset: '-2px',
      outline: `2px solid ${$theme.colors.neutral}`,
    },
    ':focus': {
      outlineOffset: '-2px',
      outline: `2px solid ${$theme.colors.neutral}`,
    },
    ':focus-visible': {
      outlineOffset: '-2px',
      outline: `2px solid ${$theme.colors.neutral}`,
    },
  }),
);

export const StyledEndEnhancer = themedStyled(
  'div',
  (): StyleObject => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 'auto',
    color: 'inherit',
  }),
);

export const StyledAccountMenuButtonTitle = themedStyled(
  'div',
  (): StyleObject => ({
    display: 'flex',
    flexDirection: 'row',
  }),
);
