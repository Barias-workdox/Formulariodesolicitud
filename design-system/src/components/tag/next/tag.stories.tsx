import { InformationFilled } from '@carbon/icons-react';

import { Tag } from './tag';

import type { Meta, StoryFn } from '@storybook/react-vite';

export default {
  title: 'Components/Content/Tag/Next',
  component: Tag,
  argTypes: {
    shape: {
      control: { type: 'radio' },
      options: ['pill', 'rounded'],
    },
    variant: {
      control: { type: 'radio' },
      options: ['light', 'outlined'],
    },
    kind: {
      control: { type: 'select' },
      options: ['positive', 'negative', 'warning', 'neutral', 'peace', 'power', 'brand', 'ai'],
    },
    size: {
      control: { type: 'radio' },
      options: ['sm', 'md'],
    },
    actionIcon: {
      table: { disable: true },
    },
    zIndex: {
      table: { disable: true },
    },
  },
  args: {
    shape: 'pill',
    disabled: false,
    size: 'md',
    onClick: () => alert('Tag clicked'),
    kind: 'positive',
    variant: 'outlined',
    icon: InformationFilled,
    showAction: false,
    children: 'Information',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/eMhywyfWwKMjIyemY3PDoK/Design-System-Webdox-1.0?type=design&node-id=277-0&mode=dev',
    },
  },
} as Meta<typeof Tag>;

/** A Tag */
const Template: StoryFn<typeof Tag> = (args) => {
  return <Tag {...args} />;
};

export const CustomAction = Template.bind({});

CustomAction.args = {
  onClick: () => alert('Action clicked'),
  showAction: true,
};

export const Default = Template.bind({});
