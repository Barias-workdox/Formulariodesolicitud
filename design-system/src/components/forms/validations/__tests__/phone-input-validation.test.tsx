import * as yup from 'yup';

import { renderHook } from '@test/test-utils';

import { usePhoneInputValidation } from '../phone-input.validation';

import type { Country } from 'baseui/phone-input';

/** Mock country object for testing */
const mockCountry: Country = {
  id: 'US',
  label: 'United States',
  dialCode: '+1',
};

/** Reusable mock phone input validation schema */
const mockPhoneInputValidationSchema = ({ required }: { required: boolean }) => {
  const { phoneInputValidationSchema } = renderHook(() => usePhoneInputValidation()).result.current;

  return yup
    .object({
      contactPhone: phoneInputValidationSchema({ required }),
    })
    .required();
};

describe('usePhoneInputValidation hook - tests', () => {
  it('should return phoneInputValidationSchema function', () => {
    const { result } = renderHook(() => usePhoneInputValidation());

    expect(typeof result.current.phoneInputValidationSchema).toBe('function');
  });
});

describe('phoneInputValidationSchema - required validation tests', () => {
  it('should require all fields when required is true', () => {
    const schema = mockPhoneInputValidationSchema({ required: true });

    // Should fail when all fields are empty
    expect(() =>
      schema.validateSync({
        contactPhone: {
          country: undefined,
          text: '',
        },
      }),
    ).toThrow();

    // Should pass when all fields are filled
    expect(() =>
      schema.validateSync({
        contactPhone: {
          country: mockCountry,
          text: '+1234567890',
        },
      }),
    ).not.toThrow();
  });

  it('should require country fields when required is true', () => {
    const schema = mockPhoneInputValidationSchema({ required: true });

    // Should fail when country fields are missing
    expect(() =>
      schema.validateSync({
        contactPhone: {
          country: { id: '', label: '', dialCode: '' },
          text: '+1234567890',
        },
      }),
    ).toThrow();
  });
});

describe('phoneInputValidationSchema - conditional validation tests', () => {
  it('should allow empty fields when not required and both are empty', () => {
    const schema = mockPhoneInputValidationSchema({ required: false });

    // Should pass when both fields are empty
    expect(() =>
      schema.validateSync({
        contactPhone: {
          country: undefined,
          text: '',
        },
      }),
    ).not.toThrow();
  });

  it('should require both fields when text has value but country is empty', () => {
    const schema = mockPhoneInputValidationSchema({ required: false });

    // Should fail when text has value but country is empty
    expect(() =>
      schema.validateSync({
        contactPhone: {
          country: undefined,
          text: '+1234567890',
        },
      }),
    ).toThrow();
  });

  it('should require both fields when country has value but text is empty', () => {
    const schema = mockPhoneInputValidationSchema({ required: false });

    // Should fail when country has value but text is empty
    expect(() =>
      schema.validateSync({
        contactPhone: {
          country: mockCountry,
          text: '',
        },
      }),
    ).toThrow();
  });

  it('should pass when both fields have values', () => {
    const schema = mockPhoneInputValidationSchema({ required: false });

    // Should pass when both fields have values
    expect(() =>
      schema.validateSync({
        contactPhone: {
          country: mockCountry,
          text: '+1234567890',
        },
      }),
    ).not.toThrow();
  });

  it('should require text when country has partial values', () => {
    const schema = mockPhoneInputValidationSchema({ required: false });

    // Should fail when country has partial values but text is empty
    expect(() =>
      schema.validateSync({
        contactPhone: {
          country: { id: 'US', label: '', dialCode: '' },
          text: '',
        },
      }),
    ).toThrow();

    // Should pass when country has partial values and text has value
    expect(() =>
      schema.validateSync({
        contactPhone: {
          country: { id: 'US', label: '', dialCode: '' },
          text: '+1234567890',
        },
      }),
    ).not.toThrow();
  });

  it('should require country when text has value', () => {
    const schema = mockPhoneInputValidationSchema({ required: false });

    // Should fail when text has value but country fields are empty
    expect(() =>
      schema.validateSync({
        contactPhone: {
          country: { id: '', label: '', dialCode: '' },
          text: '+1234567890',
        },
      }),
    ).toThrow();
  });
});
