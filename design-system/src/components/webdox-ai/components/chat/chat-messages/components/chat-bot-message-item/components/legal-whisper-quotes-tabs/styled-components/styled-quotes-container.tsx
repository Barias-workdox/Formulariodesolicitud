import { themedStyled } from '@themes/utilities';

export const StyledQuotesContainer = themedStyled('div', ({ $theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: $theme.spacing.spacingXs,
}));
