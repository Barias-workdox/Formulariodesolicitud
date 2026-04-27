import { OAuthButton } from './oauth-button';

import type { Meta, StoryFn } from '@storybook/react-vite';

export default {
  title: 'Components/Inputs/OAuthButton',
  component: OAuthButton,
  args: {
    variant: 'google',
    onClick: () => console.log('button clicked'),
  },
} as Meta<typeof OAuthButton>;

/** An OAuthButton */
const Template: StoryFn<typeof OAuthButton> = (args) => {
  return <OAuthButton {...args} />;
};

export const Google = Template.bind({});

export const Microsoft = Template.bind({});

Microsoft.args = {
  variant: 'microsoft',
};
