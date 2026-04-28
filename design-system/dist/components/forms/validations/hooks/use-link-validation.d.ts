import { LinkValidationSchemaProps } from '../link.validation';
import { AnySchema } from 'yup';
export interface UseLinkReturnType {
    /** The i18n text to render if the link validation fails */
    containsLinkErrorMessage: string;
    /** Reusable link validation schema used in forms */
    linkValidationSchema(props: Omit<LinkValidationSchemaProps, 'containsLinkErrorMessage'>): AnySchema;
}
/**
 * Has all i18n texts and reusable link validation rules and utilities with i18n added.
 * Use this hook to get the base schema with i18n texts for errors in conjunction with the
 * base schema
 */
export declare const useLinkValidation: () => UseLinkReturnType;
