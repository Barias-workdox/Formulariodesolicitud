import { PropsWithChildren } from 'react';
import { WithTestId } from '../../interfaces/common.interfaces';
import { StyleObject } from 'styletron-react';
type BaseVirtualizedListProps = WithTestId & {
    role?: string;
    $maxHeight: string;
    withBorder?: boolean;
    itemHeight?: number;
    containerStyles?: StyleObject;
};
type VirtualizedListType = ({
    isInfinite?: false;
    isFetchingNextPage?: boolean;
    /** @deprecated Use `onPageEnd` instead */
    onLastItemRendered?(): void;
    onPageEnd?(): void;
} & BaseVirtualizedListProps) | ({
    isInfinite: true;
    isFetchingNextPage: boolean;
    /** @deprecated Use `onPageEnd` instead */
    onLastItemRendered?(): void;
    onPageEnd(): void;
} & BaseVirtualizedListProps);
export type VirtualizedListProps = PropsWithChildren<VirtualizedListType>;
/**
 * A virtualized list component that efficiently renders a large list of items.
 *
 * @remarks
 * **Important**: Each direct child of this component must include an `overrides` prop
 * in its props object. The virtualized list applies inline styles (via `getVirtualItemStyles`)
 * to each child by merging and passing them through `overrides`. If a child does not
 * implement or pass the `overrides` prop, the virtualized layout and styling will
 * not be applied correctly (leading to potential layout or measurement issues).
 *
 * @example
 * ```tsx
 * // Example usage demonstrating a child component (ListItem) that exposes an `overrides` prop.
 *
 * <VirtualizedList $maxHeight="300px" itemHeight={44}>
 *   {myData.map((item, index) => (
 *     <ListItem
 *       key={item.id}
 *       label={item.label}
 *
 *       // At least internally, the component must spread the override styles
 *       // for proper measurement & virtualization.
 *       overrides={{ // At least internally the component must spread the override styles
 *         Root: {
 *           style: { color: 'red' },
 *         },
 *       }}
 *       // Other props as needed
 *     />
 *   ))}
 * </VirtualizedList>
 * ```
 */
export declare const VirtualizedList: ({ "data-testid": dataTestId, $maxHeight, itemHeight, role, children, containerStyles, isInfinite, isFetchingNextPage, withBorder, onLastItemRendered, onPageEnd, }: PropsWithChildren<VirtualizedListProps>) => JSX.Element;
export {};
