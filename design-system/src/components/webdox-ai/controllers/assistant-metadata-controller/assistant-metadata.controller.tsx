import type { ReactElement } from 'react';

import { useCss } from '@components/utils/hooks/use-css';

import { ContractSummary } from '../../components/contract-summary';
import { DataExtraction as DataExtractionSection } from '../../components/data-extraction';
import { DataExtractionBeta } from '../../components/data-extraction/components/data-extraction-beta';

import { styles } from './assistant-metadata-controller.styles';

import type { AssistantTypeProps } from '@components/webdox-ai/interfaces';

export type AssistantMetadataControllerProps = Pick<
  AssistantTypeProps,
  | 'contractKind'
  | 'contractKinds'
  | 'isContractKindLoading'
  | 'isMetadataLoading'
  | 'isPreparingMetadata'
  | 'metadataList'
  | 'contractSummary'
  | 'onContractKindChange'
  | 'onMetadataItemChange'
  | 'data-testid'
  | 'conversationDisabled'
  | 'zIndex'
  | 'onSummaryScroll'
  | 'onContractSummaryCopy'
  | 'customPrompts'
  | 'onExecuteCustomPromptAction'
  | 'isDataExtractionEnabled'
  | 'onDataExtractionHighlight'
  | 'onGoToClassificationButtonClick'
  | 'onGoToEntitiesDirectoryClick'
>;

/**
 * The Assistant metadata controller containing the contract
 * form, metadata list and the minimal version of the chat composer
 */
export const AssistantMetadataController = (
  props: AssistantMetadataControllerProps,
): ReactElement => {
  const { wrapperStyles, bodyStyles } = useCss(styles);
  const { isDataExtractionEnabled } = props;

  return (
    <article className={wrapperStyles}>
      <section className={bodyStyles}>
        <ContractSummary {...props} />
        {isDataExtractionEnabled ? (
          <DataExtractionSection
            {...props}
            data-testid="data-extraction-form"
          />
        ) : (
          <DataExtractionBeta {...props} />
        )}
      </section>
    </article>
  );
};
