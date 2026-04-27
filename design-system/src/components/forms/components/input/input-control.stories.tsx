import * as yup from 'yup';

import { Button } from '../../../button';
import { useForm } from '../../hooks';
import { FormProvider } from '../../utils';

import { InputControl } from './input-control';
import { InputControlContainer } from './input-control-container';

import type { Meta, StoryFn } from '@storybook/react-vite';

export default {
  title: 'Modules/Forms/InputControl',
  component: InputControl,
  args: {
    disabled: false,
    placeholder: 'Placeholder',
    isBorderless: true,
    label: 'Label',
    'data-testid': 'data-testid',
  },
  parameters: {
    docs: {
      source: {
        type: 'code',
      },
    },
  },
} as Meta<typeof InputControl>;

const schema = yup
  .object({
    inputControl: yup.string().required('The field should not be empty'),
  })
  .required();

/** An InputControl */
const Template: StoryFn<typeof InputControl> = (args) => {
  const methods = useForm({ schema });
  const onSubmit = (data) => console.log(data);

  const { handleSubmit } = methods;

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputControl
          {...methods}
          {...args}
          name="inputControl"
        />
        <Button type="submit">Submit</Button>
      </form>
    </FormProvider>
  );
};

/** An InputControl Container */
const TemplateContainer: StoryFn<typeof InputControlContainer> = (args) => {
  const methods = useForm({ schema });
  const onSubmit = (data) => console.log(data);

  const { handleSubmit } = methods;

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputControlContainer
          {...args}
          name="inputControl"
        />
        <Button type="submit">Submit</Button>
      </form>
    </FormProvider>
  );
};

export const Control = Template.bind({});

export const ControlContainer = TemplateContainer.bind({});

export const ControlContainerWithFormControlOverrides = TemplateContainer.bind({});

ControlContainerWithFormControlOverrides.args = {
  formControlOverrides: {
    ControlContainer: {
      style: { margin: `1rem 0 3rem` },
    },
    Caption: { style: { marginBottom: 0, fontSize: '20px', fontWeight: 900 } },
  },
};
