import { BusinessSummaryControllerProps } from '../../../../../controllers/business-summary-controller';
type BusinessSummaryMobileFooterProps = Pick<BusinessSummaryControllerProps, 'summary'>;
/**
 * A footer component for the business summary mobile view that displays the date and
 * provides buttons to copy the summary text and download
 */
export declare const BusinessSummaryMobileFooter: ({ summary, }: BusinessSummaryMobileFooterProps) => JSX.Element;
export {};
