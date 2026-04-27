import { themedStyled } from '@themes/utilities';

export const StyledTagsContainer = themedStyled('div', ({ $theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: $theme.spacing.spacingXs,
}));
