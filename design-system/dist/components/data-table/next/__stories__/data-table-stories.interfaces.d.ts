import { DataTableProps } from '../data-table.interfaces';
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
export type StoriesExtraColumns = 'custom-action' | 'aiColumn';
export type StoriesTableProps = DataTableProps<StoriesDataType, StoriesExtraColumns>;
export type StoriesAllColumnIds = keyof StoriesDataType | StoriesExtraColumns;
