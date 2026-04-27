import type {
  FieldError,
  FieldErrors,
  FieldNamesMarkedBoolean,
  FieldPath,
  FieldValues,
  Resolver,
  ResolverOptions,
  ResolverResult,
  UseFormClearErrors,
  UseFormSetError,
} from 'react-hook-form';

type TouchedFieldsType<T extends FieldValues = FieldValues> = Partial<
  Readonly<FieldNamesMarkedBoolean<T>>
>;

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
export const getErrorsPaths = <T extends FieldValues = FieldValues>(
  errorObj: FieldError | FieldErrors<T>,
  path?: FieldPath<T>,
): [FieldPath<T>, FieldError][] => {
  return Object.entries(errorObj).reduce<[FieldPath<T>, FieldError][]>((arr, [key, value]) => {
    const newPath = [path, key].filter(Boolean).join('.') as FieldPath<T>;
    if (typeof value?.type === 'string') {
      return [...arr, [newPath, value]];
    } else if (typeof value === 'object') {
      return [...arr, ...getErrorsPaths(value, newPath)];
    }

    return arr;
  }, []);
};

/**
 * Determines whether a field specified by its path has been touched.
 *
 * This function checks if the field denoted by the given path has been interacted with by the user.
 */
const isTouched = <T extends FieldValues = FieldValues>(allFields: T, path: string): boolean => {
  return Boolean(
    path.split('.').reduce<TouchedFieldsType | boolean>((field, key, _, arr) => {
      if (field[key] === undefined) {
        arr.splice(1); // eject early the reduce

        return false;
      }

      return field[key];
    }, allFields),
  );
};

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
export const allErrorsSyncResolver = async function <T extends FieldValues = FieldValues>({
  values,
  context,
  options,
  formMethods,
  schema,
  resolver,
}: AllErrorsSyncResolverParams<T>): Promise<ResolverResult<T>> {
  const result = await resolver(schema)(values, context, options);

  const { errors: newErrors } = result;
  const {
    formState: { errors: oldErrors = {}, touchedFields = {} } = {},
    setError,
    clearErrors,
  } = formMethods || {};

  const oldErrorsPaths = getErrorsPaths<T>(oldErrors);
  const newErrorsPaths = getErrorsPaths<T>(newErrors);

  // Clear old errors that are not present in new errors
  oldErrorsPaths.forEach(([path, error]) => {
    const isNewError = newErrorsPaths.some(
      ([newErrorPath, newError]) => path === newErrorPath && error.type === newError.type,
    );
    if (!isNewError && clearErrors !== undefined) {
      clearErrors(path);
    }
  });

  // Set new errors that are not present in old errors and have not been touched
  newErrorsPaths.forEach(([path, error]) => {
    const isOldError = oldErrorsPaths.some(
      ([oldErrorPath, oldError]) => path === oldErrorPath && error.type === oldError.type,
    );

    const errorIsTouched = isTouched(touchedFields, path);

    if (!isOldError && setError !== undefined && errorIsTouched) {
      setError(path, error);
    }
  });

  return result;
};
