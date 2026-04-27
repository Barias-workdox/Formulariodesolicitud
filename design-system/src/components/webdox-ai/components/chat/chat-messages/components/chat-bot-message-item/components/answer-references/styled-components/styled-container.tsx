import { themedStyled } from '@themes/utilities';

export const StyledContainer = themedStyled('span', ({ $theme }) => ({
  padding: `0 ${$theme.spacing.spacing2xs}`,
  display: 'inline-flex',
  flexWrap: 'wrap',
  gap: $theme.spacing.spacing2xs,
}));
