import { ReactElement } from 'react';
import { CollapsibleContentProps } from './collapsible-content.interfaces';
/**
 * A collapsible content component with a header and body.
 * The body will expand and collapse based on the isOpen state.
 * The height of the body is determined by the content inside.
 * The height is animated when the isOpen state changes.
 */
export declare const CollapsibleContent: ({ dataTestId, title, initialState, children, overrides, }: CollapsibleContentProps) => ReactElement;
