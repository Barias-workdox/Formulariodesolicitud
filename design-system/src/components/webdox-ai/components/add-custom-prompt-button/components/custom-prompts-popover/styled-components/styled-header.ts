import { themedStyled } from '@themes/utilities';

export const StyledHeader = themedStyled('div', ({ $theme }) => ({
  display: 'flex',
  padding: `${$theme.spacing.spacingMd} ${$theme.spacing.spacingSm} ${$theme.spacing.spacingXs}`,
  justifyContent: 'space-between',
  alignItems: 'center',
}));
