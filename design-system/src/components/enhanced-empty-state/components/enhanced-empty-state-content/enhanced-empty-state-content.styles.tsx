import { themedStyled } from '@themes/utilities';

export const StyledDiv = themedStyled('div', ({ $theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: $theme.spacing.spacing2xs,

  [$theme.mediaQuery.large]: {
    gap: $theme.spacing.spacingXs,
  },
}));
