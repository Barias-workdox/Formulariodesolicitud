import { PropsWithChildren } from 'react';
import { Size } from './collapsible-box.interfaces';
import { StatelessAccordionProps } from 'baseui/accordion';
import { StyleObject } from 'styletron-react';
export type CollapsibleBoxProps = PropsWithChildren<{
    size?: Size;
    gap?: StyleObject['gap'];
    accordion?: StatelessAccordionProps['accordion'];
    expanded?: StatelessAccordionProps['expanded'];
    onChange?: StatelessAccordionProps['onChange'];
}>;
/**
 * Component that provides a collapsible container using an `Accordion` component.
 * It uses a context provider (`CollapsibleBoxContext`) to share the size configuration across its children.
 */
export declare const CollapsibleBox: ({ children, size, gap, accordion, expanded: initialExpanded, onChange, }: CollapsibleBoxProps) => JSX.Element;
