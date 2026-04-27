import { themedStyled } from '@themes/utilities';

export const StyledContainer = themedStyled('div', ({ $theme }) => ({
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  gap: $theme.spacing.spacingXs,
  overflow: 'hidden',
}));
