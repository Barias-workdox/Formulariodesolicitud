import { PropsWithChildren, ReactElement } from 'react';
import { OverrideObject, Overrides } from '../../../../themes/theme.interfaces';
export interface TableLayoutOverrides extends Overrides {
    Root?: OverrideObject<object>;
}
/** A Custom division line for Workflows Table. Could be used anywhere between header and table rows */
export declare const TableDivisionLine: () => JSX.Element;
/**
 * A table layout component for Workflow details tabs tables. Will render headers in the first row,
 * then a separation line that will use all the width with a hacky negative margin, and finally
 * will render all the children elements.
 */
export declare const TableLayout: ({ headerValues, gridTemplateColumns, children, overrides, }: PropsWithChildren<{
    /** All headers that will fill first row. With this length the number of columns is calculated */
    headerValues: string[];
    /** Indicates the style of gridTemplateColumns, following CSS Grid structure */
    gridTemplateColumns: string;
    /** Override pattern for customizing component styles and props */
    overrides?: TableLayoutOverrides;
}>) => ReactElement;
