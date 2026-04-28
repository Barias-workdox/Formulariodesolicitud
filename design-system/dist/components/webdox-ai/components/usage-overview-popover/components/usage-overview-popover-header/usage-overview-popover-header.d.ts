import { ReactNode } from 'react';
export type UsageOverviewPopoverHeaderProps = {
    /** Title of the usage overview popover header. */
    title?: string;
    /** Subtitle of the usage overview popover header. */
    subtitle?: string;
    /** Start enhancer of the usage overview popover header. */
    startEnhancer?: ReactNode;
    /**
     * Function to close the popover. When it is used within the UsageOverviewPopover component,
     * it will be passed as a prop by the popover.
     */
    close?(): void;
};
/**
 * A header component for the usage overview popover.
 */
export declare const UsageOverviewPopoverHeader: ({ title, subtitle, startEnhancer, close, }: UsageOverviewPopoverHeaderProps) => JSX.Element;
