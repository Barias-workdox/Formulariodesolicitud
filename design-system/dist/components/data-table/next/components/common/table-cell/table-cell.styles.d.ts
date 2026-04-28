import { TableCellProps } from './table-cell.interfaces';
import { DesignSystemTheme } from '../../../../../../themes';
import { StyleObject } from 'styletron-react';
type StyleOptions = Partial<Pick<TableCellProps, 'isHeaderHovered' | 'isRowHovered' | 'isRowChecked' | 'isRowClickable' | 'isRowDisabled' | 'isDragging' | 'align' | 'height'>> & {
    isActionCell?: boolean;
};
export declare const cellStyles: {
    containerStyles: (theme: DesignSystemTheme, { isHeaderHovered, isRowHovered, isRowChecked, isRowClickable, isRowDisabled, isDragging, align, height, isActionCell, }?: StyleOptions) => StyleObject;
};
export {};
