import { COMMON_ICON_SIZE_24 } from '@constants/common.constants';
import { themedStyled } from '@themes/utilities';

export const StyledContainer = themedStyled('div', {
  width: COMMON_ICON_SIZE_24,
  height: COMMON_ICON_SIZE_24,
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});
