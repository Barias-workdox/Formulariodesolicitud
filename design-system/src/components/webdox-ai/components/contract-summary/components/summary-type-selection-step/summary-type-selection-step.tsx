import { Result, Term } from '@carbon/icons-react';

import { StatefulMessageCard } from '@components/message-card';
import { useTranslation } from '@components/utils';
import { noop } from '@utils/noop';

import { StyledRoot, messageCardOverrides } from './summary-type-selection-step.styles';

import type { ContractSummaryStepProps } from '../../contract-summary.types';

/**
 * SummaryTypeSelectionStep component renders a selection screen for choosing the desired summary type.
 * It displays two message cards representing the available options: "Summary" and "Report".
 */
export const SummaryTypeSelectionStep = ({
  'data-testid': dataTestId,
  onClick = noop,
  disabled = false,
}: ContractSummaryStepProps): JSX.Element => {
  const { t } = useTranslation();

  return (
    <StyledRoot>
      <StatefulMessageCard
        data-testid={`${dataTestId}--generate-summary`}
        title={t('webdoxAI.dataExtraction.contractSummaryGeneration.title')}
        description={t('webdoxAI.dataExtraction.contractSummaryGeneration.description')}
        Icon={Term}
        onClick={() => onClick('summary')}
        service="brain"
        overrides={messageCardOverrides}
        disabled={disabled}
      />
      <StatefulMessageCard
        data-testid={`${dataTestId}--generate-inform`}
        title={t('webdoxAI.dataExtraction.contractReportGeneration.title')}
        description={t('webdoxAI.dataExtraction.contractReportGeneration.description')}
        onClick={() => onClick('report')}
        Icon={Result}
        service="brain"
        overrides={messageCardOverrides}
        disabled={disabled}
      />
    </StyledRoot>
  );
};
