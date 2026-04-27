import { themedStyled } from '@themes/utilities';

export const StyledLeftContainer = themedStyled('div', ({ $theme }) => ({
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  overflow: 'hidden',
  gap: $theme.spacing.spacingXs,
  flexShrink: 0,
}));
