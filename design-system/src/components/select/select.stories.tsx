import { useState } from 'react';

import { Select } from './select';

import type { Meta, StoryFn } from '@storybook/react-vite';
import type { Option } from 'baseui/select';

/** Options generator */
export const getOptions = (quantity: number): Option[] =>
  Array.from(
    { length: quantity },
    (_, index): Option => ({
      id: index,
      label: `value ${index}`,
    }),
  );

export default {
  title: 'Components/Pickers/Select',
  component: Select,
  args: {
    multi: false,
    options: getOptions(20),
    'data-testid': 'data-testid',
    creatable: false,
    clearable: false,
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/eMhywyfWwKMjIyemY3PDoK/Design-System-Webdox-1.0?type=design&node-id=174-2567&mode=dev',
    },
  },
} as Meta<typeof Select>;

/** A Select */
const Template: StoryFn<typeof Select> = (args) => {
  const [selected, setSelected] = useState<Option[]>([]);

  return (
    <Select
      {...args}
      value={selected}
      onChange={setSelected}
    />
  );
};

export const Default = Template.bind({});

export const WithoutDataTestId = Template.bind({});

WithoutDataTestId.args = {
  'data-testid': undefined,
};

export const ChangeValueAndLabelKeys = Template.bind({});

ChangeValueAndLabelKeys.args = {
  valueKey: 'label',
  labelKey: 'id',
};

export const Borderless = Template.bind({});

Borderless.args = {
  isBorderless: true,
};

const CreatableTemplate: StoryFn<typeof Select> = (args) => {
  const [selected, setSelected] = useState<Option[]>([]);

  const onCreate = (params) => {
    alert(`Created: ${JSON.stringify(params)}`);
  };

  return (
    <Select
      {...args}
      value={selected}
      onChange={setSelected}
      onCreate={onCreate}
    />
  );
};

export const Creatable = CreatableTemplate.bind({});

Creatable.args = {
  creatable: true,
};

export const Grouped = Template.bind({});

Grouped.args = {
  options: {
    __ungrouped: [
      { id: 1, label: 'ungrouped 1' },
      { id: 2, label: 'ungrouped 2' },
    ],
    'Group 1': getOptions(3),
    'Group 2': getOptions(4),
    'Group 3': getOptions(5),
  },
};
