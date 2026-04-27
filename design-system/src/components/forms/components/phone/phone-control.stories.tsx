import * as yup from 'yup';

import { Button } from '../../../button';
import { useForm } from '../../hooks';
import { FormProvider } from '../../utils';
import { usePhoneValidation } from '../../validations';

import { PhoneControl } from './phone-control';
import { PhoneControlContainer } from './phone-control-container';

import type { Meta, StoryFn } from '@storybook/react-vite';

export default {
  title: 'Modules/Forms/PhoneControl',
  component: PhoneControl,
  args: {
    disabled: false,
    'data-testid': 'data-testid',
    countryCode: undefined,
    required: false,
  },
  parameters: {
    docs: {
      source: {
        type: 'code',
      },
    },
  },
} as Meta<typeof PhoneControl>;

/** Reusable phone validation schema for story */
const usePhoneValidationSchema = ({ countryCode, required }) => {
  const { phoneValidationSchema } = usePhoneValidation();

  return yup
    .object({
      phoneControl: phoneValidationSchema({
        schema: yup,
        countryCode: countryCode ?? 'CHL',
        required,
      }),
    })
    .required();
};

/** An InputControl */
const Template: StoryFn<typeof PhoneControl> = ({ required, countryCode, ...restArgs }) => {
  const schema = usePhoneValidationSchema({ countryCode, required });

  const methods = useForm({ schema });
  const onSubmit = (data) => console.log(data);

  const { handleSubmit } = methods;

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <PhoneControl
          {...methods}
          {...restArgs}
          countryCode={countryCode}
          name="phoneControl"
        />
        <Button type="submit">Submit</Button>
      </form>
    </FormProvider>
  );
};

/** An InputControl Container */
const TemplateContainer: StoryFn<typeof PhoneControlContainer> = ({
  required,
  countryCode,
  ...restArgs
}) => {
  const schema = usePhoneValidationSchema({ countryCode, required });

  const methods = useForm({ schema });
  const onSubmit = (data) => console.log(data);

  const { handleSubmit } = methods;

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <PhoneControlContainer
          {...restArgs}
          countryCode={countryCode}
          name="phoneControl"
        />
        <Button type="submit">Submit</Button>
      </form>
    </FormProvider>
  );
};

export const Control = Template.bind({});

export const ControlContainer = TemplateContainer.bind({});
