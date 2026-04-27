import type { AssistantTypeProps, DocumentMetadata } from '@components/webdox-ai/interfaces';

export type DataExtractionProps = Pick<
  AssistantTypeProps,
  | 'contractKinds'
  | 'data-testid'
  | 'isContractKindLoading'
  | 'isMetadataLoading'
  | 'isPreparingMetadata'
  | 'metadataList'
  | 'zIndex'
  | 'onDataExtractionHighlight'
  | 'onGoToClassificationButtonClick'
  | 'onGoToEntitiesDirectoryClick'
>;

export type GroupedDataItem = {
  key: string;
  values: DocumentMetadata[];
};
