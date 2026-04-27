import { useState } from 'react';

import { FeedbackButton } from './feedback-button';

import type { Meta, StoryFn } from '@storybook/react-vite';

export default {
  title: 'Modules/WebdoxAI/Components/FeedbackButton',
  component: FeedbackButton,
  args: {
    'data-testid': 'data-testid',
    feedbackKind: 'positive',
    isActive: false,
    disabled: false,
    isLoading: false,
    showTooltip: true,
    type: 'button',
    onClick: () => console.log('click'),
  },
  argTypes: {
    feedbackKind: {
      options: ['positive', 'negative'],
      control: { type: 'radio' },
    },
  },
} as Meta<typeof FeedbackButton>;

/** A FeedbackButton */
const Template: StoryFn<typeof FeedbackButton> = (args) => {
  return <FeedbackButton {...args} />;
};

/** A controlledFeedbackButton */
const ControlledTemplate: StoryFn<typeof FeedbackButton> = (args) => {
  const [feedbackState, setFeedbackState] = useState(false);

  return (
    <FeedbackButton
      {...args}
      isActive={feedbackState}
      onClick={(): void => setFeedbackState(!feedbackState)}
    />
  );
};

export const Positive = Template.bind({});

export const Negative = Template.bind({});

Negative.args = {
  feedbackKind: 'negative',
};

export const WithoutTooltip = Template.bind({});

WithoutTooltip.args = {
  showTooltip: false,
};

export const Controlled = ControlledTemplate.bind({});
