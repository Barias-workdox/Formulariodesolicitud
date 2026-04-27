import { themedStyled } from '@themes/index';

export const StyledTitleContainer = themedStyled('div', ({ $theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: $theme.spacing.spacingXs,
}));
