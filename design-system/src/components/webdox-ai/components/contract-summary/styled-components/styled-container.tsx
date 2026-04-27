import { themedStyled } from '@themes/utilities';

export const StyledContainer = themedStyled('div', ({ $theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: $theme.spacing.spacingXs,
  paddingBottom: $theme.spacing.spacing3xl,
  borderBottom: `1px solid ${$theme.colors.neutralSubtle}`,
}));
