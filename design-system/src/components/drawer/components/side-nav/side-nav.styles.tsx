import { ANCHOR } from 'baseui/drawer';

import { themedStyled } from '@themes/utilities';

import { SIDENAV_BORDER_ANCHOR, SIDENAV_MARGIN_ANCHOR, SIDENAV_SIZE } from './side-nav.constants';

import type { Anchor, SizeProp } from 'baseui/drawer';

export const SideNavStyled = themedStyled<
  'div',
  { $isOpen: boolean; $size: SizeProp; $anchor: Anchor; $height: string }
>('div', ({ $isOpen, $theme, $size, $anchor, $height }) => ({
  width: SIDENAV_SIZE[$size] || $size,
  display: 'flex',
  height: $height,
  flexShrink: 0,
  flexDirection: 'column',
  order: $anchor === ANCHOR.left ? '0' : '999',
  backgroundColor: $theme.colors.bgBase,
  overflowX: 'hidden',
  transition: `${$theme.animation.timing500} ${$theme.animation.easeInOutCurve}`,
  [SIDENAV_MARGIN_ANCHOR[$anchor]]: $isOpen ? 0 : `-${SIDENAV_SIZE[$size] || $size}`,
  [SIDENAV_BORDER_ANCHOR[$anchor]]: `1px solid ${$theme.colors.neutralSubtle}`,
}));
