import { useState } from 'react';
import type { ChangeEvent } from 'react';

import { ColorPicker } from '../color-picker';

import type { Meta, StoryFn } from '@storybook/react-vite';

export default {
  title: 'Components/Inputs/ColorPicker/Next',
  component: ColorPicker,
  args: {
    kind: 'gray',
    onChange: (e: ChangeEvent<HTMLInputElement>): void => {
      console.log(e.target.value);
    },
  },
} as Meta<typeof ColorPicker>;

/** A ColorPicker */
const Template: StoryFn<typeof ColorPicker> = (args) => {
  const [color, setColor] = useState('#FFFFFF');

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (args.onChange) {
      args.onChange(e);
    }

    setColor(e.target.value);
  };

  return (
    <ColorPicker
      {...args}
      onChange={handleOnChange}
      value={color}
    />
  );
};

export const Default = Template.bind({});
