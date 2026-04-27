import { useMemo } from 'react';

import type { DynamicDialogContextValue } from '../dynamic-dialog.interfaces';

interface UseDialogContextProps {
  fullViewport: boolean;
  closable: boolean;
  draggable: boolean;
  resizable: boolean;
  isMobile: boolean;
  toggleFullViewport(): void;
  close(): void;
  handleDragStart(event: React.PointerEvent): void;
}

/**
 * Hook to create dialog context value
 */
export const useDialogContext = ({
  fullViewport,
  closable,
  draggable,
  resizable,
  isMobile,
  toggleFullViewport,
  close,
  handleDragStart,
}: UseDialogContextProps): DynamicDialogContextValue => {
  const contextValue = useMemo(
    (): DynamicDialogContextValue => ({
      fullViewport,
      closable,
      draggable,
      resizable,
      toggleFullViewport,
      close,
      isMobile,
      handleDragStart,
    }),
    [
      fullViewport,
      closable,
      draggable,
      resizable,
      toggleFullViewport,
      close,
      isMobile,
      handleDragStart,
    ],
  );

  return contextValue;
};
