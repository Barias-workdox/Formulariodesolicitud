import { themedStyled } from '@themes/utilities';

export const StyledContainer = themedStyled('div', ({ $theme }) => ({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: $theme.spacing.spacingMd,
  padding: $theme.spacing.spacingMd,

  [$theme.mediaQuery.medium]: {
    flexDirection: 'row',
  },

  [$theme.mediaQuery.large]: {
    gap: $theme.spacing.spacing2xs8,
  },
}));

export const StyledImg = themedStyled('img', ({ $theme }) => {
  return {
    width: '100%',
    maxWidth: '300px',

    [$theme.mediaQuery.large]: {
      maxWidth: '460px',
    },
  };
});

export const StyledBody = themedStyled('div', ({ $theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: $theme.spacing.spacingMd,
}));
