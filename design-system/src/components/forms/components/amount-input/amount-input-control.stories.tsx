import { action } from 'storybook/actions';
import * as yup from 'yup';

import { Button } from '../../../button';
import { useForm } from '../../hooks';
import { FormProvider } from '../../utils';

import { AmountInputControl } from './amount-input-control';
import { AmountInputControlContainer } from './amount-input-control-container';

import type { Meta, StoryFn } from '@storybook/react';

export default {
  title: 'Modules/Forms/AmountInputControl',
  component: AmountInputControl,
  args: {
    disabled: false,
    label: 'Amount Input',
    'data-testid': 'data-testid',
    required: false,
  },
  parameters: {
    docs: {
      source: {
        type: 'code',
      },
    },
  },
} as Meta<typeof AmountInputControl>;

/** Reusable validation schema for story */
const validationSchema = () => {
  return yup
    .object({
      amountInputControl: yup.string().required(),
    })
    .required();
};

/** An InputControl */
const Template: StoryFn<typeof AmountInputControl> = (args) => {
  const schema = validationSchema();

  const methods = useForm({ schema });

  const onSubmit = (data) => {
    action('Form submitted')(data);
  };

  const { handleSubmit } = methods;

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <AmountInputControl
          {...methods}
          {...args}
          name="amountInputControl"
        />
        <Button type="submit">Submit</Button>
      </form>
    </FormProvider>
  );
};

/** An AmountInputControl Container */
const TemplateContainer: StoryFn<typeof AmountInputControlContainer> = (args) => {
  const schema = validationSchema();

  const methods = useForm({ schema });

  const onSubmit = (data) => {
    action('Form submitted')(data);
  };

  const { handleSubmit } = methods;

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <AmountInputControlContainer
          {...args}
          name="amountInputControl"
        />
        <Button type="submit">Submit</Button>
      </form>
    </FormProvider>
  );
};

export const Control = Template.bind({});

export const ControlContainer = TemplateContainer.bind({});
