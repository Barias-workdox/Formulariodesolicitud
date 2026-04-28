import { ReactNode } from 'react';
import { MenuItemProps } from './menu-item';
import { DesignSystemTheme } from '../../../themes';
import { StatefulMenuProps } from '../stateful-menu';
import { StyleObject } from 'styletron-react';
/** Reusable menu item ListItem section styles */
export declare const menuItemListItemStyles: ({ theme, optionListBorderBottom, }: {
    theme: DesignSystemTheme;
    optionListBorderBottom: MenuItemProps["optionListBorderBottom"];
}) => StyleObject;
/**
 * The default generated getItemLabel in the MenuItem override property. Cannot be used as a react hook component
 * because it is a nested override get property of the Option override component
 */
export declare const defaultGetItemLabel: ({ item, itemLabelKey, dataTestId, theme, }: {
    item: MenuItemProps["item"];
    itemLabelKey: StatefulMenuProps["itemLabelKey"];
    dataTestId: StatefulMenuProps["data-testid"];
    theme: DesignSystemTheme;
}) => ReactNode;
