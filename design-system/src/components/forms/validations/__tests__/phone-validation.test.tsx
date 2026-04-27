import * as yup from 'yup';

import { renderHook } from '@test/test-utils';

import { phoneValidationSchema, usePhoneValidation, validatePhone } from '../phone.validation';

import type { CountryCodeType } from '../../../utils/interfaces';

interface ValidationOption {
  validValues: string[];
  invalidValues: string[];
}

/** All available countries to check validations */
const allCountryOptionsMap = new Map<CountryCodeType, ValidationOption>([
  [
    undefined,

    {
      validValues: ['+569', '+12345689'],
      invalidValues: ['569', '123456789'],
    },
  ],
  [
    'BRA',

    {
      validValues: ['+5512345678', '+55123', '+551234567890123'],
      invalidValues: ['+5512', '+55', '+56123', '55123456789', '+5612345678901234'],
    },
  ],
]);

const defaultFormatErrorMessage = 'format error';
const defaultRequiredErrorMessage = 'required error';

/** Reusable mock phone validation schema */
const mockPhoneValidationSchema = ({
  countryCode,
  required,
}: {
  countryCode: CountryCodeType;
  required: boolean;
}) => {
  return yup
    .object({
      phoneControl: phoneValidationSchema({
        schema: yup,
        formatErrorMessage: defaultFormatErrorMessage,
        requiredErrorMessage: defaultRequiredErrorMessage,
        required,
        countryCode,
      }),
    })
    .required();
};

/** Reusable mock for phone validation schema hook */
const mockPhoneValidationSchemaHook = ({ schema }: { schema: yup.AnySchema }) => {
  return yup
    .object({
      phoneControl: schema,
    })
    .required();
};

/** Reusable hook call */
const mockUsePhoneValidation = () => renderHook(() => usePhoneValidation());

describe('validatePhone util - tests', () => {
  allCountryOptionsMap.forEach(({ invalidValues, validValues }, countryCode) => {
    it(`should validate truthy valid values for country: '${countryCode}'`, () => {
      validValues.forEach((value) => {
        expect(validatePhone(value, countryCode)).toBeTruthy();
      });
    });
    it(`should validate falsy invalid values for country: '${countryCode}'`, () => {
      invalidValues.forEach((value) => {
        expect(validatePhone(value, countryCode)).toBeFalsy();
      });
    });
  });
});

describe('phoneValidationSchema util - tests', () => {
  allCountryOptionsMap.forEach(({ validValues, invalidValues }, countryCode) => {
    it(`should validate schema correctly for country: '${countryCode}', optional: true and empty value`, () => {
      const optionalEmptySchema = mockPhoneValidationSchema({
        countryCode,
        required: false,
      });

      expect(() => optionalEmptySchema.validateSync({ phoneControl: '' })).not.toThrow();
    });

    it(`should validate schema correctly for country: '${countryCode}', optional: true and valid values`, () => {
      const optionalValidSchema = mockPhoneValidationSchema({
        countryCode,
        required: false,
      });

      validValues.forEach((value) => {
        expect(() => optionalValidSchema.validateSync({ phoneControl: value })).not.toThrow();
      });
    });
    it(`should throw when validating schema for country: '${countryCode}', optional: true and invalid values`, () => {
      const optionalInvalidSchema = mockPhoneValidationSchema({
        countryCode,
        required: false,
      });

      invalidValues.forEach((value) => {
        expect(() => optionalInvalidSchema.validateSync({ phoneControl: value })).toThrow(
          defaultFormatErrorMessage,
        );
      });
    });
    it(`should throw when validating schema for country: '${countryCode}', optional: false and empty value`, () => {
      const requiredEmptySchema = mockPhoneValidationSchema({ countryCode, required: true });

      expect(() => requiredEmptySchema.validateSync({ phoneControl: '' })).toThrow(
        defaultRequiredErrorMessage,
      );
    });
    it(`should validate schema correctly for country: '${countryCode}', optional: false and valid values`, () => {
      const requiredValidSchema = mockPhoneValidationSchema({ countryCode, required: true });

      validValues.forEach((value) => {
        expect(() => requiredValidSchema.validateSync({ phoneControl: value })).not.toThrow();
      });
    });
    it(`should throw when validating schema for country: '${countryCode}', optional: false and invalid values`, () => {
      const requiredInvalidSchema = mockPhoneValidationSchema({
        countryCode,
        required: true,
      });

      invalidValues.forEach((value) => {
        expect(() => requiredInvalidSchema.validateSync({ phoneControl: value })).toThrow(
          defaultFormatErrorMessage,
        );
      });
    });
  });
});

describe('usePhoneValidation hook - tests', () => {
  const {
    result: {
      current: { formatErrorMessage, requiredErrorMessage, phoneValidationSchema },
    },
  } = mockUsePhoneValidation();

  allCountryOptionsMap.forEach(({ invalidValues, validValues }, countryCode) => {
    it(`should validate hook correctly for country: '${countryCode}', optional: true and empty value`, () => {
      const optionalEmptySchema = mockPhoneValidationSchemaHook({
        schema: phoneValidationSchema({ countryCode, required: false, schema: yup }),
      });

      expect(() => optionalEmptySchema.validateSync({ phoneControl: '' })).not.toThrow();
    });

    it(`should validate hook correctly for country: '${countryCode}', optional: true and valid values`, () => {
      const optionalValidSchema = mockPhoneValidationSchemaHook({
        schema: phoneValidationSchema({ countryCode, required: false, schema: yup }),
      });

      validValues.forEach((value) => {
        expect(() => optionalValidSchema.validateSync({ phoneControl: value })).not.toThrow();
      });
    });
    it(`should throw when validating hook for country: '${countryCode}', optional: true and invalid values`, () => {
      const optionalInvalidSchema = mockPhoneValidationSchemaHook({
        schema: phoneValidationSchema({ countryCode, required: false, schema: yup }),
      });

      invalidValues.forEach((value) => {
        expect(() => optionalInvalidSchema.validateSync({ phoneControl: value })).toThrow(
          formatErrorMessage,
        );
      });
    });
    it(`should throw when validating hook for country: '${countryCode}', optional: false and empty value`, () => {
      const requiredEmptySchema = mockPhoneValidationSchemaHook({
        schema: phoneValidationSchema({ countryCode, required: true, schema: yup }),
      });

      expect(() => requiredEmptySchema.validateSync({ phoneControl: '' })).toThrow(
        requiredErrorMessage,
      );
    });
    it(`should validate hook correctly for country: '${countryCode}', optional: false and valid values`, () => {
      const requiredValidSchema = mockPhoneValidationSchemaHook({
        schema: phoneValidationSchema({ countryCode, required: true, schema: yup }),
      });

      validValues.forEach((value) => {
        expect(() => requiredValidSchema.validateSync({ phoneControl: value })).not.toThrow();
      });
    });
    it(`should throw when validating hook for country: '${countryCode}', optional: false and invalid values`, () => {
      const requiredInvalidSchema = mockPhoneValidationSchemaHook({
        schema: phoneValidationSchema({ countryCode, required: true, schema: yup }),
      });

      invalidValues.forEach((value) => {
        expect(() => requiredInvalidSchema.validateSync({ phoneControl: value })).toThrow(
          formatErrorMessage,
        );
      });
    });
  });
});
