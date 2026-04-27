import { useState } from 'react';

import { faker } from '@faker-js/faker';

import { Button } from '../../button';
import { useCss } from '../../utils/hooks/use-css';
import { DynamicDialog } from '../dynamic-dialog';

import type { Meta, StoryFn } from '@storybook/react-vite';

export default {
  title: 'Components/Surfaces/DynamicDialog',
  component: DynamicDialog,
  args: {
    placement: 'bottomRight',
  },
  argTypes: {
    placement: {
      options: ['topRight', 'topLeft', 'bottomRight', 'bottomLeft'],
      control: {
        type: 'radio',
      },
    },
    isOpen: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<typeof DynamicDialog>;

/** A Dynamic Dialog */
const Template: StoryFn<typeof DynamicDialog> = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFullViewport, setIsFullViewport] = useState(false);
  const { theme } = useCss();

  return (
    <article>
      <Button onClick={(): void => setIsOpen(!isOpen)}>
        {isOpen ? 'Close dialog' : 'Open dialog'}
      </Button>
      <DynamicDialog
        isOpen={isOpen}
        fullViewport={isFullViewport}
        {...props}
      >
        <div
          style={{
            padding: theme.spacing.spacingMd,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            overflow: 'auto',
          }}
        >
          <div
            style={{
              maxWidth: '800px',
            }}
          >
            <Button
              onClick={(): void => setIsFullViewport(!isFullViewport)}
              fullWidth
            >
              {isFullViewport ? 'Shrink' : 'Expand'}
            </Button>
            {faker.lorem.paragraphs(100)}
          </div>
        </div>
      </DynamicDialog>
    </article>
  );
};

export const Default = Template.bind({});
