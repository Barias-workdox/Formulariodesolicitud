import { TableHeaderCellProps } from './table-header-cell.interfaces';
import { DesignSystemTheme } from '../../../../../../themes/theme.interfaces';
import { StyleObject } from 'styletron-react';
type StyleOptions = Partial<Pick<TableHeaderCellProps, 'isHovered' | 'isFixed' | 'isDragging' | 'isDraggable' | 'isSortable' | 'align'>> & {
    isActionCell?: boolean;
};
export declare const headerCellStyles: {
    containerStyles: (theme: DesignSystemTheme, { isHovered, isDragging, isActionCell }?: StyleOptions) => StyleObject;
    wrapperStyles: (theme: DesignSystemTheme, { isHovered, isFixed, align, isDragging, isDraggable, isSortable }: StyleOptions) => StyleObject;
    dragIconContainerStyles: (theme: DesignSystemTheme, { isHovered, isFixed, isDragging, isDraggable }: StyleOptions) => StyleObject;
};
export {};
