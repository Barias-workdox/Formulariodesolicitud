import { ReactElement } from 'react';
import { PLACEMENT, PopoverPlacement, StatefulPopoverProps } from 'baseui/popover';
export type { PopoverPlacement as PopoverPlacementType };
export { PLACEMENT };
export interface PopoverProps extends StatefulPopoverProps {
    /**
     * A Prop required to work with zIndex of `DocumentViewerModal` legacy component
     *
     * @deprecated Only required for legacy support with `DocumentViewerModal`
     */
    zIndex?: number;
}
/**
 * Styled Popover component that wraps Base Web's StatefulPopover.
 */
export declare const Popover: ({ children, autoFocus, overrides, zIndex, ...rest }: PopoverProps) => ReactElement;
