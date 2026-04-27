import { HANDLE_THICKNESS } from '@components/dynamic-dialog/dynamic-dialog.constants';
import { themedStyled } from '@themes/utilities';

export const StyledRightHandle = themedStyled('div', {
  position: 'absolute',
  right: 0,
  height: '100%',
  cursor: 'ew-resize',
  width: HANDLE_THICKNESS,
});
