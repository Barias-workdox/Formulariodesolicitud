import { Download } from '@carbon/icons-react';

import { useToaster } from '../../../../../.storybook/preview';

import { IconButton } from './icon-button';

import type { IconButtonProps } from './icon-button.interfaces';
import type { Meta, StoryFn } from '@storybook/react-vite';

export default {
  title: 'Components/Inputs/IconButton',
  component: IconButton,
  args: {
    'data-testid': 'my-icon-button',
    kind: 'primary',
    size: '44px',
  },
  argTypes: {
    kind: {
      control: 'radio',
    },
    size: {
      control: 'radio',
    },
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/Vg0tnNQrtCYjRtTInXTcTD/Nuclear-DS-1.1-(Oficial)?type=design&node-id=5614-9444&mode=dev',
    },
  },
} satisfies Meta<IconButtonProps>;

const Template: StoryFn<IconButtonProps> = (props) => {
  const toaster = useToaster();

  return (
    <IconButton
      {...props}
      onClick={() => toaster.info({ title: 'Button clicked' })}
    >
      <Download />
    </IconButton>
  );
};

export const Default = Template.bind({});

export const Disabled = Template.bind({});

Disabled.args = { disabled: true };
