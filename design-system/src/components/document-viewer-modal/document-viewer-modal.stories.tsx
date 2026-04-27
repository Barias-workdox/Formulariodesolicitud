import { useState } from 'react';

import { Button } from '../button';
import { documentPreviewUrlMock1 } from '../collaboration/__mocks__/documents.mock';

import { DocumentViewerModal } from './document-viewer-modal';

import type { Meta, StoryFn } from '@storybook/react-vite';

export default {
  title: 'Components/Surfaces/DocumentViewerModal',
  component: DocumentViewerModal,
  args: {
    documentName: 'Borrador-contrato-202jd783.docx',
    attachmentUrl: '',
    documentUrl: documentPreviewUrlMock1,
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
} as Meta<typeof DocumentViewerModal>;

/** DocumentViewerModal */
const Template: StoryFn<typeof DocumentViewerModal> = (args) => {
  const [isOpen, setIsOpen] = useState(false);

  console.log({ isLoading: args.isLoading });

  return (
    <>
      <Button onClick={(): void => setIsOpen(true)}>Open Modal</Button>
      <DocumentViewerModal
        {...args}
        isOpen={isOpen}
        onClose={(): void => setIsOpen(false)}
      />
    </>
  );
};

/** A DocumentViewerModal in loading state */
const TemplateLoading: StoryFn<typeof DocumentViewerModal> = (args) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={(): void => setIsOpen(true)}>Open Modal: Loading State</Button>
      <DocumentViewerModal
        {...args}
        isLoading={true}
        isOpen={isOpen}
        onClose={(): void => setIsOpen(false)}
      />
    </>
  );
};

/** Document not available */
const TemplateDocumentNotAvailable: StoryFn<typeof DocumentViewerModal> = (args) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={(): void => setIsOpen(true)}>Open Modal: Document not available</Button>
      <DocumentViewerModal
        {...args}
        isOpen={isOpen}
        onClose={(): void => setIsOpen(false)}
        documentUrl=""
      />
    </>
  );
};

export const Default = Template.bind({});

export const Loading = TemplateLoading.bind({});

export const DocumentViewer = Template.bind({});

DocumentViewer.args = {
  attachmentUrl:
    'https://raw.githubusercontent.com/WolfgangFahl/pdfindexer/refs/heads/master/test/pdfsource1/LoremIpsum.pdf',
  documentName: 'Lorem Ipsum.pdf',
  locale: 'es',
};

export const NotAvailable = TemplateDocumentNotAvailable.bind({});
