import { ResolverType, UseFormProps, UseFormReturn } from './use-form.interfaces';
import { FieldValues } from 'react-hook-form';
/**
 * Custom form hook that extends react-hook-form with schema validation support
 * for Yup and Zod schemas. Includes debounced validation for better performance.
 */
export declare const useForm: <TFieldValues extends FieldValues, TContext = unknown, TTransformedValues extends FieldValues | undefined = undefined, R extends ResolverType = "yup">({ schema, resolverType, ...rest }?: UseFormProps<TFieldValues, TContext, R>) => UseFormReturn<TFieldValues, TContext, TTransformedValues>;
export type { UseFormProps, UseFormReturn, FieldValues };
