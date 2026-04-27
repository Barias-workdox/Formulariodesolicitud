import { themedStyled } from '@themes/utilities';

import type { PlacementType } from '@interfaces/common.interfaces';

export const StyledContainer = themedStyled<
  'div',
  {
    $fullViewport?: boolean;
    $placement?: PlacementType;
    $zIndex: number;
  }
>('div', ({ $theme, $zIndex, $fullViewport = false }) => {
  return {
    position: 'absolute',
    backgroundColor: $theme.colors.bgBase,
    overflow: 'hidden',
    zIndex: $zIndex,
    boxSizing: 'border-box',
    ...(!$fullViewport && {
      borderRadius: '4px',
      boxShadow: '0px 3px 4px 0px rgba(0, 0, 0, 0.10)',
      border: `1px solid ${$theme.colors.neutralSubtle}`,
    }),
  };
});
