import { useMemo } from 'react';

import { useTranslation } from '../../../../utils';

import { getNicI18nValidationTexts } from './nic-18n.util';
import { validateRawNic } from './nic.validation';

import type { CountryCodeType } from '../../../../utils/interfaces';
import type { NationalIdentificationKindCode } from '../../../../utils/interfaces/nic.interface';
import type { AnySchema } from 'yup';

export interface NicValidationSchemaProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  schema: any;
  /** The i18n text to render if the format validation fails */
  validationErrorMessage: string;
  /** The i18n text to render if the required validation fails */
  requiredErrorMessage: string;
  /** If the field is required or optional */
  required?: boolean;
  /** Used to validate a country code specific validation function */
  countryCode: CountryCodeType;
  /** Used to validate specific code when supplied */
  nationalIdentificationKindCode?: NationalIdentificationKindCode;
}

export interface UseNicValidationReturnType extends Pick<
  NicValidationSchemaProps,
  'requiredErrorMessage'
> {
  /** Reusable phone validation schema used in forms */
  nicValidationSchema(
    props: Omit<NicValidationSchemaProps, 'validationErrorMessage' | 'requiredErrorMessage'>,
  ): AnySchema;
}

/** NIC input validation reusable yup schema validation */
export const nicValidationSchema = ({
  schema,
  requiredErrorMessage,
  countryCode,
  validationErrorMessage,
  required = false,
  nationalIdentificationKindCode,
}: NicValidationSchemaProps): AnySchema => {
  const baseRule = schema
    .string()
    .test(`${countryCode}-nic-validation`, validationErrorMessage, (value) =>
      value === '' || value === undefined || value === null
        ? true
        : validateRawNic({ rawNic: value ?? '', countryCode, nationalIdentificationKindCode }),
    );

  return required ? baseRule.required(requiredErrorMessage) : baseRule.optional();
};

/**
 * Has all i18n texts and reusable nic validation rules and utilities with i18n added.
 * Use this hook to get the base schema with i18n texts for errors in conjunction with the
 * base schema
 */
export const useNicValidation = (): UseNicValidationReturnType => {
  const { t } = useTranslation();

  const requiredErrorMessage = useMemo(() => t('forms.validations.required'), [t]);

  return {
    requiredErrorMessage,
    nicValidationSchema: ({ countryCode, nationalIdentificationKindCode, ...rest }): AnySchema => {
      const { validation } = getNicI18nValidationTexts({
        countryCode,
        nationalIdentificationKindCode,
      });

      const validationErrorMessage = t(validation);

      return nicValidationSchema({
        ...rest,
        requiredErrorMessage,
        countryCode,
        nationalIdentificationKindCode,
        validationErrorMessage,
      });
    },
  };
};
