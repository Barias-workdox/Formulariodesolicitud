import * as yup from 'yup';

import { Button } from '../../../button';
import { useForm } from '../../hooks';
import { FormProvider } from '../../utils';

import { CountryControl } from './country-control';
import { CountryControlContainer } from './country-control-container';

import type { Meta, StoryFn } from '@storybook/react-vite';

export default {
  title: 'Modules/Forms/CountryControl',
  component: CountryControl,
  args: {
    disabled: false,
    placeholder: 'Placeholder',
    'data-testid': 'data-testid',
    sort: 'asc',
  },
  parameters: {
    docs: {
      source: {
        type: 'code',
      },
    },
  },
  argTypes: {
    sort: {
      control: 'radio',
      options: ['asc', 'desc'],
    },
    territoryType: {
      control: 'radio',
      options: ['countries', 'territories', 'all', 'specialAreas', 'other'],
    },
  },
} as Meta<typeof CountryControl>;

const schema = yup
  .object({
    countryControl: yup
      .array()
      .min(1, 'The field should not be empty')
      .required('The field should not be empty'),
  })
  .required();

/** An InputControl */
const Template: StoryFn<typeof CountryControl> = (args) => {
  const methods = useForm({ schema });
  const onSubmit = (data) => console.log(data);

  const { handleSubmit } = methods;

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CountryControl
          {...methods}
          {...args}
          name="countryControl"
        />
        <Button type="submit">Submit</Button>
      </form>
    </FormProvider>
  );
};

/** An InputControl Container */
const TemplateContainer: StoryFn<typeof CountryControlContainer> = (args) => {
  const methods = useForm({ schema });
  const onSubmit = (data) => console.log(data);

  const { handleSubmit } = methods;

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CountryControlContainer
          {...args}
          name="countryControl"
        />
        <Button type="submit">Submit</Button>
      </form>
    </FormProvider>
  );
};

export const Control = Template.bind({});

export const ControlContainer = TemplateContainer.bind({});

export const ControlContainerWithCountryCodes = TemplateContainer.bind({});

ControlContainerWithCountryCodes.args = {
  countryCodes: ['CHL', 'ARG', 'BRA', 'FRA'],
};
