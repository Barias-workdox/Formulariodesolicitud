import type { DataTableProps } from '../data-table.interfaces';

// Define the data structure for the table data
export type StoriesDataType = {
  id: string;
  name: string;
  collectedInsect: string;
  quantity: number;
  collectedDate: string;
  updatedAt: string;
  extraLargeColumnName: string;
  rowNumber: number;
};

// Define additional columns (not part of the data structure)
export type StoriesExtraColumns = 'custom-action' | 'aiColumn';

// Define the type for the entire table
export type StoriesTableProps = DataTableProps<StoriesDataType, StoriesExtraColumns>;

// Define the type for all column ids
export type StoriesAllColumnIds = keyof StoriesDataType | StoriesExtraColumns;
