import type { CSSProperties } from 'react';

import { PLACEMENT, PLACEMENT_MARGIN } from '@constants/placement.constants';

import type { PlacementType } from '@interfaces/common.interfaces';

type CalcContainerPositionParams = {
  initialHeight?: number;
  initialWidth?: number;
  minHeight?: number;
  minWidth?: number;
  initialTop?: number;
  initialLeft?: number;
  initialRight?: number;
  initialBottom?: number;
};

type PositionParams = {
  height: number;
  width: number;
  top?: number;
  left?: number;
  right?: number;
  bottom?: number;
};

/** Returns a CSS `calc()` expression to position an element based on viewport size. */
const calcFromViewport = (dimension: 'vw' | 'vh', size: number, offset = 0): string =>
  `calc(100${dimension} - ${size + offset}px)`;

/** Returns a CSS `calc()` expression to position an element based on its size and offset. */
const calcSizeWithOffset = (size: number, offset = 0): string => `calc(${size}px - ${offset}px)`;

/** Returns the styles for positioning a container based on its placement. */
const getPositionStyles = (
  placement: PlacementType,
  { height, width, top = 0, left = 0, right = 0, bottom = 0 }: PositionParams,
): CSSProperties => {
  const topOffset = PLACEMENT_MARGIN + top;
  const bottomOffset = PLACEMENT_MARGIN + bottom;
  const leftOffset = PLACEMENT_MARGIN + left;
  const rightOffset = PLACEMENT_MARGIN + right;

  switch (placement) {
    case PLACEMENT.TOP_LEFT:
      return {
        top: topOffset,
        left: leftOffset,
        right: calcSizeWithOffset(width, leftOffset),
        bottom: calcSizeWithOffset(height, topOffset),
      };
    case PLACEMENT.TOP_RIGHT:
      return {
        top: topOffset,
        right: rightOffset,
        left: calcFromViewport('vw', width, rightOffset),
        bottom: calcSizeWithOffset(height, topOffset),
      };
    case PLACEMENT.BOTTOM_LEFT:
      return {
        bottom: bottomOffset,
        left: leftOffset,
        top: calcFromViewport('vh', height, bottomOffset),
        right: calcSizeWithOffset(width, leftOffset),
      };
    case PLACEMENT.BOTTOM_RIGHT:
      return {
        bottom: bottomOffset,
        right: rightOffset,
        top: calcFromViewport('vh', height, bottomOffset),
        left: calcFromViewport('vw', width, rightOffset),
      };
    default:
      return {};
  }
};

/**
 * Calculates the placements for a container based on its initial dimensions and position.
 */
export const calcContainerPlacements = ({
  initialHeight,
  initialWidth,
  minHeight,
  minWidth,
  initialTop,
  initialLeft,
  initialRight,
  initialBottom,
}: CalcContainerPositionParams): Record<PlacementType, CSSProperties> => {
  const height = initialHeight ?? minHeight ?? 0;
  const width = initialWidth ?? minWidth ?? 0;

  return {
    [PLACEMENT.TOP_LEFT]: getPositionStyles(PLACEMENT.TOP_LEFT, {
      height,
      width,
      top: initialTop,
      left: initialLeft,
    }),
    [PLACEMENT.TOP_RIGHT]: getPositionStyles(PLACEMENT.TOP_RIGHT, {
      height,
      width,
      top: initialTop,
      right: initialRight,
    }),
    [PLACEMENT.BOTTOM_LEFT]: getPositionStyles(PLACEMENT.BOTTOM_LEFT, {
      height,
      width,
      bottom: initialBottom,
      left: initialLeft,
    }),
    [PLACEMENT.BOTTOM_RIGHT]: getPositionStyles(PLACEMENT.BOTTOM_RIGHT, {
      height,
      width,
      bottom: initialBottom,
      right: initialRight,
    }),
  };
};
