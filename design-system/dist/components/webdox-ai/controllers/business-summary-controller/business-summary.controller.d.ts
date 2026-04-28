import { InformationPopoverCommonProps } from '../../components';
export interface BusinessSummaryControllerProps {
    summary?: string;
    isOpen: boolean;
    user?: InformationPopoverCommonProps['user'];
    toggleOpen(): void;
}
/**
 * Business Summary Controller component that displays a summary of business information
 */
export declare const BusinessSummaryController: ({ summary, isOpen, toggleOpen, user, }: BusinessSummaryControllerProps) => JSX.Element;
