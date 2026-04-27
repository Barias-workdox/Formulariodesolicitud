import { useCallback, useState } from 'react';

import type { DynamicDialogProps } from '../dynamic-dialog.interfaces';

type UseDialogStateProps = Pick<
  DynamicDialogProps,
  'fullViewport' | 'onClose' | 'onFullViewportChange'
>;

/**
 * Hook to manage dialog state
 */
export const useDialogState = ({
  fullViewport: controlledFullViewport,
  onClose,
  onFullViewportChange,
}: UseDialogStateProps): {
  fullViewport: boolean;
  close(): void;
  updateFullViewport(newValue: boolean): void;
} => {
  const [internalFullViewport, setInternalFullViewport] = useState(false);

  // Use controlled or internal full viewport state
  const fullViewport = controlledFullViewport ?? internalFullViewport;

  const close = useCallback(() => {
    onClose?.();
  }, [onClose]);

  const updateFullViewport = useCallback(
    (newValue: boolean) => {
      if (controlledFullViewport === undefined) {
        setInternalFullViewport(newValue);
      }

      onFullViewportChange?.(newValue);
    },
    [controlledFullViewport, onFullViewportChange],
  );

  return {
    fullViewport,
    close,
    updateFullViewport,
  };
};
