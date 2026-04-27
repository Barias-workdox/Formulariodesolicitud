import { themedStyled } from '@themes/index';

export const StyledOptionsContainer = themedStyled('div', ({ $theme }) => ({
  marginTop: $theme.spacing.spacing3xl,
  display: 'flex',
  flexDirection: 'column',
  gap: $theme.spacing.spacingMd,
}));
