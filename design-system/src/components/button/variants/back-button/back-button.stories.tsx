import { BackButton } from './back-button';

import type { Meta, StoryFn } from '@storybook/react-vite';

export default {
  title: 'Components/Inputs/BackButton',
  component: BackButton,
  args: {
    'data-testid': 'my-back-button',
    onClick: () => console.log('clicked!'),
    disabled: false,
    isLoading: false,
  },
} as Meta<typeof BackButton>;

/** An BackButton */
const Template: StoryFn<typeof BackButton> = (args) => {
  return <BackButton {...args} />;
};

export const Default = Template.bind({});
