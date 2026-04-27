import * as yup from 'yup';

import { useFormContext } from '@components/forms';

import type { UseFormReturn } from '@components/forms';

export interface NewDocumentVersionFormFields {
  document: File | null;
  comment: string;
}

export const FORM_DEFAULT_VALUES: NewDocumentVersionFormFields = {
  document: null,
  comment: '',
};

/** Yup validation schema for the contract negotiation form */
export const validationSchema = (): yup.AnyObjectSchema =>
  yup.object().shape({
    comment: yup.string(),
    document: yup.mixed().required(),
  });

/** Context wrapper used across document approval form, typed with the values types */
export const useNewDocumentVersionFormContext = (): UseFormReturn<
  NewDocumentVersionFormFields,
  unknown,
  undefined
> => useFormContext<NewDocumentVersionFormFields>();
