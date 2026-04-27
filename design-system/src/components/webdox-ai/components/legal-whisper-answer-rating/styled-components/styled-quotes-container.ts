import { themedStyled } from '@themes/index';

export const StyledQuotesContainer = themedStyled('div', ({ $theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: $theme.spacing.spacingSm,
}));
