import { ReactNode } from 'react';
import { MenuItemSize } from '../../navigation-menu.interfaces';
import { WithTestId } from '../../../../interfaces/common.interfaces';
export interface MenuItemProps extends WithTestId {
    /** Optional counter to display next to the label */
    counter?: number;
    /** If true, the menu item is dimmed and non-interactive */
    disabled?: boolean;
    /** The href of the menu item */
    href?: string;
    /** The text or element representing the menu item's label */
    label: ReactNode;
    /** Controls the size of the menu item */
    size?: MenuItemSize;
    /** Element rendered at the start of the item (must be already configured) */
    startEnhancer?: ReactNode;
    /** Function to handle the click event */
    onClick?(e: React.MouseEvent<HTMLAnchorElement>): void;
}
/**
 * `MenuItem` is a component used within a navigation menu to display an interactive item.
 */
export declare const MenuItem: ({ "data-testid": dataTestId, counter, disabled, label, size, startEnhancer, href, onClick, }: MenuItemProps) => JSX.Element;
