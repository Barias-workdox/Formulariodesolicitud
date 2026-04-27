import * as yup from 'yup';

import { Button } from '../../../button';
import { getOptions } from '../../../select/select.stories';
import { useForm } from '../../hooks';
import { FormProvider } from '../../utils';

import { UserSelectControl } from './user-select-control';
import { UserSelectControlContainer } from './user-select-control-container';

import type { Meta, StoryFn } from '@storybook/react-vite';

export default {
  title: 'Modules/Forms/UserSelectControl',
  component: UserSelectControl,
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
} as Meta<typeof UserSelectControl>;

const schema = yup
  .object({
    userSelectControl: yup.array().required('The field should not be empty'),
  })
  .required();

/** An UserSelectControl */
const Template: StoryFn<typeof UserSelectControl> = (args) => {
  const methods = useForm({ schema });
  const onSubmit = (data) => console.log(data);

  const { handleSubmit } = methods;

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <UserSelectControl
          {...methods}
          {...args}
          name="userSelectControl"
        />
        <Button type="submit">Submit</Button>
      </form>
    </FormProvider>
  );
};

/** An UserSelectControl Container */
const TemplateContainer: StoryFn<typeof UserSelectControlContainer> = (args) => {
  const methods = useForm({ schema });
  const onSubmit = (data) => console.log(data);

  const { handleSubmit } = methods;

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <UserSelectControlContainer
          {...args}
          name="userSelectControl"
        />
        <Button type="submit">Submit</Button>
      </form>
    </FormProvider>
  );
};

export const Control = Template.bind({});

export const ControlContainer = TemplateContainer.bind({});
