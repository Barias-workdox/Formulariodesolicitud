import { useState } from 'react';

import { faker } from '@faker-js/faker';
import { useToggle } from 'react-use';

import { Button } from '@components/button';

import { WebdoxAIDynamicDialog } from '../components';

import type { Meta, StoryFn } from '@storybook/react-vite';

export default {
  title: 'Modules/WebdoxAI/Components/WebdoxAIDynamicDialog',
  component: WebdoxAIDynamicDialog,
  args: { type: 'legalWhisper' },
  argTypes: {
    type: {
      options: ['legalWhisper', 'brainCompanion'],
      control: {
        type: 'radio',
      },
    },
  },
} as Meta<typeof WebdoxAIDynamicDialog>;

/** A WebdoxAIDynamicDialog */
const Template: StoryFn<typeof WebdoxAIDynamicDialog> = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useToggle(false);

  return (
    <section>
      <Button onClick={() => setIsOpen(true)}>Open dialog</Button>
      <WebdoxAIDynamicDialog
        {...props}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onToggleExpand={setIsExpanded}
        fullViewport={isExpanded}
        placement="topRight"
        initialRight={76}
      >
        <div style={{ overflow: 'auto' }}>{faker.lorem.paragraphs(40)}</div>
      </WebdoxAIDynamicDialog>
    </section>
  );
};

export const Default = Template.bind({});
