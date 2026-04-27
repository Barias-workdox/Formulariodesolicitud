import { themedStyled } from '@themes/utilities';

export const StyledContainer = themedStyled('div', ({ $theme }) => ({
  display: 'flex',
  gap: $theme.spacing.spacingXs,
  alignItems: 'center',
  justifyContent: 'center',
}));
