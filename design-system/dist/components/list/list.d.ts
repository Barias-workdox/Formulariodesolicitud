import { ReactChildren } from 'react';
import { StyleObject } from 'styletron-react';
export interface ListProps {
    children: ReactChildren;
}
/**
 * A styled list component with custom theme-based styling.
 *
 * This component renders an unordered list (`<ul>`) with flexbox layout properties
 * to arrange its children vertically. It applies theme-specific styles to the
 * list and its items.
 */
export declare const List: import('styletron-react').StyletronComponent<"ul", {
    $height?: StyleObject["height"];
    $withBorder?: boolean;
    $overflow?: StyleObject["overflow"];
}>;
