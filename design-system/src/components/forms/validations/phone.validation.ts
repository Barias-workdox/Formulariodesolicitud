import { useMemo } from 'react';

import { useTranslation } from '../../utils';

import type { CountryCodeType } from '../../utils/interfaces';
import type { AnySchema } from 'yup';

export interface PhoneValidationSchemaProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  schema: any;
  /** The i18n text to render if the format validation fails */
  formatErrorMessage: string;
  /** The i18n text to render if the required validation fails */
  requiredErrorMessage: string;
  /** If the field is required or optional */
  required?: boolean;
  countryCode: CountryCodeType;
}

export interface UsePhoneValidationReturnType {
  /** I18n message for format phone validation fail */
  formatErrorMessage: string;
  /** I18n message for required phone validation fail */
  requiredErrorMessage: string;
  /** Reusable phone validation schema used in forms */
  phoneValidationSchema(
    props: Omit<PhoneValidationSchemaProps, 'formatErrorMessage' | 'requiredErrorMessage'>,
  ): AnySchema;
}

/** All common phone number validations regex for each country */
export const PHONE_NUMBER_REGEX: Partial<Record<CountryCodeType, RegExp>> & { default: RegExp } = {
  BRA: /^\+55\d{3,13}$/,
  default: /(^\+[0-9]+$|^$)/,
};

/** Validate phone number based on country code supplied */
export const validatePhone = (phone: string, countryCode: CountryCodeType): boolean => {
  const validationRule = PHONE_NUMBER_REGEX[countryCode] ?? PHONE_NUMBER_REGEX.default;

  return validationRule.test(phone);
};

/** Phone number validation reusable yup schema validation */
export const phoneValidationSchema = ({
  schema,
  formatErrorMessage,
  requiredErrorMessage,
  required = false,
  countryCode,
}: PhoneValidationSchemaProps): AnySchema => {
  const baseRule = schema
    .string()
    .trim()
    .test('phone-number-validation', formatErrorMessage, (value) =>
      value === '' || value === undefined || value === null
        ? true
        : validatePhone(value, countryCode),
    );

  return required ? baseRule.required(requiredErrorMessage) : baseRule.optional().nullable();
};

/**
 * Has all i18n texts and reusable phone validation rules and utilities with i18n added.
 * Use this hook to get the base schema with i18n texts for errors in conjunction with the
 * base schema
 */
export const usePhoneValidation = (): UsePhoneValidationReturnType => {
  const { t } = useTranslation();

  const formatErrorMessage = useMemo(() => t('forms.validations.phoneFormat'), [t]);
  const requiredErrorMessage = useMemo(() => t('forms.validations.required'), [t]);

  return {
    formatErrorMessage,
    requiredErrorMessage,
    phoneValidationSchema: (props) =>
      phoneValidationSchema({ ...props, formatErrorMessage, requiredErrorMessage }),
  };
};
