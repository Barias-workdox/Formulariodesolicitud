import { themedStyled } from '@themes/utilities';

export const StyledListItemEndEnhancer = themedStyled('div', ({ $theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: $theme.spacing.spacing2xs,
}));
