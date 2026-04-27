import { ProgressCircle } from './progress-circle';

import type { Meta, StoryFn } from '@storybook/react-vite';

export default {
  title: 'Components/Progress & Validation/ProgressCircle',
  component: ProgressCircle,
  args: {
    completedColor: '#00e676',
    progressStroke: '#3d5afe',
    fill: 'white',
    stroke: '#64ffda',
    progress: 0.3,
    shadowed: true,
  },
} as Meta<typeof ProgressCircle>;

/** A ProgressCircle */
const Template: StoryFn<typeof ProgressCircle> = (args) => {
  return <ProgressCircle {...args} />;
};

export const Default = Template.bind({});
