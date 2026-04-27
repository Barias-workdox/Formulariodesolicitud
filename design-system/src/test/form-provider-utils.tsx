import type { ReactElement, ReactNode } from 'react';
import { Children, createElement, isValidElement } from 'react';

import { FormProvider } from 'react-hook-form';

import { useForm } from '../components/forms';

import type { FieldValues, UseFormProps } from '../components/forms';
import type { ResolverType } from '../components/forms/hooks/use-form.interfaces';

type CustomFormProviderProps<
  TFieldValues extends FieldValues,
  TContext,
  R extends ResolverType = 'yup',
> = UseFormProps<TFieldValues, TContext, R> & {
  children: ReactNode | ReactNode[];
  /**
   * If not defined, omit the form declaration and add only the children.
   * Use it if the form is deeply nested in the form
   */
  onSubmit?(...args: unknown[]): unknown;
};

/** A custom form provider that allows to pass the useForm properties as parameters used to test context components */
export function FormProviderWrapper<
  TFieldValues extends FieldValues,
  TContext,
  R extends ResolverType = 'yup',
>({
  children,
  onSubmit,
  ...formProps
}: CustomFormProviderProps<TFieldValues, TContext, R>): JSX.Element {
  const methods = useForm(formProps);

  const { handleSubmit } = methods;

  return (
    <FormProvider {...methods}>
      {onSubmit !== undefined ? (
        <form
          data-testid="test-form"
          onSubmit={handleSubmit(onSubmit)}
        >
          {children}
        </form>
      ) : (
        children
      )}
    </FormProvider>
  );
}

/** A custom form provider that allows to pass the useForm properties as parameters and will inject the control in the child component */
export function FormProviderControlWrapper<
  TFieldValues extends FieldValues,
  TContext,
  R extends ResolverType = 'yup',
>({
  children,
  onSubmit,
  ...formProps
}: CustomFormProviderProps<TFieldValues, TContext, R>): JSX.Element {
  const methods = useForm(formProps);

  const { handleSubmit } = methods;

  const childrenWithForm = Children.map(children, (child) => {
    if (!isValidElement(child)) return child;

    const childElement = child as ReactElement;
    const name = childElement.props?.name;

    return name
      ? createElement(childElement.type, {
          ...childElement.props,
          ...methods,
          key: name,
        })
      : childElement;
  });

  return (
    <FormProvider {...methods}>
      {onSubmit !== undefined ? (
        <form
          data-testid="test-form"
          onSubmit={handleSubmit(onSubmit)}
        >
          {childrenWithForm}
        </form>
      ) : (
        childrenWithForm
      )}
    </FormProvider>
  );
}
