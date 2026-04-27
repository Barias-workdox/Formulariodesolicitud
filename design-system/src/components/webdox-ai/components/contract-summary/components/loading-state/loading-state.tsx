import { Spinner } from '@components/spinner';
import { Text } from '@components/text';
import { useTranslation } from '@components/utils';

import { StyledRoot } from './loading-state.styles';

import type { ChatAssistantContractSummaryType } from '@components/webdox-ai/interfaces';

export interface LoadingStateProps {
  summaryType: ChatAssistantContractSummaryType;
}

/**
 * LoadingState component
 *
 * Displays a loading indicator and a message while the contract summary or report is being generated.
 */
export const LoadingState = ({ summaryType }: LoadingStateProps): JSX.Element => {
  const { t } = useTranslation();

  const loadingTextBySummaryType: Record<ChatAssistantContractSummaryType, string> = {
    report: t('webdoxAI.dataExtraction.contractReportGeneration.isLoading'),
    summary: t('webdoxAI.dataExtraction.contractSummaryGeneration.isLoading'),
  };

  return (
    <StyledRoot>
      <Text
        variant="bodySmall"
        margin={0}
      >
        {loadingTextBySummaryType[summaryType]}
      </Text>
      <div>
        <Spinner size="sm" />
      </div>
    </StyledRoot>
  );
};
