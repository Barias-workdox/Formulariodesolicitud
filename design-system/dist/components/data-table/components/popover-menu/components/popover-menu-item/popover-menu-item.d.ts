import { ReactElement, ReactNode } from 'react';
import { WithTestId } from '../../../../../../interfaces/common.interfaces';
import { StyleObject } from 'styletron-react';
type PopoverMenuItemProps = WithTestId & {
    children: ReactNode;
    disabled?: boolean;
    $styles?: StyleObject;
    onClick(): void;
};
/**
 * This component is used to create individual menu items within a popover menu.
 * It allows you to define the content of the item and specify an `onClick` handler
 * to trigger an action when the item is clicked.
 */
export declare const PopoverMenuItem: ({ dataTestId, children, $styles, disabled, onClick, }: PopoverMenuItemProps) => ReactElement;
export {};
