import { DistributionModeType } from '../interfaces';
import { CommonOption } from '../../select/next';
export type DistributionModeSelectOptionsType = CommonOption<DistributionModeType>;
/** Memorized select option values for the action **actionType*/
export declare const useDistributionModeOptions: () => DistributionModeSelectOptionsType[];
