import type { ReactNode } from 'react';

import { testHelpers } from '@test/test-utils';

import { ContractNegotiationContext } from '../logic/contexts/contract-negotiation.context';

import {
  activityDocumentsMock1,
  allowedFileExtensionsMock,
  collaborationActivitiesMock1,
  collaborationDetailsMock1,
  collaborationResponsibleMock1,
  documentVersionsMock1,
  thirdPartyMock1,
} from './collaboration.mock';
import { mockNegotiableDocuments, mockReadOnlyDocuments } from './documents.mock';
import { messagesMock1, stakeholdersMock1 } from './messages.mock';

import type { IContractNegotiationContext } from '../interfaces';

export interface ContractNegotiationProviderMockProps {
  /**
   * The children to be rendered within the provider.
   */
  children: ReactNode;
  /**
   * Optional provider values to override default context values.
   */
  providerValues?: Partial<IContractNegotiationContext>;
}

const [mockSelectedDocument] = mockNegotiableDocuments;
const [mockSelectedVersion] = documentVersionsMock1;
const selectedDocumentPreviewUrlMock = 'example.com';

export const defaultValues: IContractNegotiationContext = {
  activityDocuments: activityDocumentsMock1,
  allowedFileExtensions: allowedFileExtensionsMock,
  collaborationDetails: collaborationDetailsMock1,
  collaborationResponsible: collaborationResponsibleMock1,
  currentThirdParty: thirdPartyMock1,
  isApprovalDisabled: false,
  isDocumentPreviewLoading: false,
  isLoading: false,
  messages: messagesMock1,
  negotiableDocuments: mockNegotiableDocuments,
  readOnlyDocuments: mockReadOnlyDocuments,
  selectedDocument: mockSelectedDocument,
  selectedDocumentPreviewUrl: selectedDocumentPreviewUrlMock,
  stakeholders: stakeholdersMock1,
  collaborationActivities: collaborationActivitiesMock1,
  selectedDocumentVersions: documentVersionsMock1,
  selectedVersion: mockSelectedVersion,
  onNewDocumentVersion: testHelpers.fn(),
  loadMoreActivities: testHelpers.fn(),
  loadMoreMessages: testHelpers.fn(),
  onApproveDocument: testHelpers.fn(),
  onDownloadDocument: testHelpers.fn(),
  onSendMessage: testHelpers.fn(),
  updateSelectedDocument: testHelpers.fn(),
  updateSelectedDocumentVersion: testHelpers.fn(),
  onTriggerActivityTab: testHelpers.fn(),
  onTriggerHistoryTab: testHelpers.fn(),
  onWriteNewDocumentVersion: testHelpers.fn(),
};

/**
 * ContractNegotiationProviderMock component provides a mock implementation
 * of the ContractNegotiationContext.
 */
export const ContractNegotiationProviderMock = ({
  children,
  providerValues = {},
}: ContractNegotiationProviderMockProps): JSX.Element => {
  return (
    <ContractNegotiationContext.Provider value={{ ...defaultValues, ...providerValues }}>
      {children}
    </ContractNegotiationContext.Provider>
  );
};
