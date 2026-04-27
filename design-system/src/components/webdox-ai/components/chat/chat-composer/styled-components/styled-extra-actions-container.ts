import { themedStyled } from '@themes/index';

export const StyledExtraActionsContainer = themedStyled('div', ({ $theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: $theme.spacing.spacingXs,
}));
