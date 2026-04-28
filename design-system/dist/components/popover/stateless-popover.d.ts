import { ReactElement } from 'react';
import { PopoverProps as BasePopoverProps } from 'baseui/popover';
export type StatelessPopoverProps = BasePopoverProps & {
    /**
     * A Prop required to work with zIndex of `DocumentViewerModal` legacy component
     *
     * @deprecated Only required for legacy support with `DocumentViewerModal`
     */
    zIndex?: number;
};
/**
 * StatelessPopover is a styled wrapper around Base Web's Popover component.
 */
export declare const StatelessPopover: ({ children, overrides, zIndex, ...rest }: StatelessPopoverProps) => ReactElement;
