import { PLACEMENT_MARGIN_PX } from '@constants/placement.constants';

import { WEBDOX_AI_BUTTON_CONTAINER_SIZE_PX } from '../../components';

import type { InformationPopoverOverrides } from '@components/information-popover/information-popover.interfaces';
import type { DirectionType } from '@components/webdox-ai/interfaces';
import type { PlacementType, WithZIndex } from '@interfaces/common.interfaces';
import type { StyleObject } from 'styletron-react';

type GetPopoverOverridesProps = WithZIndex<{
  isCollapsibleButtonOpen: boolean;
  placement: PlacementType;
  direction: DirectionType;
}>;

/**
 * Get the default popover position.
 */
const getDefaultPopoverPosition = ({
  placement,
}: Pick<GetPopoverOverridesProps, 'placement'>): StyleObject => {
  if (placement === 'bottomLeft' || placement === 'topLeft') {
    return {
      left: `-${PLACEMENT_MARGIN_PX}`,
    };
  } else {
    return {
      left: PLACEMENT_MARGIN_PX,
    };
  }
};

/**
 * Get the margin for the popover based on the placement.
 */
const getPopoverPositionWhenCollapsibleButtonOpen = ({
  placement,
}: Pick<GetPopoverOverridesProps, 'placement'>): StyleObject => {
  if (placement === 'bottomLeft' || placement === 'topLeft') {
    return {
      left: WEBDOX_AI_BUTTON_CONTAINER_SIZE_PX,
    };
  } else {
    return {
      left: `-${WEBDOX_AI_BUTTON_CONTAINER_SIZE_PX}`,
    };
  }
};

/**
 * Get the overrides for the popover.
 */
export const getPopoverOverrides = ({
  isCollapsibleButtonOpen,
  placement,
  direction,
  zIndex,
}: GetPopoverOverridesProps): InformationPopoverOverrides => {
  return {
    Body: {
      style: {
        ...getDefaultPopoverPosition({
          placement,
        }),
        ...(direction === 'column' &&
          isCollapsibleButtonOpen && {
            ...getPopoverPositionWhenCollapsibleButtonOpen({
              placement,
            }),
          }),
        transition: 'left .20s ease-in-out',
        zIndex,
      },
    },
  };
};
