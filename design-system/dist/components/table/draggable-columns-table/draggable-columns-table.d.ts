import { DraggableColumnsTableProps, TableBodyProps, TableCellProps, TableRowProps } from './draggable-columns-table.interfaces';
/**
 * Body of the DraggableColumnsTable
 */
export declare const TableBody: ({ dataTestId, children, headers, }: TableBodyProps) => JSX.Element;
/**
 * Row of the DraggableColumnsTable
 */
export declare const TableRow: ({ children, onMouseEnter, onMouseLeave }: TableRowProps) => JSX.Element;
/**
 * Simple cell component for the Draggable Columns Table.
 */
export declare const TableCell: ({ children, paddingLeft, paddingRight, paddingTop, paddingBottom, flex, ...rest }: TableCellProps) => JSX.Element;
/**
 * Table that allows columns to be dragged horizontally
 */
export declare const DraggableColumnsTable: ({ activeColumns, allColumns, updateActiveColumns, updateSortingColumn, items, setIsDragging, children, canAddColumns, renderTableHeaders, "data-testid": dataTestId, }: DraggableColumnsTableProps) => JSX.Element;
