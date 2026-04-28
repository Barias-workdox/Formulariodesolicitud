import { DataType, ObjectToEvalType, FieldIdType } from '../interfaces';
import { CarbonIconType } from '@carbon/icons-react';
import { CommonOption } from '../../select/next';
export type FieldSelectOptionType = CommonOption<FieldIdType> & {
    dataType?: DataType;
    options?: CommonOption[];
    icon?: CarbonIconType;
};
type IUseFieldOptionsParams = {
    objectToEval?: ObjectToEvalType;
    dynamicAttributes: FieldSelectOptionType[];
};
/**
 * Memorized select option values for the condition value **field**
 *
 * The response depends whether the selected option from **object to eval**
 * is the user or the request.
 */
export declare const useFieldOptions: ({ objectToEval, dynamicAttributes, }: IUseFieldOptionsParams) => FieldSelectOptionType[];
export {};
