import { DataType, OperatorType } from '../interfaces';
import { CommonOption } from '../../select/next';
export type OperatorSelectOptionsType = CommonOption<OperatorType>;
type IUseOperatorOptionsParams = {
    dataType: DataType;
};
/**
 * Memorized select option values for the condition value **operator**
 *
 * The response is based in the condition **data type**
 */
export declare const useOperatorOptions: ({ dataType, }: IUseOperatorOptionsParams) => OperatorSelectOptionsType[];
export {};
