import { MESSAGE_BOX_STYLE_TRANSITION } from '@components/message-box/message-box.constants';
import { themedStyled } from '@themes/utilities';

export const StyledAddonsContainer = themedStyled<
  'div',
  { $isExpanded: boolean; $isOpen: boolean; $height: number }
>('div', ({ $height, $isExpanded, $isOpen }) => ({
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  height: $isExpanded ? '0px' : `${$height}px`,
  transition: $isOpen ? MESSAGE_BOX_STYLE_TRANSITION : 'none',
}));
