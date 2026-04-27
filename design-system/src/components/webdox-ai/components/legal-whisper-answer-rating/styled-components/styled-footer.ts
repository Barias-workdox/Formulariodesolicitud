import { themedStyled } from '@themes/index';

export const StyledFooter = themedStyled('div', ({ $theme }) => ({
  display: 'flex',
  padding: $theme.spacing.spacingMd,
  borderTop: `1px solid ${$theme.colors.neutralSubtle}`,
  backgroundColor: $theme.colors.bgBase,
}));
