import { FinalizeNegotiationFormFields } from '../../../interfaces';
import { UseFormReturn } from '../../../../forms';
import { Control, UseFieldArrayReturn } from 'react-hook-form';
/** Context wrapper used across document approval form, typed with the values types */
export declare const useFinalizeNegotiationFormContext: () => UseFormReturn<FinalizeNegotiationFormFields, unknown, undefined>;
/** Hook that obtains the field array of the form */
export declare const useFinalizeNegotiationFieldArray: (control: Control<FinalizeNegotiationFormFields>) => UseFieldArrayReturn<FinalizeNegotiationFormFields, "documents">;
