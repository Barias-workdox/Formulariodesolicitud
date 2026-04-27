import { faker } from '@faker-js/faker';

import { VirtualizedMenu } from './virtualized-menu';

import type { Meta, StoryFn } from '@storybook/react-vite';

export default {
  title: 'Components/Pickers/Menu/VirtualizedMenu',
  component: VirtualizedMenu,
  args: {
    placementChildMenu: 'rightTop',
    optionListBorderBottom: true,
  },
} as Meta<typeof VirtualizedMenu>;

const Template: StoryFn<typeof VirtualizedMenu> = () => {
  return (
    <VirtualizedMenu
      itemSize={40}
      maxHeight="200px"
      items={new Array(100000).fill(0).map((_, index) => ({
        id: index,
        label: faker.music.songName(),
      }))}
      onItemSelect={console.log}
    />
  );
};

export const DefaultVirtualizedMenu100000Items = Template.bind({});
