import { DataType, ObjectToEvalType, FieldIdType } from '../interfaces';
import { CommonOption } from '../../select/next';
type IUseValueOptionsParams = {
    objectToEval?: ObjectToEvalType;
    field?: FieldIdType;
    groups: CommonOption[];
    profiles: CommonOption[];
    dataType: DataType;
    dynamicAttributes: CommonOption[];
};
/** Memorized select option values for the condition **value** field */
export declare const useValueOptions: ({ objectToEval, field, groups, profiles, dataType, dynamicAttributes, }: IUseValueOptionsParams) => CommonOption[];
export {};
