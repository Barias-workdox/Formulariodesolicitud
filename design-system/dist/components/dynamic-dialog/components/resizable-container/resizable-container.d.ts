import { PropsWithChildren } from 'react';
import { PlacementType, WithTestId } from '../../../../interfaces/common.interfaces';
export type ResizableContainerProps = PropsWithChildren<WithTestId<{
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
}>>;
/**
 * A component that renders a resizable container.
 */
export declare const ResizableContainer: ({ "data-testid": dataTestId, children, placement, zIndex, fullViewport, initialBottom, initialLeft, initialRight, initialTop, ...rest }: ResizableContainerProps) => JSX.Element;
