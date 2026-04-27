import { themedStyled } from '@themes/utilities';

export const StyledContainer = themedStyled('div', ({ $theme }) => ({
  display: 'flex',
  gap: $theme.spacing.spacing2xs,
  padding: `${$theme.spacing.spacing2xs} ${$theme.spacing.spacingXs}`,
}));
