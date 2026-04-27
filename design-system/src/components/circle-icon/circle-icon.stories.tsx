import { Task } from '@carbon/icons-react';

import { StoryLayout, DeprecatedComponentAlert } from '../storybook';

import { CircleIcon } from './circle-icon';

import type { Meta, StoryFn } from '@storybook/react-vite';

export default {
  title: 'Components/Content/CircleIcon (deprecated)',
  component: CircleIcon,
  args: {
    Icon: Task,
    backgroundColor: 'blue20',
    height: '40px',
    width: '40px',
    iconColor: 'accent',
    iconHeight: 20,
    iconWidth: 20,
  },
} as Meta<typeof CircleIcon>;

/** A CircleIcon */
const Template: StoryFn<typeof CircleIcon> = (args) => {
  return (
    <StoryLayout>
      <DeprecatedComponentAlert name="BackgroundIcon" />
      <CircleIcon {...args} />
    </StoryLayout>
  );
};

export const Default = Template.bind({});

export const WithSize = Template.bind({});

WithSize.args = {
  iconHeight: undefined,
  iconWidth: undefined,
  iconSize: 32,
};
