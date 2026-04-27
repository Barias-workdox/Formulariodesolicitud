import * as yup from 'yup';

import { renderHook } from '@test/test-utils';

import {
  datePickerRangeValidationRule,
  datePickerSingleDateValidationRule,
  datePickerValidationSchema,
  useDatePickerValidation,
} from '../datepicker.validation';

const testDate = new Date();

/** All available date picker options combination */
const allDatePickerOptions: {
  range: boolean;
  validValue: Date | Date[];
  /** Can be anything but impossible to test with incorrect Dates */
  invalidValue: unknown;
  emptyValue: undefined | Date[];
}[] = [
  {
    range: false,
    validValue: new Date(),
    invalidValue: 'test',
    emptyValue: undefined,
  },
  {
    range: true,
    validValue: [new Date(), new Date()],
    invalidValue: [new Date()],
    emptyValue: [],
  },
];

const defaultRequiredErrorMessage = 'required error';

/** Reusable mock datePicker validation schema */
const mockDatePickerValidationSchema = ({
  required,
  range,
}: {
  required: boolean;
  range: boolean;
}) => {
  return yup
    .object({
      datePickerControl: datePickerValidationSchema({
        schema: yup,
        requiredErrorMessage: defaultRequiredErrorMessage,
        required,
        range,
      }),
    })
    .required();
};

/** Reusable mock for phone validation schema hook */
const mockDatePickerValidationSchemaHook = ({ schema }: { schema: yup.AnySchema }) => {
  return yup
    .object({
      datePickerControl: schema,
    })
    .required();
};

/** Reusable hook call */
const mockUseDatePickerValidation = () => renderHook(() => useDatePickerValidation());

describe('datePickerValidationRule util - tests', () => {
  it('should resolve true when validating an empty optional schema for range: `false`', () => {
    expect(datePickerSingleDateValidationRule({ value: undefined, required: false })).toBeTruthy();
  });
  it('should resolve false when validating an empty required schema for range: `false`', () => {
    expect(datePickerSingleDateValidationRule({ value: undefined, required: true })).toBeFalsy();
  });
  it('should resolve true when validating a valid optional schema for range: `false`', () => {
    expect(datePickerSingleDateValidationRule({ value: testDate, required: false })).toBeTruthy();
  });
  it('should resolve true when validating a valid required schema for range: `false`', () => {
    expect(datePickerSingleDateValidationRule({ value: testDate, required: true })).toBeTruthy();
  });
  it('should resolve true when validating an empty optional schema for range: `true`', () => {
    expect(datePickerRangeValidationRule({ value: [], required: false })).toBeTruthy();
  });
  it('should resolve false when validating an empty required schema for range: `true`', () => {
    expect(datePickerRangeValidationRule({ value: [], required: true })).toBeFalsy();
  });

  it('should resolve false when validating an invalid optional schema for range: `true`', () => {
    expect(datePickerRangeValidationRule({ value: [testDate], required: false })).toBeFalsy();
  });
  it('should resolve false when validating an invalid required schema for range: `true`', () => {
    expect(datePickerRangeValidationRule({ value: [testDate], required: true })).toBeFalsy();
  });
  it('should resolve true when validating a valid optional schema for range: `true`', () => {
    expect(
      datePickerRangeValidationRule({ value: [testDate, testDate], required: false }),
    ).toBeTruthy();
  });
  it('should resolve true when validating a invalid required schema for range: `true`', () => {
    expect(
      datePickerRangeValidationRule({ value: [testDate, testDate], required: true }),
    ).toBeTruthy();
  });
});

describe('datePickerValidationSchema util - tests', () => {
  allDatePickerOptions.forEach(({ range, invalidValue, validValue, emptyValue }) => {
    it(`should validate correctly for optional, range = ${range} empty schema`, () => {
      const optionalEmptySchema = mockDatePickerValidationSchema({
        range,
        required: false,
      });

      expect(() =>
        optionalEmptySchema.validateSync({ datePickerControl: emptyValue }),
      ).not.toThrow();
    });
    it(`should validate correctly for optional, range = ${range} valid schema`, () => {
      const optionalValidSchema = mockDatePickerValidationSchema({
        range,
        required: false,
      });

      expect(() =>
        optionalValidSchema.validateSync({ datePickerControl: validValue }),
      ).not.toThrow();
    });
    it(`should throw error for optional, range = ${range} invalid schema`, () => {
      const optionalInvalidSchema = mockDatePickerValidationSchema({
        range,
        required: false,
      });

      expect(() =>
        optionalInvalidSchema.validateSync({ datePickerControl: invalidValue }),
      ).toThrow();
    });
    it(`should throw error for required, range = ${range} empty schema`, () => {
      const requiredEmptySchema = mockDatePickerValidationSchema({ range, required: true });

      expect(() => requiredEmptySchema.validateSync({ datePickerControl: emptyValue })).toThrow(
        defaultRequiredErrorMessage,
      );
    });
    it(`should validate correctly for required, range = ${range} valid schema`, () => {
      const requiredValidSchema = mockDatePickerValidationSchema({ range, required: true });

      expect(() =>
        requiredValidSchema.validateSync({ datePickerControl: validValue }),
      ).not.toThrow();
    });
    it(`should throw error for required, range = ${range} invalid schema`, () => {
      const requiredInvalidSchema = mockDatePickerValidationSchema({
        range,
        required: true,
      });

      expect(() =>
        requiredInvalidSchema.validateSync({ datePickerControl: invalidValue }),
      ).toThrow();
    });
  });
});

describe('useDatePickerValidation hook - tests', () => {
  const {
    result: {
      current: { requiredErrorMessage, datePickerValidationSchema },
    },
  } = mockUseDatePickerValidation();

  allDatePickerOptions.forEach(({ range, invalidValue, validValue, emptyValue }) => {
    it(`should validate correctly for optional, range = ${range} empty schema`, () => {
      const optionalEmptySchema = mockDatePickerValidationSchemaHook({
        schema: datePickerValidationSchema({ range, required: false, schema: yup }),
      });

      expect(() =>
        optionalEmptySchema.validateSync({ datePickerControl: emptyValue }),
      ).not.toThrow();
    });
    it(`should validate correctly for optional, range = ${range} valid schema`, () => {
      const optionalValidSchema = mockDatePickerValidationSchemaHook({
        schema: datePickerValidationSchema({ range, required: false, schema: yup }),
      });

      expect(() =>
        optionalValidSchema.validateSync({ datePickerControl: validValue }),
      ).not.toThrow();
    });
    it(`should throw error for optional, range = ${range} invalid schema`, () => {
      const optionalInvalidSchema = mockDatePickerValidationSchemaHook({
        schema: datePickerValidationSchema({ range, required: false, schema: yup }),
      });

      expect(() =>
        optionalInvalidSchema.validateSync({ datePickerControl: invalidValue }),
      ).toThrow();
    });
    it(`should throw error for required, range = ${range} empty schema`, () => {
      const requiredEmptySchema = mockDatePickerValidationSchemaHook({
        schema: datePickerValidationSchema({ range, required: true, schema: yup }),
      });

      expect(() => requiredEmptySchema.validateSync({ datePickerControl: emptyValue })).toThrow(
        requiredErrorMessage,
      );
    });
    it(`should validate correctly for required, range = ${range} valid schema`, () => {
      const requiredValidSchema = mockDatePickerValidationSchemaHook({
        schema: datePickerValidationSchema({ range, required: true, schema: yup }),
      });

      expect(() =>
        requiredValidSchema.validateSync({ datePickerControl: validValue }),
      ).not.toThrow();
    });
    it(`should throw error for required, range = ${range} invalid schema`, () => {
      const requiredInvalidSchema = mockDatePickerValidationSchemaHook({
        schema: datePickerValidationSchema({ range, required: true, schema: yup }),
      });

      expect(() =>
        requiredInvalidSchema.validateSync({ datePickerControl: invalidValue }),
      ).toThrow();
    });
  });
});
