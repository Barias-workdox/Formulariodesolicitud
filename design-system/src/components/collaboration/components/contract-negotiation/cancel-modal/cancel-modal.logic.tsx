import * as yup from 'yup';

import { useFormContext } from '@components/forms';
import { useTranslation } from '@components/utils';

import type { CancelCollaborationFormFields } from '@components/collaboration/interfaces';
import type { UseFormReturn } from '@components/forms';

/**
 * Returns the Yup validation schema for the cancel collaboration form.
 */
export const useCancelCollaborationFormValidationSchema = (): yup.AnyObjectSchema => {
  const { t } = useTranslation();

  return yup.object().shape({
    message: yup.string().trim().required(t('forms.validations.required')),
  });
};

/** Context wrapper used across the cancelation form, typed with the values types */
export const useCancelCollaborationFormContext = (): UseFormReturn<
  CancelCollaborationFormFields,
  unknown,
  undefined
> => useFormContext();
