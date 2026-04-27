import { DeprecatedComponentAlert, StoryLayout } from '../storybook';

import { activitiesMock1 } from './__tests__/activities.mock';
import { ActivityTimeline } from './activity-timeline';

import type { Meta, StoryFn } from '@storybook/react-vite';

export default {
  title: 'Components/Content/ActivityTimeline',
  component: ActivityTimeline,
  args: {
    activities: activitiesMock1,
    isPaginated: true,
    isLoading: false,
    onPageEnd: () => console.log('Page End'),
  },
} as Meta<typeof ActivityTimeline>;

/** A ActivityTimeline */
const Template: StoryFn<typeof ActivityTimeline> = (args) => {
  return (
    <StoryLayout>
      <DeprecatedComponentAlert name="Timeline" />
      <ActivityTimeline {...args} />
    </StoryLayout>
  );
};

export const Default = Template.bind({});
