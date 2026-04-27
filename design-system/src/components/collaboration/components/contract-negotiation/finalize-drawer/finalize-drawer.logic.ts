import { useFieldArray } from 'react-hook-form';

import { useFormContext } from '@components/forms';

import type { FinalizeNegotiationFormFields } from '@components/collaboration/interfaces';
import type { UseFormReturn } from '@components/forms';
import type { Control, UseFieldArrayReturn } from 'react-hook-form';

/** Context wrapper used across document approval form, typed with the values types */
export const useFinalizeNegotiationFormContext = (): UseFormReturn<
  FinalizeNegotiationFormFields,
  unknown,
  undefined
> => useFormContext<FinalizeNegotiationFormFields>();

/** Hook that obtains the field array of the form */
export const useFinalizeNegotiationFieldArray = (
  control: Control<FinalizeNegotiationFormFields>,
): UseFieldArrayReturn<FinalizeNegotiationFormFields, 'documents'> =>
  useFieldArray({ name: 'documents', control });
