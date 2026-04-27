import type { ReactNode } from 'react';

import { Text } from '../text';

import { ProgressBar } from './progress-bar';

import type { Meta, StoryFn } from '@storybook/react-vite';

export default {
  title: 'Components/Progress & Validation/ProgressBar',
  component: ProgressBar,
  args: {
    children:
      'Eiusmod duis in sit eiusmod deserunt proident labore adipisicing ut reprehenderit in eiusmod mollit.',
    completed: false,
    infinite: false,
    size: 'medium',
    showLabel: true,
    steps: 1,
    successValue: 100,
    minValue: 0,
    maxValue: 100,
    value: 38,
    getProgressLabel: (value, maxValue): ReactNode => (
      <Text variant="bodySmall">
        {value} from {maxValue} loaded
      </Text>
    ),
  },
} as Meta<typeof ProgressBar>;

/** A ProgressBar */
const Template: StoryFn<typeof ProgressBar> = (args) => {
  return <ProgressBar {...args} />;
};

export const Default = Template.bind({});

export const DefaultLabel = Template.bind({});

DefaultLabel.args = {
  getProgressLabel: undefined,
};
