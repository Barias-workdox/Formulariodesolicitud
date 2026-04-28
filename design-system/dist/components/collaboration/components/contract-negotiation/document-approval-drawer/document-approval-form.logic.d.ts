import { UseFormReturn } from '../../../../forms';
import * as yup from 'yup';
export interface DocumentApprovalFormFields {
    comment: string;
}
export declare const FORM_DEFAULT_VALUES: {
    comment: string;
};
/** Yup validation schema for the contract negotiation form */
export declare const validationSchema: () => yup.AnyObjectSchema;
/** Context wrapper used across document approval form, typed with the values types */
export declare const useDocumentApprovalFormContext: () => UseFormReturn<DocumentApprovalFormFields, unknown, undefined>;
