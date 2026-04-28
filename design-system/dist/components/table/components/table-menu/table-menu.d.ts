import { TableMenuOption } from './menu-list-item';
import { PopoverPlacementType } from '../../../popover';
export interface TableMenuCustomOptionProps {
    disabled: boolean;
    /** Required for some cases complex cases (ie: for upload files)  */
    CustomOption?: JSX.Element;
}
export interface TableMenuProps {
    'data-testid'?: string;
    options: (TableMenuOption | TableMenuCustomOptionProps)[];
    isLoading: boolean;
    disabled: boolean;
    /** If false, will hide the cell. It is used only to reduce repetitive logic */
    show?: boolean;
    placement?: PopoverPlacementType;
    /** Trigger that would execute when the component is open */
    onOpen?(): void;
}
/**
 * This component is a three dot menu, with the clickable icon and a popover with a list of items.
 * Options are created declaratively or a Custom Component can be received
 * When an element is clicked, the popover will be closed and then the click handler will be executed.
 * If isLoading is true, it will display a loading spinner instead of the menu.
 */
export declare const TableMenu: ({ "data-testid": dataTestId, isLoading, options, disabled, show, placement, onOpen, }: TableMenuProps) => JSX.Element;
