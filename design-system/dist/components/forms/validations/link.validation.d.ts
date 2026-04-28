import { LinkStrictnessModeType } from '../interfaces';
import { AnyObject, AnySchema } from 'yup';
export interface LinkValidationSchemaProps {
    schema: AnyObject;
    /** The i18n text to render if the link validation fails */
    containsLinkErrorMessage: string;
    /** Mode used to set validation strictness */
    strictnessValidationMode?: LinkStrictnessModeType;
}
/**
 * Checks if value has any link within the string.
 */
export declare const noLinkValidationRule: (value: string, strictnessValidationMode?: LinkStrictnessModeType) => boolean;
/** String link reusable yup schema validation. */
export declare const linkValidationSchema: ({ schema, containsLinkErrorMessage, strictnessValidationMode, }: LinkValidationSchemaProps) => AnySchema;
