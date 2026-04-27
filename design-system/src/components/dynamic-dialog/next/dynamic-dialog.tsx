import { useCallback, useMemo } from 'react';
import type { ReactElement } from 'react';

import { Layer } from 'baseui/layer';

import { PLACEMENT_MARGIN } from '@constants/placement.constants';
import { useDraggableElement } from '@hooks/use-draggable-element.hook';
import { useResponsiveProps } from '@utils/use-responsive-props.util';

import { ResizeHandles } from './components/resize-handles';
import { StyledDialogContainer } from './components/styled-components';
import { DynamicDialogProvider } from './context/dynamic-dialog.context';
import {
  DEFAULT_DIALOG_HEIGHT,
  DEFAULT_DIALOG_WIDTH,
  DEFAULT_PLACEMENT,
  MIN_DIALOG_HEIGHT,
  MIN_DIALOG_WIDTH,
  DIALOG_Z_INDEX,
} from './dynamic-dialog.constants';
import {
  useDialogContext,
  useDialogFullViewport,
  useDialogResize,
  useDialogState,
  useDialogStyles,
  useDynamicSizing,
} from './hooks';

import type { DynamicDialogProps } from './dynamic-dialog.interfaces';

/**
 * Enhanced DynamicDialog component with compound pattern support
 *
 * Features:
 * - Responsive design with mobile support
 * - Draggable and resizable when not in full viewport
 * - Full viewport mode toggle (occupies entire viewport)
 * - Customizable placement and dimensions
 * - Compound component pattern for flexible content
 */
export const DynamicDialog = ({
  dataTestId = 'dynamic-dialog',
  isOpen = false,
  initialWidth = DEFAULT_DIALOG_WIDTH,
  initialHeight = DEFAULT_DIALOG_HEIGHT,
  minWidth = MIN_DIALOG_WIDTH,
  minHeight = MIN_DIALOG_HEIGHT,
  maxWidth,
  maxHeight,
  placement = DEFAULT_PLACEMENT,
  fullViewport: controlledFullViewport,
  closable = true,
  draggable = true,
  resizable = true,
  zIndex: customZIndex,
  onClose,
  onFullViewportChange,
  children,
}: DynamicDialogProps): ReactElement | null => {
  const isMobile = useResponsiveProps({ medium: false }, true);

  const { fullViewport, close, updateFullViewport } = useDialogState({
    fullViewport: controlledFullViewport,
    onClose,
    onFullViewportChange,
  });

  // Dynamic sizing based on viewport and full viewport state
  const { width, height } = useDynamicSizing({
    initialWidth,
    initialHeight,
    minWidth,
    minHeight,
    fullViewport: fullViewport ?? false,
    isMobile: isMobile ?? false,
  });

  // Full viewport functionality
  const { containerRef } = useDialogFullViewport({
    fullViewport: fullViewport ?? false,
  });

  // Draggable functionality - only initialize when draggable is true and we have a ref
  const { handlePointerDown } = useDraggableElement({
    elementRef: draggable ? containerRef : null,
    margin: PLACEMENT_MARGIN,
    parent: window,
  });

  // Update draggable element ref
  const handleDragStart = useCallback(
    (event: React.PointerEvent) => {
      if (containerRef.current && draggable) {
        handlePointerDown(event);
      }
    },
    [handlePointerDown, containerRef, draggable],
  );

  // Toggle full viewport with state update
  const handleToggleFullViewport = useCallback(() => {
    const newValue = !fullViewport;

    updateFullViewport(newValue);
  }, [fullViewport, updateFullViewport]);

  // Context value for child components
  const contextValue = useDialogContext({
    fullViewport: fullViewport ?? false,
    closable,
    draggable,
    resizable,
    isMobile: isMobile ?? false,
    toggleFullViewport: handleToggleFullViewport,
    close,
    handleDragStart,
  });

  // Calculated values
  const finalZIndex = useMemo(() => {
    if (fullViewport ?? false) {
      return DIALOG_Z_INDEX.FULL_VIEWPORT;
    }

    return customZIndex ?? DIALOG_Z_INDEX.DEFAULT;
  }, [fullViewport, customZIndex]);

  const { shouldShowResizeHandles } = useDialogResize(
    resizable,
    fullViewport ?? false,
    isMobile ?? false,
  );
  const containerStyles = useDialogStyles({
    width,
    height,
    maxWidth,
    maxHeight,
    placement,
    fullViewport: fullViewport ?? false,
    isMobile: isMobile ?? false,
  });

  // Early return if dialog is not open - after all hooks
  if (!isOpen) {
    return null;
  }

  return (
    <Layer>
      <DynamicDialogProvider value={contextValue}>
        <StyledDialogContainer
          ref={containerRef}
          data-testid={dataTestId}
          $fullViewport={fullViewport ?? false}
          $zIndex={finalZIndex}
          $isMobile={isMobile ?? false}
          style={containerStyles}
        >
          {/* Children content */}
          {children}

          {/* Resize handles */}
          <ResizeHandles
            containerRef={containerRef}
            disabled={!shouldShowResizeHandles}
          />
        </StyledDialogContainer>
      </DynamicDialogProvider>
    </Layer>
  );
};
