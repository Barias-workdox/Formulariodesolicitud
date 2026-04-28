import { DataConfig } from '../contexts/decision-tree.context';
import { ActionIdType, DataType, GroupConditionDataType, ObjectToEvalType, TargetObjectType, TreePaginatedOptionsConfig } from '../interfaces';
import { CarbonIconType } from '@carbon/icons-react/lib/CarbonIcon';
import { CommonOption } from '../../select/next';
import * as yup from 'yup';
export declare const groupRuleObjectSchema: yup.ObjectSchema<{
    treeRules: {
        conditions?: {
            value: {};
            operator: string;
            field: string;
            objectToEval: string;
        }[] | undefined;
    }[] | undefined;
    actions: {
        actionType: string;
        targetId: string;
    }[] | undefined;
}, yup.AnyObject, {
    treeRules: "";
    actions: "";
}, "">;
/** Utility function that returns an icon according to the `dataType` provided */
export declare const getDynamicAttributeIcon: (dataType?: DataType) => CarbonIconType;
/** Utility function to standardize options configuration */
export declare const getOptionsConfig: (options: DataConfig) => TreePaginatedOptionsConfig<CommonOption>;
/** Get the value type for a given condition */
export declare const getGroupConditionDataType: ({ objectToEval, field, dataType, }: {
    objectToEval?: ObjectToEvalType;
    field?: string;
    dataType?: DataType;
}) => GroupConditionDataType | undefined;
/**
 * Determine whether to show the distribution mode selector based on the action type and target object
 */
export declare const getDistributionModeVisibility: (targetObject?: TargetObjectType, actionType?: ActionIdType) => boolean;
