import { CountryCodeType } from '../../../../utils/interfaces';
import { NationalIdentificationKindCode } from '../../../../utils/interfaces/nic.interface';
import { AnySchema } from 'yup';
export interface NicValidationSchemaProps {
    schema: any;
    /** The i18n text to render if the format validation fails */
    validationErrorMessage: string;
    /** The i18n text to render if the required validation fails */
    requiredErrorMessage: string;
    /** If the field is required or optional */
    required?: boolean;
    /** Used to validate a country code specific validation function */
    countryCode: CountryCodeType;
    /** Used to validate specific code when supplied */
    nationalIdentificationKindCode?: NationalIdentificationKindCode;
}
export interface UseNicValidationReturnType extends Pick<NicValidationSchemaProps, 'requiredErrorMessage'> {
    /** Reusable phone validation schema used in forms */
    nicValidationSchema(props: Omit<NicValidationSchemaProps, 'validationErrorMessage' | 'requiredErrorMessage'>): AnySchema;
}
/** NIC input validation reusable yup schema validation */
export declare const nicValidationSchema: ({ schema, requiredErrorMessage, countryCode, validationErrorMessage, required, nationalIdentificationKindCode, }: NicValidationSchemaProps) => AnySchema;
/**
 * Has all i18n texts and reusable nic validation rules and utilities with i18n added.
 * Use this hook to get the base schema with i18n texts for errors in conjunction with the
 * base schema
 */
export declare const useNicValidation: () => UseNicValidationReturnType;
