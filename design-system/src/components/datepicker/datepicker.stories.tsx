import { useState } from 'react';

import { Datepicker } from './datepicker';

import type { Meta, StoryFn } from '@storybook/react-vite';

export default {
  title: 'Components/Date & Time/Datepicker',
  component: Datepicker,
  args: {
    range: false,
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/eMhywyfWwKMjIyemY3PDoK/Design-System-Webdox-1.0?type=design&node-id=4427-6701&mode=dev',
    },
  },
} as Meta<typeof Datepicker>;

/** A DatePicker */
const Template: StoryFn<typeof Datepicker> = (args) => {
  const [value, setValue] = useState<Date | Date[] | null>(null);

  return (
    <Datepicker
      value={value}
      onChange={({ date }) => setValue(Array.isArray(date) ? date : [date])}
      {...args}
    />
  );
};

export const Default = Template.bind({});
