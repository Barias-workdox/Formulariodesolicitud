import { Star } from '@carbon/icons-react';

import { BackgroundIcon } from '../../background-icon';

import type { BackgroundIconProps } from '../background-icon.interfaces';
import type { Meta, StoryFn, StoryObj } from '@storybook/react-vite';

export default {
  title: 'Components/Content/BackgroundIcon',
  component: BackgroundIcon,
  args: {
    shape: 'round',
    size: '32px',
    Icon: Star,
    iconColor: 'brand',
    backgroundColor: 'brandDepressed',
    disabled: false,
  },
  argTypes: {
    shape: {
      control: 'radio',
      options: ['square', 'round'],
    },
    Icon: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<typeof BackgroundIcon>;

/** A BackgroundIcon */
const Template: StoryFn<typeof BackgroundIcon> = (args) => {
  return <BackgroundIcon {...args} />;
};

export const Default = Template.bind({});

export const WithOverrides: StoryObj<BackgroundIconProps> = Template.bind({});

WithOverrides.args = {
  overrides: {
    Root: {
      style: {
        border: '5px solid black',
      },
    },
  },
};
