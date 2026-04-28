import { FieldError, FieldErrors, FieldNamesMarkedBoolean, FieldPath, FieldValues, Resolver, ResolverOptions, ResolverResult, UseFormClearErrors, UseFormSetError } from 'react-hook-form';
type TouchedFieldsType<T extends FieldValues = FieldValues> = Partial<Readonly<FieldNamesMarkedBoolean<T>>>;
export type ResolverFormMethods<T extends FieldValues = FieldValues> = {
    formState: {
        errors: FieldErrors<T>;
        touchedFields: TouchedFieldsType<T>;
    };
    setError: UseFormSetError<T>;
    clearErrors: UseFormClearErrors<T>;
};
type AllErrorsSyncResolverParams<T extends FieldValues = FieldValues> = {
    /** The current field values of the form */
    values: T;
    /** An optional context object for the resolver */
    context?: unknown;
    /** Options for the resolver */
    options: ResolverOptions<T>;
    /** Form methods from react-hook-form */
    formMethods?: ResolverFormMethods<T>;
    /** A schema object representing the validation rules */
    schema: unknown;
    /** The actual resolver function */
    resolver(...params: unknown[]): Resolver<T>;
};
/**
 * Recursively gets the paths and errors from a FieldError object or a FieldErrors object.
 *
 * @example
 * ```
 * // Example error object representing form validation errors
 * const validationErrors = {
 *   username: { type: 'required', message: 'Username is required' },
 *   email: {
 *     type: 'pattern',
 *     message: 'Invalid email format',
 *   },
 *   password: {
 *     type: 'minLength',
 *     message: 'Password must be at least 8 characters long',
 *   },
 *   address: {
 *     street: {
 *       type: 'required',
 *       message: 'Street is required',
 *     },
 *     city: {
 *       type: 'required',
 *       message: 'City is required',
 *     },
 *   },
 * };
 *
 * // Using getErrorsPaths to extract paths and errors
 * const errorsPaths = getErrorsPaths(validationErrors);
 *
 * // The errorsPaths array would contain entries like:
 * // [
 * //   ['username', { type: 'required', message: 'Username is required' }],
 * //   ['email', { type: 'pattern', message: 'Invalid email format' }],
 * //   ['password', { type: 'minLength', message: 'Password must be at least 8 characters long' }],
 * //   ['address.street', { type: 'required', message: 'Street is required' }],
 * //   ['address.city', { type: 'required', message: 'City is required' }],
 * // ]
 *
 * // Now you can iterate through errorsPaths and handle errors as needed
 * errorsPaths.forEach(([path, error]) => {
 *   console.log(`Field: ${path}, Error: ${error.message}`);
 * });
 * ```
 */
export declare const getErrorsPaths: <T extends FieldValues = FieldValues>(errorObj: FieldError | FieldErrors<T>, path?: FieldPath<T>) => [FieldPath<T>, FieldError][];
/**
 * Synchronizes and manages errors between two sets of errors, ensuring dynamic reactivity and
 * comprehensive error handling during form validation or resolution processes. This function
 * intelligently updates error states across related fields based on changes to the form values.
 *
 * @remarks
 * In scenarios where traditional resolvers might not update error states in related fields as
 * expected, the `allErrorsSyncResolver` function excels by interacting seamlessly with the
 * `setError` and `clearErrors` methods. It clears outdated errors that are not present in the new
 * error set and sets new errors that were not present in the old error set, providing a holistic
 * error management solution.
 *
 * This function is especially beneficial for handling complex validation scenarios, such as
 * maintaining consistent error feedback across fields affected by interdependencies (e.g.,
 * cross-field validations, uniqueness validations).
 */
export declare const allErrorsSyncResolver: <T extends FieldValues = FieldValues>({ values, context, options, formMethods, schema, resolver, }: AllErrorsSyncResolverParams<T>) => Promise<ResolverResult<T>>;
export {};
