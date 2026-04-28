import { CountryCodeType } from '../../utils/interfaces';
import { AnySchema } from 'yup';
export interface PhoneValidationSchemaProps {
    schema: any;
    /** The i18n text to render if the format validation fails */
    formatErrorMessage: string;
    /** The i18n text to render if the required validation fails */
    requiredErrorMessage: string;
    /** If the field is required or optional */
    required?: boolean;
    countryCode: CountryCodeType;
}
export interface UsePhoneValidationReturnType {
    /** I18n message for format phone validation fail */
    formatErrorMessage: string;
    /** I18n message for required phone validation fail */
    requiredErrorMessage: string;
    /** Reusable phone validation schema used in forms */
    phoneValidationSchema(props: Omit<PhoneValidationSchemaProps, 'formatErrorMessage' | 'requiredErrorMessage'>): AnySchema;
}
/** All common phone number validations regex for each country */
export declare const PHONE_NUMBER_REGEX: Partial<Record<CountryCodeType, RegExp>> & {
    default: RegExp;
};
/** Validate phone number based on country code supplied */
export declare const validatePhone: (phone: string, countryCode: CountryCodeType) => boolean;
/** Phone number validation reusable yup schema validation */
export declare const phoneValidationSchema: ({ schema, formatErrorMessage, requiredErrorMessage, required, countryCode, }: PhoneValidationSchemaProps) => AnySchema;
/**
 * Has all i18n texts and reusable phone validation rules and utilities with i18n added.
 * Use this hook to get the base schema with i18n texts for errors in conjunction with the
 * base schema
 */
export declare const usePhoneValidation: () => UsePhoneValidationReturnType;
