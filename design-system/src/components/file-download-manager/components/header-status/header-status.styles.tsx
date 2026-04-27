import { themedStyled } from '@themes/utilities';

export const StyledHeaderStatusContainer = themedStyled('div', ({ $theme }) => ({
  display: 'flex',
  gap: $theme.spacing.spacingXs,
  alignItems: 'center',
}));
