import { StatefulTooltip } from 'baseui/tooltip';

import { Text } from './text';

import type { Meta, StoryFn } from '@storybook/react-vite';

export default {
  title: 'Components/Content/Text',
  component: Text,
  args: {
    children: 'A Text to test',
    textAlign: 'center',
    variant: 'h1',
    color: 'black',
    'data-testid': 'data-testid',
  },
} as Meta<typeof Text>;

/** A Text */
const Template: StoryFn<typeof Text> = (args) => {
  return <Text {...args} />;
};

/** A Text inside tooltip */
const InsideTooltipTemplate: StoryFn<typeof Text> = (args) => {
  return (
    <StatefulTooltip
      placement="auto"
      showArrow
      content="A text inside tooltip"
    >
      <Text {...args}>The text inside tooltip</Text>
    </StatefulTooltip>
  );
};

export const Default = Template.bind({});

export const InsideTooltip = InsideTooltipTemplate.bind({});
