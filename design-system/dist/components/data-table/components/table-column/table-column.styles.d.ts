import { StyleObject } from 'styletron-react';
type StyleOptions = {
    $isFirstColumn: boolean;
    $isLastColumn: boolean;
    $isDragging: boolean;
    $isFixed: boolean;
    $isScrollable: boolean;
    $isHeaderHovered: boolean;
    $isSelectable: boolean;
    $isResizeHovered: boolean;
    $isResizable: boolean;
    $width?: StyleObject['width'];
    $minWidth: StyleObject['minWidth'];
    $maxWidth: StyleObject['maxWidth'];
};
export declare const StyledTableColumn: import('styletron-react').StyletronComponent<"div", StyleOptions>;
export declare const StyledTableColumnContent: import('styletron-react').StyletronComponent<"div", {}>;
export {};
