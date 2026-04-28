interface BusinessSummaryDesktopFooterProps {
    summary: string;
    date?: string;
    onDownload?(): void;
}
/**
 * Business Summary Desktop Footer component that displays the date and provides buttons to copy the summary text and download
 */
export declare const BusinessSummaryDesktopFooter: ({ summary, }: BusinessSummaryDesktopFooterProps) => JSX.Element;
export {};
