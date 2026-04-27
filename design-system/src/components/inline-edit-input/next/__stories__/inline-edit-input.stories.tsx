import { useState } from 'react';

import { Search, Star } from '@carbon/icons-react';

import { ReactComponent as BrainIcon } from '@assets/icons/webdox-ai/brain-icon.svg';
import { Input } from '@components/input/next';
import { Tag } from '@components/tag/next';
import { StatefulTooltipNext } from '@components/tooltip-next';

import { InlineEditInput } from '../inline-edit-input';
import { InlineEditInputMode } from '../inline-edit-input.interfaces';

import type { Meta, StoryFn } from '@storybook/react-vite';
import type { SharedProps } from 'baseui/input';

export default {
  title: 'Components/Inputs/InlineEditInput/Next',
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
        'width',
        'readOnly',
      ],
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/PbZuyyTRGoXBcqFm848rvy/%F0%9F%92%A0-Nuclear-Components?node-id=18088-145234&t=FBRi9wPVFWCBoca1-0',
    },
  },
} satisfies Meta<typeof Input>;

const Template: StoryFn<typeof Input> = (args) => {
  const [value, setValue] = useState('');
  const [mode, setMode] = useState<InlineEditInputMode>(InlineEditInputMode.CAPTION);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <InlineEditInput
      {...args}
      mode={mode}
      onModeChange={setMode}
      value={value}
      onChange={handleChange}
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
