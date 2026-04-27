import { useMemo } from 'react';

/**
 * Hook to determine if resize handles should be shown
 */
export const useDialogResize = (
  resizable: boolean,
  fullViewport: boolean,
  isMobile: boolean,
): { shouldShowResizeHandles: boolean } => {
  const shouldShowResizeHandles = useMemo(() => {
    return resizable && !fullViewport && !isMobile;
  }, [resizable, fullViewport, isMobile]);

  return {
    shouldShowResizeHandles,
  };
};
