export interface BusinessSummaryProps {
    summary?: string;
    date?: string;
    toggleOpen?(): void;
    onDownload?(): void;
}
/**
 * Business Summary component that displays a summary of business information
 */
export declare const BusinessSummary: ({ summary, toggleOpen }: BusinessSummaryProps) => JSX.Element;
