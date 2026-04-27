import { PLACEMENT } from 'baseui/popover';

import { ReactComponent as CreditsIcon } from '@assets/icons/webdox-ai/credits-icon.svg';
import { BackgroundIcon } from '@components/background-icon';
import { Button } from '@components/button';

import { UsageOverviewPopover, type UsageOverviewPopoverProps } from '../components';

import type { UsageOverviewPopoverBodyProps } from '../components/usage-overview-popover/components';
import type { Meta, StoryFn, StoryObj } from '@storybook/react-vite';

type UsageOverviewPopoverArgs = Pick<
  UsageOverviewPopoverBodyProps,
  'totalRequests' | 'remainingRequests'
> &
  Pick<UsageOverviewPopoverProps, 'placement'>;

export default {
  title: 'Modules/WebdoxAI/Components/UsageOverviewPopover',
  component: UsageOverviewPopover,
  args: {
    placement: 'auto',
    totalRequests: 100,
    remainingRequests: 80,
  },
  argTypes: {
    placement: {
      control: 'select',
      options: Object.keys(PLACEMENT),
    },
    totalRequests: {
      control: 'number',
    },
    remainingRequests: {
      control: 'number',
    },
  },
  parameters: {
    controls: {
      include: ['placement', 'totalRequests', 'remainingRequests'],
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/W1oLAwqqj9tOxPjq0x5h6Y/%F0%9F%92%B5-Flujos---Planes-contrataci%C3%B3n-IA?node-id=5-7769&m=dev',
    },
  },
} as Meta<typeof UsageOverviewPopover>;

/** A UsageOverviewPopover */
const Template: StoryFn<UsageOverviewPopoverArgs> = ({
  placement,
  totalRequests,
  remainingRequests,
}) => {
  return (
    <UsageOverviewPopover
      placement={placement}
      header={
        <UsageOverviewPopover.Header
          title="Test Queries"
          subtitle="Brain Companion"
          startEnhancer={
            <BackgroundIcon
              shape="square"
              backgroundColor="positiveSubtle"
              iconColor="positive"
              Icon={CreditsIcon}
              size="32px"
            />
          }
        />
      }
      body={
        <UsageOverviewPopover.Body
          description="Your trial allows up to 10 general queries in the chat per company account."
          totalRequests={totalRequests}
          remainingRequests={remainingRequests}
          progressBarLabelText={`${remainingRequests} of ${totalRequests} requests remaining`}
          disclaimer="*Unused queries within a month do not accumulate."
          warningDescription="You have reached the limit of queries for this month. Your requests will be reset on the first day of the next month."
        />
      }
      footer={
        <Button
          fullWidth
          kind="secondary"
        >
          Update Plan
        </Button>
      }
    >
      <Button>Usage Overview Popover</Button>
    </UsageOverviewPopover>
  );
};

export const Default: StoryObj<UsageOverviewPopoverArgs> = Template.bind({});
