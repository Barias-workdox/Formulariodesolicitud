import type {
  AssistantTypeProps,
  ChatAssistantContractSummaryType,
} from '@components/webdox-ai/interfaces';
import type { WithTestId } from '@interfaces/common.interfaces';

export type ContractSummaryStepProps = WithTestId &
  Pick<
    AssistantTypeProps,
    | 'contractSummary'
    | 'zIndex'
    | 'onContractSummaryCopy'
    | 'contractSummaryUpdatedAt'
    | 'onSummaryScroll'
  > & {
    disabled?: boolean;
    onClick?(summaryType: ChatAssistantContractSummaryType): void;
    onClickBack?(): void;
  };
