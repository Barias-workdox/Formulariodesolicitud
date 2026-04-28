import { ActiveColumn } from '..';
import { StoriesAllColumnIds, StoriesDataType, StoriesTableProps } from './data-table-stories.interfaces';
/**
 * Get the active columns for the table
 */
export declare const getActiveColumns: (ids: StoriesAllColumnIds[]) => ActiveColumn<StoriesAllColumnIds>[];
/**
 * Generate sample data for the table
 */
export declare const getRawData: (totalItems?: number) => StoriesDataType[];
/**
 * Define a function to fetch and format data for the table
 */
export declare const getData: ({ rawData, activeColumns, allColumnsConfig, }: Pick<StoriesTableProps, "activeColumns" | "allColumnsConfig"> & {
    rawData: StoriesDataType[];
}) => React.ReactNode[][];
/**
 * Get the infinite data for the table
 */
export declare const getInfiniteData: ({ rawData, activeColumns, allColumnsConfig, isLoading, paginationSettings, }: Pick<StoriesTableProps, "activeColumns" | "allColumnsConfig" | "isLoading" | "paginationSettings"> & {
    rawData: StoriesDataType[];
}) => React.ReactNode[][];
