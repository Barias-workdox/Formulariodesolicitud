import { useMemo } from 'react';

import { PLACEMENT_MARGIN } from '@constants/placement.constants';

import type { PlacementType } from '@interfaces/common.interfaces';

interface UseDialogPositioningProps {
  placement: PlacementType;
  width: number;
  height: number;
  fullViewport: boolean;
  isMobile: boolean;
}

/**
 * Hook to calculate dialog positioning based on placement and viewport state
 * Specifies all positioning properties to ensure correct anchor point during animations
 */
export const useDialogPositioning = ({
  placement,
  width,
  height,
  fullViewport,
  isMobile,
}: UseDialogPositioningProps): React.CSSProperties => {
  const positioning = useMemo((): React.CSSProperties => {
    if (fullViewport || isMobile) {
      return {};
    }

    const margin = PLACEMENT_MARGIN;

    switch (placement) {
      case 'topLeft':
        return {
          top: margin,
          left: margin,
          right: `calc(100vw - ${width}px - ${margin}px)`,
          bottom: `calc(100vh - ${height}px - ${margin}px)`,
        };
      case 'topRight':
        return {
          top: margin,
          right: margin,
          left: `calc(100vw - ${width}px - ${margin}px)`,
          bottom: `calc(100vh - ${height}px - ${margin}px)`,
        };
      case 'bottomLeft':
        return {
          bottom: margin,
          left: margin,
          top: `calc(100vh - ${height}px - ${margin}px)`,
          right: `calc(100vw - ${width}px - ${margin}px)`,
        };
      case 'bottomRight':
        return {
          bottom: margin,
          right: margin,
          top: `calc(100vh - ${height}px - ${margin}px)`,
          left: `calc(100vw - ${width}px - ${margin}px)`,
        };
      default:
        return {
          bottom: margin,
          right: margin,
          top: `calc(100vh - ${height}px - ${margin}px)`,
          left: `calc(100vw - ${width}px - ${margin}px)`,
        };
    }
  }, [placement, width, height, fullViewport, isMobile]);

  return positioning;
};
