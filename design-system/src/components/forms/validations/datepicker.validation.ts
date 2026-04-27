import { useMemo } from 'react';

import { useTranslation } from '../../utils';

import type { AnyObject, AnySchema } from 'yup';

export interface DatePickerValidationSchemaProps {
  schema: AnyObject;
  /** The i18n text to render if the required validation fails */
  requiredErrorMessage: string;
  /** If the field is required or optional */
  required?: boolean;
  /** If the datePicker is a range of 2 date in an array */
  range?: boolean;
}

export interface UseDatePickerValidationReturnType {
  /** I18n message for required datePicker validation fail */
  requiredErrorMessage: string;
  /** Reusable datePicker validation schema used in forms */
  datePickerValidationSchema(
    props: Omit<DatePickerValidationSchemaProps, 'requiredErrorMessage'>,
  ): AnySchema;
}

/**
 * Validate date picker value when the range is false (only one date will be validated)
 */
export const datePickerSingleDateValidationRule = ({
  value,
  required,
}: {
  value?: Date;
  required: boolean;
}): boolean => {
  return !required ? true : value !== undefined && value !== null;
};

/**
 * Validate date picker value when the range is true (an array of maximum 2 dates will be validated)
 */
export const datePickerRangeValidationRule = ({
  value,
  required,
}: {
  /** It could be Date[] or any so it is required to double check if it is an array */
  value?: Date[];
  required: boolean;
}): boolean => {
  const isValueArray = Array.isArray(value);

  if (!isValueArray) {
    return false;
  } else if (!required) {
    return value.length === 0 || value.length === 2;
  } else {
    return value.length > 1;
  }
};

/** DatePicker validation reusable yup schema validation */
export const datePickerValidationSchema = ({
  schema,
  requiredErrorMessage,
  required = false,
  range = false,
}: DatePickerValidationSchemaProps): AnySchema => {
  return range
    ? schema
        .array()
        .test('datepicker-range-validation', requiredErrorMessage, (value) =>
          datePickerRangeValidationRule({ value, required }),
        )
    : schema
        .date()
        .test('datepicker-validation', requiredErrorMessage, (value) =>
          datePickerSingleDateValidationRule({ value, required }),
        );
};

/**
 * Has all i18n texts and reusable datePicker validation rules and utilities with i18n added.
 * Use this hook to get the base schema with i18n texts for errors in conjunction with the
 * base schema
 */
export const useDatePickerValidation = (): UseDatePickerValidationReturnType => {
  const { t } = useTranslation();

  const requiredErrorMessage = useMemo(() => t('forms.validations.required'), [t]);

  return {
    requiredErrorMessage,
    datePickerValidationSchema: (props) =>
      datePickerValidationSchema({ ...props, requiredErrorMessage }),
  };
};
