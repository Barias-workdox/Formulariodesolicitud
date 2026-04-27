import { themedStyled } from '@themes/index';

export const StyledContainer = themedStyled('div', ({ $theme }) => ({
  display: 'flex',
  gap: $theme.spacing.spacingSm,
  flexWrap: 'wrap',
}));
