import type { ReactElement } from 'react';
import { useMemo } from 'react';

import { Button } from '@components/button';
import { Notification } from '@components/notification/next';
import { Text } from '@components/text';
import { useTranslation } from '@components/utils';
import { usePlanUsage } from '@components/webdox-ai/hooks/plan-usage.hook';

import { ReactComponent as BrainCompanionLogo } from '../../../../assets/icons/webdox-ai/brain-icon.svg';
import { UsagePlanCounter } from '../plan-usage';

import { MetadataDescriptiveLoading } from './components/data-extraction-beta/components/metadata-descriptive-loading';
import { DataExtractionListItem } from './components/data-extraction-list-item';
import { METADATA_TYPES } from './data-extraction.constants';
import { StyledDataExtractionContainer } from './data-extraction.styles';
import { isDocumentMetadata } from './data-extraction.utils';
import {
  StyledContainer,
  StyledContent,
  StyledHeader,
  StyledDataExtractionPlanCounter,
} from './styled-components';

import type { DataExtractionProps, GroupedDataItem } from './data-extraction.interfaces';
import type { DocumentMetadata } from '@components/webdox-ai/interfaces';

/**
 * Component displaying the data attribuets extracted by the Data Extraction feature
 */
export const DataExtraction = ({
  'data-testid': dataTestId,
  contractKinds,
  isMetadataLoading,
  isPreparingMetadata,
  metadataList,
  onDataExtractionHighlight,
  onGoToClassificationButtonClick,
  onGoToEntitiesDirectoryClick,
}: DataExtractionProps): ReactElement => {
  const { t } = useTranslation();

  const { availablePlans, isPlanUsageActive } = usePlanUsage();

  /**
   * Re-structure and group the metadalist data so it can be consumed by the component
   * DataExtractionListItem. it will only re-render if metadataList prop is updated
   */
  const groupedMetadata = useMemo(() => {
    const groupedParty: DocumentMetadata[] = [];
    const groupedCounterParty: DocumentMetadata[] = [];
    const groupedData: GroupedDataItem[] = [];

    metadataList.forEach((metadata) => {
      if (!isDocumentMetadata(metadata)) return;

      if (!METADATA_TYPES.includes(metadata.dataType)) {
        return;
      }

      if (metadata.keyName === 'amount') {
        groupedData.push({ key: metadata.keyName, values: [metadata] });
      }

      if (metadata.keyName === 'start_date' || metadata.keyName === 'end_date') {
        groupedData.push({ key: metadata.keyName, values: [metadata] });
      }

      if (metadata.keyName === 'counterparty') {
        groupedCounterParty.push(metadata);
      }

      if (metadata.keyName === 'party') {
        groupedParty.push(metadata);
      }

      if (metadata.keyName === 'contract_type') {
        const contractKind = contractKinds.find((item) => item.value === metadata.value);

        groupedData.push({
          key: metadata.keyName,
          values: [{ ...metadata, value: String(contractKind?.label ?? '-') }],
        });
      }
    });

    /**
     * All 'party' metadataType will be rendered in the same list
     */
    if (groupedParty.length > 0) {
      groupedData.push({
        key: 'party',
        values: groupedParty,
      });
    }

    /**
     * All 'counterparty' metadataType will be rendered in the same list
     */
    if (groupedCounterParty.length > 0) {
      groupedData.push({
        key: 'counterparty',
        values: groupedCounterParty,
      });
    }

    return groupedData;
  }, [metadataList, contractKinds]);

  const isMetadataListEmpty = groupedMetadata.length === 0;

  return (
    <StyledDataExtractionContainer>
      {isPreparingMetadata && (
        <Notification
          description={t('webdoxAI.dataExtraction.metadataAreLoadingMsg')}
          Icon={BrainCompanionLogo}
          kind="warning"
        />
      )}
      <StyledContainer $fullHeight={isPreparingMetadata}>
        {isPlanUsageActive && (
          <StyledDataExtractionPlanCounter>
            <UsagePlanCounter
              availablePlans={availablePlans}
              planName="data_extraction"
            />
          </StyledDataExtractionPlanCounter>
        )}
        <StyledHeader>
          <Text
            variant="body"
            margin={0}
            fontWeight="700"
            color="neutralStrong"
          >
            {t('webdoxAI.dataExtraction.dataExtractionTitle')}
          </Text>
          <Button
            kind="secondary"
            size="32px"
            onClick={onGoToClassificationButtonClick}
          >
            {t('webdoxAI.dataExtraction.goToClassification')}
          </Button>
        </StyledHeader>
        <StyledContent>
          {isPreparingMetadata ? (
            <MetadataDescriptiveLoading />
          ) : (
            <>
              {isMetadataListEmpty && (
                <Notification
                  description={t('webdoxAI.dataExtraction.metadataListIsEmpty')}
                  kind="negative"
                />
              )}
              {[...groupedMetadata].map((metadataItem) => {
                return (
                  <DataExtractionListItem
                    data-testid={`${dataTestId}__list-item`}
                    key={metadataItem.key}
                    keyName={metadataItem.key}
                    metadataItem={metadataItem.values}
                    isDisabled={isMetadataLoading || isPreparingMetadata}
                    onGoToEntitiesDirectoryClick={onGoToEntitiesDirectoryClick}
                    handleClick={onDataExtractionHighlight}
                  />
                );
              })}
            </>
          )}
        </StyledContent>
      </StyledContainer>
    </StyledDataExtractionContainer>
  );
};
