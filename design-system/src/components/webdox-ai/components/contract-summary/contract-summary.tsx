import { useEffect, useState } from 'react';
import type { FunctionComponent } from 'react';

import { Notification } from '@components/notification/next';
import { Text } from '@components/text';
import { useTranslation } from '@components/utils';
import { noop } from '@utils/noop';

import { usePlanUsage } from '../../hooks/plan-usage.hook';
import { getUsagePlanData, planHasCredits } from '../../utils/webdox-ai-plans.utils';
import { UsagePlanCounter } from '../plan-usage';

import { ContractSummaryDetailStep } from './components/contract-summary-detail-step';
import { LoadingState } from './components/loading-state';
import { SummaryTypeSelectionStep } from './components/summary-type-selection-step';
import { StyledContainer, StyledContractSummaryHeader } from './styled-components';

import type { ContractSummaryStepProps } from './contract-summary.types';
import type {
  AssistantTypeProps,
  ChatAssistantContractSummaryType,
} from '@components/webdox-ai/interfaces';
import type { WithTestId } from '@interfaces/common.interfaces';

export type ContractSummaryProps = WithTestId &
  Pick<
    AssistantTypeProps,
    | 'onGenerateContractSummary'
    | 'isContractSummaryLoading'
    | 'contractSummary'
    | 'onSummaryScroll'
    | 'zIndex'
    | 'onContractSummaryCopy'
    | 'contractSummaryUpdatedAt'
  >;

type ContractSummaryStep = 'summaryTypeSelection' | 'contractSummaryDetail';

const ContractSummaryStepsMap: Record<
  ContractSummaryStep,
  FunctionComponent<ContractSummaryStepProps>
> = {
  summaryTypeSelection: SummaryTypeSelectionStep,
  contractSummaryDetail: ContractSummaryDetailStep,
};

/**
 * ContractSummary component renders a contract summary based on the provided contract data.
 * It allows the user to select the desired summary type and view the generated summary.
 */
export const ContractSummary = ({
  'data-testid': dataTestId,
  contractSummary,
  contractSummaryUpdatedAt,
  isContractSummaryLoading,
  onContractSummaryCopy,
  onGenerateContractSummary = noop,
  onSummaryScroll,
  zIndex,
}: ContractSummaryProps): JSX.Element => {
  const [currentStep, setCurrentStep] = useState<ContractSummaryStep>('summaryTypeSelection');
  const [selectedSummaryType, setSummaryTypeSelected] =
    useState<ChatAssistantContractSummaryType>('summary');

  const { t } = useTranslation();
  const { availablePlans, isPlanUsageActive } = usePlanUsage();

  const Step = ContractSummaryStepsMap[currentStep];

  const { usageStatus, remainingRequests } = getUsagePlanData(availablePlans, 'brain_companion');

  const canMakeRequest =
    !isPlanUsageActive || (usageStatus !== 'exhausted' && remainingRequests !== 0);

  /**
   * Handles the click event for selecting a summary type.
   * The user can make a request if:
   * 1. The plan feature control is NOT active (usage limits are not enforced yet)
   * OR
   * 2. The plan feature control IS active and:
   *    - the user's plan is not exhausted
   *    - and the user has remaining credits
   *
   * At the moment, all resources cost 1 unit,
   * so remaining === 0 means the request must be blocked.
   */
  const handleSummaryTypeClick: ContractSummaryStepProps['onClick'] = (summaryType): void => {
    if (
      !isPlanUsageActive ||
      (canMakeRequest && planHasCredits(availablePlans, 'brain_companion'))
    ) {
      onGenerateContractSummary(summaryType);
      setSummaryTypeSelected(summaryType);
      setCurrentStep('contractSummaryDetail');
      setCurrentStep('contractSummaryDetail');
    }
  };

  /**
   * When the component mounts, if `contractSummary` is defined,
   * set the current step directly to `contractSummaryDetail`.
   */
  useEffect(() => {
    if (contractSummary && contractSummary !== '') {
      setCurrentStep('contractSummaryDetail');
    }
  }, [contractSummary]);

  return (
    <StyledContainer>
      <StyledContractSummaryHeader>
        <Text
          variant="body"
          margin={0}
          fontWeight="700"
          color="neutralStrong"
        >
          {t('webdoxAI.dataExtraction.quickActionsTitle')}
        </Text>
        {isPlanUsageActive && (
          <UsagePlanCounter
            availablePlans={availablePlans}
            planName="brain_companion"
          />
        )}
      </StyledContractSummaryHeader>
      {isContractSummaryLoading ? (
        <LoadingState summaryType={selectedSummaryType} />
      ) : (
        <>
          {!canMakeRequest && (
            <Notification
              kind="negative"
              description={`${t('webdoxAI.planUsage.popovers.planTrial.notification')}`}
              size="small"
              closeable={false}
            />
          )}
          <Step
            contractSummary={contractSummary}
            contractSummaryUpdatedAt={contractSummaryUpdatedAt}
            data-testid={dataTestId}
            onClick={handleSummaryTypeClick}
            onClickBack={() => setCurrentStep('summaryTypeSelection')}
            onContractSummaryCopy={onContractSummaryCopy}
            onSummaryScroll={onSummaryScroll}
            disabled={!canMakeRequest}
            zIndex={zIndex}
          />
        </>
      )}
    </StyledContainer>
  );
};
