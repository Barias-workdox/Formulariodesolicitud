import {
  documentAttachmentUrlMock1,
  documentPreviewUrlMock1,
} from '../collaboration/__mocks__/documents.mock';

import { DocumentViewer } from './document-viewer';

import type { Meta, StoryFn } from '@storybook/react-vite';

export default {
  title: 'Components/Surfaces/DocumentViewer',
  component: DocumentViewer,
  args: {
    documentName: 'Borrador-contrato-202jd783.docx',
    attachmentUrl: '',
    url: documentPreviewUrlMock1,
    isLoading: false,
  },
  argTypes: {
    documentName: {
      control: { type: 'text' },
    },
    documentUrl: {
      control: { type: 'text' },
    },
    attachmentUrl: {
      control: { type: 'text' },
    },
    isLoading: {
      control: { type: 'boolean' },
    },
  },
  parameters: {
    docs: {
      story: {
        height: '300px',
      },
    },
  },
} as Meta<typeof DocumentViewer>;

/** DocumentViewer */
const Template: StoryFn<typeof DocumentViewer> = (args) => {
  return (
    <div style={{ height: '700px' }}>
      <DocumentViewer {...args} />
    </div>
  );
};

export const Default = Template.bind({});

export const Loading = Template.bind({});

Loading.args = {
  isLoading: true,
};

export const WithDocumentViewer = Template.bind({});

WithDocumentViewer.args = {
  attachmentUrl: documentAttachmentUrlMock1,
};

export const NotAvailable = Template.bind({});

NotAvailable.args = {
  attachmentUrl: '',
  url: '',
};
