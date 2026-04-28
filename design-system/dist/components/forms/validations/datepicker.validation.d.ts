import { AnyObject, AnySchema } from 'yup';
export interface DatePickerValidationSchemaProps {
    schema: AnyObject;
    /** The i18n text to render if the required validation fails */
    requiredErrorMessage: string;
    /** If the field is required or optional */
    required?: boolean;
    /** If the datePicker is a range of 2 date in an array */
    range?: boolean;
}
export interface UseDatePickerValidationReturnType {
    /** I18n message for required datePicker validation fail */
    requiredErrorMessage: string;
    /** Reusable datePicker validation schema used in forms */
    datePickerValidationSchema(props: Omit<DatePickerValidationSchemaProps, 'requiredErrorMessage'>): AnySchema;
}
/**
 * Validate date picker value when the range is false (only one date will be validated)
 */
export declare const datePickerSingleDateValidationRule: ({ value, required, }: {
    value?: Date;
    required: boolean;
}) => boolean;
/**
 * Validate date picker value when the range is true (an array of maximum 2 dates will be validated)
 */
export declare const datePickerRangeValidationRule: ({ value, required, }: {
    /** It could be Date[] or any so it is required to double check if it is an array */
    value?: Date[];
    required: boolean;
}) => boolean;
/** DatePicker validation reusable yup schema validation */
export declare const datePickerValidationSchema: ({ schema, requiredErrorMessage, required, range, }: DatePickerValidationSchemaProps) => AnySchema;
/**
 * Has all i18n texts and reusable datePicker validation rules and utilities with i18n added.
 * Use this hook to get the base schema with i18n texts for errors in conjunction with the
 * base schema
 */
export declare const useDatePickerValidation: () => UseDatePickerValidationReturnType;
