import { themedStyled } from '@themes/utilities';

import type { StyleObject } from 'styletron-react';

export const StyledContainer = themedStyled<'div', { $maxHeight?: StyleObject['maxHeight'] }>(
  'div',
  ({ $maxHeight }) => ({
    width: '100%',
    height: '100%',
    overflow: 'auto',
    maxHeight: $maxHeight,
  }),
);
