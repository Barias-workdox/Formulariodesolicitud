import { Star } from '@carbon/icons-react';
import { action } from 'storybook/actions';

import { MessageCardBase } from '../..';

import type { MessageCardBaseProps } from '../..';
import type { Meta, StoryFn, StoryObj } from '@storybook/react-vite';

export default {
  title: 'Components/Content/MessageCard/MessageCardBase',
  component: MessageCardBase,
  args: {
    disabled: false,
    service: 'default',
    titleDirection: 'row',
    iconShape: 'round',
    iconPosition: 'default',
    title: 'Incididunt tempor',
    description: 'Pariatur voluptate magna eu nostrud aliqua laborum duis anim mollit ipsum.',
    onClick: (event) => action('onClick')(event),
  },
  argTypes: {
    service: { control: 'select', options: ['default', 'brain', 'legalWhisper', 'smartContract'] },
    titleDirection: { control: 'select', options: ['row', 'column'] },
    iconShape: { control: 'select', options: ['round', 'square'] },
    iconPosition: { control: 'select', options: ['default', 'left'] },
    isActive: { control: 'boolean', option: [true, false] },
    Icon: { table: { disable: true } },
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/Vg0tnNQrtCYjRtTInXTcTD/Nuclear-DS-1.1-(Oficial)?node-id=7840-16310&t=RJZK5lPFoLpj6tfH-4',
    },
  },
} satisfies Meta<MessageCardBaseProps>;

const Template: StoryFn<MessageCardBaseProps> = (args) => {
  return (
    <div
      style={{
        width: '200px',
      }}
    >
      <MessageCardBase
        {...args}
        Icon={Star}
      />
    </div>
  );
};

export const Default: StoryObj<MessageCardBaseProps> = Template.bind({});

export const Active: StoryObj<MessageCardBaseProps> = Template.bind({});

Active.args = {
  isActive: true,
};

export const WithOverrides: StoryObj<MessageCardBaseProps> = Template.bind({});

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
