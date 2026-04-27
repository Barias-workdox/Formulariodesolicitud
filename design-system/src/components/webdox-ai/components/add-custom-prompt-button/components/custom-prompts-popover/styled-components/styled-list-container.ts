import { getCustomScrollBarStyles } from '@themes/custom-scroll-bar';
import { themedStyled } from '@themes/utilities';

export const StyledListContainer = themedStyled('div', ({ $theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  overflow: 'auto',
  ...getCustomScrollBarStyles($theme),
}));
