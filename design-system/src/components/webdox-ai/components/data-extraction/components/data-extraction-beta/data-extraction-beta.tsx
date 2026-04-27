import { useEffect, useState } from 'react';

import { SectionedCard } from '@components/layouts';
import { POPOVER_Z_INDEX } from '@components/popover/popover.constants';
import { Select } from '@components/select';
import { Tag } from '@components/tag';
import { useTranslation } from '@components/utils';

import { DataExtractionBetaLabel } from './components/data-extraction-beta-label';
import { DataExtractionBetaTitle } from './components/data-extraction-beta-title';
import { FormMetadataListItem } from './components/form-metadata-list-item';
import { MetadataDescriptiveLoading } from './components/metadata-descriptive-loading';
import { selectOverrides, useSectionedCardOverrides } from './data-extraction-beta.overrides';
import {
  inlineInputToggle,
  mapMetadataListValue,
  mapMetadataMode,
  resetValues,
} from './data-extraction-beta.utils';

import type { MetadataListMode } from './data-extraction-beta.interfaces';
import type { SelectValue } from '@components/select';
import type { AssistantTypeProps } from '@components/webdox-ai/interfaces';
import type { MessageListItemType } from '@components/webdox-ai/interfaces/chat-bot-component.interface';

export type DataExtractionBetaProps = Pick<
  AssistantTypeProps,
  | 'contractKind'
  | 'contractKinds'
  | 'data-testid'
  | 'isContractKindLoading'
  | 'isMetadataLoading'
  | 'isPreparingMetadata'
  | 'metadataList'
  | 'onContractKindChange'
  | 'onMetadataItemChange'
  | 'zIndex'
>;

/**
 * Component for displaying a chat contract summary form.
 */
export const DataExtractionBeta = ({
  'data-testid': dataTestId,
  contractKind,
  contractKinds,
  isContractKindLoading,
  isMetadataLoading,
  isPreparingMetadata,
  metadataList,
  onContractKindChange,
  onMetadataItemChange,
  zIndex,
}: DataExtractionBetaProps): JSX.Element => {
  const [modes, setModes] = useState<MetadataListMode>(mapMetadataMode(metadataList));
  const [localValues, setLocalValues] = useState(mapMetadataListValue(metadataList));

  /**
   * It is use to update async metadata modes state
   */
  useEffect(() => {
    setModes(mapMetadataMode(metadataList));
  }, [metadataList]);

  /**
   * It is use to update async metadata local values state
   */
  useEffect(() => {
    setLocalValues(mapMetadataListValue(metadataList));
  }, [metadataList]);

  const { t } = useTranslation();

  const { getSectionedCardOverrides } = useSectionedCardOverrides();

  /**
   * Handle toggle inline input
   */
  const handleToggle = (metadataId: MessageListItemType['id']): void => {
    setModes((prevMode) => {
      return {
        // reset all prevModes
        ...resetValues({ prevMode, metadataList, localValues }),
        [metadataId]: inlineInputToggle(prevMode[metadataId]),
      };
    });
  };

  /**
   * Handle inline input change
   */
  const handleOnChange = (metadataId: MessageListItemType['id'], value: string): void => {
    setLocalValues((prevValue) => ({
      ...prevValue,
      [metadataId]: value,
    }));
  };

  /**
   * Handle input submit
   */
  const handleSubmit = (metadataItem: MessageListItemType): void => {
    onMetadataItemChange({ ...metadataItem, value: localValues[metadataItem.id] });
    handleToggle(metadataItem.id);
  };

  /** Handle the selected value */
  const handleContractKindChange = (value: SelectValue): void => {
    if (Array.isArray(value)) {
      const [firstItem] = value;

      onContractKindChange(firstItem);
    }
  };

  return (
    <>
      <SectionedCard
        overrides={getSectionedCardOverrides({ fullHeight: isPreparingMetadata })}
        title={
          <DataExtractionBetaTitle
            zIndex={zIndex}
            data-testid={`${dataTestId}__title`}
          />
        }
        headerEnhancer={
          <Tag
            kind="accent"
            variant="overlay"
          >
            {t('general.betaVersion')}
          </Tag>
        }
      >
        {isPreparingMetadata ? (
          <MetadataDescriptiveLoading />
        ) : (
          <>
            <DataExtractionBetaLabel>
              {t('webdoxAI.dataExtraction.contractType')}
            </DataExtractionBetaLabel>
            <Select
              data-testid={`${dataTestId}--contract-kind-select`}
              id="contract-type-selector"
              placeholder={t('webdoxAI.dataExtraction.contractType')}
              value={contractKind}
              options={contractKinds}
              disabled={isContractKindLoading || isMetadataLoading}
              onChange={handleContractKindChange}
              size="mini"
              zIndex={POPOVER_Z_INDEX}
              overrides={selectOverrides}
            />
            {metadataList.map((metadataItem) => {
              const itemMode = modes[metadataItem.id];

              return (
                <FormMetadataListItem
                  key={metadataItem.id}
                  data-testid={`${dataTestId}__${metadataItem.id}`}
                  captionText={metadataItem.value ?? ''}
                  disabled={isMetadataLoading}
                  inputText={localValues[metadataItem.id] ?? ''}
                  label={metadataItem.label}
                  mode={itemMode}
                  onChange={(newValue): void => handleOnChange(metadataItem.id, newValue)}
                  onSubmit={(): void => handleSubmit(metadataItem)}
                  onToggle={(): void => handleToggle(metadataItem.id)}
                />
              );
            })}
          </>
        )}
      </SectionedCard>
    </>
  );
};
