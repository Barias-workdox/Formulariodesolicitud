import { ReactNode } from 'react';
import { WithTestId } from '../../../../../../interfaces/common.interfaces';
export interface ItemLabelProps extends WithTestId {
    counter?: number;
    disabled?: boolean;
    isActive?: boolean;
    isSelected?: boolean;
    label?: ReactNode;
    startEnhancer?: ReactNode;
}
/**
 * `ItemLabel` is a visual component used within a navigation menu to display an item label
 * with optional start enhancer, counter, and nested menu indicator.
 *
 * This component supports several features:
 * - Displays an optional `StartEnhancer`, which can be an icon or any custom element placed at the start.
 * - Displays the `label`, which can either be a string or a custom React element. If the label is a string,
 *   it is truncated and provides a tooltip with the full content.
 * - Optionally shows a `counter`, useful for indicating the number of items within the navigation item.
 * - Handles active and disabled states, visually adjusting the label's styles accordingly.
 */
export declare const ItemLabel: ({ "data-testid": dataTestId, counter, disabled, isActive, isSelected, label, startEnhancer, }: ItemLabelProps) => JSX.Element;
