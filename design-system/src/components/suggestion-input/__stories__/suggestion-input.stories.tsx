import { useState } from 'react';

import { Search } from '@carbon/icons-react';

import { SuggestionInput } from '..';
import { ListItem } from '../../list';

import type { SuggestionInputProps } from '..';
import type { Meta, StoryFn } from '@storybook/react-vite';

export default {
  title: 'Components/Inputs/SuggestionInput',
  component: SuggestionInput,
  args: {
    placeholder: 'Buscar...',
    items: ['Hello World', 'Lorem ipsum', 'Qwerty asdf'],
    onSelect: (value: string) => {
      window.alert(`SearchValue: ${value}`);
    },
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/Vg0tnNQrtCYjRtTInXTcTD/Nuclear-DS-1.1-(Oficial)?node-id=11228-224125&t=AfUjpGeyAE0R8szM-1',
    },
  },
} as Meta<typeof SuggestionInput>;

/** A SuggestionInput */
const Template: StoryFn<typeof SuggestionInput<string>> = (args: SuggestionInputProps<string>) => {
  const [search, setSearch] = useState('');

  return (
    <SuggestionInput
      {...args}
      value={search}
      onChange={setSearch}
      mapItemToNode={args.mapItemToNode || (({ item }) => <>{item}</>)}
    />
  );
};

const AnimatedTemplate: StoryFn<typeof SuggestionInput<string>> = (
  args: SuggestionInputProps<string>,
) => {
  const [search, setSearch] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div style={{ width: isOpen ? '500px' : '300px', transition: 'width 0.25s ease-out' }}>
        <SuggestionInput
          {...args}
          value={search}
          onChange={setSearch}
          delayRenderContent={250}
          onIsOpenChange={setIsOpen}
        />
      </div>
    </div>
  );
};

export const Default = Template.bind({});

export const WithoutItems = Template.bind({});

WithoutItems.args = {
  items: [],
};

export const WithTopEnhancer = Template.bind({});

WithTopEnhancer.args = {
  topEnhancer: <div style={{ padding: '16px' }}>Buscas por:</div>,
};

export const CustomListItem = Template.bind({});

CustomListItem.args = {
  items: [
    { id: '1', name: 'Hello World' },
    { id: '2', name: 'Lorem ipsum' },
    { id: '3', name: 'Qwerty asdf' },
  ],
  mapItemToString: (item) => item.name,
  mapItemToNode: ({ item, $isActive, handleClick }) => (
    <ListItem
      label={item.name}
      startEnhancer={<Search />}
      endEnhancer={<span>id: {item.id}</span>}
      onClick={handleClick}
      isActive={$isActive}
    />
  ),
};

export const WidthAnimation = AnimatedTemplate.bind({});
