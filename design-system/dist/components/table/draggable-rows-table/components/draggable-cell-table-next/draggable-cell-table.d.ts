import { ReactNode } from 'react';
import { StyleObject } from 'styletron-react';
export interface DraggableCellTableProps {
    'data-testid'?: string;
    isDisabled?: boolean;
    $style?: StyleObject;
    children?: ReactNode;
}
/** A Styled cell that renders a static styled icon used to drag the table row */
export declare const DraggableCellTable: ({ "data-testid": dataTestId, isDisabled, $style, children, }: DraggableCellTableProps) => JSX.Element;
