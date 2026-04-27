import { useCallback, useEffect, useState } from 'react';

import { TrashCan } from '@carbon/icons-react';

import { IconButton } from '../button/variants/icon-button';

import { DropdownTag } from './dropdown-tag';

import type { Meta, StoryFn } from '@storybook/react-vite';

export default {
  title: 'Components/Pickers/DropdownTag',
  component: DropdownTag,
  args: {
    kind: 'default',
    children: 'Sin asignar',
    disabled: false,
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/Vg0tnNQrtCYjRtTInXTcTD/Nuclear-DS-1.1-(Oficial)?node-id=9616-7873&t=Q5dmVQxWOwYnNb0y-1',
    },
  },
} as Meta<typeof DropdownTag>;

const Template: StoryFn<typeof DropdownTag> = (args) => {
  const { children, disabled } = args;

  const [text, setText] = useState(null);
  const [items, setItems] = useState<(typeof args)['items']>([]);

  const handleItemDelete = (id): void => {
    setItems((prev) => prev.filter(({ id: itemId }) => itemId !== id));
  };

  const getEndEnhancer = useCallback((id: number) => {
    return (
      <IconButton
        size="compact"
        kind="control"
        onClick={(e) => {
          e.stopPropagation();
          handleItemDelete(id);
        }}
      >
        <TrashCan />
      </IconButton>
    );
  }, []);

  useEffect(() => {
    setItems(
      Array.from({ length: 7 }, (_, i) => ({
        'data-testid': `data-testid item ${i}`,
        id: i,
        label: `Group ${i}`,
        endEnhancer: getEndEnhancer(i),
      })),
    );
  }, [getEndEnhancer]);

  const handleItemSelect = ({ item: { label } }): void => {
    setText(label);
  };

  return (
    <DropdownTag
      {...args}
      onItemSelect={handleItemSelect}
      items={items}
      disabled={disabled}
    >
      {text ?? children}
    </DropdownTag>
  );
};

export const Default = Template.bind({});
