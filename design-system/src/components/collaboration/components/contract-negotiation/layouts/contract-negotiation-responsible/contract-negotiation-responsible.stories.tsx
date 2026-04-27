import type { ReactElement } from 'react';

import { ChevronLeft } from '@carbon/icons-react';

import { IconButton } from '../../../../../button';
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

import { ContractNegotiationResponsible } from './contract-negotiation-responsible';

import type { Meta, StoryFn } from '@storybook/react-vite';

const BackButton = (): ReactElement => (
  <IconButton
    size="32px"
    type="button"
    onClick={(): void => console.log('Back button')}
  >
    <ChevronLeft />
  </IconButton>
);

export default {
  title: 'Modules/Third Party Collaborations/ContractNegotiationResponsible',
  component: ContractNegotiationResponsible,
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
    headerAction: <BackButton />,
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
    onFinalize: (payload, callback) => {
      console.log('Finalize Payload', payload);
      callback();
    },
    onCancel: (payload, callback) => {
      console.log('Cancel Payload', payload);
      callback();
    },
    onTriggerActivityTab: () => console.log('Activity tab opened'),
    onTriggerHistoryTab: () => console.log('History tab opened'),
    onWriteNewDocumentVersion: () => console.log('Webdav trigger'),
  },
} as Meta<typeof ContractNegotiationResponsible>;

/** A ContractNegotiationThirdParty */
const Template: StoryFn<typeof ContractNegotiationResponsible> = (args) => {
  return <ContractNegotiationResponsible {...args} />;
};

export const Default = Template.bind({});

/**
 * Custom template with the information banner of collaboration.
 *
 * This banner is visible if the collaboration status is `finished` or `canceled`
 */
export const BannerCollaboration = Template.bind({}) as Meta<typeof ContractNegotiationResponsible>;

BannerCollaboration.args = {
  collaborationDetails: collaborationDetailsMock2,
  collaborationResponsible: collaborationResponsibleMock1,
  collaborationSubtasks: collaborationSubtasksMock1,
  currentThirdParty: thirdPartyMock1,
  customerName: 'Lipigas S.A.',
  onApproveDocument: () => console.log('Approve:'),
  onDownloadDocument: (document) => console.log('Download:', document),
};

export const WithDocumentViewer = Template.bind({}) as Meta<typeof ContractNegotiationResponsible>;

WithDocumentViewer.args = {
  selectedDocumentAttachmentUrl: documentAttachmentUrlMock1,
};
