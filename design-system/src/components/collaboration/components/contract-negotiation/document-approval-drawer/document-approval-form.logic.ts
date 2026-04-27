import * as yup from 'yup';

import { useFormContext } from '@components/forms';

import type { UseFormReturn } from '@components/forms';

export interface DocumentApprovalFormFields {
  comment: string;
}

export const FORM_DEFAULT_VALUES = {
  comment: '',
};

/** Yup validation schema for the contract negotiation form */
export const validationSchema = (): yup.AnyObjectSchema =>
  yup.object().shape({
    comment: yup.string(),
  });

/** Context wrapper used across document approval form, typed with the values types */
export const useDocumentApprovalFormContext = (): UseFormReturn<
  DocumentApprovalFormFields,
  unknown,
  undefined
> => useFormContext<DocumentApprovalFormFields>();
