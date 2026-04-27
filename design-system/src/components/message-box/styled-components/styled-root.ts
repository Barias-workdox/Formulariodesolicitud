import { themedStyled } from '@themes/utilities';

import {
  COLLAPSED_MESSAGE_BOX_HEIGHT_PX,
  MESSAGE_BOX_HEIGHT_PX,
  MESSAGE_BOX_STYLE_TRANSITION,
} from '../message-box.constants';

export const StyledRoot = themedStyled<
  'div',
  { $isOpen?: boolean; $isExpanded?: boolean; $disabled?: boolean; $overflow?: string }
>('div', ({ $disabled, $isExpanded, $isOpen, $overflow, $theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  border: `1px solid ${$theme.colors.neutralSubtle}`,
  overflow: $overflow || 'hidden',
  height: $isOpen ? MESSAGE_BOX_HEIGHT_PX : COLLAPSED_MESSAGE_BOX_HEIGHT_PX,
  transition: MESSAGE_BOX_STYLE_TRANSITION,
  backgroundColor: $theme.colors.bgBase,
  position: 'relative',

  ...($disabled && {
    borderColor: $theme.colors.neutralSubtle,
    backgroundColor: $theme.colors.neutralWashed,
  }),

  ...($isExpanded && {
    marginTop: $theme.spacing.spacingMd,
    height: '100%',
  }),
}));
