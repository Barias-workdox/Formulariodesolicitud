import { fn } from 'storybook/test';

import { Button } from '@components/button';

import { Dropdown } from '../dropdown';

import { generateItems, getRandomlySelectedItemIds } from './dropdown.stories.utils';

import type { Meta, StoryFn } from '@storybook/react-vite';

export default {
  title: 'Components/Pickers/Dropdown/Next',
  component: Dropdown,
  args: {
    options: [],
    multi: false,
    showArrow: false,
    listProps: {
      minWidth: '320px',
      maxHeight: '500px',
      maxWidth: '420px',
    },
    onChange: fn(),
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/Vg0tnNQrtCYjRtTInXTcTD/Nuclear-Design-System?node-id=9679-19271&t=65DCU5rooey56Ygc-4',
    },
  },
} as Meta<typeof Dropdown>;

const groupItems = generateItems({
  count: 5,
  kind: 'group',
  label: 'Group',
  withCheckbox: true,
});

/** A Dropdown */
const Template: StoryFn<typeof Dropdown> = (args) => {
  return (
    <Dropdown {...args}>
      <Button>Open dropdown</Button>
    </Dropdown>
  );
};

export const Default = Template.bind({});

Default.args = {
  options: groupItems,
};

export const WithSelectedItems = Template.bind({});

WithSelectedItems.args = {
  multi: true,
  options: groupItems,
  selectedItems: [
    ...getRandomlySelectedItemIds(groupItems[0].items, 4),
    ...getRandomlySelectedItemIds(groupItems[1].items, 2),
    ...getRandomlySelectedItemIds(groupItems[2].items, 3),
  ],
};

export const WithNormalList = Template.bind({});

WithNormalList.args = {
  options: generateItems({ count: 100 }),
};
