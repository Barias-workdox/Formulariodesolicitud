import { COMMON_POPOVER_MENU_LIST_WIDTH } from '@constants/common.constants';
import { themedStyled } from '@themes/utilities';

export const StyledPopoverMenuContainer = themedStyled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: COMMON_POPOVER_MENU_LIST_WIDTH,
});
