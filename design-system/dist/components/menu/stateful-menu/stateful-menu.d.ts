import { MenuCommonProps } from '../menu.interfaces';
import { WithTestId } from '../../../interfaces/common.interfaces';
import { StatefulMenuProps as StatefulMenuBaseProps } from 'baseui/menu';
export type StatefulMenuProps = WithTestId & StatefulMenuBaseProps & MenuCommonProps;
/**
 * Stateful Menu to nest various hierarchical navigation, features, or settings.
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
 * To build a nested menu is necessary wrap the first menu with the component NestedMenu
 * provided by baseui library and define the getChildMenu on the menu option using the overrides
 * to return a StatefulMenu.
 */
export declare const StatefulMenu: ({ dataTestId, itemLabelKey, itemLabelTemplate, optionListBorderBottom, placementChildMenu, menuWidth: rawMenuWidth, overrides, ...rest }: StatefulMenuProps) => JSX.Element;
