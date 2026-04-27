import { Block } from 'baseui/block';

import { Button } from '../button';
import { Text } from '../text';

import { Popover } from './popover';

import type { Meta, StoryFn } from '@storybook/react-vite';

export default {
  title: 'Components/Surfaces/Popover',
  component: Popover,
  args: {
    children: <Button>Click to open Popover</Button>,
    content: (
      <Block padding="20px">
        <Text variant="body">
          Nostrud ex esse tempor anim nulla exercitation Lorem velit veniam reprehenderit.
        </Text>
      </Block>
    ),
    showArrow: true,
    placement: 'bottom',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/eMhywyfWwKMjIyemY3PDoK/Design-System-Webdox-1.0?type=design&node-id=600-6958&mode=dev',
    },
    docs: {
      story: {
        height: '200px',
      },
    },
  },
} as Meta<typeof Popover>;

/** A Popover */
const Template: StoryFn<typeof Popover> = (args) => {
  return <Popover {...args} />;
};

export const Default = Template.bind({});
