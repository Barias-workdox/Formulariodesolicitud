import { AnyObjectSchema } from 'yup';
export interface PhoneInputValidationSchemaProps {
    /** If the field is required or optional */
    required?: boolean;
}
export interface UsePhoneInputValidationReturnType {
    /** Reusable phone input validation schema used in forms */
    phoneInputValidationSchema(props?: PhoneInputValidationSchemaProps): AnyObjectSchema;
}
/**
 * Has all i18n texts and reusable phone input validation rules and utilities with i18n added.
 * Use this hook to get the base schema with i18n texts for errors in conjunction with the
 * base schema
 */
export declare const usePhoneInputValidation: () => UsePhoneInputValidationReturnType;
