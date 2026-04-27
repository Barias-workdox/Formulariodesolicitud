import * as yup from 'yup';

import { Button } from '../../../button';
import { useForm } from '../../hooks';
import { FormProvider } from '../../utils';
import { useDatePickerValidation } from '../../validations';

import { DatePickerControl } from './datepicker-control';
import { DatePickerControlContainer } from './datepicker-control-container';

import type { Meta, StoryFn } from '@storybook/react-vite';

export default {
  title: 'Modules/Forms/DatePickerControl',
  component: DatePickerControl,
  args: {
    disabled: false,
    range: false,
    kind: 'gray',
    label: 'Label',
    required: true,
    placeholder: undefined,
    clearable: true,
    'data-testid': 'data-testid',
    highlightedDate: new Date('2023-01-25'),
  },
  parameters: {
    docs: {
      source: {
        type: 'code',
      },
      story: {
        height: '500px',
      },
    },
  },
} as Meta<typeof DatePickerControl>;

/** Reusable phone validation schema for story */
const useDatePickerValidationSchema = ({ range, required }) => {
  const { datePickerValidationSchema } = useDatePickerValidation();

  return yup
    .object({
      datePickerControl: datePickerValidationSchema({
        schema: yup,
        required,
        range,
      }),
    })
    .required();
};

/** An DatePickerControl */
const Template: StoryFn<typeof DatePickerControl> = ({ range, required, ...restArgs }) => {
  const schema = useDatePickerValidationSchema({ range, required });

  const methods = useForm({ schema });
  const onSubmit = (data) => console.log(data);

  const { handleSubmit } = methods;

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <DatePickerControl
          {...methods}
          {...restArgs}
          range={range}
          required={required}
          name="datePickerControl"
        />
        <Button type="submit">Submit</Button>
      </form>
    </FormProvider>
  );
};

/** An DatePickerControl Container */
const TemplateContainer: StoryFn<typeof DatePickerControlContainer> = ({
  range,
  required,
  ...restArgs
}) => {
  const schema = useDatePickerValidationSchema({ range, required });

  const methods = useForm({ schema });
  const onSubmit = (data) => console.log(data);

  const { handleSubmit } = methods;

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <DatePickerControlContainer
          {...restArgs}
          range={range}
          required={required}
          name="datePickerControl"
        />
        <Button type="submit">Submit</Button>
      </form>
    </FormProvider>
  );
};

export const Control = Template.bind({});

export const ControlContainer = TemplateContainer.bind({});
