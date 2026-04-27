import { useEffect, useLayoutEffect, useState } from 'react';

import {
  DEFAULT_DIALOG_HEIGHT,
  DEFAULT_DIALOG_WIDTH,
  MIN_DIALOG_WIDTH,
  MIN_DIALOG_HEIGHT,
} from '../dynamic-dialog.constants';

interface UseDynamicSizingProps {
  initialWidth?: number;
  initialHeight?: number;
  minWidth?: number;
  minHeight?: number;
  fullViewport: boolean;
  isMobile: boolean;
}

/**
 * Hook to manage dynamic sizing based on viewport and full viewport state
 */
export const useDynamicSizing = ({
  initialWidth = DEFAULT_DIALOG_WIDTH,
  initialHeight = DEFAULT_DIALOG_HEIGHT,
  minWidth = MIN_DIALOG_WIDTH,
  minHeight = MIN_DIALOG_HEIGHT,
  fullViewport,
  isMobile,
}: UseDynamicSizingProps): { width: number; height: number } => {
  // Calculate dimensions directly in state
  const [dimensions, setDimensions] = useState(() => {
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    if (fullViewport) {
      return {
        width: viewportWidth,
        height: viewportHeight,
      };
    } else if (isMobile) {
      return {
        width: viewportWidth,
        height: Math.min(viewportHeight * 0.9, initialHeight),
      };
    } else {
      // Desktop: adjust if viewport is smaller than initial size
      const adjustedWidth = Math.max(minWidth, Math.min(viewportWidth - 32, initialWidth));
      const adjustedHeight = Math.max(minHeight, Math.min(viewportHeight - 32, initialHeight));

      return {
        width: adjustedWidth,
        height: adjustedHeight,
      };
    }
  });

  useEffect(() => {
    /**
     * Calculates and sets the dialog dimensions based on the current viewport size,
     * full viewport state, and device type (mobile/desktop).
     *
     * - If `fullViewport` is true, sets width and height to the viewport size.
     * - If `isMobile` is true, sets width to viewport width and height to 90% of viewport height or `initialHeight`, whichever is smaller.
     * - Otherwise (desktop), adjusts width and height to fit within the viewport, respecting minimum and initial sizes.
     *
     * Updates the `dimensions` state with the calculated values.
     */
    const calculateAndSetDimensions = (): void => {
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      let newDimensions: { width: number; height: number };

      if (fullViewport) {
        newDimensions = {
          width: viewportWidth,
          height: viewportHeight,
        };
      } else if (isMobile) {
        newDimensions = {
          width: viewportWidth,
          height: Math.min(viewportHeight * 0.9, initialHeight),
        };
      } else {
        // Desktop: adjust if viewport is smaller than initial size
        const adjustedWidth = Math.max(minWidth, Math.min(viewportWidth - 32, initialWidth));
        const adjustedHeight = Math.max(minHeight, Math.min(viewportHeight - 32, initialHeight));

        newDimensions = {
          width: adjustedWidth,
          height: adjustedHeight,
        };
      }

      setDimensions(newDimensions);
    };

    // Recalculate when dependencies change
    calculateAndSetDimensions();

    // Handle window resize
    window.addEventListener('resize', calculateAndSetDimensions);

    return (): void => {
      window.removeEventListener('resize', calculateAndSetDimensions);
    };
  }, [initialWidth, initialHeight, minWidth, minHeight, fullViewport, isMobile]);

  // Force immediate recalculation on mount
  useLayoutEffect(() => {
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    let newDimensions: { width: number; height: number };

    if (fullViewport) {
      newDimensions = {
        width: viewportWidth,
        height: viewportHeight,
      };
    } else if (isMobile) {
      newDimensions = {
        width: viewportWidth,
        height: Math.min(viewportHeight * 0.9, initialHeight),
      };
    } else {
      // Desktop: adjust if viewport is smaller than initial size
      const adjustedWidth = Math.max(minWidth, Math.min(viewportWidth - 32, initialWidth));
      const adjustedHeight = Math.max(minHeight, Math.min(viewportHeight - 32, initialHeight));

      newDimensions = {
        width: adjustedWidth,
        height: adjustedHeight,
      };
    }

    setDimensions(newDimensions);
  }, [fullViewport, initialHeight, initialWidth, isMobile, minHeight, minWidth]);

  return dimensions;
};
