import type { ReactElement, RefObject } from 'react';

import { ReactComponent as ExtendIcon } from '@assets/icons/extend.svg';
import { PLACEMENT_MARGIN } from '@constants/placement.constants';
import { RESIZE_DIRECTIONS } from '@constants/resizable-element.constants';
import { useResizableElement } from '@hooks/use-resizable-element/use-resizable-element.hook';

import { MIN_DIALOG_HEIGHT, MIN_DIALOG_WIDTH } from '../dynamic-dialog.constants';

import {
  StyledBottomHandle,
  StyledBottomLeftCornerHandle,
  StyledBottomRightCornerHandle,
  StyledLeftHandle,
  StyledRightHandle,
  StyledTopHandle,
  StyledTopLeftCornerHandle,
  StyledTopRightCornerHandle,
} from './styled-components';

interface ResizeHandlesProps {
  containerRef: RefObject<HTMLDivElement>;
  disabled?: boolean;
}

/**
 * Resize handles for the DynamicDialog
 */
export const ResizeHandles = ({
  containerRef,
  disabled = false,
}: ResizeHandlesProps): ReactElement | null => {
  const { handleResize } = useResizableElement({
    elementRef: containerRef,
    margin: PLACEMENT_MARGIN,
    minWidth: MIN_DIALOG_WIDTH,
    minHeight: MIN_DIALOG_HEIGHT,
  });

  if (disabled) {
    return null;
  }

  return (
    <>
      {/* Edge handles */}
      <StyledLeftHandle
        data-testid="left-handle"
        onPointerDown={(event: React.PointerEvent) => handleResize(event, [RESIZE_DIRECTIONS.LEFT])}
      />
      <StyledRightHandle
        data-testid="right-handle"
        onPointerDown={(event: React.PointerEvent) =>
          handleResize(event, [RESIZE_DIRECTIONS.RIGHT])
        }
      />
      <StyledTopHandle
        data-testid="top-handle"
        onPointerDown={(event: React.PointerEvent) => handleResize(event, [RESIZE_DIRECTIONS.TOP])}
      />
      <StyledBottomHandle
        data-testid="bottom-handle"
        onPointerDown={(event: React.PointerEvent) =>
          handleResize(event, [RESIZE_DIRECTIONS.BOTTOM])
        }
      />

      {/* Corner handles */}
      <StyledTopLeftCornerHandle
        data-testid="top-left-corner-handle"
        onPointerDown={(event: React.PointerEvent) =>
          handleResize(event, [RESIZE_DIRECTIONS.TOP, RESIZE_DIRECTIONS.LEFT])
        }
      />
      <StyledTopRightCornerHandle
        data-testid="top-right-corner-handle"
        onPointerDown={(event: React.PointerEvent) =>
          handleResize(event, [RESIZE_DIRECTIONS.TOP, RESIZE_DIRECTIONS.RIGHT])
        }
      />
      <StyledBottomLeftCornerHandle
        data-testid="bottom-left-corner-handle"
        onPointerDown={(event: React.PointerEvent) =>
          handleResize(event, [RESIZE_DIRECTIONS.BOTTOM, RESIZE_DIRECTIONS.LEFT])
        }
      >
        <ExtendIcon style={{ rotate: '90deg' }} />
      </StyledBottomLeftCornerHandle>
      <StyledBottomRightCornerHandle
        data-testid="bottom-right-corner-handle"
        onPointerDown={(event: React.PointerEvent) =>
          handleResize(event, [RESIZE_DIRECTIONS.BOTTOM, RESIZE_DIRECTIONS.RIGHT])
        }
      >
        <ExtendIcon />
      </StyledBottomRightCornerHandle>
    </>
  );
};
