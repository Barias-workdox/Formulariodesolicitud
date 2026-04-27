import { themedStyled } from '@themes/utilities';

export const StyledList = themedStyled('div', ({ $theme }) => ({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
  border: `1px solid ${$theme.colors.neutralSubtle}`,
  borderRadius: $theme.spacing.spacingXs,
}));
