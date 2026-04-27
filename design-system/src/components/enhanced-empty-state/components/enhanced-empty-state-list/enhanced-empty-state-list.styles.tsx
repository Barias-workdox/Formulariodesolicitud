import { themedStyled } from '@themes/utilities';

export const StyledList = themedStyled('ul', ({ $theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: $theme.spacing.spacing2xs,
  padding: 0,
  margin: 0,

  [$theme.mediaQuery.large]: {
    gap: $theme.spacing.spacingXs,
  },
}));
