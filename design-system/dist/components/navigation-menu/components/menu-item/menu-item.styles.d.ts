import { Link } from 'react-router-dom';
import { CommonHeight } from '../../../../constants/common.constants';
import { MenuItemSize } from '../../navigation-menu.interfaces';
export declare const menuItemHeightBySize: Record<MenuItemSize, CommonHeight>;
export declare const menuItemPaddingBySize: Record<MenuItemSize, string>;
export declare const StyledLink: import('styletron-react').StyletronComponent<typeof Link, {
    $disabled: boolean;
    $isFocused: boolean;
    $size: MenuItemSize;
}>;
