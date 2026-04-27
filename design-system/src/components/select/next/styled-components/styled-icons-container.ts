import { themedStyled } from '@themes/utilities';

export const StyledIconsContainer = themedStyled('div', ({ $theme }) => ({
  padding: 0,
  gap: $theme.spacing.spacingSm,
  display: 'flex',
  alignItems: 'center',
}));
