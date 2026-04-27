import type { ReactElement } from 'react';

import { useCss } from '@components/utils/hooks/use-css';
import { useTranslation } from '@components/utils/i18n/utils';

import { HeaderTab } from '../header-tab';

import { DocumentsList } from './components';
import { styles } from './documents-tab.styles';

import type { IContractNegotiationContext } from '../../../interfaces';

type DocumentId = IContractNegotiationContext['selectedDocument']['document']['id'];

export type DocumentsTabProps = Pick<
  IContractNegotiationContext,
  'negotiableDocuments' | 'readOnlyDocuments' | 'isLoading'
> & {
  'data-testid'?: string;
  selectedDocumentId: DocumentId;
  onClick(id: DocumentId): void;
  onClose(): void;
};

/**
 * DocumentsTab is a component that renders two document table: negotiable document table
 * and background document table.
 */
export const DocumentsTab = ({
  'data-testid': dataTestId = 'documents-tab',
  isLoading = false,
  negotiableDocuments,
  readOnlyDocuments,
  selectedDocumentId = -1,
  onClick,
  onClose,
}: DocumentsTabProps): ReactElement => {
  const { t } = useTranslation();
  const { tabContentStyles, documentsTabContainer } = useCss(styles);

  /** Execute the updateSelectedDocument function with the selected document id. */
  const handleClick = (id: DocumentId): void => {
    onClick(id);
  };

  return (
    <div className={documentsTabContainer}>
      <HeaderTab
        data-testid={dataTestId}
        title={t('contractNegotiationCollaboration.documentsTab.documents')}
        onClose={onClose}
      />
      <div className={tabContentStyles}>
        <DocumentsList
          dataTestId={`${dataTestId}__negotiable-documents`}
          listHeadingText={t('contractNegotiationCollaboration.documentsTab.negotiable')}
          selectedDocumentId={selectedDocumentId}
          documents={negotiableDocuments}
          isLoading={isLoading}
          onClick={handleClick}
        />

        {readOnlyDocuments.length > 0 && (
          <DocumentsList
            dataTestId={`${dataTestId}__readonly-documents`}
            listHeadingText={t('contractNegotiationCollaboration.documentsTab.background')}
            selectedDocumentId={selectedDocumentId}
            documents={readOnlyDocuments}
            isLoading={isLoading}
            onClick={handleClick}
          />
        )}
      </div>
    </div>
  );
};
