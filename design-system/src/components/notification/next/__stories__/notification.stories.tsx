import { Notification } from '../notification';

import type { NotificationProps } from '../notification';
import type { Meta, StoryFn } from '@storybook/react-vite';

export default {
  title: 'Components/Progress & Validation/Notification/Next',
  component: Notification,
  args: {
    showSpinner: false,
    closeable: false,
    size: 'default',
    kind: 'info',
    title: '',
    description: 'Notification description',
    actions: null,
    direction: 'vertical',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://embed.figma.com/design/Vg0tnNQrtCYjRtTInXTcTD/Nuclear-Design-System?node-id=8862-56757&embed-host=share',
    },
  },
} as Meta<typeof Notification>;

const Template: StoryFn<typeof Notification> = (props) => {
  return <Notification {...props} />;
};

export const Default = Template.bind({});

export const Closeable = Template.bind({});

Closeable.args = {
  closeable: true,
} satisfies Partial<NotificationProps>;

export const WithTitle = Template.bind({});

WithTitle.args = {
  title: 'Notification title',
} satisfies Partial<NotificationProps>;

export const Spinner = Template.bind({});

Spinner.args = {
  showSpinner: true,
  description: 'Loading...',
} satisfies Partial<NotificationProps>;
Spinner.parameters = {
  design: {
    type: 'figma',
    url: 'https://embed.figma.com/design/Vg0tnNQrtCYjRtTInXTcTD/Nuclear-Design-System?node-id=8646-57544&embed-host=share',
  },
};

export const WithLink = Template.bind({});

WithLink.args = {
  actions: (
    <Notification.Link
      isExternal
      path="https://google.com"
      text="Link"
    />
  ),
} satisfies Partial<NotificationProps>;
