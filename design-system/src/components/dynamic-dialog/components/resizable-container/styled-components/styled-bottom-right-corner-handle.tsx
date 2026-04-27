import { themedStyled } from '@themes/utilities';

export const StyledBottomRightCornerHandle = themedStyled('div', {
  position: 'absolute',
  bottom: 0,
  right: 0,
  cursor: 'nwse-resize',
  display: 'flex',
});
