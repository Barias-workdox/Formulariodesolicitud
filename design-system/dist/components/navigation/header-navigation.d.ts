import { ReactElement } from 'react';
import { HeaderNavigationProps as BaseHeaderNavigationProps, HeaderNavigationOverrides } from 'baseui/header-navigation';
interface HeaderNavigationProps extends Omit<BaseHeaderNavigationProps, 'overrides'> {
    showBorderBottom?: boolean;
    overrides?: HeaderNavigationOverrides;
}
/**
 * Simplest header navigation with horizontal padding and bottom border, useful for views and drawer headers
 */
export declare const HeaderNavigation: ({ children, showBorderBottom, overrides, }: HeaderNavigationProps) => ReactElement;
export {};
