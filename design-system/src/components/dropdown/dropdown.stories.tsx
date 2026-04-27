import { useState } from 'react';

import { Archive, Bot, DataConnected, Forward_10 } from '@carbon/icons-react';

import { Dropdown } from './dropdown';

import type { DropdownOption } from './dropdown.interfaces';
import type { Meta, StoryFn } from '@storybook/react-vite';

export default {
  title: 'Components/Pickers/Dropdown',
  component: Dropdown,
  args: {
    size: 'default',
    placement: 'auto',
    textForTooltip: 'Id aute est elit mollit sit sint duis cillum minim id deserunt.',
    options: [
      {
        Icon: Archive,
        isActive: true,
        label: 'Item 1',
        onClick: () => console.log('clicked 1'),
        'data-testid': 'data-testid item 1',
      },
      {
        Icon: Bot,
        isActive: true,
        label: 'Item 2',
        onClick: () => console.log('clicked 2'),
        'data-testid': 'data-testid item 2',
      },
      {
        Icon: Forward_10,
        isActive: true,
        label: 'Item 3',
        onClick: () => console.log('clicked 3'),
        'data-testid': 'data-testid item 3',
      },
      {
        Icon: DataConnected,
        isActive: true,
        label: 'Item 4',
        onClick: () => console.log('clicked 4'),
        'data-testid': 'data-testid item 4',
      },
    ],
    buttonKind: 'control',
  },
  argTypes: {
    buttonKind: {
      control: 'radio',
    },
    size: {
      control: 'radio',
    },
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/eMhywyfWwKMjIyemY3PDoK/Design-System-Webdox-1.0?type=design&node-id=613-12109&mode=dev',
    },
  },
} as Meta<typeof Dropdown>;

/** A Dropdown */
const Template: StoryFn<typeof Dropdown> = (args) => {
  const [selectedItem, setSelectedItem] = useState<DropdownOption | null>(null);

  const children = selectedItem ? (
    <div>Selected item: {selectedItem.label}</div>
  ) : (
    'No item selected'
  );

  return (
    <Dropdown
      {...args}
      options={args.options.map((option) => ({
        ...option,
        onClick: () => setSelectedItem(option),
      }))}
    >
      {children}
    </Dropdown>
  );
};

export const Default = Template.bind({});

export const Tooltip = Template.bind({});

Tooltip.args = {
  options: undefined,
};
