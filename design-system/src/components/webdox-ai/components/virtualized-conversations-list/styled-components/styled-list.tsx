import { getCustomScrollBarStyles } from '@themes/custom-scroll-bar';
import { themedStyled } from '@themes/utilities';

export const StyledList = themedStyled('div', ({ $theme }) => ({
  overflow: 'auto',
  flex: 1,

  ...getCustomScrollBarStyles($theme),
}));
