import { themedStyled } from '@themes/index';

export const StyledDivider = themedStyled('div', ({ $theme }) => ({
  height: '1px',
  backgroundColor: $theme.colors.neutralSubtle,
  margin: `0 ${$theme.spacing.spacingMd}`,
}));
