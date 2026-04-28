import { ActionType } from '../interfaces';
interface ActionGroupContextValue {
    actionGroup?: ActionType;
    actionGroupId?: ActionType['id'];
    actionGroupIndex?: number;
}
export declare const ActionGroupContext: import('react').Context<ActionGroupContextValue>;
export {};
