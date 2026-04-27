import { themedStyled } from '@themes/utilities';

export const StyledBottomLeftCornerHandle = themedStyled('div', {
  position: 'absolute',
  bottom: 0,
  left: 0,
  cursor: 'nesw-resize',
  display: 'flex',
});
