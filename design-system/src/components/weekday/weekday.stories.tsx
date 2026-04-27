import { useState } from 'react';

import { fn } from 'storybook/test';

import { Weekday } from './weekday';

import type { Meta, StoryFn } from '@storybook/react-vite';

export default {
  title: 'Components/Date & Time/Weekday',
  component: Weekday,
  args: {
    value: [0, 3],
    updateNoLaboralDays: fn(),
  },
} as Meta<typeof Weekday>;

/** A Weekday */
const Template: StoryFn<typeof Weekday> = (args) => {
  const [daysOfWeek, setDaysOfWeek] = useState(args.value);

  return (
    <Weekday
      value={daysOfWeek}
      updateNoLaboralDays={(day) => {
        setDaysOfWeek((prev) => {
          if (prev.includes(day)) return prev.filter((d) => d !== day);

          return [...prev, day];
        });
        args.updateNoLaboralDays(day);
      }}
    />
  );
};

export const Default = Template.bind({});
