import { DataType } from '../interfaces/data-types.interfaces';
import { CarbonIconType } from '@carbon/icons-react';
export type DataTypeOption = {
    id: DataType;
    label: string;
    description: string;
    icon: CarbonIconType;
};
export interface UseDataTypesReturn<T> {
    getDataTypeOptionById(dataType: {
        id: DataType;
    }): T;
    getAllDataTypeOptions(): T[];
}
type UseDataTypesHook = {
    <T>(props: {
        formatter(option: DataTypeOption): T;
    }): UseDataTypesReturn<T>;
    (): UseDataTypesReturn<DataTypeOption>;
};
/**
 * Hook to get data type options with i18n support.
 */
export declare const useDataTypes: UseDataTypesHook;
export {};
