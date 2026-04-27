import { AvatarListItem } from '../components/avatar-list-item';

import type { AvatarListItemProps } from '../components/avatar-list-item';
import type { Meta, StoryFn, StoryObj } from '@storybook/react-vite';

export default {
  title: 'Components/Content/List/AvatarListItem',
  component: AvatarListItem,
  args: {
    label: 'Ea voluptate non nulla',
    details: 'Officia veniam voluptate',
    info: 'Info',
    endEnhancer: 'Info',
    avatarProps: {
      backgroundColor: 'brandSubdued',
      disabled: false,
      name: 'Lorem Ipsum',
      showTooltip: true,
    },
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/Vg0tnNQrtCYjRtTInXTcTD/Nuclear-DS-1.1-(Oficial)?node-id=7666-13105&t=wJzOgGHeFMefqA2q-4',
    },
  },
} as Meta<typeof AvatarListItem>;

/** A AvatarListItem */
const Template: StoryFn<typeof AvatarListItem> = (args) => {
  return (
    <div style={{ width: '300px' }}>
      <AvatarListItem {...args} />
    </div>
  );
};

export const Default = Template.bind({});

export const AsButton: StoryObj<AvatarListItemProps> = Template.bind({});

AsButton.args = {
  onClick: () => alert(`AvatarListItem - clicked`),
};
