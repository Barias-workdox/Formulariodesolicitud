import { DeprecatedComponentAlert, StoryLayout } from '../storybook';

import { Alert } from './alert';

import type { Meta, StoryFn } from '@storybook/react-vite';

export default {
  title: 'Components/Progress & Validation/Alert (deprecated)',
  component: Alert,
  args: {
    kind: 'warning',
    children: 'A Styled alert',
    icon: <div>IC</div>,
    overrides: {},
  },
} as Meta<typeof Alert>;

/** An Alert */
const Template: StoryFn<typeof Alert> = (args) => {
  return (
    <StoryLayout>
      <DeprecatedComponentAlert name="Notification" />
      <Alert {...args} />
    </StoryLayout>
  );
};

export const Warning = Template.bind({});

export const Error = Template.bind({});

Error.args = {
  kind: 'error',
};
