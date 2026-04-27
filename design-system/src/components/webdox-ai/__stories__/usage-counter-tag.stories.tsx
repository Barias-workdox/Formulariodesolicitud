import { ReactComponent as CreditsIcon } from '@assets/icons/webdox-ai/credits-icon.svg';

import { UsageCounterTag } from '../components';

import type { UsageCounterTagProps } from '../components';
import type { Meta, StoryFn, StoryObj } from '@storybook/react-vite';

export default {
  title: 'Modules/WebdoxAI/Components/UsageCounterTag',
  component: UsageCounterTag,
  args: {
    totalRequests: 100,
    remainingRequests: 80,
  },
  argTypes: {
    totalRequests: {
      control: 'number',
    },
    remainingRequests: {
      control: 'number',
    },
  },
  parameters: {
    controls: {
      include: ['totalRequests', 'remainingRequests'],
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/W1oLAwqqj9tOxPjq0x5h6Y/%F0%9F%92%B5-Flujos---Planes-contrataci%C3%B3n-IA?node-id=29-19636&m=dev',
    },
  },
} as Meta<typeof UsageCounterTag>;

/** A UsageOverviewPopover */
const Template: StoryFn<UsageCounterTagProps> = ({ totalRequests, remainingRequests }) => {
  return (
    <UsageCounterTag
      icon={CreditsIcon}
      remainingRequests={remainingRequests}
      totalRequests={totalRequests}
    />
  );
};

export const Default: StoryObj<UsageCounterTagProps> = Template.bind({});
