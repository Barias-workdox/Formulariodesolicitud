import { ANCHOR } from 'baseui/drawer';

import type { Anchor } from 'baseui/drawer';
import type { Size } from 'baseui/modal';

export const SIDENAV_SIZE = {
  default: '500px',
  auto: 'auto',
  full: '100%',
} as const satisfies Record<Size, string>;

export const SIDENAV_MARGIN_ANCHOR = {
  [ANCHOR.right]: 'margin-right',
  [ANCHOR.left]: 'margin-left',
  [ANCHOR.top]: 'margin-left',
  [ANCHOR.bottom]: 'margin-left',
} as const satisfies Record<Anchor, string>;

export const SIDENAV_BORDER_ANCHOR = {
  [ANCHOR.left]: 'border-right',
  [ANCHOR.right]: 'border-left',
  [ANCHOR.top]: 'border-left',
  [ANCHOR.bottom]: 'border-left',
} as const satisfies Record<Anchor, string>;
