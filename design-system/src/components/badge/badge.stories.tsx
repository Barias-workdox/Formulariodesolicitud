import { Chat } from '@carbon/icons-react';

import { Badge } from './badge';

import type { Meta, StoryFn } from '@storybook/react-vite';

export default {
  title: 'Components/Content/Badge',
  component: Badge,
  args: {
    content: '12',
    placement: 'topRight',
    shape: 'circle',
    hidden: false,
    color: 'white',
    backgroundColor: 'success60',
  },
} as Meta<typeof Badge>;

/** A Default Badge */
const Template: StoryFn<typeof Badge> = (args) => {
  return (
    <Badge {...args}>
      <Chat size={16} />
    </Badge>
  );
};

export const Default = Template.bind({});
