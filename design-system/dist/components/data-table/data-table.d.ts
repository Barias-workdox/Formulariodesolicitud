import { ReactElement } from 'react';
import { DataTableProps } from './data-table.interfaces';
/**
 * `DataTable` is a versatile and highly customizable React component designed to
 * create interactive and draggable columns tables with ease. This component is a central piece of a
 * table-building ecosystem, allowing users to create dynamic and feature-rich tables effortlessly.
 *
 * `DataTable` simplifies the process of building tables with features like
 * drag-and-drop column reordering, sorting, custom cell rendering, and more. It seamlessly
 * integrates with React applications, providing a powerful way to display data while giving
 * users control over column arrangement.
 *
 * Key Features:
 * - **Column Reordering:** Users can easily change the order of columns by dragging and
 *   dropping them, providing a more personalized data viewing experience.
 * - **Sorting:** Enable sorting for columns with a single click, allowing users to arrange
 *   data in ascending or descending order.
 * - **Show/Hide Columns:** Dynamically display or hide specific columns to tailor the table to
 *   your needs.
 * - **Custom Cell Rendering:** Customize how table cells are rendered, making it possible
 *   to display complex content, such as buttons or interactive elements.
 * - **Resizable Columns:** Columns can be resized to fit content or specific width requirements,
 *   giving users control over column width.
 * - **Dynamic Data:** `DataTable` efficiently handles dynamic data updates,
 *   ensuring that the table stays up to date with minimal effort.
 * - **User-Friendly:** Designed with a user-friendly interface and smooth interactions,
 *   making it intuitive for users to interact with tables.
 *
 * This component can be easily integrated into any React application and is suitable for a wide
 * range of use cases, from data visualization to management dashboards.
 *
 * @example
 * ```
 * import { DataTable } from '@webdoxclm/design-system/data-table';
 * import type { ColumnConfig, DataTableProps, UpdateEventType } from '@webdoxclm/design-system/data-table';
 *
 * // Define your data structure and column configuration
 * type MyData = {
 *   id: string;
 *   name: string;
 *   age: number;
 *   address: string;
 * };
 *
 * const columnsConfig: ColumnConfig<keyof MyData>[] = [
 *   {
 *     id: 'name',
 *     label: 'Name',
 *     isDraggable: true,
 *     isSortable: true,
 *     align: 'left',
 *     minWidth: '200px',
 *     isRemovable: true,
 *     dataType: 'string',
 *     renderType: 'string',
 *   },
 *   {
 *     id: 'age',
 *     label: 'Age',
 *     isDraggable: true,
 *     isSortable: true,
 *     align: 'center',
 *     isRemovable: true,
 *     dataType: 'number',
 *     renderType: 'string',
 *   },
 * ];
 *
 * // Define a function to handle changes in table settings
 * function handleTableSettingsChange(
 *   updatedValues: MyTable,
 *   event: UpdateEventType
 * ): void {
 *   // Handle table settings changes here
 *   console.log('Updated Values:', updatedValues);
 *   console.log('Event Type:', event);
 * }
 *
 * // Create the table component with the specified props
 * const tableProps: MyTable = {
 *   data: [], // Your table data goes here, you can generate it with the `getTableData` utility
 *   orderBy: 'name',
 *   orderDirection: 'asc',
 *   columnsConfig,
 *   allColumnsConfig: columnsConfig, // You can customize this as needed
 *   onChange: handleTableSettingsChange,
 * };
 *
 * // Render the DataTable component
 * function MyTableComponent(): ReactElement {
 *   return <DataTable {...tableProps} />;
 * }
 * ```
 *
 * @deprecated Use `DataTable` from `@webdoxclm/design-system/data-table/next` instead.
 *
 * Benefits of the next version:
 * - **Simplified API**: Uses `activeColumns` instead of `columnsConfig` to separate active/visible columns from full configuration.
 * - **Custom column labels**: Supports different labels for table headers and column menus via `CustomColumnConfigLabel`.
 * - **Responsive fixed columns**: Automatically disables fixed columns on smaller screens for better mobile support.
 * - **Better onChange callback**: Includes computed `columnsConfig` in the callback values for more complete state information.
 * - **Improved architecture**: Better separation of concerns with dedicated hooks like `useActiveColumnsConfig`.
 */
export declare const DataTable: <DataType extends Record<string, unknown> = Record<string, unknown>, ExtraColumnsIds extends string = never>({ tableRef, showHeaders, showActionsColumn, rowHeight, isColumnDisabledByReason, ...rest }: DataTableProps<DataType, ExtraColumnsIds>) => ReactElement;
