import { themedStyled } from '@themes/utilities';

export const DesktopStyledWrapper = themedStyled('div', ({ $theme }) => ({
  display: 'none',
  gap: $theme.spacing.spacingMd,

  [$theme.mediaQuery.medium]: {
    display: 'flex',
  },
}));
