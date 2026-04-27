import { Star } from '@carbon/icons-react';
import { faker } from '@faker-js/faker';

import { NavigationMenu } from '..';

import type { Meta, StoryFn } from '@storybook/react-vite';

export default {
  title: 'Components/Navigation/NavigationMenu',
  component: NavigationMenu,
  args: {
    size: 'default',
  },
  argTypes: {
    size: {
      control: 'radio',
      options: ['default', 'large'],
    },
  },
} as Meta<typeof NavigationMenu>;

const itemsData = new Array(10).fill(0).map(() => ({
  id: faker.string.hexadecimal({ length: 7 }),
  label: faker.lorem.words(2),
  counter: faker.number.int({ min: 0, max: 999 }),
  disabled: !faker.datatype.boolean(),
}));

/** A Navigation Menu */
const Template: StoryFn<typeof NavigationMenu & typeof NavigationMenu.MenuItem> = ({ size }) => {
  return (
    <div
      style={{
        width: '300px',
      }}
    >
      <NavigationMenu>
        {itemsData.map(({ id, counter, label, disabled }, index) => (
          <NavigationMenu.MenuItem
            data-testid={`menu-item-${index}`}
            size={size}
            startEnhancer={
              <NavigationMenu.BackgroundIcon
                icon={Star}
                kind="neutral"
                appearance="tonal"
                shape="round"
                menuItemSize={size}
                disabled={disabled}
              />
            }
            key={id}
            counter={counter}
            label={label}
            isSelected={index === 3}
            disabled={disabled && index !== 3}
            onClick={() => window.alert(`Click - MenuItem ${label}`)}
          />
        ))}
      </NavigationMenu>
    </div>
  );
};

export const Default = Template.bind({});
