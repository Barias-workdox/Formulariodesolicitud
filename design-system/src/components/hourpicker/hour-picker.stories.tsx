import { HourPicker } from './hour-picker';

import type { Meta, StoryFn } from '@storybook/react-vite';

export default {
  title: 'Components/Date & Time/HourPicker',
  component: HourPicker,
  args: {
    value: [0, 3, 7, 10, 23],
    updateLaboralSchedule: (index) => console.log(`selected interval index: ${index}`),
  },
} as Meta<typeof HourPicker>;

/** A HourPicker */
const Template: StoryFn<typeof HourPicker> = (args) => {
  return <HourPicker {...args} />;
};

export const Default = Template.bind({});
