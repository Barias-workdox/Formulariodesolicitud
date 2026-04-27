import { themedStyled } from '@themes/index';

export const StyledHeader = themedStyled('div', ({ $theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: $theme.spacing.spacingXs,
}));
