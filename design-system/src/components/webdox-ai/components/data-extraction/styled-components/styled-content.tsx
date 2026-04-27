import { themedStyled } from '@themes/utilities';

export const StyledContent = themedStyled('div', ({ $theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  gap: $theme.spacing.spacingXs,
}));
