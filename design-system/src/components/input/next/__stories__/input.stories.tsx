import { useState } from 'react';

import { Search, Star } from '@carbon/icons-react';

import { ReactComponent as BrainIcon } from '@assets/icons/webdox-ai/brain-icon.svg';
import { Tag } from '@components/tag/next';
import { StatefulTooltipNext } from '@components/tooltip-next';

import { Input } from '../input';

import type { Meta, StoryFn } from '@storybook/react-vite';
import type { SharedProps } from 'baseui/input';

export default {
  title: 'Components/Inputs/Input/Next',
  component: Input,
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
      ],
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/PbZuyyTRGoXBcqFm848rvy/-%F0%9F%9A%A7-WIP--%F0%9F%92%A0-Nuclear-Components?node-id=18050-13701',
    },
  },
} satisfies Meta<typeof Input>;

const Template: StoryFn<typeof Input> = (args) => {
  const [value, setValue] = useState('');

  return (
    <Input
      {...args}
      value={value}
      onClear={() => setValue('')}
      onChange={(event): void => setValue(event.currentTarget.value)}
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

export const WithEnhancers = Template.bind({});

WithEnhancers.args = {
  startEnhancer: <Search />,
  endEnhancer: <Star />,
  prefixText: 'USD',
  leading: (
    <Tag
      kind="peace"
      variant="light"
      icon={Star}
      shape="rounded"
      size="md"
    />
  ),
};
