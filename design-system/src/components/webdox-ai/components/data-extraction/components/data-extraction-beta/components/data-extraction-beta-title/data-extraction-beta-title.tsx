import { ReactComponent as DataExtractionIcon } from '@assets/icons/webdox-ai/data-extraction-icon.svg';
import { Text } from '@components/text';
import { StatefulTooltipNext } from '@components/tooltip-next';
import { useTranslation } from '@components/utils';
import { DSTrans } from '@components/utils/i18n/translation-component';
import { DATA_EXTRACTION_BETA_ICON_SIZE } from '@components/webdox-ai/constants/webdox-ai.constants';

import {
  StyledContainer,
  StyledIconContainer,
  StyledStrongText,
} from './data-extraction-beta-title.styles';

import type { AssistantTypeProps } from '@components/webdox-ai/interfaces';
import type { WithTestId } from '@interfaces/common.interfaces';

export type DataExtractionBetaProps = WithTestId<Pick<AssistantTypeProps, 'zIndex'>>;

/** A component that renders text to be used as a title in ContractSummaryForm. */
export const DataExtractionBetaTitle = ({
  'data-testid': dataTestId,
  zIndex,
}: DataExtractionBetaProps): JSX.Element => {
  const { t } = useTranslation();

  return (
    <StyledContainer>
      <StatefulTooltipNext
        showArrow
        placement="top"
        zIndex={zIndex}
        content={
          <DSTrans
            components={{
              strong: <StyledStrongText />,
            }}
            i18nKey="webdoxAI.dataExtraction.dataExtractionDisclaimer"
          />
        }
      >
        <StyledIconContainer>
          <DataExtractionIcon
            data-testid={`${dataTestId}--data-extraction-icon`}
            height={DATA_EXTRACTION_BETA_ICON_SIZE}
            width={DATA_EXTRACTION_BETA_ICON_SIZE}
            viewBox="0 0 20 20"
          />
        </StyledIconContainer>
      </StatefulTooltipNext>
      <Text
        variant="bodySmall"
        fontWeight="500"
        margin={0}
      >
        {t('webdoxAI.dataExtraction.testDataExtraction')}
      </Text>
    </StyledContainer>
  );
};
