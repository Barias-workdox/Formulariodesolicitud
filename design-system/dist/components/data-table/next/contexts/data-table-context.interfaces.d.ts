import { ColumnType, DataTableProps } from '../data-table.interfaces';
import { UseTableReturn } from '../hooks/use-table';
import { ProxiedRef } from '../../../utils/hooks/use-ref-proxy.hook';
import { VirtualItem } from '@tanstack/react-virtual';
type DataTablePropsForContextValues<DataType extends Record<string, unknown>, ExtraColumnsIds extends string> = Partial<Omit<DataTableProps<DataType, ExtraColumnsIds>, 'orderBy' | 'orderDirection' | 'allColumnsConfig' | 'data' | 'handleOnChange'>>;
type UseTableReturnForContextValues<DataType extends Record<string, unknown>, ExtraColumnsIds extends string> = Pick<UseTableReturn<DataType, ExtraColumnsIds>, 'orderBy' | 'orderDirection' | 'columnsConfig' | 'allColumnsConfig' | 'data' | 'handleOnChange'>;
type InternalDataTableContextValues = {
    isScrollable: boolean;
    hoveredRowIndex: number;
    rowsSelected?: number[];
    rowsDisabled?: Record<number, string>;
    virtualItems: VirtualItem[];
    totalHeight: string;
    containerRef?: ProxiedRef<HTMLDivElement>;
    listRef?: ProxiedRef<HTMLDivElement>;
    updateHoveredRowIndex(value: number): void;
    isColumnDisabledByReason(disableReason: string | undefined, columnType: ColumnType, columnId?: string): boolean;
};
export type DataTableContextValues<DataType extends Record<string, unknown> = Record<string, unknown>, ExtraColumnsIds extends string = never> = DataTablePropsForContextValues<DataType, ExtraColumnsIds> & UseTableReturnForContextValues<DataType, ExtraColumnsIds> & InternalDataTableContextValues;
export type DataTableDisabledRowContextValues = {
    isRowDisabled: boolean;
    disableReason?: string;
};
export {};
