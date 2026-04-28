import { ConditionType } from '../interfaces';
interface ConditionGroupContextValues {
    conditionGroup?: ConditionType;
    conditionGroupId?: ConditionType['id'];
    conditionGroupIndex?: number;
}
export declare const ConditionGroupContext: import('react').Context<ConditionGroupContextValues>;
export {};
