import { ReactNode } from 'react';
import { CollapsibleOverrides } from './interfaces';
import { AccordionOnChangeHandler, AccordionProps } from 'baseui/accordion';
export type CollapsibleBoxProps = Pick<AccordionProps, 'children'> & {
    dataTestId?: string;
    title: string;
    /** Title that is going to be shown if the accordion is collapsed, the default value would the the `title` */
    collapsedTitle?: string;
    Icon?: ReactNode;
    /** Optional component that can be used to display options for the collapsible box */
    options?: ReactNode;
    /** You can customize the initial value to display the panel in an expanded state. */
    initialState?: {
        isExpanded?: boolean;
    };
    overrides?: CollapsibleOverrides;
    /** Optional onChange handle that return expanded box key to enable consumer trigger actions based on accordion state */
    onChange?: AccordionOnChangeHandler;
};
/**
 * Collapsible box that has a `title`, `Icon` and a panel with dynamic content (`children`).
 * The box is useful for grouping information as independent accordions.
 *
 * @deprecated The `CollapsibleBox` component has been updated to a new implementation.
 * Please migrate to the new version, which uses a context provider (`CollapsibleBoxContext`)
 * for size configuration and simplifies the API.
 */
export declare const CollapsibleBox: ({ dataTestId, title, collapsedTitle, Icon, options, overrides, initialState: { isExpanded }, children, onChange, }: CollapsibleBoxProps) => JSX.Element;
