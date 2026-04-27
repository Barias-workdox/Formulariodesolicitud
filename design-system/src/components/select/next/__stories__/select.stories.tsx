import { useState } from 'react';

import { ReactComponent as BrainIcon } from '@assets/icons/webdox-ai/brain-icon.svg';
import { Tag } from '@components/tag/next';
import { StatefulTooltipNext } from '@components/tooltip-next/stateful-tooltip-next';

import { Select } from '../select';

import { getOptions } from './utils/get-options.util';

import type { Meta, StoryFn } from '@storybook/react-vite';
import type { SharedProps } from 'baseui/input';
import type { Option } from 'baseui/select';

export default {
  title: 'Components/Pickers/Select/Next',
  component: Select,
  args: {
    clearable: true,
    creatable: false,
    disabled: false,
    error: false,
    kind: 'gray',
    multi: false,
    options: getOptions(20),
    placeholder: 'Selecciona una opción',
    positive: false,
    searchable: true,
    size: 'md',
    type: 'search',
    width: '100%',
    isLoading: false,
  },
  parameters: {
    controls: {
      include: [
        'clearable',
        'creatable',
        'disabled',
        'error',
        'isLoading',
        'kind',
        'multi',
        'placeholder',
        'positive',
        'searchable',
        'showCopyContentButton',
        'size',
        'width',
        'type',
      ],
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/PbZuyyTRGoXBcqFm848rvy/%F0%9F%92%A0-Nuclear-Components?node-id=18074-11397&t=KBhRexdtlp2ZzNze-0',
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

export const WithAIIndicator = Template.bind({});

WithAIIndicator.args = {
  leading: ({ $disabled }: SharedProps) => (
    <StatefulTooltipNext
      content="Los datos de esta columna fueron obtenidos mediante inteligencia artificial"
      showArrow
    >
      <span>
        <Tag
          kind="ai"
          variant="light"
          disabled={$disabled}
          icon={BrainIcon}
          shape="rounded"
          size="md"
        />
      </span>
    </StatefulTooltipNext>
  ),
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
