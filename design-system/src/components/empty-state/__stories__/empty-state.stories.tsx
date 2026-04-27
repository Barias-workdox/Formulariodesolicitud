import { Document, Pen } from '@carbon/icons-react';

import { BackgroundIcon } from '@components/background-icon';

import { EmptyState } from '../empty-state';

import type { EmptyStateProps } from '../empty-state';
import type { Meta, StoryFn, StoryObj } from '@storybook/react';

export default {
  title: 'Components/Content/EmptyState',
  component: EmptyState,
  args: {
    title: 'Ex eu cupidatat minim qui',
    description:
      'Velit ex aliqua excepteur fugiat. Cupidatat ea\nin aliquip minim ipsum qui cupidatat nisi cupidatat.',
    link: { text: 'Nostrud occaecat consequat', href: 'https://app.webdoxclm.com/' },
    Icon: (
      <BackgroundIcon
        size="44px"
        Icon={Document}
        iconColor="brandStrong"
        backgroundColor="brandSubtle"
      />
    ),
  },
} as Meta<typeof EmptyState>;

/** An EmptyState */
const Template: StoryFn<typeof EmptyState> = (args) => {
  return <EmptyState {...args} />;
};

export const Default = Template.bind({});

export const WithActionButtons: StoryObj<EmptyStateProps> = Template.bind({});

WithActionButtons.args = {
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
