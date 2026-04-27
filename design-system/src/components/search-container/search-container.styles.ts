import { themedStyled } from '@themes/utilities';

import type { StyleObject } from 'styletron-react';

export const StyledContainer = themedStyled<
  'div',
  {
    $minWidth?: StyleObject['minWidth'];
    $maxWidth?: StyleObject['maxWidth'];
    $maxHeight?: StyleObject['maxHeight'];
  }
>('div', ({ $minWidth, $maxWidth, $maxHeight }) => ({
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
  width: 'fill-available',
  minWidth: $minWidth,
  maxWidth: $maxWidth,
  maxHeight: $maxHeight,
}));

export const StyledBody = themedStyled('div', {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
  borderTop: 'none',
});
