import { getCustomScrollBarStyles } from '@themes/custom-scroll-bar';
import { themedStyled } from '@themes/utilities';

export const StyledContainer = themedStyled('div', ({ $theme }) => ({
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  overflowY: 'auto',
  contentVisibility: 'auto',
  padding: `${$theme.spacing.spacingMd} ${$theme.spacing.spacingMd} 0`,
  ...getCustomScrollBarStyles($theme),
}));
