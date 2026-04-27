import { themedStyled } from '@themes/utilities';

export const StyledEmptyStateWrapper = themedStyled('div', ({ $theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: $theme.spacing.spacingMd,
}));
