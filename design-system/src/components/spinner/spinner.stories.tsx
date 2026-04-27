import { lightTheme } from '@themes';
import { extractGroup } from '@themes/v3/utils/colors.utils';

import { Spinner } from './spinner';

import type { Meta, StoryFn } from '@storybook/react-vite';

const ICONS_COLORS = extractGroup(lightTheme.colors, 'icon');

const presetColors = Object.entries(ICONS_COLORS).map(([key, value]) => ({
  color: value,
  title: key,
}));

export default {
  title: 'Components/Progress & Validation/Spinner',
  component: Spinner,
  args: {
    size: 'md',
  },
  argTypes: {
    color: {
      control: {
        type: 'color',
        presetColors,
      },
    },
    secondaryColor: { control: { type: 'color', presetColors } },
  },
} as Meta<typeof Spinner>;

/** A Spinner */
const Template: StoryFn<typeof Spinner> = (args) => {
  return <Spinner {...args} />;
};

export const Default = Template.bind({});
