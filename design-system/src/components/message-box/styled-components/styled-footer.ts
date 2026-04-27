import { themedStyled } from '@themes/utilities';

import { FOOTER_HEIGHT_PX } from '../message-box.constants';

export const StyledFooter = themedStyled('div', ({ $theme }) => ({
  display: 'flex',
  justifyContent: 'end',
  alignItems: 'center',
  backgroundColor: $theme.colors.neutralWashed,
  padding: `0 ${$theme.spacing.spacingXs}`,
  minHeight: FOOTER_HEIGHT_PX,
  gap: $theme.spacing.spacingXs,
}));
