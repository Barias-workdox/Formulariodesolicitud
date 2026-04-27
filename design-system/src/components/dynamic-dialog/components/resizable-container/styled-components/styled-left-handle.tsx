import { HANDLE_THICKNESS } from '@components/dynamic-dialog/dynamic-dialog.constants';
import { themedStyled } from '@themes/utilities';

export const StyledLeftHandle = themedStyled('div', {
  position: 'absolute',
  left: 0,
  height: '100%',
  cursor: 'ew-resize',
  width: HANDLE_THICKNESS,
});
