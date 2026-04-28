import { CancelCollaborationFormFields } from '../../../interfaces';
import { UseFormReturn } from '../../../../forms';
import * as yup from 'yup';
/**
 * Returns the Yup validation schema for the cancel collaboration form.
 */
export declare const useCancelCollaborationFormValidationSchema: () => yup.AnyObjectSchema;
/** Context wrapper used across the cancelation form, typed with the values types */
export declare const useCancelCollaborationFormContext: () => UseFormReturn<CancelCollaborationFormFields, unknown, undefined>;
