import { Information } from '@carbon/icons-react';

import { Tag } from './tag';

import type { Meta, StoryFn } from '@storybook/react-vite';

export default {
  title: 'Components/Content/Tag',
  component: Tag,
  args: {
    kind: 'neutral',
    variant: 'overlay',
    children: 'a tag for testing',
    icon: <Information size={32} />,
    'data-testid': 'data-testid',
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

export const Default = Template.bind({});

export const WithoutIcon = Template.bind({});

WithoutIcon.args = {
  icon: undefined,
};
