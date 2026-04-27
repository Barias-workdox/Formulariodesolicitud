import { yupResolver } from '@hookform/resolvers/yup';
import { zodResolver } from '@hookform/resolvers/zod';
import debounce from 'lodash/debounce';
import { useForm as useNativeForm } from 'react-hook-form';

import { allErrorsSyncResolver } from '../utils/resolver';

import type { ResolverType, UseFormProps, UseFormReturn } from './use-form.interfaces';
import type { FieldValues, ResolverResult } from 'react-hook-form';

const resolversMap = {
  yup: yupResolver,
  zod: zodResolver,
} as const;

/**
 * Custom form hook that extends react-hook-form with schema validation support
 * for Yup and Zod schemas. Includes debounced validation for better performance.
 */
export const useForm = <
  TFieldValues extends FieldValues,
  TContext = unknown,
  TTransformedValues extends FieldValues | undefined = undefined,
  R extends ResolverType = 'yup',
>(
  {
    schema,
    resolverType = 'yup' as R,
    ...rest
  }: UseFormProps<TFieldValues, TContext, R> = {} as UseFormProps<TFieldValues, TContext, R>,
): UseFormReturn<TFieldValues, TContext, TTransformedValues> => {
  const formMethods = useNativeForm<TFieldValues, TContext, TTransformedValues>({
    ...(schema !== undefined && {
      // Implementing debouncing on the resolver enhances the handling of simultaneous queued validations
      resolver: debounce(
        (values, context, options): Promise<ResolverResult<TFieldValues>> =>
          allErrorsSyncResolver({
            values,
            context,
            options,
            schema,
            formMethods,
            resolver: resolversMap[resolverType] ?? yupResolver,
          }),
        undefined,
        { leading: true },
      ),
    }),
    ...rest,
  });

  return formMethods;
};

export type { UseFormProps, UseFormReturn, FieldValues };
