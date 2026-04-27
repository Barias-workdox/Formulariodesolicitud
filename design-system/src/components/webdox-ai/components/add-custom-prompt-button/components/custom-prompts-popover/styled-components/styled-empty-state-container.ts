import { themedStyled } from '@themes/utilities';

export const StyledEmptyStateContainer = themedStyled('div', ({ $theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: $theme.spacing.spacingXs,
}));
