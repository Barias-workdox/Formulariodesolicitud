import { useState } from 'react';

import { CurrencyDollar } from '@carbon/icons-react';

import { DynamicTextInput } from './dynamic-text-input';

import type { DynamicTextInputProps } from './dynamic-text-input';
import type { Meta, StoryFn, StoryObj } from '@storybook/react-vite';

export default {
  title: 'Components/Inputs/DynamicTextInput',
  component: DynamicTextInput,
  args: {
    variant: 'body',
    value: 'Lorem ipsum dolor sit amet',
    placeholder: 'This is the placeholder',
  },
} as Meta<typeof DynamicTextInput>;

const Template: StoryFn<typeof DynamicTextInput> = (args) => {
  const [value, setValue] = useState(args.value);

  return (
    <div style={{ overflow: 'hidden' }}>
      <DynamicTextInput
        {...args}
        value={value}
        onChange={({ target: { value } }) => setValue(value)}
      />
    </div>
  );
};

export const Default: StoryObj<DynamicTextInputProps> = Template.bind({});

export const EditionDisabled: StoryObj<DynamicTextInputProps> = Template.bind({});

EditionDisabled.args = { disabled: true };

export const FontWeight900: StoryObj<DynamicTextInputProps> = Template.bind({});

FontWeight900.args = { fontWeight: 900 };

export const WithCustomEndEnhancer: StoryObj<DynamicTextInputProps> = Template.bind({});

WithCustomEndEnhancer.args = {
  endEnhancer: (
    <CurrencyDollar
      size={32}
      color="crimson"
    />
  ),
  fontWeight: 900,
};
