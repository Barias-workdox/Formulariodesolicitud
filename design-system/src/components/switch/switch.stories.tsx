import { useState } from 'react';

import { Switch } from './switch';

import type { SwitchProps } from './switch';
import type { Meta, StoryFn } from '@storybook/react-vite';

export default {
  title: 'Components/Inputs/Switch',
  component: Switch,
  args: {
    'data-testid': 'testid',
    loading: false,
    disabled: false,
    labelPlacement: 'right',
    onChange: () => console.log('Handle on change'),
    children: <div>Some Label</div>,
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/eMhywyfWwKMjIyemY3PDoK/Design-System-Webdox-1.0?type=design&node-id=312-0&mode=dev',
    },
  },
} as Meta<typeof Switch>;

/** Switch component */
const Template: StoryFn<typeof Switch> = (args) => {
  const [value, setValue] = useState(false);

  return (
    <Switch
      {...args}
      checked={value}
      onChange={setValue}
    />
  );
};

/** Switch with description text */
const WithDescriptionTemplate: StoryFn<typeof Switch> = (args) => {
  const [value, setValue] = useState(false);

  return (
    <Switch
      {...args}
      checked={value}
      onChange={setValue}
    />
  );
};

export const WithDescription = WithDescriptionTemplate.bind({});

WithDescription.args = {
  description: 'description',
} as SwitchProps;

export const Default = Template.bind({});
