import { Star } from '@carbon/icons-react';
import { faker } from '@faker-js/faker';
import { action } from 'storybook/actions';

import { Sublink } from '../sublink';

import type { Meta, StoryObj } from '@storybook/react-vite';

const itemsData = new Array(10).fill(0).map((_, index) => {
  const id = faker.string.hexadecimal({ length: 7 });
  const label = faker.lorem.words(2);
  const counter = faker.number.int({ min: 0, max: 999 });
  const disabled = !faker.datatype.boolean();

  return {
    id,
    label,
    href: `/dashboard`,
    counter,
    disabled: disabled && index !== 3,
  };
});

const meta: Meta<typeof Sublink> = {
  title: 'Components/Navigation/Sublink',
  component: Sublink,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
    },
    items: {
      control: false,
    },
    position: {
      control: 'object',
    },
    startEnhancer: {
      control: false,
    },
    onItemClick: {
      control: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Sublink>;

export const Default: Story = {
  args: {
    title: 'Quick links',
    items: itemsData,
    position: { top: 40, left: 40 },
    startEnhancer: Star,
    onItemClick: (item) => action('sublink-item-click')(item),
  },
};
