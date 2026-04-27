import { HANDLE_THICKNESS } from '@components/dynamic-dialog/dynamic-dialog.constants';
import { themedStyled } from '@themes/utilities';

export const StyledTopHandle = themedStyled('div', {
  position: 'absolute',
  top: 0,
  width: '100%',
  cursor: 'ns-resize',
  height: HANDLE_THICKNESS,
});
