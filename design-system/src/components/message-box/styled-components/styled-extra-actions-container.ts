import { themedStyled } from '@themes/utilities';

export const StyledExtraActionsContainer = themedStyled('div', ({ $theme }) => ({
  display: 'flex',
  flex: 1,
  gap: $theme.spacing.spacingXs,
}));
