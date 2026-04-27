import { themedStyled } from '@themes/utilities';

export const StyledUsagePlanContainer = themedStyled('div', ({ $theme }) => ({
  display: 'flex',
  gap: $theme.spacing.spacingXs,
  marginLeft: 'auto',
}));
