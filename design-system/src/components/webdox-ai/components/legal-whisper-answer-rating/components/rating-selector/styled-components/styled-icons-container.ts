import { themedStyled } from '@themes/index';

export const StyledIconsContainer = themedStyled('div', ({ $theme }) => ({
  display: 'flex',
  gap: $theme.spacing.spacingMd,
}));
