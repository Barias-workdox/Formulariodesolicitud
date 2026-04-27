import { ChevronLeft } from '@carbon/icons-react';

import { useTranslation } from '@components/utils';
import { useDateUtilsWithLocale } from '@components/utils/hooks/use-date-util-with-locale';
import { ActionIconButton } from '@components/webdox-ai/components/action-icon-button';
import { CopyToClipboardButton } from '@components/webdox-ai/components/copy-to-clipboard-button';
import { StyledBaseParagraphText } from '@components/webdox-ai/components/styled-base-paragraph-text';

import {
  StyledActionButtonsContainer,
  StyledContractSummaryFooter,
} from './contract-summary-footer.styles';

import type { AssistantTypeProps } from '@components/webdox-ai/interfaces';
import type { WithTestId } from '@interfaces/common.interfaces';

export type ContractSummaryFooterProps = WithTestId &
  Pick<
    AssistantTypeProps,
    'contractSummary' | 'zIndex' | 'onContractSummaryCopy' | 'contractSummaryUpdatedAt'
  > & {
    summaryClipboardItem?: ClipboardItem;
    onClickBack(): void;
  };

/** Component that displays a group of action buttons to render as contract summary footer. */
export const ContractSummaryFooter = ({
  'data-testid': dataTestId,
  contractSummary,
  contractSummaryUpdatedAt,
  summaryClipboardItem,
  zIndex,
  onClickBack,
  onContractSummaryCopy,
}: ContractSummaryFooterProps): JSX.Element => {
  const { t } = useTranslation();
  const { formatDateAsText } = useDateUtilsWithLocale();

  return (
    <StyledContractSummaryFooter>
      <StyledActionButtonsContainer>
        <ActionIconButton
          tooltipContent={t('general.goBack')}
          Icon={<ChevronLeft />}
          onClick={onClickBack}
          dataTestId={`${dataTestId}--back`}
        />
        <StyledBaseParagraphText color="neutralDepressed">
          {formatDateAsText(contractSummaryUpdatedAt, true)}
        </StyledBaseParagraphText>
      </StyledActionButtonsContainer>
      <StyledActionButtonsContainer>
        <CopyToClipboardButton
          data-testid={`${dataTestId}--copy`}
          value={summaryClipboardItem}
          tooltipProps={{ content: undefined }}
          zIndex={zIndex}
          onCopy={() => onContractSummaryCopy(contractSummary)}
        />
      </StyledActionButtonsContainer>
    </StyledContractSummaryFooter>
  );
};
