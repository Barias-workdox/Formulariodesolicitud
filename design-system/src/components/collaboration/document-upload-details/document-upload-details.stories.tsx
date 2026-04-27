import { useState } from 'react';

import { Button } from '../../button';
import { DocumentViewerModal } from '../../document-viewer-modal';

import { DocumentUploadDetails } from './document-upload-details';
import { DocumentUploadDetailsDrawer } from './document-upload-details-drawer';
import { documentUploadMock } from './document-upload.mocks';

import type { Meta, StoryFn } from '@storybook/react-vite';

export default {
  title: 'Modules/Third Party Collaborations/DocumentUploadDetails',
  component: DocumentUploadDetails,
  args: {
    tasks: documentUploadMock.tasks,
  },
} as Meta<typeof DocumentUploadDetails>;

/** A DocumentUploadDetails */
const Template: StoryFn<typeof DocumentUploadDetails> = (args) => {
  const [isOpenDocumentViewer, setIsOpenDocumentViewer] = useState(false);

  return (
    <>
      <DocumentUploadDetails
        {...args}
        onDocumentClick={(): void => setIsOpenDocumentViewer(true)}
      />
      <DocumentViewerModal
        documentName={args.tasks[0].subtasks[0].resources[0]?.document.name}
        isOpen={isOpenDocumentViewer}
        documentUrl={args.tasks[0].subtasks[0].resources[0]?.document.url || ''}
        isLoading={false}
        onClose={(): void => setIsOpenDocumentViewer(false)}
      />
    </>
  );
};

/** A DocumentUploadDetails inside the drawer */
const InsideDrawerTemplate: StoryFn<typeof DocumentUploadDetailsDrawer> = (args) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isOpenDocumentViewer, setIsOpenDocumentViewer] = useState(false);

  return (
    <>
      <DocumentUploadDetailsDrawer
        {...args}
        isOpen={isOpen}
        onClose={(): void => setIsOpen(false)}
        onDocumentClick={(): void => setIsOpenDocumentViewer(true)}
      />
      <Button onClick={(): void => setIsOpen(true)}>Show Drawer</Button>
      <DocumentViewerModal
        documentName={args.tasks[0].subtasks[0].resources[0]?.document.name}
        isOpen={isOpenDocumentViewer}
        documentUrl={args.tasks[0].subtasks[0].resources[0]?.document.url || ''}
        isLoading={false}
        onClose={(): void => setIsOpenDocumentViewer(false)}
      />
    </>
  );
};

export const Default = Template.bind({});

export const InsideDrawer = InsideDrawerTemplate.bind({});
