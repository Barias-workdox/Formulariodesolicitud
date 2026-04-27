import { themedStyled } from '@themes/index';

export const StyledContainer = themedStyled('div', ({ $theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: $theme.spacing.spacingSm,
}));
