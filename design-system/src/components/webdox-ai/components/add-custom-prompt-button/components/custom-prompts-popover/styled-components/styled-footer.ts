import { themedStyled } from '@themes/utilities';

export const StyledFooter = themedStyled('div', ({ $theme }) => ({
  borderTop: `1px solid ${$theme.colors.neutralSubtle}`,
  display: 'flex',
  alignItems: 'center',
  padding: $theme.spacing.spacingXs,
}));
