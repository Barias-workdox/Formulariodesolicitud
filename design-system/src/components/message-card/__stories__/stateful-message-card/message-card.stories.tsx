import { Star } from '@carbon/icons-react';

import { StatefulMessageCard } from '../..';

import type { StatefulMessageCardProps } from '../..';
import type { Meta, StoryFn, StoryObj } from '@storybook/react-vite';

export default {
  title: 'Components/Content/MessageCard/StatefulMessageCard',
  component: StatefulMessageCard,
  args: {
    disabled: false,
    service: 'default',
    titleDirection: 'row',
    iconShape: 'round',
    iconPosition: 'default',
    title: 'Incididunt tempor',
    description: 'Pariatur voluptate magna eu nostrud aliqua laborum duis anim mollit ipsum.',
  },
  argTypes: {
    service: { control: 'select', options: ['default', 'brain', 'legalWhisper', 'smartContract'] },
    titleDirection: { control: 'select', options: ['row', 'column'] },
    iconShape: { control: 'select', options: ['round', 'square'] },
    iconPosition: { control: 'select', options: ['default', 'left'] },
    Icon: { table: { disable: true } },
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/Vg0tnNQrtCYjRtTInXTcTD/Nuclear-DS-1.1-(Oficial)?node-id=7840-16310&t=RJZK5lPFoLpj6tfH-4',
    },
  },
} satisfies Meta<StatefulMessageCardProps>;

const Template: StoryFn<StatefulMessageCardProps> = (args) => {
  return (
    <div
      style={{
        width: '200px',
      }}
    >
      <StatefulMessageCard
        {...args}
        Icon={Star}
      />
    </div>
  );
};

export const Default: StoryObj<StatefulMessageCardProps> = Template.bind({});

export const WithIconLeft: StoryObj<StatefulMessageCardProps> = Template.bind({});

WithIconLeft.args = {
  iconPosition: 'left',
};

export const WithOverrides: StoryObj<StatefulMessageCardProps> = Template.bind({});

WithOverrides.args = {
  description: 'Lorem',
  overrides: {
    Button: {
      style: {
        minHeight: 'fit-content',
      },
    },
    Title: {
      props: {
        overrides: {
          Title: {
            props: {
              textAlign: 'right',
            },
          },
        },
      },
    },
    Description: {
      props: {
        textAlign: 'right',
      },
    },
  },
};
