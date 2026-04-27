import { themedStyled } from '@themes/utilities';

export const StyledContainer = themedStyled('div', ({ $theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: $theme.spacing.spacingMd,
  padding: $theme.spacing.spacingMd,
  overflow: 'hidden',
}));
