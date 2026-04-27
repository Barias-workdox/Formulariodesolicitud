import { HANDLE_THICKNESS } from '@components/dynamic-dialog/dynamic-dialog.constants';
import { themedStyled } from '@themes/utilities';

export const StyledBottomHandle = themedStyled('div', {
  position: 'absolute',
  bottom: 0,
  width: '100%',
  cursor: 'ns-resize',
  height: HANDLE_THICKNESS,
});
