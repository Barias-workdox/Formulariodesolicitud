import { HANDLE_CORNER_THICKNESS } from '@components/dynamic-dialog/dynamic-dialog.constants';
import { themedStyled } from '@themes/utilities';

export const StyledTopRightCornerHandle = themedStyled('div', {
  position: 'absolute',
  top: 0,
  right: 0,
  cursor: 'nesw-resize',
  height: HANDLE_CORNER_THICKNESS,
  width: HANDLE_CORNER_THICKNESS,
});
