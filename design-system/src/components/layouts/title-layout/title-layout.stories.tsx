import { Task } from '@carbon/icons-react';

import { BackgroundIcon } from '@components/background-icon';

import { Text } from '../../text';

import { TitleLayout } from '.';

import type { Meta, StoryFn } from '@storybook/react-vite';

export default {
  title: 'Components/Content/TitleLayout',
  component: TitleLayout,
  args: {
    'data-testid': 'data-testid',
    onClick: () => console.log('title-layout clicked'),
    overrides: {
      StartEnhancer: {
        width: '32px',
        height: '32px',
      },
    },
    startEnhancer: (
      <BackgroundIcon
        shape="round"
        Icon={Task}
        backgroundColor="peaceSubtle"
        iconColor="peaceStrong"
        size="32px"
      />
    ),
    titleText: (
      <Text
        variant="body"
        margin="0"
        fontWeight="500"
        color="neutral"
      >
        A Title
      </Text>
    ),
    subtitleText: (
      <Text
        variant="bodySmall"
        fontWeight="400"
        margin="0"
        color="neutralSubdued"
      >
        A subtitle
      </Text>
    ),
  },
} as Meta<typeof TitleLayout>;

/** A TitleLayout */
const Template: StoryFn<typeof TitleLayout> = (args) => {
  return <TitleLayout {...args} />;
};

export const Default = Template.bind({});

export const WithoutStartEnhancer = Template.bind({});

WithoutStartEnhancer.args = {
  startEnhancer: null,
};

export const WithoutSubtitle = Template.bind({});

WithoutSubtitle.args = {
  subtitleText: null,
};
