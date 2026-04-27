import { Text } from '../text';

import { StatefulTooltip } from './stateful-tooltip';

import type { Meta, StoryFn } from '@storybook/react-vite';

export default {
  title: 'Components/Surfaces/StatefulTooltip',
  component: StatefulTooltip,
  args: {
    children: (
      <Text
        $style={{ border: '1px solid gray' }}
        padding="10px"
        variant="body"
      >
        A text
      </Text>
    ),
    content: 'Labore labore est dolore fugiat laboris incididunt proident enim Lorem.',
    showArrow: true,
    tooltipOverrideStyles: {
      maxWidth: '80vw',
    },
    placement: 'auto',
  },
  argTypes: {
    placement: {
      control: {
        type: 'select',
        options: [
          'auto',
          'topLeft',
          'top',
          'topRight',
          'rightTop',
          'right',
          'rightBottom',
          'bottomRight',
          'bottom',
          'bottomLeft',
          'leftBottom',
          'left',
          'leftTop',
        ],
      },
    },
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/eMhywyfWwKMjIyemY3PDoK/Design-System-Webdox-1.0?type=design&node-id=600-6958&mode=dev',
    },
  },
} as Meta<typeof StatefulTooltip>;

/** A StatefulTooltip */
const Template: StoryFn<typeof StatefulTooltip> = (args) => {
  return <StatefulTooltip {...args} />;
};

export const Default = Template.bind({});
