import * as yup from 'yup';

import { Button } from '../../../button';
import { useForm } from '../../hooks';
import { FormProvider } from '../../utils';

import { UserMultiselectControl } from './user-multiselect-control';
import { UserMultiselectControlContainer } from './user-multiselect-control.container';

import type { Meta, StoryFn } from '@storybook/react-vite';

export default {
  title: 'Modules/Forms/UserMultiselectControl',
  component: UserMultiselectControl,
  args: {
    label: 'Label',
    users: [
      { id: 1, fullName: 'Carolina Maria', email: 'carolina@mail.com' },
      { id: 2, fullName: 'Andres Perez', email: 'andres@mail.com' },
      { id: 3, fullName: 'John Dow', email: 'john@mail.com' },
      { id: 4, fullName: 'Pablo Rodriguez', email: 'carolina@mail.com' },
      { id: 5, fullName: 'Pedro Perez', email: 'andres@mail.com' },
      { id: 6, fullName: 'Carlos Dow', email: 'john@mail.com' },
    ],
    checkedUsers: [
      {
        id: 1,
        fullName: 'Carolina Maria',
        email: 'carolina@mail.com',
      },
    ],
  },
  parameters: {
    docs: {
      source: {
        type: 'code',
      },
    },
  },
} as Meta<typeof UserMultiselectControl>;

const schema = yup
  .object({
    userMultiselectControl: yup.array().required('The field should not be empty'),
  })
  .required();

/**  UserMultiselectControl */
const Template: StoryFn<typeof UserMultiselectControl> = (args) => {
  const methods = useForm({ schema });
  const onSubmit = (data) => console.log(data);

  const { handleSubmit } = methods;

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <UserMultiselectControl
          {...methods}
          {...args}
          name="userMultiselectControl"
        />
        <Button type="submit">Submit</Button>
      </form>
    </FormProvider>
  );
};

/** UserMultiselectControl Container */
const TemplateContainer: StoryFn<typeof UserMultiselectControlContainer> = (args) => {
  const methods = useForm({ schema });
  const onSubmit = (data) => console.log(data);

  const { handleSubmit } = methods;

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <UserMultiselectControlContainer
          {...args}
          name="userMultiselectControl"
        />
        <Button type="submit">Submit</Button>
      </form>
    </FormProvider>
  );
};

export const Control = Template.bind({});

export const ControlContainer = TemplateContainer.bind({});
