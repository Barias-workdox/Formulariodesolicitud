import * as yup from 'yup';

import { Button } from '../../../button';
import { getOptions } from '../../../select/select.stories';
import { useForm } from '../../hooks';
import { FormProvider } from '../../utils';

import { SelectControl } from './select-control';
import { SelectControlContainer } from './select-control-container';

import type { Meta, StoryFn } from '@storybook/react-vite';

export default {
  title: 'Modules/Forms/SelectControl',
  component: SelectControl,
  args: {
    disabled: false,
    label: 'Label',
    placeholder: 'Placeholder',
    options: getOptions(10),
    'data-testid': 'data-testid',
  },
  parameters: {
    docs: {
      source: {
        type: 'code',
      },
    },
  },
} as Meta<typeof SelectControl>;

const schema = yup
  .object({
    selectControl: yup.array().required('The field should not be empty'),
  })
  .required();

/** An InputControl */
const Template: StoryFn<typeof SelectControl> = (args) => {
  const methods = useForm({ schema });
  const onSubmit = (data) => console.log(data);

  const { handleSubmit } = methods;

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <SelectControl
          onChange={() => console.log('on change side effects')}
          {...methods}
          {...args}
          name="selectControl"
        />
        <Button type="submit">Submit</Button>
      </form>
    </FormProvider>
  );
};

/** An InputControl Container */
const TemplateContainer: StoryFn<typeof SelectControlContainer> = (args) => {
  const methods = useForm({ schema });
  const onSubmit = (data) => console.log(data);

  const { handleSubmit } = methods;

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <SelectControlContainer
          onChange={() => console.log('on change side effects')}
          {...args}
          name="selectControl"
        />
        <Button type="submit">Submit</Button>
      </form>
    </FormProvider>
  );
};

export const Control = Template.bind({});

export const ControlContainer = TemplateContainer.bind({});
