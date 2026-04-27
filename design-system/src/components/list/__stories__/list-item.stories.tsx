import { Star } from '@carbon/icons-react';

import { ListItem } from '../components/list-item';

import type { ListItemProps } from '../components/list-item/list-item.interfaces';
import type { Meta, StoryFn, StoryObj } from '@storybook/react-vite';

export default {
  title: 'Components/Content/List/ListItem',
  component: ListItem,
  args: {
    label: 'Ea voluptate non nulla',
    details: 'Officia veniam voluptate',
    info: 'Info',
    startEnhancer: (
      <Star
        width={16}
        height={16}
      />
    ),
    endEnhancer: 'Info',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/Vg0tnNQrtCYjRtTInXTcTD/Nuclear-DS-1.1-(Oficial)?node-id=7666-13216&t=wJzOgGHeFMefqA2q-4',
    },
  },
} as Meta<typeof ListItem>;

/** A ListItem */
const Template: StoryFn<typeof ListItem> = (args) => {
  return (
    <div style={{ width: '300px' }}>
      <ListItem {...args} />
    </div>
  );
};

export const Default = Template.bind({});

export const AsButton: StoryObj<ListItemProps> = Template.bind({});

AsButton.args = {
  onClick: () => alert(`ListItem - clicked`),
};
