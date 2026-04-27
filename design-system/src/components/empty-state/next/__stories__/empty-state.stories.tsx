import { Pen } from '@carbon/icons-react';

import { EmptyState } from '../../next/empty-state';

import type { EmptyStateProps } from '../../next/empty-state';
import type { Meta, StoryFn, StoryObj } from '@storybook/react-vite';

export default {
  title: 'Components/Content/EmptyState/Next',
  component: EmptyState,
  args: {
    title: 'Ex eu cupidatat minim qui',
    description:
      'Velit ex aliqua excepteur fugiat. Cupidatat ea\nin aliquip minim ipsum qui cupidatat nisi cupidatat.',
    link: { text: 'Nostrud occaecat consequat', href: 'https://app.webdoxclm.com/' },
  },
} as Meta<typeof EmptyState>;

/** An EmptyState */
const Template: StoryFn<typeof EmptyState> = (args) => {
  return <EmptyState {...args} />;
};

export const WithCustomIcon: StoryObj<EmptyStateProps> = Template.bind({});

WithCustomIcon.args = {
  Icon: Pen,
  title: 'Empty State with Custom Icon',
  description: 'This example shows the empty state with a custom pen icon.',
};

export const DocumentIcon: StoryObj<EmptyStateProps> = Template.bind({});

DocumentIcon.args = {
  primaryButtonProps: {
    'data-testid': 'empty-state__primary-button',
    onClick: (): void => alert('Primary button was clicked'),
    startEnhancer: <Pen />,
    text: 'Officia commodo',
  },
  secondaryButtonProps: {
    'data-testid': 'empty-state__secondary-button',
    onClick: (): void => alert('Secondary button was clicked'),
    text: 'Deserunt velit',
  },
};
