import { useState } from 'react';

import { Switch } from '../switch';

import type { Meta, StoryFn } from '@storybook/react-vite';

export default {
  title: 'Components/Inputs/Switch/Next',
  component: Switch,
  args: {
    'data-testid': 'testid',
    disabled: false,
    labelPlacement: 'right',
    variant: '16px',
    onChange: () => console.log('Handle on change'),
    title: 'Some Label',
    description: 'Description text',
  },
  argTypes: {
    variant: {
      control: {
        type: 'select',
      },
      options: ['14px', '16px'],
      description: 'Text size variant - affects title and description font sizes',
    },
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://embed.figma.com/design/PbZuyyTRGoXBcqFm848rvy/%F0%9F%92%A0-Nuclear-Components?node-id=19496-6169&embed-host=share',
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

export const Default = Template.bind({});
