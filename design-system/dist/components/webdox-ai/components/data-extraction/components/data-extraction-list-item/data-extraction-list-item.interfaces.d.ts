import { DocumentMetadata } from '../../../../interfaces/document-metadata.interfaces';
export type DataExtractionListItemProps = {
    metadataItem: DocumentMetadata[];
    'data-testid': string;
    keyName: string;
    isDisabled: boolean;
    handleClick(metadata: DocumentMetadata): void;
    onGoToEntitiesDirectoryClick(): void;
};
