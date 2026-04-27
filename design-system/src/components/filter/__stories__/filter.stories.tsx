import { useState } from 'react';

import { UserAvatar } from '@carbon/icons-react';

import { Checkbox } from '../../checkbox';
import { Menu } from '../../menu';
import { Radio } from '../../radio';
import { Filter } from '../filter';

import type { FilterProps, FilterValue } from '../filter.interfaces';
import type { Meta } from '@storybook/react-vite';

export default {
  component: Filter,
  title: 'Components/Pickers/Filter',
  args: {
    label: 'My filter',
    startEnhancer: UserAvatar,
    disabled: false,
    multi: false,
    kind: 'filled',
    content: '',
  },
  argTypes: {
    startEnhancer: {
      options: [undefined, '🤣', '✅', '💣'],
      control: {
        type: 'radio',
      },
    },
    size: {
      control: {
        type: 'radio',
      },
    },
  },
} as Meta;

const Template = (props: FilterProps) => {
  const [value, setValue] = useState<FilterValue[]>([]);

  const { content, multi, tooltipText } = props;

  const updateValue = (option: FilterValue) => {
    if (value.some(({ id }) => option.id === id)) {
      const updatedValue = value.filter((item) => item.id !== option.id);

      setValue(updatedValue);
    } else {
      if (multi) {
        setValue([...value, option]);
      } else {
        setValue([option]);
      }
    }
  };

  const _tooltipText = tooltipText || value.map(({ id, label }) => <div key={id}>{label}</div>);

  const _content = content || (
    <Menu
      items={[
        { id: 1, label: 'Hello World' },
        { id: 2, label: 'Lorem ipsum' },
        { id: 3, label: 'Qwerty asdf' },
      ]}
      itemLabelTemplate={({ id, label }) => {
        const ItemComponent = multi ? Checkbox : Radio;

        return (
          <span
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1rem',
            }}
          >
            {label}
            <ItemComponent checked={value.some((option) => id === option.id)} />
          </span>
        );
      }}
      onItemSelect={({ item }) => updateValue(item)}
    />
  );

  const handleClear = (): void => {
    setValue([]);
  };

  return (
    <Filter
      {...props}
      value={value}
      content={_content}
      tooltipText={_tooltipText}
      onClear={handleClear}
    />
  );
};

export const Default = Template.bind({});
