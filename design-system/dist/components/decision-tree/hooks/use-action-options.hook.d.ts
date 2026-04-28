import { ActionIdType } from '../interfaces';
import { CommonOption } from '../../select/next';
export type ActionSelectOptionsType = CommonOption<ActionIdType>;
/** Memorized select option values for the action **actionType*/
export declare const useActionOptions: () => ActionSelectOptionsType[];
