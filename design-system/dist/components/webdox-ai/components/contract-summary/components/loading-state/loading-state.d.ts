import { ChatAssistantContractSummaryType } from '../../../../interfaces';
export interface LoadingStateProps {
    summaryType: ChatAssistantContractSummaryType;
}
/**
 * LoadingState component
 *
 * Displays a loading indicator and a message while the contract summary or report is being generated.
 */
export declare const LoadingState: ({ summaryType }: LoadingStateProps) => JSX.Element;
