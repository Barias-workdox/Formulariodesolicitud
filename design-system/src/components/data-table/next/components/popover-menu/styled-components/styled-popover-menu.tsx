import { COMMON_FLOATING_MAX_HEIGHT } from '@constants/common.constants';
import { themedStyled } from '@themes/utilities';

export const StyledPopoverMenu = themedStyled('ul', {
  listStyle: 'none',
  padding: 0,
  margin: 0,
  maxHeight: COMMON_FLOATING_MAX_HEIGHT,
  overflow: 'auto',
  scrollbarWidth: 'thin',
});
