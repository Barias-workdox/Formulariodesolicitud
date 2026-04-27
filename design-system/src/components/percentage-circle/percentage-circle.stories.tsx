import { lightTheme } from '../../themes';

import { ProgressCircle } from './percentage-circle';

import type { Meta, StoryFn } from '@storybook/react-vite';

export default {
  title: 'Components/Progress & Validation/PercentageCircle',
  component: ProgressCircle,
  args: {
    size: '60px',
    current: 1,
    total: 6,
    colors: {
      empty: lightTheme.colors.neutralSubtle,
      inner: lightTheme.colors.neutralBase,
      fill: lightTheme.colors.brand,
      currentText: lightTheme.colors.brand,
      totalText: lightTheme.colors.neutralSubdued,
    },
  },
} as Meta<typeof ProgressCircle>;

/** A ProgressCircle */
const Template: StoryFn<typeof ProgressCircle> = (args) => {
  return (
    <div>
      <ProgressCircle {...args} />
    </div>
  );
};

export const Default = Template.bind({});
