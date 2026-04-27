import { PLACEMENT, POSITION_BY_PLACEMENT } from '@constants/placement.constants';
import { themedStyled } from '@themes/utilities';

import type { PlacementType } from '@interfaces/common.interfaces';
import type { StyleObject } from 'styletron-react';

export const StyledPlacementWrapper = themedStyled<
  'div',
  {
    $placement?: PlacementType;
    $zIndex?: number;
    $customLeft?: StyleObject['left'];
    $customRight?: StyleObject['right'];
  }
>('div', ({ $placement = PLACEMENT.BOTTOM_RIGHT, $zIndex, $customLeft, $customRight }) => {
  const placementStyle = POSITION_BY_PLACEMENT[$placement];

  return {
    position: 'fixed',
    zIndex: $zIndex,
    ...placementStyle,
    ...($customLeft && { left: $customLeft }),
    ...($customRight && { right: $customRight }),
  };
});
