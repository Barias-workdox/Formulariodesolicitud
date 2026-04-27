import { useTranslation } from '@components/utils/index';

import type { AnyObject, AnyObjectSchema } from 'yup';

interface UseFileUploaderValidationSchemaType {
  schema: AnyObject;
}

/** Get the  form validation schema */
export const useFileUploaderValidationSchema = ({
  schema,
}: UseFileUploaderValidationSchemaType): AnyObjectSchema => {
  const { t } = useTranslation();

  return schema
    .array()
    .required(t('forms.validations.required'))
    .min(1, t('forms.validations.required'));
};
