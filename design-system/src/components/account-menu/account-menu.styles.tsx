import { themedStyled } from '@themes/utilities';

import { ACCOUNT_MENU_MAX_WIDTH, ACCOUNT_MENU_MIN_WIDTH } from './account-menu.constants';

import type { PopoverOverrides } from 'baseui/popover';
import type { StyleObject } from 'styletron-react';

export const StyledMenuContainer = themedStyled(
  'div',
  ({ $theme }): StyleObject => ({
    minWidth: ACCOUNT_MENU_MIN_WIDTH,
    maxWidth: ACCOUNT_MENU_MAX_WIDTH,
    width: 'max-content',
    backgroundColor: $theme.colors.bgBase,
    borderRadius: $theme.borders.borderSm,
    border: `1px solid ${$theme.colors.neutralSubtle}`,
    boxShadow: '0px 6px 12px 0px rgba(26, 26, 26, 0.06), 0px 12px 24px 0px rgba(26, 26, 26, 0.06)',
    overflow: 'visible',
    position: 'relative',
  }),
);

export const StyledMenuSection = themedStyled(
  'div',
  (): StyleObject => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
  }),
);

/**
 * Returns the overrides for the popover component.
 */
export const popoverOverrides: PopoverOverrides = {
  Inner: {
    style: (): StyleObject => ({
      overflow: 'visible',
    }),
  },
  Body: {
    style: ({ $theme }): StyleObject => ({
      backgroundColor: $theme.colors.bgBase,
      borderRadius: $theme.borders.borderSm,
      border: `1px solid ${$theme.colors.neutralSubtle}`,
      boxShadow:
        '0px 6px 12px 0px rgba(26, 26, 26, 0.06), 0px 12px 24px 0px rgba(26, 26, 26, 0.06)',
      overflow: 'visible',
      overflowY: 'auto',
    }),
  },
};
