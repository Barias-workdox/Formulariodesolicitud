import { useState } from 'react';

import { Button } from '../../button';
import { collaborationInvitations, collaborationSubtasks } from '../collaboration.stories.mocks';

import { DocumentApprovalDetails } from './document-approval-details';
import { DocumentApprovalDetailsDrawer } from './document-approval-details-drawer';

import type { DocumentApprovalDetailsDrawerProps } from './document-approval-details-drawer';
import type { Meta, StoryFn } from '@storybook/react-vite';

export default {
  title: 'Modules/Third Party Collaborations/DocumentApprovalDetails',
  component: DocumentApprovalDetails,
  args: {
    subtasks: collaborationSubtasks,
  },
} as Meta<typeof DocumentApprovalDetails>;

/** A DocumentApprovalDetails */
const Template: StoryFn<typeof DocumentApprovalDetails> = (args) => {
  return <DocumentApprovalDetails {...args} />;
};

/** A DocumentApprovalDetails inside the drawer */
const InsideDrawerTemplate: StoryFn<Omit<DocumentApprovalDetailsDrawerProps, 'isOpen'>> = ({
  ...args
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <DocumentApprovalDetailsDrawer
        isOpen={isOpen}
        onClose={(): void => setIsOpen(false)}
        {...args}
      />
      <Button onClick={(): void => setIsOpen(true)}>Show Drawer</Button>
    </>
  );
};

export const Default = Template.bind({});

export const InsideDrawer = InsideDrawerTemplate.bind({});

export const LegacyInvitation = Template.bind({});

LegacyInvitation.args = {
  invitations: collaborationInvitations,
  subtasks: undefined,
};

export const LegacyInvitationInsideDrawer = InsideDrawerTemplate.bind({});

LegacyInvitationInsideDrawer.args = {
  invitations: collaborationInvitations,
  subtasks: undefined,
};
