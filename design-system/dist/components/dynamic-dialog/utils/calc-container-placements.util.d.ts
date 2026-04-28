import { CSSProperties } from 'react';
import { PlacementType } from '../../../interfaces/common.interfaces';
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
/**
 * Calculates the placements for a container based on its initial dimensions and position.
 */
export declare const calcContainerPlacements: ({ initialHeight, initialWidth, minHeight, minWidth, initialTop, initialLeft, initialRight, initialBottom, }: CalcContainerPositionParams) => Record<PlacementType, CSSProperties>;
export {};
