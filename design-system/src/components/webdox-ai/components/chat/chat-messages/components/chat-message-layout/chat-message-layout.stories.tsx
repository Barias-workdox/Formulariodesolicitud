import { ALL_MESSAGE_LAYOUT_KINDS } from '@components/webdox-ai/constants';

import { ChatMessageLayout } from './chat-message-layout';

import type { Meta, StoryFn } from '@storybook/react-vite';

const LONG_TEXT =
  'Sint sit magna commodo culpa velit reprehenderit. Amet do non irure nostrud id commodo aute exercitation occaecat aliqua proident minim laborum. Velit ad Lorem aliqua anim commodo irure nostrud aliquip eu et. Enim laborum officia ut est ipsum officia nulla occaecat nostrud quis.';
const SHORT_TEXT = 'Esse aliqua qui commodo nulla';

export default {
  title: 'Modules/WebdoxAI/Components/ChatMessageLayout',
  component: ChatMessageLayout,
  args: {
    children: SHORT_TEXT,
    kind: ALL_MESSAGE_LAYOUT_KINDS.default,
  },
} as Meta<typeof ChatMessageLayout>;

/** A ChatMessageLayout */
const Template: StoryFn<typeof ChatMessageLayout> = (args) => {
  return (
    <section style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
      <ChatMessageLayout {...args} />
    </section>
  );
};

export const Default = Template.bind({});

export const Primary = Template.bind({});

Primary.args = {
  kind: ALL_MESSAGE_LAYOUT_KINDS.primary,
};

export const Secondary = Template.bind({});

Secondary.args = {
  kind: ALL_MESSAGE_LAYOUT_KINDS.secondary,
};

export const LongText = Template.bind({});

LongText.args = {
  children: LONG_TEXT,
  kind: ALL_MESSAGE_LAYOUT_KINDS.primary,
};
