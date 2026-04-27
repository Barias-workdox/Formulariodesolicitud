import { themedStyled } from '@themes/index';

export const StyledProgressBarContainer = themedStyled('div', ({ $theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: $theme.spacing.spacingXs,
}));
