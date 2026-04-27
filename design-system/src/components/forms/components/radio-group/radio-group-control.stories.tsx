import * as yup from 'yup';

import { Button } from '../../../button';
import { ALIGN } from '../../../radio';
import { useForm } from '../../hooks';
import { FormProvider } from '../../utils';

import { RadioGroupControl } from './radio-group-control';
import { RadioGroupControlContainer } from './radio-group-control-container';

import type { Meta, StoryFn } from '@storybook/react-vite';

export default {
  title: 'Modules/Forms/RadioGroupControl',
  component: RadioGroupControl,
  args: {
    disabled: false,
    caption: 'caption',
    error: undefined,
    align: ALIGN.horizontal,
    label: 'Radio group',
    options: [
      { id: '1', label: 'label 1' },
      { id: '2', label: 'label 2' },
      { id: '3', label: 'label 3' },
    ],
    valueKey: 'id',
    labelKey: 'label',
    'data-testid': 'data-testid',
  },
  parameters: {
    docs: {
      source: {
        type: 'code',
      },
    },
  },
} as Meta<typeof RadioGroupControl>;

const schema = yup
  .object({
    radioGroupControl: yup.string().required('The field should not be empty'),
  })
  .required();

/** A RadioGroupControl */
const Template: StoryFn<typeof RadioGroupControl> = (args) => {
  const methods = useForm({ schema });
  const onSubmit = (data) => console.log(data);

  const { handleSubmit } = methods;

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <RadioGroupControl
          {...methods}
          {...args}
          name="radioGroupControl"
        />
        <Button type="submit">Submit</Button>
      </form>
    </FormProvider>
  );
};

/** A RadioGroupControl Container */
const TemplateContainer: StoryFn<typeof RadioGroupControlContainer> = (args) => {
  const methods = useForm({ schema });
  const onSubmit = (data) => console.log(data);

  const { handleSubmit } = methods;

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <RadioGroupControlContainer
          {...args}
          name="radioGroupControl"
        />
        <Button type="submit">Submit</Button>
      </form>
    </FormProvider>
  );
};

export const Control = Template.bind({});

export const ControlContainer = TemplateContainer.bind({});
