import { useCallback } from 'react';

import * as yup from 'yup';

import { useTranslation } from '../../utils';

import type { AnyObjectSchema } from 'yup';

export interface PhoneInputValidationSchemaProps {
  /** If the field is required or optional */
  required?: boolean;
}

export interface UsePhoneInputValidationReturnType {
  /** Reusable phone input validation schema used in forms */
  phoneInputValidationSchema(props?: PhoneInputValidationSchemaProps): AnyObjectSchema;
}

/**
 * Has all i18n texts and reusable phone input validation rules and utilities with i18n added.
 * Use this hook to get the base schema with i18n texts for errors in conjunction with the
 * base schema
 */
export const usePhoneInputValidation = (): UsePhoneInputValidationReturnType => {
  const { t } = useTranslation();

  const phoneInputValidationSchema = useCallback(
    ({ required = false }: PhoneInputValidationSchemaProps = {}): AnyObjectSchema => {
      const requiredErrorMessage = t('forms.validations.required');
      const phoneCountryRequiredMessage = t('forms.validations.phoneCountryRequired');

      const baseSchema = yup
        .object({
          country: yup.object({
            id: yup.string(),
            label: yup.string(),
            dialCode: yup.string(),
          }),
          text: yup.string(),
        })
        .test('conditional-phone-validation', requiredErrorMessage, function (value) {
          if (required) {
            // When required, all fields must be filled
            if (
              !value?.country?.id ||
              !value?.country?.label ||
              !value?.country?.dialCode ||
              !value?.text
            ) {
              // Check if country is missing specifically
              if (!value?.country?.id || !value?.country?.label || !value?.country?.dialCode) {
                return this.createError({ message: phoneCountryRequiredMessage });
              }

              return this.createError({ message: requiredErrorMessage });
            }
          } else {
            // When not required, if either has a value, both must be filled
            const hasCountryValue =
              value?.country?.id || value?.country?.label || value?.country?.dialCode;
            const hasTextValue = value?.text && value.text.trim() !== '';

            if (hasTextValue && !hasCountryValue) {
              return this.createError({ message: phoneCountryRequiredMessage });
            }

            if (hasCountryValue && !hasTextValue) {
              return this.createError({ message: requiredErrorMessage });
            }
          }

          return true;
        });

      return baseSchema;
    },
    [t],
  );

  return { phoneInputValidationSchema };
};
