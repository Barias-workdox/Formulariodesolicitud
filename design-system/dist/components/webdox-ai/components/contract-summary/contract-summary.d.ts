import { AssistantTypeProps } from '../../interfaces';
import { WithTestId } from '../../../../interfaces/common.interfaces';
export type ContractSummaryProps = WithTestId & Pick<AssistantTypeProps, 'onGenerateContractSummary' | 'isContractSummaryLoading' | 'contractSummary' | 'onSummaryScroll' | 'zIndex' | 'onContractSummaryCopy' | 'contractSummaryUpdatedAt'>;
/**
 * ContractSummary component renders a contract summary based on the provided contract data.
 * It allows the user to select the desired summary type and view the generated summary.
 */
export declare const ContractSummary: ({ "data-testid": dataTestId, contractSummary, contractSummaryUpdatedAt, isContractSummaryLoading, onContractSummaryCopy, onGenerateContractSummary, onSummaryScroll, zIndex, }: ContractSummaryProps) => JSX.Element;
