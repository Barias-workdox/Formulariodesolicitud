import { TETHER_PLACEMENT } from '../../layer/layer.constants';

import { StatefulTooltipNext } from './stateful-tooltip-next';

import type { StatefulTooltipNextProps } from './stateful-tooltip-next';
import type { Meta, StoryFn, StoryObj } from '@storybook/react-vite';

export default {
  title: 'Components/Surfaces/StatefulTooltipNext',
  component: StatefulTooltipNext,
  args: {
    children: 'A text',
    content: 'Labore labore est dolore fugiat laboris incididunt proident enim Lorem.',
    showArrow: true,
    placement: 'right',
    popoverMargin: 8,
    ignoreBoundary: true,
  },
  argTypes: {
    placement: {
      control: {
        type: 'select',
        options: Object.keys(TETHER_PLACEMENT),
      },
    },
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/d6NSl7Hd5iv8ArOc9pgjhl/Nuclear-%5BDS-Lab%5D?type=design&node-id=2777-118217&mode=design&t=L7ToLINxXXJG7QM6-4',
    },
  },
} as Meta<StatefulTooltipNextProps>;

/** Basic StatefulTooltipNext */
const Template: StoryFn<StatefulTooltipNextProps> = (args) => {
  return <StatefulTooltipNext {...args} />;
};

export const Default = Template.bind({});

export const SmallSizedTooltip: StoryObj<StatefulTooltipNextProps> = Template.bind({});

SmallSizedTooltip.args = {
  size: 'sm',
};

export const MediumSizedTooltip: StoryObj<StatefulTooltipNextProps> = Template.bind({});

MediumSizedTooltip.args = {
  size: 'md',
};
