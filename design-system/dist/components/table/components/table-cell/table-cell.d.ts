import { ReactNode } from 'react';
import { BlockProps } from 'baseui/block';
import { StyleObject } from 'styletron-react';
export interface TableCellProps {
    children: ReactNode;
    'data-testid'?: string;
    /** Use only to override the default `td` container role */
    as?: BlockProps['as'];
    $style?: StyleObject;
}
/** Styled Common Table Cell with some basic props */
export declare const TableCell: ({ children, "data-testid": dataTestId, as, $style, }: TableCellProps) => JSX.Element;
