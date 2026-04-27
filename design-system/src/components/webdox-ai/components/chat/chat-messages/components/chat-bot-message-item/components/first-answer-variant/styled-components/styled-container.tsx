import { themedStyled } from '@themes/utilities';

export const StyledContainer = themedStyled('section', ({ $theme }) => ({
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  gap: $theme.spacing.spacing2xs,
  alignItems: 'inherit',
}));
