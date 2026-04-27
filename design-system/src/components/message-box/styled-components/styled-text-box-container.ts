import { getCustomScrollBarStyles } from '@themes/custom-scroll-bar';
import { themedStyled } from '@themes/utilities';

import { TEXTBOX_CONTAINER_HEIGHT_PX } from '../message-box.constants';

export const StyledTextBoxContainer = themedStyled<'div', { $isExpanded: boolean }>(
  'div',
  ({ $theme, $isExpanded }) => ({
    boxSizing: 'border-box',
    minHeight: $isExpanded ? 'unset' : TEXTBOX_CONTAINER_HEIGHT_PX,
    flex: 1,
    overflow: 'auto',
    ...getCustomScrollBarStyles($theme),
  }),
);
