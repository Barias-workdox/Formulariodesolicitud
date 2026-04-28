import { AssistantTypeProps, ChatAssistantContractSummaryType } from '../../interfaces';
import { WithTestId } from '../../../../interfaces/common.interfaces';
export type ContractSummaryStepProps = WithTestId & Pick<AssistantTypeProps, 'contractSummary' | 'zIndex' | 'onContractSummaryCopy' | 'contractSummaryUpdatedAt' | 'onSummaryScroll'> & {
    disabled?: boolean;
    onClick?(summaryType: ChatAssistantContractSummaryType): void;
    onClickBack?(): void;
};
