import { FieldValues, UseFormProps as UseNativeFormProps, UseFormReturn as UseNativeFormReturn } from 'react-hook-form';
import type * as yup from 'yup';
import type * as zod from 'zod';
/** Valid resolver types supported by the useForm hook */
export type ResolverType = 'yup' | 'zod';
/**
 * Schema type based on resolver type
 * Uses Yup or Zod schema depending on the specified resolver type
 */
export type SchemaType<R extends ResolverType> = R extends 'yup' ? yup.AnyObjectSchema : R extends 'zod' ? zod.ZodType : never;
/**
 * Additional properties for the useForm hook beyond react-hook-form's properties
 * Typed with a generic resolver type R ('yup' or 'zod')
 */
export interface AdditionalProps<R extends ResolverType> {
    /** Validation schema (Yup or Zod) used to validate form values */
    schema?: SchemaType<R>;
    /** Type of resolver to use for validation */
    resolverType?: R;
}
/**
 * Props for the useForm hook
 * Extends react-hook-form props with additional schema validation properties
 * Generics provide typing for field values, context, and resolver type
 */
export interface UseFormProps<TFieldValues extends FieldValues, TContext, R extends ResolverType = 'yup'> extends UseNativeFormProps<TFieldValues, TContext>, AdditionalProps<R> {
}
/**
 * Return type of the useForm hook
 * Extends react-hook-form return type with additional schema validation properties
 * Generics provide typing for field values, context, transformed values, and resolver type
 */
export type UseFormReturn<TFieldValues extends FieldValues, TContext, TTransformedValues extends FieldValues | undefined> = UseNativeFormReturn<TFieldValues, TContext, TTransformedValues>;
