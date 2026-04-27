import { ProgressStep } from '../..';

import type { Meta, StoryFn } from '@storybook/react-vite';

export default {
  title: 'Components/Content/ProgressSteps/ProgressStep',
  component: ProgressStep,
  args: {
    size: 'sm',
    type: 'default',
    index: 0,
    title: 'Lorem ipsum dolor sit amet',
    kind: 'default',
    onClick: () => alert('Clicked'),
  },
} as Meta<typeof ProgressStep>;

/** Default component template */
const Template: StoryFn<typeof ProgressStep> = (args) => {
  return <ProgressStep {...args} />;
};

export const Default = Template.bind({});

export const Compressed = Template.bind({});

Compressed.args = {
  type: 'compressed',
};

export const WithoutClickEvent = Template.bind({});

WithoutClickEvent.args = {
  onClick: undefined,
};
