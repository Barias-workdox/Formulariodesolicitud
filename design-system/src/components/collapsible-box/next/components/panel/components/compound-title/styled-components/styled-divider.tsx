import { themedStyled } from '@themes/utilities';

export const StyledDivider = themedStyled('div', ({ $theme }) => ({
  height: '12px',
  width: '1px',
  backgroundColor: $theme.colors.neutral,
  flexShrink: 0,
}));
