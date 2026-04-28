import { ActiveColumn, ColumnConfig } from '..';
type UseActiveColumnsConfigParams<T extends ColumnConfig> = {
    activeColumns: ActiveColumn[];
    allColumnsConfig: T[];
};
type UseActiveColumnsConfigReturn<T> = {
    columnsConfig: T[];
};
/**
 * Hook to get the active columns configuration.
 */
export declare const useActiveColumnsConfig: <T extends ColumnConfig>({ activeColumns, allColumnsConfig, }: UseActiveColumnsConfigParams<T>) => UseActiveColumnsConfigReturn<T>;
export {};
