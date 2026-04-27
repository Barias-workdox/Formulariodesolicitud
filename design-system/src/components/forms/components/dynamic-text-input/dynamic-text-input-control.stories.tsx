import * as yup from 'yup';

import { Button } from '../../../button';
import { useForm } from '../../hooks';
import { FormProvider } from '../../utils';

import { DynamicTextInputControl } from './dynamic-text-input-control';
import { DynamicTextInputControlContainer } from './dynamic-text-input-control-container';

import type { DynamicTextInputControlProps } from './dynamic-text-input-control';
import type { DynamicTextInputControlContainerProps } from './dynamic-text-input-control-container';
import type { Meta, StoryFn, StoryObj } from '@storybook/react-vite';

export default {
  title: 'Modules/Forms/DynamicTextInputControl',
  component: DynamicTextInputControl,
  args: { name: 'title', variant: 'body', placeholder: 'Lorem ipsum dolor sit amet' },
} as Meta<typeof DynamicTextInputControl>;

const schema = yup
  .object({
    title: yup.string().required('The field should not be empty'),
  })
  .required();

const ControlTemplate: StoryFn<DynamicTextInputControlProps> = (args) => {
  const methods = useForm({ schema });
  const onSubmit = (data) => console.log(data);

  const { handleSubmit } = methods;

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <DynamicTextInputControl
          {...methods}
          {...args}
        />
        <div style={{ height: '20px' }} />
        <Button type="submit">Submit</Button>
      </form>
    </FormProvider>
  );
};

const ControlContainerTemplate: StoryFn<DynamicTextInputControlContainerProps> = (args) => {
  const methods = useForm({ schema });
  const onSubmit = (data) => console.log(data);

  const { handleSubmit } = methods;

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <DynamicTextInputControlContainer {...args} />
        <Button type="submit">Submit</Button>
      </form>
    </FormProvider>
  );
};

export const Control: StoryObj<DynamicTextInputControlProps> = ControlTemplate.bind({});

export const ControlContainer: StoryObj<DynamicTextInputControlContainerProps> =
  ControlContainerTemplate.bind({});
