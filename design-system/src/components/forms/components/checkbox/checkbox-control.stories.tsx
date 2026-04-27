import * as yup from 'yup';

import { Button } from '../../../button';
import { useForm } from '../../hooks';
import { FormProvider } from '../../utils';

import { CheckboxControl } from './checkbox-control';
import { CheckboxControlContainer } from './checkbox-control.container';

import type { Meta, StoryFn } from '@storybook/react-vite';

export default {
  title: 'Modules/Forms/CheckboxControl',
  component: CheckboxControl,
  args: {
    error: undefined,
    defaultValue: false,
    label: 'Checkbox',
    'data-testid': 'data-testid',
    children: <div>Text label</div>,
  },
  parameters: {
    docs: {
      source: {
        type: 'code',
      },
    },
  },
} as Meta<typeof CheckboxControl>;

const schema = yup
  .object({
    checkboxControl: yup.boolean().isTrue(),
  })
  .required();

/** A CheckboxControl */
const Template: StoryFn<typeof CheckboxControl> = (args) => {
  const methods = useForm({
    schema,
  });

  const onSubmit = (data) => console.log(data);

  const { handleSubmit } = methods;

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CheckboxControl
          {...methods}
          {...args}
          name="checkboxControl"
        />
        <Button type="submit">Submit</Button>
      </form>
    </FormProvider>
  );
};

export const Control = Template.bind({});

/** A CheckboxControl Container */
const TemplateContainer: StoryFn<typeof CheckboxControlContainer> = (args) => {
  const methods = useForm({
    schema,
  });

  const onSubmit = (data) => console.log(data);

  const { handleSubmit } = methods;

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CheckboxControlContainer
          {...args}
          name="checkboxControl"
        />
        <Button type="submit">Submit</Button>
      </form>
    </FormProvider>
  );
};

export const ControlContainer = TemplateContainer.bind({});
