import * as yup from 'yup';

import { renderHook } from '@test/test-utils';

import { nicValidationSchema, useNicValidation } from '../util/nic-validation-schema.util';

import { allNicMocks } from './nic.mock';

import type { CountryCodeType } from '../../../../utils/interfaces';
import type { NationalIdentificationKindCode } from '../../../../utils/interfaces/nic.interface';
import type { AnySchema } from 'yup';

const defaultValidationErrorMessage = 'format error';
const defaultRequiredErrorMessage = 'required error';

/** Reusable mock phone validation schema */
const mockNicValidationSchema = ({
  countryCode,
  required,
  nationalIdentificationKindCode,
}: {
  countryCode: CountryCodeType;
  required: boolean;
  nationalIdentificationKindCode: NationalIdentificationKindCode;
}): AnySchema => {
  return yup
    .object({
      nicControl: nicValidationSchema({
        schema: yup,
        validationErrorMessage: defaultValidationErrorMessage,
        requiredErrorMessage: defaultRequiredErrorMessage,
        required,
        countryCode,
        nationalIdentificationKindCode,
      }),
    })
    .required();
};

/** Reusable mock for nic validation schema hook */
const mockNicValidationSchemaHook = ({ schema }: { schema: AnySchema }): AnySchema => {
  return yup
    .object({
      nicControl: schema,
    })
    .required();
};

/** Reusable hook call */
const mockUseNicValidation = () => renderHook(() => useNicValidation());

describe('nicValidationSchema util - tests', () => {
  allNicMocks.forEach(({ validation }, countryCode) => {
    validation?.forEach(({ valid, invalid }, nationalIdentificationKindCode) => {
      it(`should throw error for empty values, required schema, country: ${countryCode}, kind: ${nationalIdentificationKindCode}`, () => {
        const schema = mockNicValidationSchema({
          countryCode,
          required: true,
          nationalIdentificationKindCode,
        });

        expect(() => schema.validateSync({ nicControl: '' })).toThrow(defaultRequiredErrorMessage);
      });

      it(`should validate correctly for empty values, optional schema, country: ${countryCode}, kind: ${nationalIdentificationKindCode}`, () => {
        const schema = mockNicValidationSchema({
          countryCode,
          required: false,
          nationalIdentificationKindCode,
        });

        expect(() => schema.validateSync({ nicControl: '' })).not.toThrow();
      });

      it(`should validate correctly for valid values, required schema, country: ${countryCode}, kind: ${nationalIdentificationKindCode}`, () => {
        valid.forEach((validValue) => {
          const schema = mockNicValidationSchema({
            countryCode,
            required: true,
            nationalIdentificationKindCode,
          });

          expect(() => schema.validateSync({ nicControl: validValue })).not.toThrow();
        });
      });

      it(`should throw error for invalid values, required schema, country: ${countryCode}, kind: ${nationalIdentificationKindCode}`, () => {
        invalid.forEach((invalidValue) => {
          const schema = mockNicValidationSchema({
            countryCode,
            required: true,
            nationalIdentificationKindCode,
          });

          expect(() => schema.validateSync({ nicControl: invalidValue })).toThrow(
            defaultValidationErrorMessage,
          );
        });
      });
    });
  });
});

describe('useNicValidation hook - tests', () => {
  const {
    result: {
      current: { requiredErrorMessage, nicValidationSchema },
    },
  } = mockUseNicValidation();

  allNicMocks.forEach(({ validation }, countryCode) => {
    validation?.forEach(({ valid, invalid }, nationalIdentificationKindCode) => {
      it(`should throw error for empty values, required schema, country: ${countryCode}, kind: ${nationalIdentificationKindCode}`, () => {
        const schema = mockNicValidationSchemaHook({
          schema: nicValidationSchema({
            countryCode,
            required: true,
            nationalIdentificationKindCode,
            schema: yup,
          }),
        });

        expect(() => schema.validateSync({ nicControl: '' })).toThrow(requiredErrorMessage);
      });

      it(`should validate correctly for empty values, optional schema, country: ${countryCode}, kind: ${nationalIdentificationKindCode}`, () => {
        const schema = mockNicValidationSchemaHook({
          schema: nicValidationSchema({
            countryCode,
            required: false,
            nationalIdentificationKindCode,
            schema: yup,
          }),
        });

        expect(() => schema.validateSync({ nicControl: '' })).not.toThrow();
      });

      it(`should validate correctly for valid values, required schema, country: ${countryCode}, kind: ${nationalIdentificationKindCode}`, () => {
        valid.forEach((validValue) => {
          const schema = mockNicValidationSchemaHook({
            schema: nicValidationSchema({
              countryCode,
              required: true,
              nationalIdentificationKindCode,
              schema: yup,
            }),
          });

          expect(() => schema.validateSync({ nicControl: validValue })).not.toThrow();
        });
      });

      it(`should throw error for invalid values, required schema, country: ${countryCode}, kind: ${nationalIdentificationKindCode}`, () => {
        invalid.forEach((invalidValue) => {
          const schema = mockNicValidationSchemaHook({
            schema: nicValidationSchema({
              countryCode,
              required: true,
              nationalIdentificationKindCode,
              schema: yup,
            }),
          });

          expect(() => schema.validateSync({ nicControl: invalidValue })).toThrow();
        });
      });
    });
  });
});
