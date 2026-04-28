import { ReactElement } from 'react';
import { MenuCommonProps } from './menu.interfaces';
import { WithTestId } from '../../interfaces/common.interfaces';
import { MenuProps as BaseMenuProps, Items, StatefulMenuProps as StatefulMenuBaseProps } from 'baseui/menu';
type _MenuProps = MenuCommonProps & WithTestId & {
    /** Define which type has to take the items prop */
    items: Items;
};
/**
 * Props for the general purpose Menu component, providing flexibility for both stateful and stateless usage.
 */
export type MenuProps = _MenuProps & ((BaseMenuProps & (StatefulMenuBaseProps & {
    /**
     * Define if the menu is stateful or stateless.
     *
     * @defaultValue true
     */
    isStateful?: true;
})) | (BaseMenuProps & {
    isStateful?: false;
}));
/**
 * Menu of items useful to be shown in popovers.
 * A Stateless BaseMenu type component is also possible to prevent the automatic focus on hover elements.
 * Each menu item can include a label, startEnhancer and endEnhancer. It can take
 * several status: disabled, selected or isLoading.
 * To identify each item is necessary to include it an id.
 *
 * @example
 * Here is a simple example:
 * ```
 * { id: "option1",
 *    label: "Option 1",
 *    isLoading: false,
 *    disabled: false,
 *    selected: true,
 *    startEnhancer: <Icon />,
 *    endEnhancer: <Icon />,
 * }
 * ```
 */
export declare const Menu: ({ isStateful, ...rest }: MenuProps) => ReactElement;
export {};
