export type UsageOverviewPopoverBodyProps = {
    /** Description of the usage overview. */
    description: string;
    /** Disclaimer of the usage overview. This will be displayed at the bottom of the usage overview. */
    disclaimer?: string;
    /** Text of the progress bar label. */
    progressBarLabelText: string;
    /** Number of requests remaining. */
    remainingRequests: number;
    /** Total number of requests available. */
    totalRequests: number;
    /** Description of the warning notification. This will be displayed when the remaining requests are 0.*/
    warningDescription?: string;
    /** it checks if the plan is unlimited. Decides if the progressBar should be render */
    isPlanUnlimited?: boolean;
};
/**
 * A body component for the usage overview popover.
 */
export declare const UsageOverviewPopoverBody: ({ description, disclaimer, progressBarLabelText, remainingRequests, totalRequests, warningDescription, isPlanUnlimited, }: UsageOverviewPopoverBodyProps) => JSX.Element;
