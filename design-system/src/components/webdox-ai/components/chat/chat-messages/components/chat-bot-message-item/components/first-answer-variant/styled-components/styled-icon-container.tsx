import { themedStyled } from '@themes/utilities';

export const StyledIconContainer = themedStyled('div', ({ $theme }) => ({
  display: 'flex',
  marginBottom: $theme.spacing.spacingSm,
}));
