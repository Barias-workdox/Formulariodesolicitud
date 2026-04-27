import { themedStyled } from '@themes/index';

export const StyledSuccessMessageOptionsContainer = themedStyled('div', ({ $theme }) => ({
  marginTop: $theme.spacing.spacing2xs8,
  display: 'flex',
  flexDirection: 'column',
  gap: $theme.spacing.spacingMd,
}));
