import { useState } from 'react';

import { Checkbox } from './checkbox';

import type { Meta, StoryFn } from '@storybook/react-vite';

export default {
  title: 'Components/Inputs/Checkbox',
  component: Checkbox,
  args: {
    children: 'Children Info',
    labelAsFormControl: false,
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/eMhywyfWwKMjIyemY3PDoK/Design-System-Webdox-1.0?type=design&node-id=174-0&mode=dev',
    },
  },
} as Meta<typeof Checkbox>;

/** A Checkbox */
const Template: StoryFn<typeof Checkbox> = (args) => {
  const [checked, setChecked] = useState(false);

  return (
    <Checkbox
      checked={checked}
      onChange={(): void => setChecked(!checked)}
      {...args}
    />
  );
};

export const Default = Template.bind({});

export const LabelAsForm = Template.bind({});

LabelAsForm.args = {
  labelAsFormControl: true,
};
