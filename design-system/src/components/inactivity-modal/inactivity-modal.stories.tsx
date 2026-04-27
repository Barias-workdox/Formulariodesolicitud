import { InactivityModal } from './inactivity-modal';

import type { Meta, StoryFn } from '@storybook/react-vite';

export default {
  title: 'Components/Surfaces/InactivityModal',
  component: InactivityModal,
  args: {
    config: {
      timeout: 1000 * 5,
      title: 'Design System',
      onExpiredConfirm: () => {
        alert('log in clicked');
      },
      onTimeout: () => {
        alert('onTimeout function');
      },
    },
  },
  actions: { argTypesRegex: '^on.*' },
  parameters: {
    docs: {
      story: {
        height: '500px',
      },
    },
  },
} as Meta<typeof InactivityModal>;

/** The Inactivity Modal */
const Template: StoryFn<typeof InactivityModal> = (props) => {
  return <InactivityModal {...props} />;
};

export const Default = Template.bind({});
