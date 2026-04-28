import { ReactElement } from 'react';
import { StatefulMenuProps } from '../stateful-menu';
import { StyleObject } from 'styletron-react';
export type VirtualizedMenuProps = StatefulMenuProps & {
    maxHeight: StyleObject['maxHeight'];
    itemSize: number;
};
/**
 * A virtualized version of the Menu component, optimized for rendering a large number of items efficiently.
 *
 * @example
 * ```jsx
 * <VirtualizedMenu
 *   items={[
 *     { id: 'item1', label: 'Item 1' },
 *     { id: 'item2', label: 'Item 2' },
 *     // ... more items
 *   ]}
 *   maxHeight="300px"
 * />
 * ```
 */
export declare const VirtualizedMenu: ({ overrides, ...rest }: VirtualizedMenuProps) => ReactElement;
