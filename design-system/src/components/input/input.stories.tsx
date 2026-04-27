import { useState } from 'react';

import { Search } from '@carbon/icons-react';

import { Input } from './input';

import type { Meta, StoryFn } from '@storybook/react-vite';

export default {
  title: 'Components/Inputs/Input',
  component: Input,
  args: {
    'data-testid': 'input-testid',
    positive: false,
    error: false,
    id: 'id',
    name: 'name',
    kind: 'gray',
    disabled: false,
    placeholder: 'Text',
    clearable: false,
    onClear: () => console.log('cleared'),
    isBorderless: false,
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/eMhywyfWwKMjIyemY3PDoK/Design-System-Webdox-1.0?type=design&node-id=140-86&mode=dev',
    },
  },
} as Meta<typeof Input>;

const Template: StoryFn<typeof Input> = (args) => {
  const [value, setValue] = useState(
    'Ex velit duis dolore reprehenderit pariatur ut elit commodo mollit adipisicing elit.',
  );

  return (
    <Input
      {...args}
      value={value}
      onChange={(event): void => setValue(event.currentTarget.value)}
    />
  );
};

export const Default = Template.bind({});

export const Clearable = Template.bind({});

Clearable.args = {
  clearable: true,
};

export const WithKindWhite = Template.bind({});

WithKindWhite.args = {
  kind: 'white',
};

export const WithStartEnhancer = Template.bind({});

WithStartEnhancer.args = {
  startEnhancer: '👻',
};

export const WithEndEnhancer = Template.bind({});

WithEndEnhancer.args = {
  endEnhancer: '🐶',
};

export const PositiveHandler = Template.bind({});

PositiveHandler.args = {
  positive: true,
};

export const WithErrorNegative = Template.bind({});

WithErrorNegative.args = {
  error: true,
};

/**
 * Borderless input have a bigger font size, 16px.
 */
export const Borderless = Template.bind({});

Borderless.args = {
  isBorderless: true,
};

/**
 * Borderless input have a bigger font size, 16px.
 */
export const BorderlessWithStartEnhancer = Template.bind({});

BorderlessWithStartEnhancer.args = {
  isBorderless: true,
  startEnhancer: <Search />,
};

/**
 * Borderless input have a bigger font size, 16px.
 */
export const BorderlessWhiteWithStartEnhancer = Template.bind({});

BorderlessWhiteWithStartEnhancer.args = {
  isBorderless: true,
  startEnhancer: <Search />,
  kind: 'white',
};
