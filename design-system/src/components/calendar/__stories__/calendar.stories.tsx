import { action } from 'storybook/actions';

import { Calendar } from '../calendar';

import type { CalendarProps } from 'baseui/datepicker';

export default {
  title: 'Components/Pickers/Calendar',
  component: Calendar,
  args: {
    range: false,
    withBorder: true,
    onChange: action('onChange'),
  },
  argTypes: {
    minDate: {
      control: 'date',
    },
    maxDate: {
      control: 'date',
    },
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://embed.figma.com/design/Vg0tnNQrtCYjRtTInXTcTD/Nuclear-Design-System?node-id=7113-6375&embed-host=share',
    },
  },
};

export const Default = (args: CalendarProps): JSX.Element => <Calendar {...args} />;
