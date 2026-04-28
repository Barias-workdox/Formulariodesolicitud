import { DraggableRowsTableProps } from '../draggable-rows-table';
import { DesignSystemTheme } from '../../../themes/theme.interfaces';
import { StyleObject } from 'styletron-react';
export declare const styles: {
    headerCellStyles: (theme: DesignSystemTheme) => StyleObject;
    headerBodyStyles: (theme: DesignSystemTheme) => StyleObject;
};
/** DraggableRowsTable custom overrides for table wrapper component */
export declare const tableOverrideStyles: (theme: DesignSystemTheme) => DraggableRowsTableProps["overrides"];
