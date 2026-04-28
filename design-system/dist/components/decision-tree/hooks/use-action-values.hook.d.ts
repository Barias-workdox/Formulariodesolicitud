import { ActionIdType, TargetObjectType } from '../interfaces';
import { CommonOption } from '../../select/next';
type IUseActionValuesParams = {
    actionIdType?: ActionIdType;
    users: CommonOption[];
    groups: CommonOption[];
    workflowTemplates: CommonOption[];
};
export type TargetIdSelectOptionsType = CommonOption & {
    targetObject?: TargetObjectType;
};
/** Hook to retrieve action values based on the action type */
export declare const useActionValues: ({ actionIdType, groups, users, workflowTemplates, }: IUseActionValuesParams) => TargetIdSelectOptionsType[];
export {};
