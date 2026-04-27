import { useMemo, useRef } from 'react';
import type { PropsWithChildren } from 'react';

import { Draggable } from '@carbon/icons-react';

import { ReactComponent as Extend } from '@assets/icons/extend.svg';
import {
  CONTAINER_TRANSITION,
  DEFAULT_RESIZABLE_CONTAINER_VALUES,
} from '@components/dynamic-dialog/dynamic-dialog.constants';
import { fullViewportStyles } from '@components/dynamic-dialog/dynamic-dialog.styles';
import { calcContainerPlacements } from '@components/dynamic-dialog/utils/calc-container-placements.util';
import { useCss } from '@components/utils/hooks/use-css';
import { COMMON_ICON_SIZE_16 } from '@constants/common.constants';
import { PLACEMENT, PLACEMENT_MARGIN } from '@constants/placement.constants';
import { RESIZE_DIRECTIONS } from '@constants/resizable-element.constants';
import { useDraggableElement } from '@hooks/use-draggable-element.hook';
import { useResizableElement } from '@hooks/use-resizable-element/use-resizable-element.hook';

import {
  StyledBottomHandle,
  StyledBottomLeftCornerHandle,
  StyledBottomRightCornerHandle,
  StyledContainer,
  StyledContent,
  StyledDragHandlerContainer,
  StyledLeftHandle,
  StyledRightHandle,
  StyledTopHandle,
  StyledTopLeftCornerHandle,
  StyledTopRightCornerHandle,
} from './styled-components';
import { StyledChildrenWrapper } from './styled-components/styled-children-wrapper';

import type { PlacementType, WithTestId } from '@interfaces/common.interfaces';

export type ResizableContainerProps = PropsWithChildren<
  WithTestId<{
    initialWidth?: number;
    initialHeight?: number;
    /** Overrides default top value. */
    initialTop?: number;
    /** Overrides default left value. */
    initialLeft?: number;
    /** Overrides default right value. */
    initialRight?: number;
    /** Overrides default bottom value. */
    initialBottom?: number;
    minWidth?: number;
    minHeight?: number;
    maxWidth?: number;
    maxHeight?: number;
    placement?: PlacementType;
    zIndex?: number;
    fullViewport?: boolean;
  }>
>;

/**
 * A component that renders a resizable container.
 */
export const ResizableContainer = ({
  'data-testid': dataTestId = 'resizable-container',
  children,
  placement = PLACEMENT.BOTTOM_RIGHT,
  zIndex,
  fullViewport = false,
  initialBottom,
  initialLeft,
  initialRight,
  initialTop,
  ...rest
}: ResizableContainerProps): JSX.Element => {
  const { initialHeight, initialWidth, maxHeight, maxWidth, minHeight, minWidth } = {
    ...DEFAULT_RESIZABLE_CONTAINER_VALUES,
    ...rest,
  };

  const { theme } = useCss();

  const rootRef = useRef<HTMLDivElement | null>(null);
  const { handlePointerDown } = useDraggableElement({
    elementRef: rootRef,
    margin: PLACEMENT_MARGIN,
    parent: window,
  });
  const { handleResize } = useResizableElement({
    elementRef: rootRef,
    margin: fullViewport ? 0 : PLACEMENT_MARGIN,
  });

  const containerPosition = useMemo(
    () =>
      calcContainerPlacements({
        initialHeight,
        initialWidth,
        minHeight,
        minWidth,
        initialBottom,
        initialLeft,
        initialRight,
        initialTop,
      })[placement],
    [
      initialBottom,
      initialHeight,
      initialLeft,
      initialRight,
      initialTop,
      initialWidth,
      minHeight,
      minWidth,
      placement,
    ],
  );

  return (
    <StyledContainer
      data-testid={dataTestId}
      ref={rootRef}
      $placement={placement}
      $zIndex={zIndex}
      $fullViewport={fullViewport}
      // Inline styles are necessary to properly control the resizing behavior.
      style={{
        height: initialHeight,
        width: initialWidth,
        minWidth,
        maxWidth,
        minHeight,
        maxHeight,
        transition: CONTAINER_TRANSITION,
        ...containerPosition,
        ...(fullViewport && fullViewportStyles),
      }}
    >
      <StyledContent>
        {!fullViewport && (
          <>
            <StyledLeftHandle
              data-testid="left-handle"
              onPointerDown={(event: React.PointerEvent) =>
                handleResize(event, [RESIZE_DIRECTIONS.LEFT])
              }
            />
            <StyledRightHandle
              data-testid="right-handle"
              onPointerDown={(event: React.PointerEvent) =>
                handleResize(event, [RESIZE_DIRECTIONS.RIGHT])
              }
            />
            <StyledTopHandle
              data-testid="top-handle"
              onPointerDown={(event: React.PointerEvent) =>
                handleResize(event, [RESIZE_DIRECTIONS.TOP])
              }
            />
            <StyledBottomHandle
              data-testid="bottom-handle"
              onPointerDown={(event: React.PointerEvent) =>
                handleResize(event, [RESIZE_DIRECTIONS.BOTTOM])
              }
            />
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
            <StyledBottomRightCornerHandle
              data-testid="bottom-right-corner-handle"
              onPointerDown={(event: React.PointerEvent) =>
                handleResize(event, [RESIZE_DIRECTIONS.BOTTOM, RESIZE_DIRECTIONS.RIGHT])
              }
            >
              <Extend />
            </StyledBottomRightCornerHandle>
            <StyledBottomLeftCornerHandle
              data-testid="bottom-left-corner-handle"
              onPointerDown={(event: React.PointerEvent) =>
                handleResize(event, [RESIZE_DIRECTIONS.BOTTOM, RESIZE_DIRECTIONS.LEFT])
              }
            >
              <Extend
                style={{
                  rotate: '90deg',
                }}
              />
            </StyledBottomLeftCornerHandle>

            <StyledDragHandlerContainer
              data-testid="drag-handler"
              onPointerDown={handlePointerDown}
            >
              <Draggable
                width={COMMON_ICON_SIZE_16}
                height={COMMON_ICON_SIZE_16}
                color={theme.colors.neutralSubdued}
                style={{
                  rotate: '90deg',
                }}
              />
            </StyledDragHandlerContainer>
          </>
        )}
        <StyledChildrenWrapper $withPaddingBottom={!fullViewport}>{children}</StyledChildrenWrapper>
      </StyledContent>
    </StyledContainer>
  );
};
