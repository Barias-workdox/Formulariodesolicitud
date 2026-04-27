import { FormProvider } from 'react-hook-form';
import { action } from 'storybook/actions';
import * as yup from 'yup';

import { Button } from '@components/button';
import { useForm } from '@components/forms/hooks';
import { usePhoneInputValidation } from '@components/forms/validations';

import { PhoneInputControl } from '../phone-input-control';
import { PhoneInputControlContainer } from '../phone-input-control-container';

import type { PhoneInputControlProps } from '../phone-input-control';
import type { PhoneInputControlContainerProps } from '../phone-input-control-container';
import type { Meta } from '@storybook/react-vite';
import type { Country } from 'baseui/phone-input';

export default {
  title: 'Modules/Forms/PhoneInputControl',
  component: PhoneInputControl,
} as Meta<typeof PhoneInputControl>;

type FormValues = {
  contactPhone: {
    country?: Country;
    text: string;
  };
};

const FormWrapper = ({ children }: { children: React.ReactNode }) => {
  const { phoneInputValidationSchema } = usePhoneInputValidation();
  const schema = yup.object({
    contactPhone: phoneInputValidationSchema({ required: true }),
  });

  const methods = useForm<FormValues>({ schema });

  const onSubmit = (values: FormValues) => {
    action('Form submitted')(values);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        {children}
        <Button type="submit">Submit</Button>
      </form>
    </FormProvider>
  );
};

export const Control = (props: PhoneInputControlProps): JSX.Element => (
  <FormWrapper>
    <PhoneInputControl
      {...props}
      name="contactPhone"
    />
  </FormWrapper>
);

export const ControlContainer = (props: PhoneInputControlContainerProps): JSX.Element => (
  <FormWrapper>
    <PhoneInputControlContainer
      {...props}
      name="contactPhone"
    />
  </FormWrapper>
);
