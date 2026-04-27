import { LoadingWrapper } from './loading-wrapper';

import type { Meta, StoryFn } from '@storybook/react-vite';

export default {
  title: 'Components/Progress & Validation/LoadingWrapper',
  component: LoadingWrapper,
  args: {
    isLoading: true,
    children: <span>Children component</span>,
  },
} as Meta<typeof LoadingWrapper>;

/** DocumentViewerModal */
const Template: StoryFn<typeof LoadingWrapper> = (args) => {
  return <LoadingWrapper {...args} />;
};

export const Default = Template.bind({});

export const WithStringTitle = Template.bind({});

WithStringTitle.args = {
  title: 'Loading...',
};

export const WithCustomTitle = Template.bind({});

WithCustomTitle.args = {
  title: <button>Loading...</button>,
};
