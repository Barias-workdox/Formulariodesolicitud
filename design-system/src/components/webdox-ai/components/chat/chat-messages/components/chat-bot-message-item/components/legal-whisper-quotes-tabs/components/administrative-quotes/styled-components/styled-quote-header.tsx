import { themedStyled } from '@themes/utilities';

export const StyledQuoteHeader = themedStyled('div', ({ $theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  gap: $theme.spacing.spacingXs,
}));
