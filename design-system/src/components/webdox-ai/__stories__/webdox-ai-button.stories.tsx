import { WebdoxAIButton } from '../components';

import type { WebdoxAIButtonProps } from '../components';
import type { Meta, StoryFn, StoryObj } from '@storybook/react-vite';

export default {
  title: 'Modules/WebdoxAI/Components/WebdoxAIButton',
  component: WebdoxAIButton,
  args: { isLoading: false, hasError: false },
} as Meta<typeof WebdoxAIButton>;

/** A WebdoxAIButtonController */
const Template: StoryFn<typeof WebdoxAIButton> = (props) => {
  return <WebdoxAIButton {...props} />;
};

export const Default = Template.bind({});

export const WithLoadingState: StoryObj<WebdoxAIButtonProps> = Template.bind({});

WithLoadingState.args = {
  isLoading: true,
};

export const WithErrorState: StoryObj<WebdoxAIButtonProps> = Template.bind({});

WithErrorState.args = {
  hasError: true,
};
