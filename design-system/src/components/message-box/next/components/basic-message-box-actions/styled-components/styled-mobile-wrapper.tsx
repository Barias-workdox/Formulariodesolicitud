import { themedStyled } from '@themes/utilities';

export const MobileStyledWrapper = themedStyled('div', ({ $theme }) => ({
  display: 'flex',
  gap: $theme.spacing.spacingMd,

  [$theme.mediaQuery.medium]: {
    display: 'none',
  },
}));
