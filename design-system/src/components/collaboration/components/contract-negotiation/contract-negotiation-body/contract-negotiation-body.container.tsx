import { useMemo, useState } from 'react';
import type { ReactElement } from 'react';

import { useTranslation } from '@components/utils/index';

import { NewDocumentVersionDrawerContainer } from '../../../containers';
import { useContractNegotiationContext } from '../../../logic/contexts';
import { DocumentApprovalDrawerContainer } from '../document-approval-drawer';
import { useDocumentLastModificationText } from '../hooks/use-document-last-modification-text.hook';

import { ContractNegotiationBody } from './contract-negotiation-body';

import type { DocumentApprovalFormFields } from '../document-approval-drawer/document-approval-form.logic';
import type { NewDocumentVersionFormFields } from '../new-document-version-drawer/new-document-version-drawer.logic';
import type { SelectOption } from '@components/select';

export interface ContractNegotiationBodyContainerProps {
  'data-testid': string;
}

/**
 * ContractNegotiationBodyContainer component renders a document,
 * along with a header containing information about the document,
 * and a footer that allows users to approve the document or upload a new version of it.
 */
export const ContractNegotiationBodyContainer = ({
  'data-testid': dataTestId,
}: ContractNegotiationBodyContainerProps): ReactElement => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isNewVersionDrawerOpen, setIsNewVersionDrawerOpen] = useState(false);

  const { t } = useTranslation();

  const {
    collaborationDetails: { status: collaborationStatus },
    isApprovalDisabled,
    isDocumentPreviewLoading,
    isLoading,
    selectedDocument,
    selectedDocumentPreviewUrl,
    selectedDocumentAttachmentUrl,
    selectedDocumentVersions,
    selectedVersion,
    updateSelectedDocumentVersion,
    onApproveDocument,
    onDownloadDocument,
    onNewDocumentVersion,
    onWriteNewDocumentVersion,
  } = useContractNegotiationContext();

  const {
    status: documentStatus,
    approvedAt = '',
    document = { fileExt: 'doc', name: '', id: -1 },
  } = selectedDocument || {};
  const { negotiable } = document;

  const { uuid: selectedVersionUuid, versionNumber: selectedVersionNumber } = selectedVersion || {};

  const { lastModificationText } = useDocumentLastModificationText({
    document,
    selectedDocumentVersion: selectedVersion,
  });

  /**
   * The user banner is only visible if these conditions are true:
   *
   * 1. The document is negotiable (only these documents are valid for approval process)
   * 2. The status of the collaboration is active (this is because if the collaboration is
   * `finished` or `cancelled` the info banner is at collaboration scope instead of user scope)
   * 3. The document status is not `rejected`
   */
  const showBanner =
    negotiable && collaborationStatus === 'active' && documentStatus !== 'rejected';

  /**
   * If the collaboration is read only the following functions are not available:
   *
   * - Upload new version
   * - Approve document
   */
  const isReadOnly = !negotiable || collaborationStatus !== 'active';

  const documentVersionOptions: SelectOption[] = useMemo(
    () =>
      selectedDocumentVersions.map(({ uuid, versionNumber }) => ({
        id: uuid,
        label: t('contractNegotiationCollaboration.version', { version: versionNumber }),
      })),
    [t, selectedDocumentVersions],
  );

  const selectedVersionOption: SelectOption | undefined = selectedVersionUuid
    ? {
        id: selectedVersionUuid,
        label: t('contractNegotiationCollaboration.version', { version: selectedVersionNumber }),
      }
    : undefined;

  /** Handler to download the selected document when the download button is clicked */
  const handleDownloadDocument = (): void => {
    onDownloadDocument(selectedDocument);
  };

  /** Handler to approve the selected document when the approve button is clicked */
  const handleApproveDocument = ({ comment }: DocumentApprovalFormFields): void => {
    onApproveDocument(selectedDocument, { comment }, (): void => setIsDrawerOpen(false));
  };

  /** Function that triggers the creation of a new document version */
  const handleNewDocumentVersion = (payload: NewDocumentVersionFormFields): void => {
    onNewDocumentVersion(selectedDocument, payload, (): void => setIsNewVersionDrawerOpen(false));
  };

  /** Handler to change the selected version. */
  const handleChangeDocumentVersion = ({ id }: SelectOption): void => {
    // It's necessary to cast to string because the document uuid is used as option id
    updateSelectedDocumentVersion(String(id));
  };

  /** Handler that triggers the webdav interaction */
  const handleWriteNewNewVersion = (): void => {
    onWriteNewDocumentVersion(selectedDocument);
  };

  return (
    <>
      <DocumentApprovalDrawerContainer
        data-testid={`${dataTestId}__document-approval`}
        document={document}
        documentLastModificationText={lastModificationText}
        isLoading={isLoading}
        isOpen={isDrawerOpen}
        onClose={(): void => setIsDrawerOpen(false)}
        onSubmit={handleApproveDocument}
      />
      <ContractNegotiationBody
        data-testid={dataTestId}
        disabled={isApprovalDisabled}
        document={document}
        documentApprovedAt={approvedAt}
        documentLastModificationText={lastModificationText}
        documentPreviewUrl={selectedDocumentPreviewUrl}
        documentAttachmentUrl={selectedDocumentAttachmentUrl}
        documentStatus={documentStatus}
        documentVersionOptions={documentVersionOptions}
        isDocumentPreviewLoading={isDocumentPreviewLoading}
        isLoading={isLoading}
        readOnly={isReadOnly}
        negotiableDocument={!negotiable}
        selectedVersionOption={selectedVersionOption}
        showBanner={showBanner}
        handleOpenNewVersionDrawer={(): void => setIsNewVersionDrawerOpen(true)}
        onApproveDocument={(): void => setIsDrawerOpen(true)}
        onChangeDocumentVersion={handleChangeDocumentVersion}
        onDownloadDocument={handleDownloadDocument}
        handleWriteNewNewVersion={handleWriteNewNewVersion}
      />
      <NewDocumentVersionDrawerContainer
        data-testid={`${dataTestId}__new-version`}
        isOpen={isNewVersionDrawerOpen}
        isLoading={isLoading}
        onClose={(): void => setIsNewVersionDrawerOpen(false)}
        onSubmit={handleNewDocumentVersion}
      />
    </>
  );
};
