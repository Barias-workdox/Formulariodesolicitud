import { ReactElement } from 'react';
import { ButtonProps } from '../button/button.interfaces';
export declare const StyledTable: import('styletron-react').StyletronComponent<"div", {}>;
export declare const StyledHead: import('styletron-react').StyletronComponent<"div", {
    $width?: string;
    $cursor?: string;
}>;
export declare const StyledHeadCell: import('styletron-react').StyletronComponent<"div", {
    $width?: string;
    $cursor?: string;
}>;
export declare const StyledBody: import('styletron-react').StyletronComponent<"div", {
    $width?: string;
    $cursor?: string;
}>;
export declare const StyledRow: import('styletron-react').StyletronComponent<"div", {}>;
export declare const StyledCell: import('styletron-react').StyletronComponent<"div", {
    $striped?: boolean;
}>;
export declare const TableToolbar: import('styletron-react').StyletronComponent<"header", {}>;
type TableToolbarActionKind = 'primary' | 'control';
type TableToolbarActionProps = ButtonProps & {
    kind?: TableToolbarActionKind;
};
export declare const TableToolbarTextBlock: import('styletron-react').StyletronComponent<"div", {}>;
/** Styled table toolbar action */
export declare function TableToolbarAction({ 'data-testid': dataTestId, kind, ...props }: TableToolbarActionProps): ReactElement;
export {};
