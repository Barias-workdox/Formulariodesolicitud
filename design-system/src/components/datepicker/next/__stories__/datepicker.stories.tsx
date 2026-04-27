import { useState } from 'react';

import { ReactComponent as BrainIcon } from '@assets/icons/webdox-ai/brain-icon.svg';
import { Tag } from '@components/tag/next';
import { StatefulTooltipNext } from '@components/tooltip-next';

import { Datepicker } from '../datepicker';

import type { SharedProps } from '@components/input/next';
import type { Meta, StoryFn } from '@storybook/react-vite';

export default {
  title: 'Components/Date & Time/Datepicker/Next',
  component: Datepicker,
  args: {
    kind: 'gray',
    size: 'md',
    placeholder: 'Placeholder',
    positive: false,
    error: false,
    disabled: false,
    isLoading: false,
    showCopyContentButton: true,
    clearable: true,
    width: '100%',
    readOnly: false,
    range: false,
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['md', 'sm'],
    },
    kind: {
      control: { type: 'select' },
      options: ['gray', 'white'],
    },
  },
  parameters: {
    controls: {
      include: [
        'kind',
        'size',
        'placeholder',
        'positive',
        'error',
        'disabled',
        'isLoading',
        'showCopyContentButton',
        'clearable',
        'width',
        'readOnly',
        'range',
      ],
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/eMhywyfWwKMjIyemY3PDoK/Design-System-Webdox-1.0?type=design&node-id=4427-6701&mode=dev',
    },
  },
} satisfies Meta<typeof Datepicker>;

/** A DatePicker */
const Template: StoryFn<typeof Datepicker> = (args) => {
  const [value, setValue] = useState<Date | Date[]>();

  return (
    <Datepicker
      value={value}
      onChange={({ date }) => setValue(Array.isArray(date) ? date : [date])}
      {...args}
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
