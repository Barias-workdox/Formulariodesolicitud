import * as yup from 'yup';

import { Button } from '../../../button';
import { LABEL_PLACEMENT } from '../../../switch';
import { useForm } from '../../hooks';
import { FormProvider } from '../../utils';

import { SwitchControl } from './switch-control';
import { SwitchControlContainer } from './switch-control-container';

import type { Meta, StoryFn } from '@storybook/react-vite';

export default {
  title: 'Modules/Forms/SwitchControl',
  component: SwitchControl,
  args: {
    loading: false,
    disabled: false,
    error: undefined,
    labelPlacement: LABEL_PLACEMENT.right,
    defaultValue: false,
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
} as Meta<typeof SwitchControl>;

const schema = yup
  .object({
    switchControl: yup.boolean().isTrue(),
  })
  .required();

/** A SwitchControl */
const Template: StoryFn<typeof SwitchControl> = (args) => {
  const methods = useForm({
    schema,
  });

  const onSubmit = (data) => console.log(data);

  const { handleSubmit } = methods;

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <SwitchControl
          {...methods}
          {...args}
          name="switchControl"
        />
        <Button type="submit">Submit</Button>
      </form>
    </FormProvider>
  );
};

/** A SwitchControl Container */
const TemplateContainer: StoryFn<typeof SwitchControlContainer> = (args) => {
  const methods = useForm({
    schema,
  });

  const onSubmit = (data) => console.log(data);

  const { handleSubmit } = methods;

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <SwitchControlContainer
          {...args}
          name="switchControl"
        />
        <Button type="submit">Submit</Button>
      </form>
    </FormProvider>
  );
};

export const Control = Template.bind({});

export const ControlContainer = TemplateContainer.bind({});
