import { useState } from 'react';

import { Textarea } from '../textarea';

import type { Meta, StoryFn } from '@storybook/react-vite';

export default {
  title: 'Components/Inputs/Textarea/Next',
  component: Textarea,
  args: {
    'data-testid': 'data-testid',
    positive: false,
    error: false,
    disabled: false,
    kind: 'gray',
    resize: undefined,
  },
  argTypes: {
    resize: {
      options: [undefined, 'both', 'horizontal', 'vertical'],
      control: { type: 'radio' },
    },
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/eMhywyfWwKMjIyemY3PDoK/Design-System-Webdox-1.0?type=design&node-id=576-311&mode=dev',
    },
  },
} as Meta<typeof Textarea>;

/** A Textarea */
const Template: StoryFn<typeof Textarea> = (args) => {
  const [value, setValue] = useState(
    'Consectetur sunt incididunt fugiat eiusmod voluptate laboris. Pariatur voluptate in occaecat exercitation commodo nulla non. Excepteur incididunt eu officia labore dolore ea. Enim sint qui consectetur nostrud reprehenderit reprehenderit fugiat cupidatat tempor aute. Eiusmod mollit nulla quis laboris quis magna consequat et adipisicing consectetur veniam. Ex voluptate voluptate eu dolor ex consectetur irure ea culpa reprehenderit quis laborum.',
  );

  return (
    <Textarea
      {...args}
      value={value}
      onChange={(e): void => setValue(e.currentTarget.value)}
    />
  );
};

export const WithoutResize = Template.bind({});

export const HorizontalResize = Template.bind({});

HorizontalResize.args = {
  resize: 'horizontal',
};

export const VerticalResize = Template.bind({});

VerticalResize.args = {
  resize: 'vertical',
};

export const BothResize = Template.bind({});

BothResize.args = {
  resize: 'both',
};
