import { HANDLE_CORNER_THICKNESS } from '@components/dynamic-dialog/dynamic-dialog.constants';
import { themedStyled } from '@themes/utilities';

export const StyledTopLeftCornerHandle = themedStyled('div', {
  position: 'absolute',
  top: 0,
  left: 0,
  cursor: 'nwse-resize',
  height: HANDLE_CORNER_THICKNESS,
  width: HANDLE_CORNER_THICKNESS,
});
