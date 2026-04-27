import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import type { ReactElement, ReactNode } from 'react';

import { DISABLED_RESOURCE_STATUSES } from '@components/collaboration/constants';

import { getActivityDocuments } from '../business/contract-negotiation.business';

import type {
  CollaborationActivityDocument,
  CollaborationDocument,
  CollaborationResource,
  CollaborationSubtask,
  DocumentVersion,
  IContractNegotiation,
  IContractNegotiationContext,
  IContractNegotiationResponsible,
} from '../../interfaces';

export type ContractNegotiationProviderProps = Omit<
  IContractNegotiation,
  'customerName' | 'enabledTabs'
> & {
  children: ReactNode;
  onFinalize?: IContractNegotiationResponsible['onFinalize'];
  onCancel?: IContractNegotiationResponsible['onCancel'];
};

export const ContractNegotiationContext = createContext<IContractNegotiationContext>({
  activityDocuments: [],
  allowedFileExtensions: {
    extensions: [],
    names: '',
  },
  collaborationDetails: {
    name: '',
    status: 'active',
    createdAt: '',
    updatedAt: '',
    cancelledAt: null,
    finishedAt: null,
    message: '',
  },
  collaborationResponsible: {
    id: -1,
    firstName: '',
    lastName: '',
    email: '',
  },
  currentThirdParty: {
    email: '',
    firstName: '',
    id: -1,
    lastName: '',
  },
  isApprovalDisabled: false,
  isDocumentPreviewLoading: false,
  isLoading: false,
  isSendMessageLoading: false,
  isActivitiesLoading: false,
  messages: [],
  negotiableDocuments: [],
  readOnlyDocuments: [],
  selectedDocument: undefined,
  selectedDocumentPreviewUrl: undefined,
  selectedDocumentVersions: undefined,
  selectedVersion: undefined,
  stakeholders: [],
  collaborationActivities: [],
  loadMoreMessages: () => {},
  loadMoreActivities: () => {},
  onApproveDocument: () => {},
  onDownloadDocument: () => {},
  onNewDocumentVersion: () => {},
  onSendMessage: async () => ({ isSuccess: true }),
  updateSelectedDocument: () => {},
  updateSelectedDocumentVersion: () => {},
  onFinalize: () => {},
  onTriggerActivityTab: () => {},
  onTriggerHistoryTab: () => {},
  onWriteNewDocumentVersion: () => {},
});

/**
 * React context to reuse some globally required variables in the Contract Negotiation component and
 * avoid too much prop drilling
 */
export const ContractNegotiationProvider = ({
  children,
  allowedFileExtensions,
  collaborationActivities,
  collaborationDetails,
  collaborationResponsible,
  collaborationSubtasks,
  currentThirdParty,
  isActivitiesLoading = false,
  isDocumentPreviewLoading = false,
  isLoading = false,
  isSendMessageLoading = false,
  messages,
  selectedDocumentPreviewUrl,
  selectedDocumentAttachmentUrl,
  selectedDocumentVersions = [],
  stakeholders,
  loadMoreActivities,
  loadMoreMessages,
  onApproveDocument,
  onChangeSelectedDocument,
  onChangeSelectedDocumentVersion,
  onDownloadDocument,
  onNewDocumentVersion,
  onSendMessage,
  onFinalize,
  onCancel,
  onTriggerActivityTab,
  onTriggerHistoryTab,
  onWriteNewDocumentVersion,
}: ContractNegotiationProviderProps): ReactElement => {
  const [selectedDocument, setSelectedDocument] = useState<CollaborationResource | undefined>();
  const [selectedVersion, setSelectedVersion] = useState<DocumentVersion | undefined>();

  const { id: currentThirdPartyId } = currentThirdParty;

  const isApprovalDisabled = useMemo(() => {
    const { status } = selectedDocument || {};

    return DISABLED_RESOURCE_STATUSES.includes(status);
  }, [selectedDocument]);

  /**
   * All collaboration subtasks that have the current third assigned to them.
   */
  const currentThirdPartyCollaborationSubtasks: CollaborationSubtask[] = useMemo(
    () =>
      collaborationSubtasks.filter(
        ({ thirdParty: { id: thirdPartyId } }) => thirdPartyId === currentThirdPartyId,
      ),
    [collaborationSubtasks, currentThirdPartyId],
  );

  /**
   * Collaboration documents that can be approved and versioned.
   */
  const negotiableDocuments: CollaborationResource[] = useMemo(
    () =>
      currentThirdPartyCollaborationSubtasks.reduce((prevValue, { resources }) => {
        const filteredResources = resources.filter(
          ({ document: { negotiable = false } }) => negotiable,
        );

        return [...prevValue, ...filteredResources];
      }, []),
    [currentThirdPartyCollaborationSubtasks],
  );

  /**
   * Collaboration documents that cannot be approved or versioned, can only be read.
   */
  const readOnlyDocuments: CollaborationResource[] = useMemo(
    () =>
      currentThirdPartyCollaborationSubtasks.reduce((prevValue, { resources }) => {
        const filteredResources = resources.filter(
          ({ document: { negotiable = false } }) => !negotiable,
        );

        return [...prevValue, ...filteredResources];
      }, []),
    [currentThirdPartyCollaborationSubtasks],
  );

  /** Memorized value of the documents that are displayed in the activity tab */
  const activityDocuments = useMemo<CollaborationActivityDocument[]>(
    () => getActivityDocuments(negotiableDocuments, collaborationSubtasks),
    [negotiableDocuments, collaborationSubtasks],
  );

  /** Update the selected document with the new supplied one */
  const updateSelectedDocument = (newDocumentId: CollaborationDocument['id']): void => {
    const newDocument = [...readOnlyDocuments, ...negotiableDocuments].find(
      ({ document: { id } }) => id === newDocumentId,
    );

    onChangeSelectedDocument(newDocument);
    setSelectedDocument(newDocument);
  };

  /** Update the selected document version with the new supplied one */
  const updateSelectedDocumentVersion = (newVersionUuid: DocumentVersion['uuid']): void => {
    const newDocumentVersion = selectedDocumentVersions.find(({ uuid }) => uuid === newVersionUuid);

    onChangeSelectedDocumentVersion(newDocumentVersion);
    setSelectedVersion(newDocumentVersion);
  };

  /**
   * When negotiable document data changes, the first one is selected by default
   * if the selected document is not defined.
   * Otherwise, the selected document is updated with the updated data.
   */
  useEffect(() => {
    const [firstDocument] = negotiableDocuments;

    if (selectedDocument === undefined) {
      onChangeSelectedDocument(firstDocument);
      setSelectedDocument(firstDocument);
    } else {
      const updatedDocument = negotiableDocuments.find(({ id }) => id === selectedDocument?.id);

      onChangeSelectedDocument(updatedDocument);
      setSelectedDocument(updatedDocument);
    }
    // TODO: Evaluate if we can add the missing dependencies
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [negotiableDocuments]);

  /**
   * When selected document versions or the selected document changes,
   * the first version is selected by default.
   */
  useEffect(() => {
    const [firstVersion] = selectedDocumentVersions;

    if (firstVersion) {
      setSelectedVersion(firstVersion);
      onChangeSelectedDocumentVersion(firstVersion);
    }
    // TODO: Evaluate if we can add the missing dependencies
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedDocumentVersions, selectedDocument]);

  return (
    <ContractNegotiationContext.Provider
      value={{
        activityDocuments,
        allowedFileExtensions,
        collaborationDetails,
        collaborationResponsible,
        currentThirdParty,
        isApprovalDisabled,
        isDocumentPreviewLoading,
        isLoading,
        isSendMessageLoading,
        isActivitiesLoading,
        messages,
        negotiableDocuments,
        readOnlyDocuments,
        selectedDocument,
        selectedDocumentPreviewUrl,
        selectedDocumentAttachmentUrl,
        selectedDocumentVersions,
        selectedVersion,
        stakeholders,
        collaborationActivities,
        loadMoreMessages,
        loadMoreActivities,
        onApproveDocument,
        onDownloadDocument,
        onNewDocumentVersion,
        onSendMessage,
        updateSelectedDocument,
        updateSelectedDocumentVersion,
        onFinalize,
        onCancel,
        onTriggerActivityTab,
        onTriggerHistoryTab,
        onWriteNewDocumentVersion,
      }}
    >
      {children}
    </ContractNegotiationContext.Provider>
  );
};

/**
 * This hook makes it easy to obtain the values from the contract negotiation context
 */
export const useContractNegotiationContext = (): IContractNegotiationContext => {
  return useContext(ContractNegotiationContext);
};
