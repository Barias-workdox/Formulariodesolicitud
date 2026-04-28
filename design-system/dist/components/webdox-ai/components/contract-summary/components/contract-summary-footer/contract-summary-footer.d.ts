import { AssistantTypeProps } from '../../../../interfaces';
import { WithTestId } from '../../../../../../interfaces/common.interfaces';
export type ContractSummaryFooterProps = WithTestId & Pick<AssistantTypeProps, 'contractSummary' | 'zIndex' | 'onContractSummaryCopy' | 'contractSummaryUpdatedAt'> & {
    summaryClipboardItem?: ClipboardItem;
    onClickBack(): void;
};
/** Component that displays a group of action buttons to render as contract summary footer. */
export declare const ContractSummaryFooter: ({ "data-testid": dataTestId, contractSummary, contractSummaryUpdatedAt, summaryClipboardItem, zIndex, onClickBack, onContractSummaryCopy, }: ContractSummaryFooterProps) => JSX.Element;
