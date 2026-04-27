import { themedStyled } from '@themes/utilities';

export const StyledContainer = themedStyled('div', ({ $theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'inherit',
  gap: $theme.spacing.spacingXs,
}));
