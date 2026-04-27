import { useMemo } from 'react';

import { useDialogPositioning } from './use-dialog-positioning.hook';

import type { PlacementType } from '@interfaces/common.interfaces';

interface UseDialogStylesProps {
  width: number;
  height: number;
  maxWidth?: number;
  maxHeight?: number;
  placement: PlacementType;
  fullViewport: boolean;
  isMobile: boolean;
}

/**
 * Hook to calculate dialog container styles
 */
export const useDialogStyles = ({
  width,
  height,
  maxWidth,
  maxHeight,
  placement,
  fullViewport,
  isMobile,
}: UseDialogStylesProps): React.CSSProperties => {
  const positioning = useDialogPositioning({
    placement,
    width,
    height,
    fullViewport,
    isMobile,
  });

  const containerStyles = useMemo((): React.CSSProperties => {
    if (fullViewport || isMobile) {
      return {};
    }

    return {
      width,
      height,
      maxWidth,
      maxHeight,
      ...positioning,
    };
  }, [width, height, maxWidth, maxHeight, positioning, fullViewport, isMobile]);

  return containerStyles;
};
