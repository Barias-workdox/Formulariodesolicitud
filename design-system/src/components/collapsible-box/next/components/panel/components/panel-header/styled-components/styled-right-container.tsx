import { themedStyled } from '@themes/utilities';

export const StyledRightContainer = themedStyled('div', ({ $theme }) => ({
  display: 'flex',
  alignItems: 'center',
  overflow: 'hidden',
  gap: $theme.spacing.spacingXs,
  flexShrink: 0,
}));
