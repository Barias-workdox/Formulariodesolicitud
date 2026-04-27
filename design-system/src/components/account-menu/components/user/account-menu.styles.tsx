import { ACCOUNT_MENU_MAX_WIDTH } from '@components/account-menu/account-menu.constants';
import { themedStyled } from '@themes/utilities';

import type { StyleObject } from 'styletron-react';

export const StyledUserSection = themedStyled(
  'div',
  ({ $theme }): StyleObject => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: $theme.spacing.spacingXs,
    paddingTop: $theme.spacing.spacingMd,
    paddingBottom: $theme.spacing.spacingMd,
    backgroundColor: $theme.colors.brandBase,
  }),
);

export const StyledUserDetails = themedStyled(
  'div',
  (): StyleObject => ({
    flex: 1,
    minWidth: 0,
    textAlign: 'center',
    maxWidth: ACCOUNT_MENU_MAX_WIDTH,
  }),
);
