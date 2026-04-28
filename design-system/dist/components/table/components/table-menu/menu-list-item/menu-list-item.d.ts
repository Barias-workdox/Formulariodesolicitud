import { WithTestId } from '../../../../../interfaces/common.interfaces';
/** Every menu option should have this attributes */
export interface TableMenuOption extends WithTestId {
    Icon: JSX.Element;
    label: string;
    /** Option will be rendered by default */
    disabled?: boolean;
    /** The click handler to be executed after the menu item is clicked. If a CustomOption is sent, this could be undefined */
    onClick?(): void;
}
/** Styled menu item, with a wrapper clickable div */
export declare const MenuListItem: ({ dataTestId, Icon, label, onClick, disabled, }: TableMenuOption) => JSX.Element;
