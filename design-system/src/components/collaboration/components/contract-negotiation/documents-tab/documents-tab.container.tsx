import type { ReactElement } from 'react';

import { useContractNegotiationContext } from '../../../logic/contexts';

import { DocumentsTab } from './documents-tab';

import type { IContractNegotiationContext } from '../../../interfaces';

type DocumentId = IContractNegotiationContext['selectedDocument']['document']['id'];

export interface DocumentsTabContainerProps {
  'data-testid'?: string;
  onClose(): void;
}

/**
 * Document Tab container, which makes all context connections,
 * supplying clean props to data rendering component.
 */
export const DocumentsTabContainer = ({
  'data-testid': dataTestId = 'documents-tab',
  onClose,
}: DocumentsTabContainerProps): ReactElement => {
  const {
    isLoading,
    selectedDocument: { document: { id: selectedDocumentId = -1 } } = { document: {} },
    readOnlyDocuments,
    negotiableDocuments,
    updateSelectedDocument,
  } = useContractNegotiationContext();

  /** Execute the updateSelectedDocument function with the selected document id. */
  const handleClick = (id: DocumentId): void => {
    updateSelectedDocument(id);
  };

  return (
    <DocumentsTab
      data-testid={dataTestId}
      isLoading={isLoading}
      negotiableDocuments={negotiableDocuments}
      readOnlyDocuments={readOnlyDocuments}
      selectedDocumentId={selectedDocumentId}
      onClick={handleClick}
      onClose={onClose}
    />
  );
};
