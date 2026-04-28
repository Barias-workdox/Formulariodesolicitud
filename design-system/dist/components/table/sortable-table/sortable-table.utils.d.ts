import { ReactNode } from 'react';
import { SortableTableProps } from './sortable-table';
import { DesignSystemTheme } from '../../../themes/theme.interfaces';
/**
 * Utility to render in table the table header cell elements.
 * Each cell can be declared as string or a function that execute it
 * self with default cell props returning a custom cell component.
 */
export declare const getTableHeader: (headers: SortableTableProps["headers"], theme: DesignSystemTheme, dataTestId?: string) => ReactNode[];
/**
 * Utility to render in table the table body cell elements.
 * Each cell into each row can be declared as string or a function that
 * execute it self with default cell props returning a custom cell component.
 */
export declare const getTableBody: (children: SortableTableProps["children"], isDragDisabled: boolean, theme: DesignSystemTheme, dataTestId?: string) => ReactNode[];
