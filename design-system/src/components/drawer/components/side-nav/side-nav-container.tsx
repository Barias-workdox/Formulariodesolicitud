import { themedStyled } from '@themes/utilities';

import type { StyleObject } from 'styletron-react';

export const SideNavContainer = themedStyled<'div', { $style?: StyleObject }>(
  'div',
  ({ $style }) => ({
    display: 'flex',
    flexGrow: 1,
    overflowX: 'hidden',
    ...$style,
  }),
);
