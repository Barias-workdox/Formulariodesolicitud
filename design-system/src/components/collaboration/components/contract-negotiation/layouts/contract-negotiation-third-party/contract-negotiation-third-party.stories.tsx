import {
  allowedFileExtensionsMock,
  collaborationActivitiesMock1,
  collaborationDetailsMock1,
  collaborationDetailsMock2,
  collaborationResponsibleMock1,
  collaborationSubtasksMock1,
  documentVersionsMock1,
  thirdPartyMock1,
} from '../../../../__mocks__/collaboration.mock';
import {
  documentAttachmentUrlMock1,
  documentPreviewUrlMock1,
} from '../../../../__mocks__/documents.mock';
import { messagesMock1, stakeholdersMock1 } from '../../../../__mocks__/messages.mock';

import { ContractNegotiationThirdParty } from './contract-negotiation-third-party';

import type { Meta, StoryFn } from '@storybook/react-vite';

export default {
  title: 'Modules/Third Party Collaborations/ContractNegotiationThirdParty',
  component: ContractNegotiationThirdParty,
  args: {
    allowedFileExtensions: allowedFileExtensionsMock,
    collaborationDetails: collaborationDetailsMock1,
    collaborationResponsible: collaborationResponsibleMock1,
    collaborationSubtasks: collaborationSubtasksMock1,
    currentThirdParty: thirdPartyMock1,
    customerName: 'Lipigas S.A.',
    messages: messagesMock1,
    selectedDocumentPreviewUrl: documentPreviewUrlMock1,
    selectedDocumentVersions: documentVersionsMock1,
    stakeholders: stakeholdersMock1,
    collaborationActivities: collaborationActivitiesMock1,
    loadMoreActivities: () => console.log('Load More Activities'),
    loadMoreMessages: () => console.log('Load More Messages'),
    onApproveDocument: (document, payload, callback) => {
      console.log('Approve:', { document, payload });
      callback();
    },
    onChangeSelectedDocument: (document) => console.log('Document:', document),
    onChangeSelectedDocumentVersion: (version) => console.log('Version:', version),
    onDownloadDocument: (document) => console.log('Download:', document),
    onNewDocumentVersion: (document, payload, callback) => {
      console.log('New version:', { document, payload });
      callback();
    },
    onSendMessage: (message) => console.log('Message:', message),
    onTriggerActivityTab: () => console.log('Activity tab opened'),
    onTriggerHistoryTab: () => console.log('History tab opened'),
    onWriteNewDocumentVersion: () => console.log('Webdav trigger'),
  },
} as Meta<typeof ContractNegotiationThirdParty>;

/** A ContractNegotiationThirdParty */
const Template: StoryFn<typeof ContractNegotiationThirdParty> = (args) => {
  return <ContractNegotiationThirdParty {...args} />;
};

export const Default = Template.bind({});

/**
 * Custom template with the information banner of collaboration.
 *
 * This banner is visible if the collaboration status is `finished` or `canceled`
 */
export const BannerCollaboration = Template.bind({}) as Meta<typeof ContractNegotiationThirdParty>;

BannerCollaboration.args = {
  collaborationDetails: collaborationDetailsMock2,
  collaborationResponsible: collaborationResponsibleMock1,
  collaborationSubtasks: collaborationSubtasksMock1,
  currentThirdParty: thirdPartyMock1,
  customerName: 'Lipigas S.A.',
  onApproveDocument: () => console.log('Approve:'),
  onDownloadDocument: (document) => console.log('Download:', document),
};

export const WithDocumentViewer = Template.bind({}) as Meta<typeof ContractNegotiationThirdParty>;

WithDocumentViewer.args = {
  selectedDocumentAttachmentUrl: documentAttachmentUrlMock1,
};
