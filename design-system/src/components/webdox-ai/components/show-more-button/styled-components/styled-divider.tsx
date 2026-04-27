import { themedStyled } from '@themes/utilities';

export const StyledDivider = themedStyled('div', ({ $theme }) => ({
  flex: 1,
  height: '1px',
  borderBottom: `1px dashed ${$theme.colors.neutralSubtle}`,
}));
