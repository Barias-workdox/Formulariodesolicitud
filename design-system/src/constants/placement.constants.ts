import type { PlacementType } from '@interfaces/common.interfaces';
import type { StyleObject } from 'styletron-react';

/**
 * Defines the margin value for the placement of elements in the UI.
 */
export const PLACEMENT_MARGIN = 16;

export const PLACEMENT_MARGIN_PX = `${PLACEMENT_MARGIN}px`;

/**
 * Defines the possible placement values for positioning elements in the UI.
 */
export const PLACEMENT = {
  TOP_RIGHT: 'topRight',
  TOP_LEFT: 'topLeft',
  BOTTOM_RIGHT: 'bottomRight',
  BOTTOM_LEFT: 'bottomLeft',
} as const;

export const POSITION_BY_PLACEMENT: Record<
  PlacementType,
  Pick<StyleObject, 'top' | 'bottom' | 'right' | 'left'>
> = {
  [PLACEMENT.TOP_LEFT]: {
    top: PLACEMENT_MARGIN_PX,
    left: PLACEMENT_MARGIN_PX,
  },
  [PLACEMENT.TOP_RIGHT]: {
    top: PLACEMENT_MARGIN_PX,
    right: PLACEMENT_MARGIN_PX,
  },
  [PLACEMENT.BOTTOM_LEFT]: {
    bottom: PLACEMENT_MARGIN_PX,
    left: PLACEMENT_MARGIN_PX,
  },
  [PLACEMENT.BOTTOM_RIGHT]: {
    bottom: PLACEMENT_MARGIN_PX,
    right: PLACEMENT_MARGIN_PX,
  },
};
