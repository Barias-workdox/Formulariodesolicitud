import { themedStyled } from '@themes/utilities';

export const StyledContainer = themedStyled('div', ({ $theme }) => ({
  gap: $theme.spacing.spacingMd,
  display: 'flex',
  flexDirection: 'column',
}));
