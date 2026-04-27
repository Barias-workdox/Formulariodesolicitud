import * as yup from 'yup';
import * as z from 'zod';

import { Button } from '../button';

import { InputControl } from './components/input/input-control';
import { useForm } from './hooks';
import { FormProvider } from './utils';

import type { AdditionalProps, ResolverType } from './hooks/use-form.interfaces';
import type { Meta } from '@storybook/react-vite';
import type { FieldValues } from 'react-hook-form';

export default {
  title: 'Modules/Forms/useForm',
  parameters: {
    docs: {
      description: {
        component: 'Examples of using the useForm hook with different validation schemas',
      },
      source: {
        type: 'code',
      },
    },
  },
} satisfies Meta;

// Form value types
interface FormData extends FieldValues {
  name: string;
  email: string;
}

const FormTemplate = <R extends ResolverType>({
  schema,
  resolverType,
}: AdditionalProps<R>): JSX.Element => {
  // Use form with Yup schema
  const methods = useForm({
    schema,
    resolverType,
  });

  const onSubmit = (data: FormData) => console.log(data);
  const { handleSubmit } = methods;

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '400px' }}>
          <div>
            <InputControl
              label="Name"
              name="name"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <InputControl
              label="Email"
              name="email"
              placeholder="Enter your email"
            />
          </div>
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </FormProvider>
  );
};

/**
 * Example showing the useForm hook with default validation (Yup)
 */
export const FormWithDefaultValidation = (): JSX.Element => {
  // Yup schema
  const schema = yup
    .object({
      name: yup.string().required('Name is required'),
      email: yup.string().email('Invalid email format').required('Email is required'),
    })
    .required();

  return <FormTemplate schema={schema} />;
};

/**
 * Example showing the useForm hook with Yup schema validation
 */
export const FormWithYupValidation = (): JSX.Element => {
  // Yup schema
  const schema = yup
    .object({
      name: yup.string().required('Name is required'),
      email: yup.string().email('Invalid email format').required('Email is required'),
    })
    .required();

  return (
    <FormTemplate
      schema={schema}
      resolverType="yup"
    />
  );
};

/**
 * Example showing the useForm hook with Zod schema validation
 */
export const FormWithZodValidation = (): JSX.Element => {
  // Zod schema
  const schema = z.object({
    name: z.string().min(1, 'Name is required'),
    email: z.string().min(1, 'Email is required').email('Invalid email format'),
  });

  return (
    <FormTemplate
      schema={schema}
      resolverType="zod"
    />
  );
};
