import { useState } from 'react';

import { InlineEditInput } from './inline-edit-input';

import type { InlineEditInputMode } from './inline-edit-input';
import type { Meta, StoryFn } from '@storybook/react-vite';

export default {
  title: 'Components/Inputs/InlineEditInput',
  component: InlineEditInput,
  args: {
    disabled: false,
    isLoading: false,
    captionText: 'caption text',
    inputText: 'caption text',
    mode: 'caption',
    'data-testid': 'data-testid',
    onChange: (): void => console.log('on change'),
    onSubmit: (): void => console.log('on submit'),
    onToggle: (): void => console.log('on toggle'),
  },
} as Meta<typeof InlineEditInput>;

/** A InlineEditInput */
const Template: StoryFn<typeof InlineEditInput> = (args) => {
  const [inputText, setInputText] = useState<string>(args.captionText);
  const [captionText, setCaptionText] = useState<string>(args.captionText);
  const [mode, setMode] = useState<InlineEditInputMode>('caption');
  const [isLoading, setIsLoading] = useState(false);

  /** Change between input and caption modes */
  function toggleMode(): void {
    setMode((old) => (old === 'caption' ? 'input' : 'caption'));
  }

  /** Handle the check action submit new written text */
  const handleSubmit = async (): Promise<void> => {
    setIsLoading(true);
    setCaptionText(inputText);

    await new Promise((res) => setTimeout(() => res(true), 2000));

    setIsLoading(false);
    setMode('caption');
  };

  return (
    <InlineEditInput
      {...args}
      captionText={captionText}
      isLoading={isLoading}
      inputText={inputText}
      mode={mode}
      onChange={setInputText}
      onSubmit={handleSubmit}
      onToggle={toggleMode}
    />
  );
};

/** A InlineEditInput */
const ControlsTemplate: StoryFn<typeof InlineEditInput> = (args) => {
  return <InlineEditInput {...args} />;
};

export const Default = ControlsTemplate.bind({});

export const Controlled = Template.bind({});
