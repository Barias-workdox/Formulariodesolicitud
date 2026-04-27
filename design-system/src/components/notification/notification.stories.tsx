import { Button } from '@components/button';

import { Notification } from '../notification';

import type { Meta, StoryFn } from '@storybook/react-vite';

export default {
  title: 'Components/Progress & Validation/Notification',
  component: Notification,
  argTypes: {
    kind: { control: 'select', options: ['positive', 'warning', 'negative', 'info'] },
  },
  args: {
    kind: 'positive',
    closeable: true,
    duration: 0,
    linkText: 'Example Link',
    linkPath: 'https://webdoxclm.com',
    linkType: 'external',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/eMhywyfWwKMjIyemY3PDoK/Design-System-Webdox-1.0?type=design&node-id=4305-12818&mode=dev',
    },
  },
} as Meta<typeof Notification>;

/** A Notification */
const Template: StoryFn<typeof Notification> = (args) => {
  return <Notification {...args} />;
};

/** Notification with positive kind */
export const Positive = Template.bind({});

Positive.args = {
  title: 'Lorem Ipsum',
  description: 'is simply dummy text of the printing and typesetting industry.',
};

/** Notification with negative kind */
export const Negative = Template.bind({});

Negative.args = {
  title: 'Lorem Ipsum',
  description: 'is simply dummy text of the printing and typesetting industry.',
  kind: 'negative',
};

/** Notification with warning kind */
export const Warning = Template.bind({});

Warning.args = {
  title: 'Lorem Ipsum',
  description: 'is simply dummy text of the printing and typesetting industry.',
  kind: 'warning',
};

/** Notification with info kind */
export const Info = Template.bind({});

Info.args = {
  title: 'Lorem Ipsum',
  description: 'is simply dummy text of the printing and typesetting industry.',
  kind: 'info',
};

/** Notification with a long description */
export const LongDescription = Template.bind({});

LongDescription.args = {
  title: 'Lorem Ipsum',
  message:
    "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
};

/** Notification not closeable */
export const NotCloseable = Template.bind({});

NotCloseable.args = {
  title: 'Lorem Ipsum',
  message: 'is simply dummy text of the printing and typesetting industry.',
  closeable: false,
};

/** Notification without link */
export const WithoutLink = Template.bind({});

WithoutLink.args = {
  title: 'Lorem Ipsum',
  message: 'is simply dummy text of the printing and typesetting industry.',
  linkText: '',
  linkPath: '',
};

/** Notification without link */
export const ExternalLink = Template.bind({});

ExternalLink.args = {
  title: 'Lorem Ipsum',
  description: 'is simply dummy text of the printing and typesetting industry.',
  linkType: 'internal',
  linkPath: '/someRoute',
};

/** Notification with a specific width */
export const WithSpecificWidth = Template.bind({});

WithSpecificWidth.args = {
  title: 'Lorem Ipsum',
  message: 'is simply dummy text of the printing and typesetting industry.',
  width: '600px',
};

/** Notification with timing defined */
export const Autoclose = Template.bind({});

Autoclose.args = {
  title: 'Lorem Ipsum',
  message: 'is simply dummy text of the printing and typesetting industry.',
  duration: 3000,
  closeable: false,
};

/** Notification with margin defined */
export const WithMargin = Template.bind({});

WithMargin.args = {
  title: 'Lorem Ipsum',
  message: 'is simply dummy text of the printing and typesetting industry.',
  marginTop: '5rem',
  marginLeft: '2rem',
  marginRight: '3rem',
};

/** Notification without description */
export const OnlyTitle = Template.bind({});

OnlyTitle.args = {
  title: 'Lorem Ipsum dummy text of the printing and typesetting industry.',
};

/** Notification without title */
export const OnlyDescription = Template.bind({});

OnlyDescription.args = {
  description:
    "Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
};

/** Notification with message property */
export const LegacyMessage = Template.bind({});

LegacyMessage.args = {
  message:
    "Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
  title: '',
};

/** Notification with data-testid */
export const WithDataTestId = Template.bind({});

WithDataTestId.args = {
  title: 'Testing data-testid',
  'data-testid': 'notification-testid',
};

export const WithAction = Template.bind({});

WithAction.args = {
  title: 'Action',
  message: 'is simply dummy text of the printing and typesetting industry.',
  linkText: undefined,
  linkPath: undefined,
  linkType: undefined,
  endEnhancer: <Button onClick={() => alert('click')}>Click</Button>,
};
