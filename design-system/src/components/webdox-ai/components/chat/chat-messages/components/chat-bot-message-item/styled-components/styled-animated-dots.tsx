import { themedStyled } from '@themes/utilities';

export const StyledAnimatedDots = themedStyled('div', ({ $theme }) => ({
  width: '2px',
  height: '2px',
  borderRadius: '50%',
  backgroundColor: $theme.colors.bgBase,
  boxShadow: `${$theme.spacing.spacing2xs} 0 ${$theme.colors.bgBase}, -${$theme.spacing.spacing2xs} 0 ${$theme.colors.bgBase}`,
  position: 'relative',
  animationDuration: $theme.animation.timing500,
  animationIterationCount: 'infinite',
  animationTimingFunction: 'ease-out',
  animationDirection: 'alternate',
  animationName: {
    '0%': {
      backgroundColor: $theme.colors.power,
      boxShadow: `${$theme.spacing.spacing2xs} 0 ${$theme.colors.power}, -${$theme.spacing.spacing2xs} 0 ${$theme.colors.bgBase}`,
    },
    '50%': {
      backgroundColor: $theme.colors.bgBase,
      boxShadow: `${$theme.spacing.spacing2xs} 0 ${$theme.colors.power}, -${$theme.spacing.spacing2xs} 0 ${$theme.colors.power}`,
    },
    '100%': {
      backgroundColor: $theme.colors.power,
      boxShadow: `${$theme.spacing.spacing2xs} 0 ${$theme.colors.bgBase}, -${$theme.spacing.spacing2xs} 0 ${$theme.colors.power}`,
    },
  },
}));
