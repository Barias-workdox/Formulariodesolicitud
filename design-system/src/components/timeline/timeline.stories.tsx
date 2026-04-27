import { CheckmarkFilled, Flag } from '@carbon/icons-react';

import { Avatar } from '../avatar';

import { TimelineActivity, TimelineIcon, TimelineStep } from './components';
import { Timeline } from './timeline';

import type { Meta, StoryFn } from '@storybook/react-vite';

export default {
  title: 'Components/Content/Timeline',
  component: Timeline,
  args: {
    activities: [
      {
        id: 1,
        component: (
          <TimelineStep
            isActive
            title="Title"
          />
        ),
      },
      {
        id: 2,
        component: (
          <TimelineActivity
            title="Activity"
            subtitle="Subtitle"
            indicator={
              <Avatar
                initials="NE"
                size="32px"
              />
            }
          >
            Body
          </TimelineActivity>
        ),
      },
      {
        id: 3,
        component: (
          <TimelineActivity
            title="Custom Timeline icon"
            subtitle="Subtitle"
            indicator={
              <TimelineIcon
                data-testid="icon"
                Icon={Flag}
              />
            }
          />
        ),
      },
      {
        id: 4,
        component: (
          <TimelineActivity
            isLast
            title="Custom Timeline icon"
            subtitle="Subtitle"
            indicator={
              <TimelineIcon
                data-testid="icon"
                Icon={CheckmarkFilled}
                iconColor="positive"
                backgroundColor="bgBase"
              />
            }
          />
        ),
      },
    ],
    isPaginated: false,
    isLoading: false,
    onPageEnd: () => console.log('Page End'),
  },
} as Meta<typeof Timeline>;

/** A `Timeline` implementation */
const Template: StoryFn<typeof Timeline> = (args) => {
  return <Timeline {...args} />;
};

export const Default = Template.bind({});
