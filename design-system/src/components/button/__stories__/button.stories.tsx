import { Check } from 'baseui/icon';

import { excludedControls } from '../../../../.storybook/preview';
import { Button } from '../button';

import type { ButtonProps } from '../button.interfaces';
import type { Meta, StoryFn, StoryObj } from '@storybook/react-vite';

export default {
  title: 'Components/Inputs/Button',
  component: Button,
  args: {
    kind: 'primary',
    size: '44px',
    children: 'A Button',
    isLoading: false,
    isSelected: false,
    disabled: false,
    fullWidth: false,
    startEnhancer: () => <Check />,
    endEnhancer: () => <Check />,
  },
  argTypes: {
    kind: {
      control: 'radio',
    },
    size: {
      control: 'radio',
    },
    paddingLeft: {
      control: 'text',
    },
    paddingRight: {
      control: 'text',
    },
    startEnhancer: {
      control: 'text',
    },
    endEnhancer: {
      control: 'text',
    },
  },
  parameters: {
    controls: {
      exclude: [...excludedControls, 'colors', 'type', 'shape', 'isSelected'],
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/Vg0tnNQrtCYjRtTInXTcTD/Nuclear-DS-1.1-(Oficial)?type=design&node-id=5612-1661&mode=design&t=072qiRDQorhhjr7x-4',
    },
  },
} satisfies Meta<ButtonProps>;

const Template: StoryFn<ButtonProps> = (args) => {
  return <Button {...args} />;
};

export const Default: StoryObj<ButtonProps> = Template.bind({});

export const WithoutHorizontalPadding: StoryObj<ButtonProps> = Template.bind({});

WithoutHorizontalPadding.args = {
  paddingRight: 0,
  paddingLeft: 0,
};

/**
 * This story showcases a button that dynamically adjusts its height based on content,
 * eliminating padding to provide a clearer demonstration of the auto-sizing feature.
 */
export const WithAutoSizeAndWithoutHorizontalPadding: StoryObj<ButtonProps> = Template.bind({});

WithAutoSizeAndWithoutHorizontalPadding.args = {
  size: 'auto',
  paddingRight: 0,
  paddingLeft: 0,
};

export const Responsive: StoryObj<ButtonProps> = Template.bind({});

Responsive.args = {
  responsive: true,
};
