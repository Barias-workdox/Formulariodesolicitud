import { ReactElement } from 'react';
import { MenuCommonProps } from '../menu.interfaces';
import { WithTestId } from '../../../interfaces/common.interfaces';
import { ItemsT, MenuProps as MenuBaseProps } from 'baseui/menu';
export type StatelessMenuProps = WithTestId & MenuBaseProps & MenuCommonProps & {
    items: ItemsT;
};
/**
 * Stateless Menu of items useful to be shown in popovers.
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
export declare const StatelessMenu: ({ dataTestId, itemLabelKey, itemLabelTemplate, optionListBorderBottom, placementChildMenu, menuWidth, overrides, ...rest }: StatelessMenuProps) => ReactElement;
