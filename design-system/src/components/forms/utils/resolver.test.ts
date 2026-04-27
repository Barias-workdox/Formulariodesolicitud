import { testHelpers } from '@test/test-utils';

import { allErrorsSyncResolver, getErrorsPaths } from './resolver'; // Replace with the actual path to your module

import type { ResolverFormMethods } from './resolver';

describe('allErrorsSyncResolver', () => {
  it('should clear old errors that are not present in new errors', async () => {
    const formMethods: ResolverFormMethods<Record<string, unknown>> = {
      formState: {
        errors: { field1: { type: 'error1', message: 'Error message 1' } },
        touchedFields: {},
      },
      setError: testHelpers.fn(),
      clearErrors: testHelpers.fn(),
    };

    const dummyResolver = () => async (values) => {
      return { values, errors: {} };
    };

    await allErrorsSyncResolver({
      values: {},
      formMethods,
      schema: {},
      resolver: dummyResolver,
      options: undefined,
    });

    expect(formMethods.clearErrors).toHaveBeenCalledWith('field1');
    expect(formMethods.setError).not.toHaveBeenCalled();
  });

  it('should set new errors that are not present in old errors', async () => {
    const formMethods: ResolverFormMethods<Record<string, unknown>> = {
      formState: { errors: {}, touchedFields: { field1: true } },
      setError: testHelpers.fn(),
      clearErrors: testHelpers.fn(),
    };

    const dummyResolver = () => async (values) => {
      return { values, errors: { field1: { type: 'error1', message: 'Error message 1' } } };
    };

    await allErrorsSyncResolver({
      values: {},
      formMethods,
      schema: {},
      resolver: dummyResolver,
      options: undefined,
    });

    expect(formMethods.setError).toHaveBeenCalledWith('field1', {
      type: 'error1',
      message: 'Error message 1',
    });
    expect(formMethods.clearErrors).not.toHaveBeenCalled();
  });
});

describe('getErrorsPaths', () => {
  it('should extract paths and errors correctly', () => {
    const validationErrors = {
      username: { type: 'required', message: 'Username is required' },
      address: {
        street: { type: 'required', message: 'Street is required' },
      },
      favoriteFood: [{ name: { type: 'uniqueness', message: 'Food is repeated' } }],
    };

    const errorsPaths = getErrorsPaths<typeof validationErrors>(validationErrors);

    expect(errorsPaths).toEqual([
      ['username', { type: 'required', message: 'Username is required' }],
      ['address.street', { type: 'required', message: 'Street is required' }],
      ['favoriteFood.0.name', { type: 'uniqueness', message: 'Food is repeated' }],
    ]);
  });
});
