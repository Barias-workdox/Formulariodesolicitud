import { ReactNode, PropsWithChildren } from 'react';
import { PopoverProps } from '../../../popover';
import { WithZIndex } from '../../../../interfaces/common.interfaces';
export type UsageOverviewPopoverProps = WithZIndex & PropsWithChildren<{
    placement?: PopoverProps['placement'];
    header?: ReactNode;
    body?: ReactNode;
    footer?: ReactNode;
}>;
/**
 * A popover component for displaying the usage overview of the WebdoxAI.
 */
export declare const UsageOverviewPopover: {
    ({ children, header, body, footer, placement, zIndex, }: UsageOverviewPopoverProps): JSX.Element;
    Header: ({ title, subtitle, startEnhancer, close, }: import('./components').UsageOverviewPopoverHeaderProps) => JSX.Element;
    Body: ({ description, disclaimer, progressBarLabelText, remainingRequests, totalRequests, warningDescription, isPlanUnlimited, }: import('./components').UsageOverviewPopoverBodyProps) => JSX.Element;
};
