import { render, screen, waitFor } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import * as yup from 'yup';
import { z } from 'zod';

import { useForm } from './use-form';

import type { AdditionalProps, ResolverType } from './use-form.interfaces';

type FormValues = {
  name: string;
};

const FormTemplate = <R extends ResolverType>({
  schema,
  resolverType,
}: AdditionalProps<R>): JSX.Element => {
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm({
    schema,
    resolverType,
  });

  const onSubmit = (data: FormValues) => {
    document.body.setAttribute('data-submitted', JSON.stringify(data));
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      data-testid="form"
    >
      <input
        data-testid="name-input"
        {...register('name')}
      />
      {errors.name && <span data-testid="name-error">{errors.name.message as string}</span>}
      <button
        type="submit"
        data-testid="submit-button"
      >
        Submit
      </button>
    </form>
  );
};

// Test component with default resolver (Yup)
function TestFormWithDefaultResolver() {
  const schema = yup.object().shape({
    name: yup.string().required('Name is required'),
  });

  return <FormTemplate schema={schema} />;
}

// Test component with YUP
function TestFormWithYup() {
  const schema = yup.object().shape({
    name: yup.string().required('Name is required'),
  });

  return (
    <FormTemplate
      schema={schema}
      resolverType="yup"
    />
  );
}

// Test component with ZOD
function TestFormWithZod() {
  const schema = z.object({
    name: z.string().min(1, { message: 'Name is required' }),
  });

  return (
    <FormTemplate
      schema={schema}
      resolverType="zod"
    />
  );
}

describe('Form Hooks', () => {
  beforeEach(() => {
    document.body.removeAttribute('data-submitted');
  });

  describe('useForm with default resolver', () => {
    it('defaults to Yup resolver when no resolver type is specified', async () => {
      render(<TestFormWithDefaultResolver />);

      await userEvent.click(screen.getByTestId('submit-button'));

      await waitFor(() => {
        expect(screen.getByTestId('name-error')).toBeInTheDocument();
        expect(screen.getByTestId('name-error')).toHaveTextContent('Name is required');
      });

      await userEvent.type(screen.getByTestId('name-input'), 'John Doe');
      await userEvent.click(screen.getByTestId('submit-button'));

      await waitFor(() => {
        expect(document.body.getAttribute('data-submitted')).toBe('{"name":"John Doe"}');
      });
    });
  });

  describe('useForm with Yup resolver', () => {
    it('validates form with Yup schema', async () => {
      render(<TestFormWithYup />);

      await userEvent.click(screen.getByTestId('submit-button'));

      await waitFor(() => {
        expect(screen.getByTestId('name-error')).toBeInTheDocument();
        expect(screen.getByTestId('name-error')).toHaveTextContent('Name is required');
      });

      await userEvent.type(screen.getByTestId('name-input'), 'John Doe');

      await userEvent.click(screen.getByTestId('submit-button'));

      await waitFor(() => {
        expect(document.body.getAttribute('data-submitted')).toBe('{"name":"John Doe"}');
      });
    });
  });

  describe('useForm with Zod resolver', () => {
    it('validates form with Zod schema', async () => {
      render(<TestFormWithZod />);

      await userEvent.click(screen.getByTestId('submit-button'));

      await waitFor(() => {
        expect(screen.getByTestId('name-error')).toBeInTheDocument();
        expect(screen.getByTestId('name-error')).toHaveTextContent('Name is required');
      });

      await userEvent.type(screen.getByTestId('name-input'), 'John Doe');
      await userEvent.click(screen.getByTestId('submit-button'));

      await waitFor(() => {
        expect(document.body.getAttribute('data-submitted')).toBe('{"name":"John Doe"}');
      });
    });
  });
});
